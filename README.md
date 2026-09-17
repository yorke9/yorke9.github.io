# Personal Homepage

一个使用 **HTML、CSS 和原生 JavaScript** 制作的单页个人主页。无需 Node.js、npm 或后端；保存文件后，双击 `index.html` 即可在浏览器打开。页面包含个人介绍、项目、经历、技能和联系方式，并适配电脑、平板与手机。

GitHub 仓库：[yorke9/yorke9.github.io](https://github.com/yorke9/yorke9.github.io)。在线主页：[https://yorke9.github.io/](https://yorke9.github.io/)。目前 GitHub Pages 已从 `main` 分支的 `/(root)` 发布。

> 主页已公开。经历、前三个项目和部分联系信息仍是演示内容，请在分享给他人前替换为真实信息，不要把示例经历当作已完成的工作。

## 项目结构

```text
personal-homepage/
├── index.html          # 页面结构与个人文字
├── 404.html            # GitHub Pages 找不到页面时的返回入口
├── css/
│   └── style.css       # 颜色、排版、响应式布局和动画
├── js/
│   └── main.js         # 导航菜单、滚动状态和进入动画
├── images/
│   ├── README.md       # 添加图片的方法
│   └── favicon.svg     # 网站的小图标
├── projects/
│   └── index.html      # 四个可打开的项目说明页
├── README.md           # 使用与 Git 学习说明
└── .gitignore          # Git 不需要跟踪的临时文件
```

浏览器先读取 `index.html`，再按其中的相对路径加载 `css/style.css` 和 `js/main.js`。因此整个文件夹移动到别处时仍能正常打开。

## 如何运行

### 方法一：直接打开

进入 `personal-homepage` 文件夹，双击 `index.html`。修改文件并保存后，在浏览器中刷新页面即可看到变化。

### 方法二：使用 VS Code Live Server

在 VS Code 中打开 `personal-homepage` 文件夹，安装 **Live Server** 扩展后，右键 `index.html`，选择 **Open with Live Server**。保存文件后，页面通常会自动刷新。这个方法只是方便开发，网站本身不依赖该扩展。

## 如何修改

1. **文字与链接：**打开 `index.html`，搜索 `PERSONAL CONTENT` 注释。修改姓名、介绍、四个示例项目、经历、技能和联系方式。四个 `View Project` 已指向可打开的 `projects/index.html`，项目详细内容也可在那里修改。联系区域的 GitHub 已指向 `yorke9`，个人主页项目也已链接到真实仓库；另外三个示例项目的 GitHub 地址和 LinkedIn 尚未提供，页面中暂时显示“Add link / Add URL”。有地址后再把文字改成 `<a href="真实网址">链接文字</a>`。`your@email.com` 是占位邮箱，请替换成你愿意公开的邮箱。
2. **颜色：**打开 `css/style.css`，修改开头 `:root` 中的 `--bg-color`、`--text-color`、`--secondary-text`、`--accent-color` 等变量。
3. **交互：**打开 `js/main.js`。它负责手机菜单、平滑滚动、当前导航、返回顶部及进入动画。改动后刷新浏览器查看效果。
4. **图片：**将图片放入 `images/`，在 HTML 中写如 `<img src="images/profile.jpg" alt="头像描述">`。添加头像时可替换首页的 `.hero-visual` 区域，并在 CSS 中调整布局。
5. **图标与年份：**替换 `images/favicon.svg` 可以更改浏览器小图标；年份写在 Hero 和 Footer 中，可以直接搜索 `2026` 修改。

项目和项目说明页目前仍是示例内容，并非真实作品。项目页可以正常打开；GitHub 地址尚未提供，因此没有设置会导致 404 的假链接。

## Git 基础操作

下面的 `git init`、`git remote add` 示例用于学习如何从头创建一个**新的空仓库**。本网站的 GitHub 仓库已经有提交记录；继续维护这个在线网站时，请先克隆仓库（见下一节），不要在这份无 `.git` 的本地副本里直接初始化后强行推送。第一次使用 Git 之前，可能需要设置用户名和邮箱；它们会写入提交记录，与网页上的联系邮箱可以不同。

### 继续维护现有网站

在你选定的目录克隆现有仓库。以后编辑克隆目录中的文件，或把这份本地副本的修改复制到克隆目录对应位置，再提交：

```bash
git clone https://github.com/yorke9/yorke9.github.io.git
cd yorke9.github.io
git status
git add .
git commit -m "Refine personal homepage"
git push
```

`git clone` 会取得线上完整历史并自动配置远程地址。不要把 `your@email.com` 当成 Git 提交邮箱；它只是网页里的示例内容。也可以在 GitHub 仓库直接使用网页编辑器修改文件。

### 第一次提交

```bash
git init
git add .
git commit -m "Initial personal homepage"
```

- `git init`：在当前文件夹建立本地 Git 仓库。
- `git add .`：将当前文件夹内的改动加入待提交区；`.gitignore` 中列出的文件会被忽略。
- `git commit -m "..."`：把待提交的内容保存为一次有说明的历史记录。

### 修改网站之后

```bash
git status
git add .
git commit -m "Update homepage"
```

`git status` 用来查看哪些文件发生变化；接着用 `git add .` 和 `git commit` 保存这一轮修改。提交说明最好写清这次做了什么。

### 上传到 GitHub

以下是**新项目**上传到新空仓库的教学示例；不能直接用于当前已有历史的 `yorke9.github.io` 仓库。先在 GitHub 创建一个**空仓库**，例如 `personal-homepage`。创建时不要勾选自动添加 README，避免第一次推送时出现历史冲突。复制该仓库的 HTTPS 地址，在新项目文件夹执行：

```bash
git remote add origin 仓库地址
git branch -M main
git push -u origin main
```

- `git remote add origin 仓库地址`：把 GitHub 仓库记录为名叫 `origin` 的远程仓库；把“仓库地址”替换为真实 HTTPS 地址。
- `git branch -M main`：将当前分支命名为 `main`。
- `git push -u origin main`：第一次将本地 `main` 分支上传到 GitHub，并建立默认关联。按 GitHub 提示登录即可。

后续修改并提交后，上传只需要：

```bash
git add .
git commit -m "说明本次修改"
git push
```

这里的 `git push` 将新提交上传到之前关联的 GitHub 仓库。若没有实际改动，Git 会提示无内容可提交。

## 如何部署到 GitHub Pages

当前仓库已经按推荐结构发布：仓库根目录直接包含 `index.html`、`css/`、`js/`、`projects/` 和 `404.html`。以下是将来新建另一个 GitHub Pages 网站时可参考的步骤。

1. 在 GitHub 打开该仓库，点击 **Settings**。
2. 在左侧点击 **Pages**。
3. 在 **Build and deployment** 的 **Source** 选择 **Deploy from a branch**。
4. 在 **Branch** 选择 `main`，文件夹选择 **`/(root)`**，然后点击 **Save**。
5. 等待 GitHub 完成部署。之后可在 Pages 设置页点击 **Visit site**。普通项目仓库的网址通常是 `https://你的用户名.github.io/仓库名/`。

本站的仓库名恰好是 `yorke9.github.io`，所以主页地址直接是 `https://yorke9.github.io/`。`404.html` 为输错地址提供返回首页与项目笔记的入口。

由于样式和脚本都使用相对路径，部署在普通项目仓库的子路径下也可以正常加载。日后修改网站，提交并 `git push` 后，Pages 会重新部署。官方步骤可参考 [GitHub Pages 发布来源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

### 出现 404 时检查

1. 打开 GitHub 仓库的 **Code** 页面，确认被发布分支的根目录有小写的 `index.html`。如果上传的是外层“个人主页”目录，还要确认根目录的跳转用 `index.html` 一并上传。
2. 在 **Settings → Pages** 查看发布来源是否为 `main` 和 `/(root)`，以及页面显示的实际 **Visit site** 地址。
3. 普通项目仓库应访问 `https://用户名.github.io/仓库名/`；只有仓库名恰好是 `用户名.github.io` 时，才直接访问 `https://用户名.github.io/`。
4. 查看仓库 **Actions** 中最新的 Pages 部署是否成功。新推送后等几分钟，再强制刷新网页。
5. 如果主页能打开但某个项目页面打不开，检查 `projects/index.html` 是否已上传；四个项目按钮使用的都是相对路径。

更多排查细节见 [GitHub 官方 404 排查说明](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)。

## 设计参考与这次改进

- [Anna Linh Vu 的静态作品集](https://github.com/annalinhvu/annalinhvu.github.io)：学习用简洁的项目说明、明确的真实演示链接来呈现作品。本站保留四个示例方向，不为尚未完成的研究虚构外部链接。
- [Shaikha Alkhadhr 的学术主页](https://github.com/ShaikhaTheGreen/ShaikhaTheGreen.github.io)：参考轻量静态结构和专门的 `404.html`，让输错网址的人能回到主要内容。
- [Jord8061 的学术主页](https://github.com/Jord8061/Jord8061.github.io)：参考桌面与手机都清晰的导航组织。本站仍保持单页、无框架、可直接打开 `index.html` 的做法。

本次新增页首阅读进度线、短篇研究宣言、项目笔记目录、网站图标及 404 页面。进度线复用已有的滚动处理，页面不加载额外库或远程字体。

## 推荐阅读顺序

```text
index.html   → 先理解页面有哪些内容、链接指向哪里
    ↓
css/style.css → 再看颜色变量、布局和手机端规则
    ↓
js/main.js    → 最后看点击、滚动与动画如何工作
    ↓
README.md     → 用 Git 记录修改并发布网站
```

建议每读完一部分，就做一个小改动并刷新浏览器。例如先改姓名，再改强调色，最后尝试修改项目介绍。这样更容易看出三种语言各自负责什么。
