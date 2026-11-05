# Alongside · by shaolun

给小家伙们的影像手记。我的日常里，也有你。

使用 A 版 Alongside 名字、人与小动物并肩的图形，以及 `by shaolun` 署名。品牌素材位于 `assets/brand/`，字标已转为路径，避免浏览器字体差异。

## 替换成自己的内容

- 作品照片、标题、故事统一维护在 `content.js`，页面会自动生成卡片、小窝标签和故事翻页。新增内容不需要改首页结构。
- 首页开场使用 2026-11-05 提供的约 44 秒视频。`heroVideo` 为 1080p 版本，`heroVideoMobile` 为 720p 版本，`heroPoster` 为视频首帧。默认静音循环，可暂停；尊重系统减少动态效果设置。电脑铺满首页，手机保留 16:9 完整横幅并在下方显示主题文字，避免横屏素材被竖屏裁掉主体。原始 4K 文件保留在用户提供的位置，不加入仓库。
- 「一次相遇」保存在 `encounters` 数组：`id`、`image`（卡片图）、`smallImage`（手机小图）、`fullImage`（完整构图大图）、`width`、`height`、`alt`、`title`、`text`。照片使用小幅竖向卡片，标题和短文放在下方，多张时横向滑动浏览，单张保持同样的卡片尺寸。
- 「一段关系」保存在 `nests`：每个小窝用固定 ID，对应 `{ name, intro, cover, coverPhotos: [...], stories: [...] }`。先展示叠放的照片封面，点开后显示一张大图及文字，可逐张翻阅和收起。故事字段为 `image`、可选 `fullImage` 和 `position`、`alt`、可选 `place`、一到两行 `title` 数组、`text`。第一张和最后一张停止翻页，不自动循环。有真实故事后自动显示栏目与导航，没有内容时隐藏。
- 「猫哥鼠哥的小窝」的六张照片位于 `assets/images/nests/maoge-shuge/`，保留完整构图。顺序为邻居、仰躺、相机、特写、喝水的鼠哥、最后的合影《会再见的》。封面和故事独立配置，今后新增小窝会自动生成另一组叠放封面。
- 「可乐的小窝」位于 `assets/images/nests/cola/`，按停车场、洗完澡回家、与妈妈出游、笑脸写真的顺序排列，第三张出游照片作为叠放封面；正文照片和放大图均保留完整构图。
- 「咪咪包包的小窝」位于 `assets/images/nests/mimi-baobao/`，封面使用两只同框的 IMG_1503，按 IMG_1513、IMG_1229、IMG_1231、IMG_1503、IMG_1506、IMG_1507 翻阅。IMG_1513 的大图与放大图均使用只保留猫咪的 4:3 裁切版本。
- 网页版本放在 `assets/images/encounters/<编号>/` 或 `assets/images/nests/<小窝ID>/`；完整原始文件与用户提供的原话保存在本机 `.photo-originals/`，不会提交到 GitHub。请单独备份这个目录。导出图片已转正，并移除拍摄设备及定位等 EXIF 信息。
- 联系方式和社交平台暂未填写。准备好后，在 `index.html` 的联系区域添加真实链接。
- 当前作品使用 shaolun 提供的照片；旧参考照片的来源记录仍保存在 `CREDITS.md`，页面已停止使用这些照片。
- 联系区域使用 `assets/images/contact-dogs-wide.webp` 和 `contact-dogs-mobile.webp`；背景透明度、压暗与边缘渐隐在 `style.css` 的 `.contact-art` 中调整。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。网站不需要安装依赖或构建。

## 发布

GitHub Pages 使用 `main` 分支根目录。提交并推送后自动更新：

`https://shaolungg.github.io/`

`index.html` 负责结构，`content.js` 负责所有作品内容，`style.css` 负责外观，`script.js` 负责内容渲染和交互。

通过聊天提供照片和原话即可整理。默认先更新本地，明确要求“发布”或“更新到 GitHub”后再推送。
