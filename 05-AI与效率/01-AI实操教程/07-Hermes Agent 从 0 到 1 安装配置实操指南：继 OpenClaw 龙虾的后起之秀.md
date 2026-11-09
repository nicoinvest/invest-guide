# Hermes Agent 从 0 到 1 安装配置实操指南：继 OpenClaw 龙虾的后起之秀

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/ai-tutorials/text/hermes-agent-install-config/) · [返回本分类](./README.md)

最近几天 Hermes Agent 在全网开源社区爆火，自从 2 月份开源，上线两个月左右的时间，目前 Github Star 数量已经冲到了 40k+，可以说是继 OpenClaw 龙虾之后，另外一个现象级爆火的 Agent 产品。

根据我的调研情况来看，这么多人愿意推荐 Hermes Agent，主要是因为它和 OpenClaw 最大的一点区别，自学能力非常强，能够在对话的过程中自主创建 skill，然后持续迭代这些 skill。

可以理解为你用的越多，它越懂你，越聪明，越好用，这是它最大的优势。

今天这篇教程，我会从 0 到 1 手把手带你安装配置上手使用 Hermes Agent，除此之外，我也会分享一些自己的使用心得。

--- 

## 一、Hermes Agent 介绍

还是先来简单介绍一下这款产品，它是一个本地运行的 AI Agent 框架。

官方最大的卖点就是 closed learning loop，这条被放在了官方文档 Key Features 的第一条，确实是一大差异化优势。

具体拆接下来是这么几个维度。

1️⃣ 记忆管理。Agent 自己管理记忆，不是被动存储，而是主动整理。"periodic nudges" 是指系统每隔几次对话之后，会主动提醒 Agent 去更新记忆，默认配置的是 10 轮对话。

2️⃣ 自动创建 Skill。Agent 每次完成一个复杂任务之后，会自动把整个过程提炼出一份 skill 文档，下次遇到类似的问题直接调用，不需要重复造轮子。

这对于新手小白来说，意味着即使你不懂任何 Agent 基操 不知道啥是 skill，只要和 hermes 对话几次之后，就能自动抽象出重复性的 skill，任务处理速度和用户体验都大大提升。

3️⃣ 自动迭代 Skill。Agent 在使用某个技能执行任务的时候，如果发现了更好的方法， 会自动更新技能文档。

越用越优化，越用越丝滑，类似于你反复做某个工作，熟能生巧，这个 hermes 还是很有人味儿的。

4️⃣ 辩证地建立用户画像。通过多轮对话来持续建立用户画像，这也是 hermes 比较聪明的一点。

比如说某一次对话你觉得 hermes 给的回答太长了，你让它以后简短一些，但可能后来你又觉得某个回答太短了，hermes 会渐近辩证式的理解你的说法，不是死板记录某个标签。

这么几点梳理下来，就可以看出 Hermes 和 OpenClaw 的微妙差别，我看到开源社区里面很多人都反馈过 hermes 更聪明处理速度更快。

![Hermes Agent 从 0 到 1 安装配置实操指南：Hermes Agent 介绍（配图 1）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726827365_ymt1tr.png)

除此之外，对于 Claude Pro/Max 用户来说，Hermes 有一个很大的优势，暂时没有被 Anthropic 封杀，可以直连 subscription 订阅方案，不需要走 API，能省很多钱。

但如果你要用 API 的方式接入 Hermes 的话，根据目前我的了解调研来看，可能 Token 消耗量会比 OpenClaw 还要更大一些... 大家可以自己权衡一下。

---

## 二、Hermes Agent 安装之前准备

### 2.1 系统要求

对于 Mac 用户，直接在原生自带的 Terminal 终端操作就行，不需要额外准备。

对于 Windows 用户，原生终端不支持 Hermes Agent，必须先装 WSL2。管理员模式打开 PowerShell，输入如下命令安装一下 WSL2。

```
wsl --install
```

装好重启电脑，后面所有操作都在 WSL2 的终端里进行。

### 2.2 网络环境

大陆用户需要注意一下这一步，Hermes 安装过程需要从 GitHub 拉代码、从 PyPI 下载 Python 依赖，这些在大陆直连经常超时。

你需要提前配置好国外 VPN 代理，然后在终端执行如下命令，配置终端的网络环境。

对于 Clash 代理软件来说，端口号一般都是 7890，不同代理软件端口不一样，可以自己查一下或者问一下 AI。
```bash
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890
```

Mac 用户把这三行加到 `~/.zshrc` 里，WSL2 用户加到 `~/.bashrc` 里，然后输入 `source ~/.zshrc` 或者 `source ~/.bashrc`，这样每次打开终端自动生效。
### 2.3 安装 Git

Mac 用户在终端输入 `git --version`，如果没装过会自动提示安装 Xcode Command Line Tools，按提示装就行。

Windows WSL2 用户按照如下命令安装。

```bash
sudo apt update && sudo apt install git -y
```

---

## 三、一键安装 Hermes Agent

准备工作做好后，直接在你的终端输入如下命令，一行命令就可以安装好。

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

这个脚本会处理所有的依赖配置，不需要我们手动操作。

整个过程大概 3-10 分钟，如果长时间没有安装好卡在某一步的话，大概率是网速或者网络配置问题，最好问你手头的 AI 帮你解决。

安装好之后，如果你电脑有 OpenClaw 的话，它会提示你是否导入配置，这里我就不导入了，因为我自己的 OpenClaw 用得很少，就输入 no，开始新的配置。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 2）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726876694_4wh60l.png)

接下来，选择第一个 Quick setup。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 3）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726887987_u2dyvz.png)

继续选择模型，我就选择我最常用的 Claude 大模型，可以直连 Claude Subscription 订阅。

如果你没有 Claude 的话，也可以选择其他模型，比如说 Qwen 千问或者小米，这些都不贵。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 4）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726908557_lkkvsc.png)

这里输入 1，选择 Subscription 方案。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 5）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726916276_gypdji.png)

在弹出的网页中，点击 Authorize，确认授权。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 6）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726922831_93a5zc.png)

授权之后，回到终端，把显示出来的 OAuth Token 粘贴进去，按下回车。

然后到了选择模型这一步，我选的是 opus4-6。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 7）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726931744_l8e8uk.png)

接下来是设置聊天机器人 Bot，选择第一个

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 8）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727025537_182vil.png)

这里用 Telegram 演示，按下空格，然后再按回车。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 9）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726954973_pmgejm.png)

界面中会提示我们，需要配置机器人的 Token 以及你电报账号的 ID，接下来我简单演示一下。

在 Telegram 中搜索 @BotFather，找到它之后，点击对话框中的 Open，然后点击 Create a New Bot。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 10）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726964194_at941z.png)

在这里输入 Bot 的名字、ID。注意 ID 需要以 “bot” 结尾。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 11）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726972828_qa7n1c.png)

创建好之后，点击 Copy，复制一下这个 Bot 的 Token。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 12）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775726988816_g5esow.png)

回到终端，粘贴进去，按下回车。

继续配置用户 ID，回到 Telegram，搜索 @userinfobot。

与它对话之后，就可以看到你的用户 ID，也是复制一下，回到终端粘贴进去，按下回车。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 13）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727130123_qhrf14.png)

下面问你要不要把这个 user ID 作为 home channel，输入 y，确认。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 14）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727181732_0m1506.png)

下面为你要不要安装网关作为启动服务，输入 y，确认。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 15）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727187442_hvotj3.png)

这个时候就基本完成配置了。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 16）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727196488_ofd4k7.png)

接下来输入 y，启动 herems 聊天界面。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 17）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727200052_hzc1uy.png)

如果你遇到报错的话，那就在终端中手动输入如下命令，手动启动。

```bash
hermes chat
```

接下来，我们就可以在终端中和它愉快对话了。

![Hermes Agent 从 0 到 1 安装配置实操指南：一键安装 Hermes Agent（配图 18）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775727203525_3ip0cv.png)

## 四、常见问题

列几个常见的问题，也是我自己之前遇到的报错。

**1. 安装失败或者卡住不动**

大概率是网络问题。确保代理覆盖了 `https_proxy` 和 `http_proxy` 两个环境变量，确定这两个环境变量后面的端口号配置正确

**2. 最后一步启动命令的时候，报错闪退**

可以尝试使用 `hermes chat` 命令手动开启对话。

**3. API 报错**

运行 `hermes model` 重新配置，检查 Key 有没有多余的空格或者换行符。如果用的是 OpenRouter，确认账户里有余额。

**4. Windows 用户直接在原生终端里面装**

不行，必须用 WSL2。原生 Windows 不支持。

最后，你在安装配置操作过程中遇到的一切问题，都可以去问 AI 大模型，只要你的大模型是联网的能读取文档的，就大概率能够帮你找到最新的信息，帮你解决安装过程中遇到的问题。

耐心一些，遇到问题一个个解决。起码我自己的体验来看，Hermes Agent 比 OpenClaw 的配置还要简单很多...

OpenClaw 的配置可以看[微信 ClawBot 教程](<./04-微信 ClawBot 教程：OpenClaw + 微信打造 24 小时超级助理｜Win-Mac双系统.md>)；想用 Claude Code 自己搭 Agent，可以看[Claude Agent 搭建教程](<./02-Claude Agent 搭建教程：20 分钟零基础打造专属 AI Agent 助手.md>)。

---

以上就是本篇教程的全部内容，欢迎大家点赞、收藏、转发，感谢支持🙏

我的投资导航网站，收录过往的文字教程，提供好用的投资工具，供大家从 0 到 1 一站式学习和检索：https://invest-nav.com

⬇️ 如下平台，分享美股投资、加密投资、AI 体验、香港/境外银行、出入金、资金流转等经验心得、实操分享，欢迎关注：

X 账号：https://x.com/tychozzz

Youtube 频道：https://www.youtube.com/@NicoGrowthz
