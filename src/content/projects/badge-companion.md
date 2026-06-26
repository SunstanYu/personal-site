---
title: Badge Companion
description: 一块 ESP32-S3 胸牌，自动从手机同步当前听的歌 / 当前位置 / 当前心情。
status: in-progress
stack: ["ESP32-S3", "C/C++", "BLE", "E-Ink"]
icon: cpu
order: 2
---

## 想法

会议、社交场合，胸牌上自动显示一行"我现在在听 ___"或"我现在在想 ___"。
比起换一打动态名片，这种"被动可见的状态"更像我真正的社交语言。

## 硬件

- ESP32-S3-Mini
- 2.13" 三色 E-Ink (GDEW0213I5F)
- 锂电 + USB-C 充电
- 物理键 1 个（切换显示状态）

## 软件分工

- 手机端：一个极简 iOS App，把当前播放歌曲 + 自填的"心情字段"通过 BLE 推过来
- 胸牌端：接收、刷屏、低功耗待机
