# 宁浩-响应式网页设计 学习

<http://ninghao.net/course/1002>

## 导航

- [基础](#基础)

- [媒体查询](#媒体查询)

- [布局](#布局)

- [导航](#导航)

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
        - 设备的宽高比值 `不会` 受到设备使用方向的影响；

    - 支持 max & min；

    - 示例代码：

            @media (device-aspect-ratio: 2/3) {
              body {
                background: #0381bb;
              }
            }

- orientation 设备的使用方向

    - 可选值: `landscape, protrait`；

    - 示例代码：

            @media (orientation: landscape) {
                body {
                    background: #27ae60;
                }
            }

            @media (orientation: portrait) {
                body {
                    background: #f2cb2b;
                }
            }

- height （可视窗口高度）与 device-height（设备高度）

    - 支持 max & min；
    - 注意：

        - `height` 会受到设备使用方向的影响，`device-height` 不会受到设备使用方向的影响；

    - 示例代码：

            @media (max-device-height: 480px) {
                body {
                    background: #f3581a;
                }
            }


- width（可视窗口宽度） 与 device-width（设备宽度）

    - 支持 max & min；
    - 注意：

        - `width` 会受到设备使用方向的影像，`device-width` 不会受到设备使用方向的影像；

    - 示例代码：

            @media (max-device-width: 767px) {
                body {
                    background: #c36cea;
                }
            }

- resolution 像素密度

    - 可以设置 max & min；

    - 示例代码：

            // 第2个媒体特性，是由于 safari 无法很好地识别 resolution 属性才特别设置的；
            @media screen and ( resolution: 150dpi ), screen and ( -webkit-device-pixel-ratio: 1 ) {
                body {
                    background: #c0392b;
                }
            }

            // dppx(dots per px)
            // dppx 和 -webkit-device-pixel-ratio 效果是一样的，只不过 safari 只支持后者
            @media screen and ( resolution: 1dppx ), screen and ( -webkit-device-pixel-ratio: 1 ) {
                body {
                    background: #c0392b;
                }
            }

- 操作符 - and

    - 连接的媒体查询都必须返回 `true`；

    - 示例代码：

            @media screen and (min-width: 480px) and (max-width: 767px) {
                body {
                    background: #27ae60;
                }
            }

- 逗号分隔连接多个媒体查询

    - 连接的媒体查询只要有一个返回 `true` 就可以了；

    - 示例代码：

            @media screen and (orientation: landscape), screen and (min-width: 700px) {
                body {
                    background: #c0392b;
                }
            }

- 操作符 - not

    - 对媒体查询的值取反之后再返回；
    - 注意：

        - `not` 的作用范围包括用 `and` 连接的所有媒体查询，但是 `只` 包括用 `or` 连接的媒体查询它所在的那一部分；
        - `必须` 明确指定一个媒体类型；

    - 示例代码：

            // 否定用 and 连接的两个媒体查询：先求两个媒体查询的返回值，再 not
            // 即 not (screen and (max-width: 959px))
            @media not screen and (max-width:959px ) {
                body {
                    background: #ccc;
                }
            }

    - 操作符 only

        - 作用： 用于防止老的不支持媒体查询的浏览器不读取余下的媒体查询，同时一并忽略链接的样式表；
        - 注意：

            - `必须` 指定媒体类型；

## 布局

- 响应式布局 1,2,3

    - 原理：

        选定 `breakpoint` 进而设置相应的媒体查询；

    - 示例代码：

            @media (min-width: 1200px) {
                .container {
                    width: 1170px;
                }

                #mainbody {
                    width: 770px;
                    margin-right: 30px;
                }

                #sidebar {
                    width: 370px;
                }
            }

            @media (max-width: 959px) {
                .container {
                    width: 100%;
                }

                #mainbody {
                    width: 67%;
                }

                #sidebar {
                    width: 30%;
                    float: right;
                }
            }

            @media (max-width: 767px) {
                #mainbody,
                #sidebar {
                    float: none;
                    width: 100%;
                }
            }

## 导航

- 响应式导航

    - `:hover` 在移动设备不管用，通过使用 `:target` & `id` 来实现点击；

- 导航菜单的 HTML

- 导航菜单的 CSS

    -
    <!-- TODO: http://ninghao.net/video/1026 视频 -->
