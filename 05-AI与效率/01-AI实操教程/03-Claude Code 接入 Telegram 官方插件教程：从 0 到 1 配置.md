# Claude Code 接入 Telegram 官方插件教程：从 0 到 1 配置

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/ai-tutorials/text/claude-code-telegram-plugin/) · [返回本分类](./README.md)

今天早上 Claude Code 官方正式推出了 channels 插件，支持接入 Telegram 或者 Discord。

这意味着你出门在外，手机上发一句话，家里的 Claude Code 就可以开始干活了。

![Claude Code 接入 Telegram 官方插件教程（配图 1）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773988313600_qztqkd.png)

❌ OpenClaw 龙虾 🦞

✅ Claude Code 龙虾 🦞

早上我实际测试了一遍，照着官方文档操作，3 分钟时间就可以搞定。

接下来我就快速给大家演示一下，如何将 Claude Code 接入 Telegram 电报机器人，远程遥控你的 Claude Code  Agent！

如下图所示，打开你的 Terminal 终端，输入 /plugin install telegram@claude-plugins-official 命令，安装 Telegram 插件。
直接保持默认，一直回车完成安装。

![Claude Code 接入 Telegram 官方插件教程（配图 2）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980795017_y7nr68.png)

插件安装成功。

![Claude Code 接入 Telegram 官方插件教程（配图 3）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980814311_k8s9a7.png)

按照提示，输入 /reload-plugins，完成重新加载。

![Claude Code 接入 Telegram 官方插件教程（配图 4）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980832600_d1jt88.png)

接着，打开 Telegram，全局搜索 BotFather。

在聊天框中，输入 /newbot，创建机器人。

接着继续输入机器人的名字，我就叫它“Nico投研Agent”。

接着继续输入机器人的唯一 ID。

复制一下这里的机器人 Token。

![Claude Code 接入 Telegram 官方插件教程（配图 5）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980851994_4ieloa.png)

回到 Terminal 终端，继续输入命令：/telegram:configure [你的Bot-Token粘贴在这里]

如果这一步提示报错的话，退出 Claude，通过这个命令重新启动 claude --channels plugin:telegram@claude-plugins-official

![Claude Code 接入 Telegram 官方插件教程（配图 6）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980872642_2p7f94.png)

接下来，Claude 会提示我们，需要到刚刚创建的 Telegram 机器人中，随便给机器人发一句话，获得一个配对码。

![Claude Code 接入 Telegram 官方插件教程（配图 7）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980895369_d8rn6i.png)

接着打开 Telegram，搜索刚才创建好的机器人 ID，打开对话。

获取到红框中的那行命令，复制一下。

如果你这一步发了消息之后，机器人没有任何反应，还是按照刚才的流程：

1️⃣ 重新输入 claude --channels plugin:telegram@claude-plugins-official 启动 Claude Code

2️⃣ 然后继续输入命令：/telegram:configure [你的Bot-Token粘贴在这里]，完成 Token 配置

3️⃣ 最后再回到 Telegram 给机器人发消息，应该就可以收到配对码了。

![Claude Code 接入 Telegram 官方插件教程（配图 8）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980920346_usg88q.png)

接着回到终端，输入刚才复制的那一行命令，然后一直按回车。

![Claude Code 接入 Telegram 官方插件教程（配图 9）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980940168_qa2rz0.png)

配对之后，输入 yes。这样它会把 DM 策略从 pairing 切换到 allowlist，之后只有你一个人能跟 Bot 对话，陌生人发消息过来拿不到配对码。

![Claude Code 接入 Telegram 官方插件教程（配图 10）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773980961493_ux8efr.png)

接着在电报机器人中发一条消息。回到终端，我们选择第二个，之后就不需要重复确认了。

![Claude Code 接入 Telegram 官方插件教程（配图 11）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773981000617_wf09b8.png)

到此为止，通道就已经成功完成连接。

![Claude Code 接入 Telegram 官方插件教程（配图 12）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773988488094_02pd4k.png)

之后就可以愉快地在手机 Telegram 上和你的 Claude Code 对话啦！

![Claude Code 接入 Telegram 官方插件教程（配图 13）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773981021725_q3evo3.png)

最后有一点需要注意，这个 Telegram 机器人仍然是连接你的本地终端，如果你的本地终端 Claude Code 关闭退出的话，这个机器人也无法回复你的消息。

建议大家直接使用 tmux 开一个后台进程，这样就不用担心手滑关掉了。

这一步直接让你的 Claude Code 帮你搞定。

![Claude Code 接入 Telegram 官方插件教程（配图 14）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773981042016_0l6yo0.png)

还没有搭好 Claude Code Agent 的话，可以先看[Claude Agent 搭建教程](<./02-Claude Agent 搭建教程：20 分钟零基础打造专属 AI Agent 助手.md>)。

欢迎大家点赞、收藏、转发，感谢支持🙏

- 我的 Youtube 频道：https://www.youtube.com/@NicoGrowthz

---

> 网页版阅读体验更好，配套工具和评论区都在网站上：[在投资导航阅读本文](https://invest-nav.com/tutorials/ai-tutorials/text/claude-code-telegram-plugin/)
