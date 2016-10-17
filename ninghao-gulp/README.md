# 宁浩-Gulp 自动化任务 学习

<http://ninghao.net/course/2000>

## 导航

- [准备](#准备)

- [基础](#基础)

- [插件](#插件)

## 准备

- 安装 gulp 命令行工具

    - npm i -g gulp

- 初始化项目

    - 创建工作目录
    - npm init
    - npm i -S gulp

- 创建任务

    - show me the code:

            const gulp = require('gulp');

            gulp.task('hello', function() {
                console.log('您好');
            });

            gulp.task('default', ['hello']);

## 基础

- gulp 基础

    - 读取文件 gulp.src()
    - 处理文件 .pipe()
    - 存放文件 .pipe(gulp.dest())

- 复制单个文件

    - `gulp.src('index.html').pipe(gulp.dest('dist'));`

- 复制多个文件

    - 使用的是 glob:  

        `gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'));`

- globs

    - `images/*.{png,jpg}`

    - `images/*`: images 目录下的文件和目录（注意，仅包含目录，但是不包含目录中的文件）

    - `images/*/*`: 仅匹配 images 目录下的目录下的文件和目录（注意，仅包含目录，但是不包含目录中的文件）

    - `images/**/*`: 与上面一个的不同，不在乎目录的级数

- 多个 globs

    - `gulp.src(['xml/*.xml', 'json/*.json']).pipe(gulp.dest('dist/data'));`

- 排除

    - `gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json']).pipe(gulp.dest('dist/data'));`

- 主任务

    - 代码如下：

            gulp.task('build', ['copy-index', 'images', 'data'], function() {
                console.log('编译成功！');
            })

- 文件有变化时自动执行任务

    - 代码如下：

            gulp.watch('index.html', ['copy-index']);

            gulp.watch('images/**/*.{jpg,png}', ['images']);

            gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret-*.json'], ['data']);

## 插件

- 插件

- 编译 Sass：gulp-sass

    - 
