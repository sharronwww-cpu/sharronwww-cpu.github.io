# 王诗媛个人主页

为 GitHub Pages 准备的纯静态个人网站，包含中英文切换、手机导航、可展开的科研项目、照片和邮箱复制功能。无需 Node.js、框架安装、数据库或构建步骤。

GitHub 用户名：`sharronwww-cpu`

发布成功后的主页地址：**https://sharronwww-cpu.github.io/**

目前这些是网站源文件；只有完成下方步骤，才会成为可公开访问的网站。

## 先在本地看效果

解压压缩包，用浏览器打开 `index.html`。照片、样式和中英文切换可直接使用。邮箱复制在本地文件模式下可能受浏览器限制，此时可以点击邮箱写信；发布到 HTTPS 网站后可正常使用剪贴板功能。

## 用浏览器发布到 GitHub

1. 登录你的 GitHub 账号：`sharronwww-cpu`。
2. 打开 https://github.com/new ，仓库名填写 **`sharronwww-cpu.github.io`**，选 **Public**，打开 **Add README**，然后点击 **Create repository**。
3. 在新仓库的 **Code** 页面选择 **Add file → Upload files**。
4. 将解压后的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹和 `.nojekyll` 拖入上传框。**不要上传 ZIP，也不要把整个外层文件夹上传进去。** `index.html` 必须位于仓库最外层。
5. 提交说明可填写 `Add personal website`，选择提交到 `main`，点击 **Commit changes**。若界面要求以分支和 Pull Request 提交，创建后合并到 `main`。
6. 打开仓库 **Settings → Pages**。
7. 在 **Build and deployment** 中，Source 选 **Deploy from a branch**；Branch 选 **main**；文件夹选 **/(root)**，点击 **Save**。
8. 到仓库 **Actions** 页面查看 Pages 构建。出现绿色成功状态后，再打开 **https://sharronwww-cpu.github.io/**。GitHub 说明变更发布最长可能需要约 10 分钟。
9. 确认网页能正常打开后，在报名表的 **Personal webpage / LinkedIn profile / Github etc** 一栏填写：

   `https://sharronwww-cpu.github.io/`

可以在 GitHub 个人设置的 Website 字段也填入同一网址。

## 仓库结构应当是这样

```text
sharronwww-cpu.github.io/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── README.md            # GitHub 初始化的说明文件，可保留
└── assets/
    ├── portrait.jpg
    └── favicon.svg
```

项目只使用相对资源路径，也能部署在普通项目仓库的子路径下；不过本说明推荐上面的个人主页仓库，以获得最简洁的网址。

## 之后怎么修改

- **修改文字**：编辑 `index.html`。中文在标签正文中；对应英文在同一标签的 `data-en` 属性中。两处一起更新。
- **更换照片**：用新的正方形照片替换 `assets/portrait.jpg`，文件名不变。
- **修改颜色和布局**：编辑 `styles.css` 顶部 `:root` 中的颜色变量。
- **修改邮箱**：同时替换 `index.html` 和 `script.js` 中的 `1462674529@qq.com`。
- **更新网址或 GitHub 用户名**：同步替换 `index.html` 中的 canonical、Open Graph、结构化数据和 GitHub 链接。
- **增加科研项目**：复制研究区域的一个 `<details>...</details>`，修改中英文内容即可。
- **增加舞台照片或视频**：把自己希望公开展示的照片放入 `assets`，在舞台区添加图片，或加入公开视频链接。
- 每次把修改提交到 `main`，GitHub Pages 会自动重新发布。

## 如果网页没有正常打开

- **404**：确认仓库名逐字匹配 `sharronwww-cpu.github.io`，Pages 已选择 `main` 与 `/(root)`，并等待 Actions 完成。
- **显示 README 而不是主页**：检查 `index.html` 是否误放在外层文件夹里，或是否变成了 `index.html.txt`。
- **照片或样式不见了**：检查 `assets` 文件夹、`styles.css`、`script.js` 是否一并上传；GitHub 文件名区分大小写。
- **更新没有出现**：查看 Actions 是否完成，再强制刷新浏览器（Windows：`Ctrl + F5`）。
- **没有 `main` 可选**：先完成一次文件提交，再回到 Pages 设置。

## 内容与维护说明

网页根据提供的简历整理科研、学生工作、实习及文艺经历。BootstrapAgent 的结果标为论文报告结果，个人身份为第三作者。网页联系方式仅使用邮箱；未附带含手机号的简历文件。

头像及个人文字用于本人主页；未添加第三方统计、外部字体或虚构的演出图片。

## GitHub 官方参考

- [GitHub Pages 快速入门](https://docs.github.com/en/pages/quickstart)
- [配置发布分支](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [上传文件到仓库](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
