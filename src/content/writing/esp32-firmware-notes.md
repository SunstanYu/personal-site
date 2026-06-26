---
title: ESP32-S3 上写 BLE 客户端的几个坑
date: 2026-04-02
lang: zh
description: 几条踩了之后记下来的笔记，主要关于连接生命周期和 GATT 重连。
tags: ["Hardware", "ESP32", "BLE"]
---

## 1. `esp_ble_gattc_app_register` 必须放在 init 之后

否则 `ESP_GATTC_REG_EVT` 永远不会触发，回调里所有分支都跑不到。看起来是 SDK 没有把"未初始化"的状态报出来。

## 2. 断开重连用 `esp_ble_gap_set_prefer_conn_params` 提前调好

否则首次连接握手期间，对方设备的 connection interval 会被锁成 30ms 这种很短的值，后续每次重连都会重新协商失败。

## 3. 不要在 GAP/GATT 回调里直接做长任务

回调线程的栈是固定的小，给业务逻辑用一个 task + queue：

```c
static QueueHandle_t ble_evt_q;

void ble_evt_task(void *arg) {
    ble_event_t evt;
    while (xQueueReceive(ble_evt_q, &evt, portMAX_DELAY)) {
        handle_ble_event(&evt);
    }
}
```

回调里只做 `xQueueSend`，剩下都丢给 `ble_evt_task`。

## 4. Wi-Fi 和 BLE 共存时给 BLE 留 coex 优先级

不然 Wi-Fi scan 的时候 BLE 包会被吃掉，表现是"连接成功但 notify 漏包"。`ESP_COEX_PREFER_BT` 是稳妥选择。
