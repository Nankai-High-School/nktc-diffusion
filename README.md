# NKTC Diffusion

欢迎使用 NKTC Diffusion ！

## 使用说明

### 编辑

复制 /static/data/universities.example.json 到 /static/data/universities.json 开始增加大学。

在 /static/data 目录下可以增加图片或者视频。

> 例：如果要为一个大学添加 cover，cover 参数可以写成如下形式 /static/data/uf-cover.jpg 。

### 编译

为了保证编译顺利进行，你需要安装node以及npm。

在每次修改完大学信息后，需要重新编译程序，使用如下命令：

> npm run build

而后会在 /dist 目录下生成需要部署的文件。

### 部署

请使用Apache2部署项目，启用rewrite mod并且在部署项目的目录下创建如下文件来实现Pretty Urls，内容如下：

.htaccess
```
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html
```

如果你不想部署到线上，你可以使用

> npm run dev

使用一个本地的测试环境（localhost:8080）
