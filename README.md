# shaolun — 宠物影像

这是 `shaolun` 的个人宠物影像网站，使用 GitHub Pages 发布。

## 替换成自己的内容

- 开场目前使用示意照片淡入淡出。将自己的剪辑放入 `assets/video/opening.mp4`，再把 `content.js` 中的 `heroVideo` 改成 `"assets/video/opening.mp4"`，就会自动使用视频。播放失败会回退到照片。
- 作品照片放在 `assets/images/`，并在 `index.html` 的「遇见的片刻」中更新图片、标题和故事。
- 「熟悉的身影」里的“可乐的小窝”和“毛毛的小窝”是内容结构示例。在 `content.js` 里更新每张照片、标题和故事；小窝的名字和新增标签在 `index.html` 更新。当前相同照片的不同构图用于演示翻页，可替换为同一只宠物的不同照片。
- 联系方式和社交平台暂未填写。准备好后，在 `index.html` 的联系区域添加真实链接。
- 示意素材来源见 `CREDITS.md`；全部换成自己的作品后，同步修改网站页脚的示意内容标注。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。网站不需要安装依赖或构建。

## 发布

GitHub Pages 使用 `main` 分支根目录。提交并推送后自动更新：

`https://shaolungg.github.io/`

`index.html` 负责结构和精选照片，`content.js` 负责开场视频及小窝故事，`style.css` 负责外观，`script.js` 负责交互。
