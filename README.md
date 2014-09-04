webrebuild-grunt-workflow-example
=================================

根据 TmT 多年重构工作经验总结出来的一套涵盖目录结构、开发、编译等阶段的工作流。

请注意：这是一套适合**重构团队**的工作流，并不适用于**前端团队**。

## 目录结构

重构项目的定义：同一个产品的官网，手机官网可能会被分为：pc-home, mobile-home 两个项目，当然这并不绝对，根据项目的预期规模来进行组织。
 
**工作目录：**

```
_grunt
project-a
project-b
project-c

```

_grunt 中包含了通用的 Grunt 配置，是所有项目共同依赖的。

** 项目的子目录 **

```
dist
dev
src
```

编写的 html/css，以及使用的的图片资源都在 src 目录下，通过 grunt 命令向 dev 和 dist 分发。

** 项目 src 目录**

```
css
html
img
slice
```

slice 放置需要进行雪碧图压缩的图标，例如 sprite.png 和 sprite@2x.png
图片将会自动合并，并根据 1x 和 2x 图片进行分别合并。


```
.mod-icon__sprite {
   width: 100px;
   height: 100px;
   background-image: url(../slice/mod-icon/sprite.png); /*必须使用 background-image将会被识别*/
}

```



## Grunt 命令

**grunt build_dev**

主要工作是编译 less、复制图片到 dev 目录下，用于开发环境使用。

	
**grunt build_dist**

编译less，合并雪碧图，并进行图片压缩，执行的结果保存于 dist 目录，用于生产环境使用

**grunt push**

编辑项目下的 package.json 和 .ftppass 分别填写 FTP 的 IP 、端口、用户、密码等资料。

会走一次 grunt build_dist 的流程后，上传到 FTP 目录。

**grunt zip**

会走一次 grunt build_dist 的流程后，压缩到项目目录的，命名为 dist.zip