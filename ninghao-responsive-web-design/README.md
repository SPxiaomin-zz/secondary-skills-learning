# 宁浩-响应式网页设计 学习

<http://ninghao.net/course/1002>

## 导航

- [基础](#基础)

- [媒体查询](#媒体查询)

## 基础

- viewport - 可视窗口

    - 浏览器：浏览器窗口；
    - 手机：画布大小（顺带会配合一个适当的缩放比）；

- 手工配置 viewport

    - 代码如下：

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

- 像素密度

    - resolution: dpi(dots per inch);
        - iPhone 3G: 162dpi, 320px·480px;
        - iPhone 4: 326dpi, 640px·960px;
            - retina（视网膜屏幕）;
    - css 像素(css pixel):
        - 10px·10px = 10px·10px(iPhone 3G);
        - 10px·10px = 20px·20px(iPhone 4);

## 媒体查询

- 应用媒体查询的方法

    - `<link rel="stylesheet" media="(max-width: 480px)" href="mobile.css">`
    - `@media (max-width: 480px) { ... }`

- media type 媒体类型

    - 常用
        - screen
        - print
    - 不常用
        - tv
        - projection
    - 默认媒体类型: all

- meida feature 媒体特性

    - 使用方式：

            @media (orientation-特性名: portrait-特性值) {}

    - max(maximum): `<=`

            @media (max-device-width: 480px) { ... }

    - min(minimum): `>=`

- aspect-ratio 可视窗口宽与高的比例

    - 注意：

        - `可视窗口`，不包括工具栏、地址栏等；
        - 值是先宽后高；
        - 可视窗口的宽高比的值 `会` 受到设备使用方向的影响；

    - 支持 max & min；

    - 实例代码：

            @media (aspect-ratio: 3/2) {
              body {
                background: #0381bb;
              }
            }

- device-aspect-ratio 设备的宽与高的比例

    - 注意：

        - `设备`;
        - 值是先宽后高；
        - 设备的宽高比值 `不会` 受到设置使用方向的影响；

    - 支持 max & min；

    - 示例代码：

            @media (device-aspect-ratio: 2/3) {
              body {
                background: #0381bb;
              }
            }

- orientation 设备的使用方向

    - 可选值: `landscape, protrait`；

- height （可视窗口高度）与 device-height（设备高度）

    - 支持 max & min；
