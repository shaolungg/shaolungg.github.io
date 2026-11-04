# Alongside · by shaolun

给小家伙们的影像手记。我的日常里，也有你。

使用 A 版 Alongside 名字、人与小动物并肩的图形，以及 `by shaolun` 署名。品牌素材位于 `assets/brand/`，字标已转为路径，避免浏览器字体差异。

## 替换成自己的内容

- 开场目前使用示意照片淡入淡出。将自己的剪辑放入 `assets/video/opening.mp4`，再把 `content.js` 中的 `heroVideo` 改成 `"assets/video/opening.mp4"`，就会自动使用视频。播放失败会回退到照片。
- 作品照片放在 `assets/images/`，并在 `index.html` 的「遇见的片刻」中更新图片、标题和故事。
- 「熟悉的身影」里的“可乐的小窝”和“毛毛的小窝”是内容结构示例。在 `content.js` 里更新每张照片、标题和故事；小窝的名字和新增标签在 `index.html` 更新。当前相同照片的不同构图用于演示翻页，可替换为同一只宠物的不同照片。
- 联系方式和社交平台暂未填写。准备好后，在 `index.html` 的联系区域添加真实链接。
- 照片来源见 `CREDITS.md`；换成自己的作品后，同步更新素材鸣谢和页脚。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。网站不需要安装依赖或构建。

## 发布

GitHub Pages 使用 `main` 分支根目录。提交并推送后自动更新：

`https://shaolungg.github.io/`

`index.html` 负责结构和精选照片，`content.js` 负责开场视频及小窝故事，`style.css` 负责外观，`script.js` 负责交互。
