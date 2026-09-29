# 妈妈的星光生日家书

一个移动端优先的沉浸式生日网站，包含星云背景、做旧打字家书、许愿蛋糕、3D 记忆星云、祝福互动、背景音乐和可下载海报。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建：

```bash
pnpm build
pnpm preview
```

## 发布到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将本压缩包解压后的所有文件上传到仓库根目录，默认分支使用 `main`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中将 Source 设为 **GitHub Actions**。
5. 推送完成后等待 `Deploy birthday site to GitHub Pages` 工作流运行成功。

网站已使用相对资源路径，无论仓库名是什么，照片、音乐、海报和动态组件都会从 GitHub Pages 的正确子路径加载。

## 完整资源

- `public/assets/photos/`：五张照片墙图片
- `public/assets/poster/`：最终祝福海报原图
- `public/assets/cake/`：星空蛋糕插图
- `public/assets/audio/`：背景音乐
- `vendor/threeui-cloud-field/`：Cloud Field 组件所需源码

访问口令：`2026.10`
