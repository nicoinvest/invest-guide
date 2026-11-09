# 零、教程配置速读（看 Youtube 视频的朋友必读）

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/ai-tutorials/text/claude-agent-setup/) · [返回本分类](./README.md)

Youtube 视频地址：待定

### 0.1 软件下载地址

**VS Code 官网**
```bash
https://code.visualstudio.com
```

**Git Bash 官网**（Windows x64 版本）
```bash
https://git-scm.com/downloads/win
```

### 0.2 Git Bash 环境变量配置

**系统变量 → 新建：**

| 变量名 | 变量值 |
|---|---|
| `CLAUDE_CODE_GIT_BASH_PATH` | `C:\Program Files\Git\bin\bash.exe` |

**用户变量 → 双击 Path → 新建：**
```bash
%USERPROFILE%\.local\bin
```

### 0.3 科学上网环境变量配置

**系统变量 → 新建（共两个）：**

| 变量名 | 变量值 |
|---|---|
| `HTTP_PROXY` | `http://127.0.0.1:7890` |
| `HTTPS_PROXY` | `http://127.0.0.1:7890` |

变量值末尾的端口号需与你的代理软件保持一致。常见代理软件默认端口号：

| 代理软件 | 默认端口 |
|---|---|
| Clash | 7890 |
| V2RayN | 10809 |
| Shadowsocks | 1080 |

### 0.4 安装 Claude Code（Powershell 中执行）

```bash
irm https://claude.ai/install.ps1 | iex
```

### 0.5 初始化 Claude Code（Powershell 中执行）

```bash
claude
```

初始化选项依次选择：
1. 命令行风格 → 保持默认 dark mode，回车
2. 登录方式 → 第一个（通过官网 Claude 账号连接），回车
3. 浏览器弹出授权页面 → 点击 Authorize 按钮
4. 回到命令行，提示登录成功，继续回车
5. 是否信任当前文件夹 → 保持默认，回车

### 0.6 安装 Claude Code 插件（Powershell 中依次执行）

```bash
# 安装长期记忆插件
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# 安装定时任务插件
/plugin marketplace add jshchnz/claude-code-scheduler
/plugin install scheduler@claude-code-scheduler
```

> 安装不成功时，检查梯子是否开启全局模式。

### 0.7 VS Code 中如果 Claude Code 登录失败

在 VS Code 左侧项目空白处右键 → 在集成终端中打开，执行：

```bash
claude
```

启动 claude 之后，继续在命令行中输入：

```bash
/login
```

在弹出的网页中点击 Authorize，回到 VS Code 提示登录成功后，重启 VS Code。

### 0.8 Agent 需求文档

提供 `agent-prompt-requirements.md` 文件下载如下：

[agent-prompt-requirements.md](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1773726061331_agent-prompt-requirements.md)

### 0.9 Claude 控制台地址

```bash
https://platform.claude.com/
```
---

> 💡 正文开始

全民 Agent 时代到来，我强烈建议每一个想要深度体验 AI 的朋友，一定要搭建一个专属于你自己的 Agent。

本篇文章将以 Claude Code 为工具，从零开始，手把手带你在二十分钟内搭建一个极简版 Agent，轻松入门 Agent 世界。

## 一、为什么人人需要拥有一个 Agent？

### 1.1 Agent 浪潮已至

最近一个多月，OpenClaw 爆火。大量 AI 零基础的新手小白、非计算机专业人士，甚至是上了年纪的长辈，都涌入了 AI 赛道，尝试用各种大模型搭建自己的龙虾 Agent。

这轮 AI 科技革命，正在走进下半场。

前两年是资本狂欢，各路 AI 股票暴涨；而现在是全民狂欢，人人都在用 AI。有点类似于 2000 年互联网科技革命时期，家家户户开始买电脑、装电脑。

对于普通人来说，想要深度参与这次 AI 浪潮，最简单的方式就是亲手搭建一个专属于自己的 Agent，让它真正融入到工作和生活中，切身感受 AI 的魅力。

![Claude Agent 搭建教程：Agent 浪潮已至（配图 1）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773669022253_5gucjn.png)

### 1.2 OpenClaw vs Claude Code

很多人的第一反应是用 OpenClaw 来搭建 Agent（OpenClaw 接入微信的做法见[微信 ClawBot 教程](<./04-微信 ClawBot 教程：OpenClaw + 微信打造 24 小时超级助理｜Win-Mac双系统.md>)）。

OpenClaw 确实不错，配置简单，开箱即用，几乎没有门槛，对零基础的 AI 新手非常友好。

但问题也恰恰在此。**开箱即用，意味着你很难掌控 Agent 的所有细节**，你会失去一部分对于数据的掌控权，甚至可能面临隐私安全问题。

此外，很多新手不了解 Token 的消耗机制，随手给 OpenClaw 指派一个任务，可能就花掉了几十甚至上百美元，得不偿失。

而本文所使用的 **Claude Code**，优势非常明显：**你可以掌控所有细节，自定义所有功能**。即使是 OpenClaw 暂时无法支持的功能，也能通过 Claude Code 轻松实现。

当然，这也意味着一定的操作门槛，对新手可能不太友好。

但如果你足够善于使用 AI，或者你的需求足够简单，**Claude Code 仍然是搭建 Agent 的最佳选择**。
![Claude Agent 搭建教程：OpenClaw vs Claude Code（配图 2）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773669105135_grhtt1.png)

### 1.3 我的 Agent 使用体验

> 在开始正题之前，我还是想让大家直观感受一下agent的魅力。以听我简单聊一下我的 Agent，它能帮我做什么、帮我解决了哪些问题、我的使用感受又是什么。

> 如果你不想听这些废话的话，可以直接跳转到实操部分，开始跟着视频，搭建你的 Agent。

我目前使用的这个 Agent，你可以简单理解为我的投研助理，它目前正在帮我做四件事情。

**第一，每天定时产出财经日报。**

每天早上，Agent 会自动检索过去 24 小时的宏观新闻、美股大盘动态，以及我关注或持仓的个股信息，过滤掉噪音，将真正有价值的内容整理成一份日报发给我。

看完这份日报，我大致就能了解：宏观世界发生了什么，美股为什么涨或跌，持仓个股情况如何，有没有好的加仓机会。

检索、筛选、处理信息这类重复性工作被 Agent 接管后，我可以将更多时间和精力放在投资决策上。

![Claude Agent 搭建教程：我的 Agent 使用体验（配图 3）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715604680_sk604s.png)

**第二，辅助投资决策。**

在当前阶段，所有 Agent 仍然无法替代人类做决策，但它确实能提供非常有价值的参考。

当我在考虑某个投资操作时，会让 Agent 从我自己的投资逻辑出发，尽可能全面地列举收益和风险。它足够了解我，给出的内容并不是废话，而是真正符合我个人投资风格的判断。

**第三，辅助内容创作。**

比如说，Agent 可以帮我筛选最近比较热门的话题，帮我思考内容的大纲，帮我润色最后的视频稿，修改文章的错别字。这些都是 AI 非常擅长的事情。

**第四，运营社群。**

最近我把 Agent 接入了电报群，设置了一个机器人 Bot，可以随时回答群友的问题。比如说某个投资标的的分析、当天美股市场动态、港卡办理流程、加密货币出入金，只要是我频道涉及的内容，Agent 都能给出不错的回答，而且讲话风格和我非常相似。

欢迎感兴趣的朋友进群试用，完全免费，可以直接提问：https://t.me/nicoinvestmentfriends

![Claude Agent 搭建教程：我的 Agent 使用体验（配图 4）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715739128_lms08d.png)

### 1.4 Agent 的本质

总结下来，Agent 主要替人类做两类事情：

1. **执行重复性工作**：每天产出财经日报、日常答疑、运营社群
2. **辅助个性化工作**：辅助投资决策、辅助内容创作

这和现实中的助理非常相似。

助理每天端茶倒水、预定会议、整理文件，这些是重复性工作；

偶尔给老板提一些实质性建议、提供情绪价值，这就是辅助个性化工作。

只不过 Agent 助理比人类助理强大成千上万倍，它背后是全世界最顶尖的大模型在驱动，拥有几乎无限的知识储备，能够 7×24 小时全天不间断工作。

### 1.5 我的真实案例分享

再给大家分享一个我最近的真实案例。

前几天中东局势最紧张、油价飙涨，美股市场波动非常大，消息面的噪音也非常多。

最后在我决定加仓之前，全程都在和我的投研 Agent 对话，让它给我筛选地缘宏观的信息，提供抄底技术指标，给出一些加仓的建议。

就比如说分批买入 AMD、特斯拉、Google，这些都是 Agent 帮我抓住的个股机会。

但是它也没有让我盲目加仓，给出的价格点位也还算符合我的预期。

我觉得这就是一个真正有用、真正能够提供实际价值的投研助理。

![Claude Agent 搭建教程：我的真实案例分享（配图 5）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715665800_6cyfuj.png)

然而这个 Agent 的成本，每个月只需要100美元，折合人民币不到 700 块钱。如果你使用频率不是特别高的话，20美元就可以搞定。

想一想，日常雇一个真人助理，月薪怎么也得三四千，还得交五险一金，你还得担心它不好好干活儿，上班摸鱼，担心它随时提桶跑路。

而 Agent 效率更高、产出更好，没有抱怨、没有情绪。

这么一想，搭一个 Agent 实在是太划算了。

所以，如果你目前的工作流中，有一些可以被标准化、流程化的重复工作，一定要尽快交给 Agent。

你的时间才是最值钱的，把省下来的时间，用在更有价值的事情上。

## 二、搭建 Agent 前置准备

在正式搭建之前，需要提前准备如下：

1. **电脑**：本教程以 Windows 系统演示。考虑到很多看视频的朋友，不一定有计算机编程的经验，不一定会用苹果电脑，所以教程使用 Windows 来演示，方便大家一步步跟着操作
2. **VPN 梯子**：大陆用户需要确保电脑 IP 节点位于境外（推荐美国、日本或新加坡），因为搭建过程中需要访问海外资源
3. **Claude Pro 订阅**：全程使用 Claude 进行演示。如果不知道如何订阅，可参考此前发布的《从 0 到 1 订阅 Claude》教程：[Claude AI 订阅教程](<./01-大陆用户订阅 Claude AI 大模型教程：无门槛从 0 到 1 开通.md>)

此外，如果你之前从来没有写过代码、没有任何计算机基础，在整个Agent搭建过程中，可能会踩一些坑，遇到很多问题。

不过没有关系，我使用的也是一台全新的、没有配置过编程环境的 Windows 电脑，也踩了很多坑。

在实际演示的时候，会尽可能帮助大家避免一些常见的问题。

而且你现在已经订阅好了 Claude Pro 大模型，在整个搭建 Agent 的过程中，只要遇到解决不了的问题，就直接截图去问 Claude，绝大多数它都可以帮你解决。

如果实在无法解决，可加入电报群提问交流：https://t.me/nicoinvestmentfriends

## 三、安装 VS Code

VS Code 是一款代码编辑器。我们并不需要手动写代码，而是通过它来监督 Claude 帮我们搭建 Agent，同时也能更直观地查看 Agent 项目结构。

> ⚠️ **重要提示**：在下载、安装和首次使用 VS Code 的过程中，请先**关闭 VPN 梯子**。后续需要启动时会另行说明。

**安装步骤：**

打开 VS Code 官网 https://code.visualstudio.com 点击 Download 按钮下载

![Claude Agent 搭建教程：安装 VS Code（配图 6）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715818914_8hdvm4.png)

打开安装包，同意协议，点击下一步

![Claude Agent 搭建教程：安装 VS Code（配图 7）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715827412_i6xutb.png)

选择安装目录——**路径中不能包含中文**，否则可能出现问题

![Claude Agent 搭建教程：安装 VS Code（配图 8）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715836076_agz9dn.png)

勾选「创建桌面快捷方式」，继续下一步

![Claude Agent 搭建教程：安装 VS Code（配图 9）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715847828_04ny2t.png)

点击安装，等待完成

![Claude Agent 搭建教程：安装 VS Code（配图 10）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715862826_lsiciu.png)

安装完成后，先不要打开 VS Code，继续安装下一个软件。

![Claude Agent 搭建教程：安装 VS Code（配图 11）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715889797_g3s8ej.png)

## 四、安装 Git Bash

Git Bash 是一个命令行工具，Claude Code 依赖它才能运行。**没有 Git Bash，Claude Code 无法启动**，因此必须安装。这也是 Windows 比 Mac 麻烦的地方。

**安装步骤：**

打开 Git Bash 官网，下载 Windows x64 版本 https://git-scm.com/downloads/win

![Claude Agent 搭建教程：安装 Git Bash（配图 12）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715953464_zjcyts.png)

运行安装包，安装路径建议尽量与教程保持一致（⚠️后续配置环境变量时需要用到该路径）

![Claude Agent 搭建教程：安装 Git Bash（配图 13）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773715979048_r3k3qb.png)

其余选项全部保持默认，不要随意更改，一直点击 Next（重复 Next 操作，直到最后一步）

![Claude Agent 搭建教程：安装 Git Bash（配图 14）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716007815_ruqu8y.png)

安装完成，点击 Finish

![Claude Agent 搭建教程：安装 Git Bash（配图 15）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716043213_8gpy3v.png)

**配置环境变量：**

安装完成后，需要配置 Git Bash 的环境变量。操作步骤如下：

按下 `Windows + S`，搜索「环境变量」，点击「编辑系统环境变量」

![Claude Agent 搭建教程：安装 Git Bash（配图 16）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716076098_cs5uy1.png)

点击「高级」选项卡 → 点击「环境变量」

![Claude Agent 搭建教程：安装 Git Bash（配图 17）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716116063_nmbwu0.png)

在「系统变量」模块 → 点击右下角「新建」

![Claude Agent 搭建教程：安装 Git Bash（配图 18）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716150214_8ln517.png)

复制粘贴对应的变量名和变量值，注意一个字母都不能错。

填写完之后，点击确定，回到刚才环境变量的界面。

|变量名|变量值|
|---|---|
|`CLAUDE_CODE_GIT_BASH_PATH`|`C:\Program Files\Git\bin\bash.exe`|

![Claude Agent 搭建教程：安装 Git Bash（配图 19）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716187243_q8s56s.png)

接着在「用户变量」模块 → 双击 Path

![Claude Agent 搭建教程：安装 Git Bash（配图 20）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716242481_lk8148.png)

点击「新建」

复制粘贴如下值：

```bash
%USERPROFILE%\.local\bin
```

![Claude Agent 搭建教程：安装 Git Bash（配图 21）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716284154_v12if1.png)

全部配置完成后，依次点击「确定」保存所有设置。

⚠️ 一定要依次确定保存配置，否则不生效

## 五、VS Code 安装插件

完成基础环境配置后，打开 VS Code。界面中间是代码文件显示区域，最右边是 VS Code 自带的 AI 对话界面（本教程不使用），最左边是菜单图标。

![Claude Agent 搭建教程：VS Code 安装插件（配图 22）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716398797_wmhxhg.png)

**安装中文插件：**

点击左侧最下方的扩展图标

搜索 `Chinese`，安装第一个插件

![Claude Agent 搭建教程：VS Code 安装插件（配图 23）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716458679_vekvb0.png)

安装后右下角会弹出提示，点击确认，界面即切换为中文

![Claude Agent 搭建教程：VS Code 安装插件（配图 24）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716486327_umd96a.png)

**安装 Claude Code 插件：**

继续在扩展中搜索 `Claude`

安装第一个插件

![Claude Agent 搭建教程：VS Code 安装插件（配图 25）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716523781_18g4fo.png)

该插件允许我们直接在 VS Code 中以对话形式指挥 Claude Code 完成所有操作。

安装完成后，**先不要打开 Claude Code 插件**，还需要完成后续配置。

## 六、科学上网环境变量配置

接下来需要访问外网资源，**打开 VPN 梯子**，连接美国、日本或新加坡地区的节点。

配置两个科学上网的环境变量：

按下 `Windows + S`，搜索「环境变量」，点击「编辑系统环境变量」

![Claude Agent 搭建教程：科学上网环境变量配置（配图 26）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716076098_cs5uy1.png)

进入「高级」→「环境变量」

![Claude Agent 搭建教程：科学上网环境变量配置（配图 27）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716620916_z3if30.png)

在系统变量中，依次新建以下两个变量（和之前流程一致）

![Claude Agent 搭建教程：科学上网环境变量配置（配图 28）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716678976_kvw6tk.png)

![Claude Agent 搭建教程：科学上网环境变量配置（配图 29）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716731330_gil956.png)

|变量名|变量值|
|---|---|
|`HTTP_PROXY`|`http://127.0.0.1:7890`|
|`HTTPS_PROXY`|`http://127.0.0.1:7890`|

⚠️ 注意：变量值末尾的端口号需与你的代理软件保持一致，我这里用的是 Clash，默认端口号是 7890。

常见默认端口号如下：

|代理软件|默认端口|
|---|---|
|Clash|7890|
|V2RayN|10809|
|Shadowsocks|1080|

配置完成后，点击「确定」保存。

## 七、安装与配置 Claude Code

### 7.1 安装 Claude Code

按下 `Windows + S`，搜索 `Powershell` 并打开。

> 此前在 VS Code 中安装的是 Claude Code 的可视化插件。但 Claude Code 本体的安装与初始化，目前必须在命令行终端中完成。

![Claude Agent 搭建教程：安装 Claude Code（配图 30）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716786811_1gktom.png)

在 Powershell 中输入以下命令，按下回车：

```bash
irm https://claude.ai/install.ps1 | iex
```

大约几十秒后，终端会提示安装成功。

> 如果终端长时间无反应或报错，大概率是网络问题：梯子无法访问外网或者科学上网的环境变量未配置成功。遇到问题请直接截图询问网页版 Claude 或在电报群中提问。

![Claude Agent 搭建教程：安装 Claude Code（配图 31）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716831049_xcx9zl.png)

### 7.2 初始化与登录

继续在 Powershell 中输入，按下回车：

```bash
claude
```

![Claude Agent 搭建教程：初始化与登录（配图 32）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716859842_o8i4n3.png)

**命令行风格** → 保持默认 Dark Mode，按回车

![Claude Agent 搭建教程：初始化与登录（配图 33）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716883973_nwzjg4.png)

**登录方式** → 保持默认第一个「Claude account with subscription」，按回车

> 这个登录方式对应你在官网花 20 美元订阅的 Claude Pro 账号，第二种是 API 登陆授权，第三种是非 Claude 的第三方平台账号

![Claude Agent 搭建教程：初始化与登录（配图 34）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716891782_02mqwp.png)

浏览器会弹出授权页面 → 点击 **Authorize** 按钮

![Claude Agent 搭建教程：初始化与登录（配图 35）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716961580_ed4tui.png)

回到命令行，提示登录成功，继续按回车

![Claude Agent 搭建教程：初始化与登录（配图 36）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716968447_zv5ljr.png)

询问是否信任当前文件夹 → 保持默认，按回车

![Claude Agent 搭建教程：初始化与登录（配图 37）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773716980942_mn8al2.png)

此时，命令行中已可以输入文字与 Claude Code 对话。输入「你好」按回车，它会正常回复。

![Claude Agent 搭建教程：初始化与登录（配图 38）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717016588_z5hm2l.png)

### 7.3 安装插件

保持终端 Claude 仍然是登陆状态，接下来继续通过 Claude 安装两个插件：

- **长期记忆插件**：让 Agent 能够记住之前的对话内容
- **定时任务插件**：让 Agent 可以在后台自动执行任务

在 Powershell 中依次执行以下四条命令：

```bash
# 安装长期记忆插件
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

# 安装定时任务插件
/plugin marketplace add jshchnz/claude-code-scheduler
/plugin install scheduler@claude-code-scheduler
```

> 如果安装没有反应或失败，VPN 代理软件开启全局模式，而非规则模式。

![Claude Agent 搭建教程：安装插件（配图 39）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717594575_sh3rfa.png)

到此为止，Claude Code 基础环节就配置好了。

## 八、搭建 Agent

所有前置的软件安装和环境配置均已完成，接下来正式搭建 Agent。

### 8.1 创建项目

回到 VS Code，点击右上角的 Claude 按钮，打开插件的对话界面

![Claude Agent 搭建教程：创建项目（配图 40）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717255278_2ad05q.png)

关掉插件介绍页面，点击左上角「打开文件夹」

![Claude Agent 搭建教程：创建项目（配图 41）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717372730_e3ftlh.png)

在弹出的窗口中右键空白区域，新建文件夹，命名为 `my-invest-agent`

选中该文件夹，点击右下角「选择文件夹」。

![Claude Agent 搭建教程：创建项目（配图 42）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717402887_pmeq3s.png)

### 8.2 导入需求文档

点击下方按钮，下载 Agent 需求文档 markdown 文件。

[agent-prompt-requirements.md](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1773726061331_agent-prompt-requirements.md)

将下载好的 `.md` 文件拖入 VS Code 的项目目录中

![Claude Agent 搭建教程：导入需求文档（配图 43）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717536080_jajgso.png)

这份需求文档记录了投研 Agent 的全部搭建细节，Claude Code 将根据这份文档一步步完成 Agent 搭建。

![Claude Agent 搭建教程：导入需求文档（配图 44）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717547166_z71nph.png)

### 8.3 启动搭建

将需求文档拉到底部，复制搭建指令，粘贴到 Claude Code 的对话框中，按回车发送。

![Claude Agent 搭建教程：启动搭建（配图 45）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773720866316_sm92gu.png)

> **如果 Claude Code 提示需要重新登录授权**，执行以下操作：
> 
> 1. 在左侧项目目录空白处右键 → 「在集成终端中打开」
> ![Claude Agent 搭建教程：启动搭建（配图 46）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773717647828_u3eftf.png)
> 2. 在终端中输入 `claude`，按回车
> ![Claude Agent 搭建教程：启动搭建（配图 47）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719426312_72gubp.png)
> 3. 如仍报错，输入 `/login`，默认保持第一个「Claude account with subscription」，按回车
> ![Claude Agent 搭建教程：启动搭建（配图 48）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719457264_tzx04f.png)
> 4. 浏览器弹出授权页面，点击 Authorize
> ![Claude Agent 搭建教程：启动搭建（配图 49）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719524988_xlurv7.png)
> 5. 返回 VS Code，确认登录成功
> ![Claude Agent 搭建教程：启动搭建（配图 50）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719540785_qr9ykn.png)
> 6. 重启 VS Code，重新粘贴搭建指令即可

搭建过程中，Claude Code 可能会弹出操作确认提示，直接点击对勾确认即可。

![Claude Agent 搭建教程：启动搭建（配图 51）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773720923736_bodczq.png)

耐心等待几分钟，Agent 框架就搭建完成了。

搭建完之后，最好重新启动一下 VS Code。

![Claude Agent 搭建教程：启动搭建（配图 52）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773720964503_jkhh5z.png)

### 8.4 填充个性化数据

此时 Agent 还停留在框架层面，尚未填充个性化数据。而这恰恰是 Agent 最核心的部分——**Agent 输出的内容是否靠谱、是否符合你的预期，关键在于它是否真正了解你。**

**填写用户画像：**

在 `soul/` 文件夹下找到 `my-soul.md` 文件，根据文件中的注释逐步填写。这份文件填写得越详细，Agent 的输出效果就越好。

我这里直接把我自己 Agent soul 文件复制过来了。

![Claude Agent 搭建教程：填充个性化数据（配图 53）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773720990503_z16227.png)

**投喂个性化数据：**

你的所有个性化数据——日常思考、交易记录、有价值的文章、在社交平台发布过的内容——都可以放入 `data/raw/` 文件夹下的对应子目录中，然后告诉 Agent 进行自我迭代。

![Claude Agent 搭建教程：填充个性化数据（配图 54）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773721016983_3bkv1u.png)

关于 Agent 的所有使用方法，可以在项目根目录下的 `QUICKSTART.md` 文件中找到，建议通读一遍。

### 8.5 效果演示

以产出当天财经日报为例：向 Agent 发出指令后，大约几分钟即可完成。

![Claude Agent 搭建教程：效果演示（配图 55）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773721032814_ahjn5g.png)

日报内容涵盖：美股行情、投资组合持仓表现、全球宏观新闻、美股抄底信号、比特币抄底信号，最后还会给出一句话总结当天需要关注的重点。

一份财经日报该有的内容，Agent 全部帮你整理好了。

![Claude Agent 搭建教程：效果演示（配图 56）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773721045895_msk7sk.png)

### 8.6 定时任务配置

此外，如果你想要借助 Agent 实现全天全自动化的定时任务，需要借助我们刚才安装好的 scheduler 插件。

它不能使用 Claude Subscription 方案，必须使用 API Key。

接下来，我简单演示一下配置流程。

打开 Claude 控制台官网的链接：https://platform.claude.com/ 登陆进入控制台。

![Claude Agent 搭建教程：定时任务配置（配图 57）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719087560_561ywy.png)

点击下方的 API Key，然后可以在最右侧看到 Create Key，点击它。

![Claude Agent 搭建教程：定时任务配置（配图 58）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719130016_250y7m.png)

给 API Key 起个名字，点击 Add。复制一下生成出来的 Key，临时保存到一个地方。

![Claude Agent 搭建教程：定时任务配置（配图 59）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719153302_mgtnaa.png)

接着我们继续点击上方的 Billing，用信用卡购买一些 API key 的额度，可以先充值几美元试一试。

如果你只是跑财经日报这种定时任务的话，一个月 10 美元左右应该是够用了。

![Claude Agent 搭建教程：定时任务配置（配图 60）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773719186256_r17or0.png)

接下来，我们回到 VS Code，把 API Key 写入到 .env 文件中。（⚠️需要把 .env.example 重命名为 .env）

前面的变量名叫做 ANTHROPIC_API_KEY，等于号后面的变量值，就把刚才的 API Key 粘贴进来。

这样一来，之后scheduler插件创建定时任务的时候，会自动将这个 API Key 写入到命令中。

![Claude Agent 搭建教程：定时任务配置（配图 61）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1773721142584_8gyxcc.png)

## 九、更多玩法

Agent 的能力远不止于此。以下是一些常见的扩展方向：

**自媒体运营**：让 Agent 帮你跑通微信公众号、小红书、推特的运营流程，每天自动选素材、确定主题、撰写内容，然后定时发布。

**自动化交易**：让 Agent 自动盯盘，当某个标的涨到或跌到指定价位时，自动执行相应操作。

目前欧易已上线 Agent 工具包，可以将 Claude Code 一键接入欧易交易系统，实现实时交易、行情分析和交易复盘。

可以参考欧易官方的配置教程，实战体验一下：https://x.com/okxchinese/status/2031332338270089605

**即时通讯接入**：将 Agent 接入 Telegram、QQ、飞书等平台的机器人，随时随地发消息指挥它完成工作。Telegram 的接法见[Claude Code 接入 Telegram 官方插件教程](<./03-Claude Code 接入 Telegram 官方插件教程：从 0 到 1 配置.md>)。

如果不知道如何配置这些功能，直接把需求描述给 Agent，让它自行完成相关设置即可。

**关于「Agent 很笨」...**

刚开始使用时，你可能会觉得 Agent 很笨，听不懂指令，产出也不符合预期，甚至还不如自己手动做一遍。

这是完全正常的。

类比一下：你自己开一家公司，即使你招进来的是清华北大的研究生，他们刚入职的时候，也需要时间熟悉公司、业务和工作流程。

Agent 也同理，它拥有几乎无限的知识储备，但如果你希望它真正融入你的工作流、高效完成重复任务，前期就需要投入时间进行磨合：

1. **提供足够多的个性化数据**：将你的思考、记录、交易记录等所有与你相关的内容放入 `data/` 目录，让 Agent 消化吸收、完成自我迭代
2. **不断地反馈**：每次对话后，将不满意的地方告诉 Agent，让它记录到长期记忆中

**调教一个好的 Agent，核心还是在于个性化数据。**

所以我也强烈建议大家在 AI 时代养成一个习惯：**打造自己的知识库**。

日常工作和生活中的所有思考、灵感、笔记、心得，都应该记录下来，沉淀到你的知识库中。这些是 AI 时代下最宝贵的数字资产。

我从大学时期就开始记录个人笔记、沉淀知识库；后来做自媒体，又积累了大量观点和思考。等到 2026 年 Agent 真正爆发时，这些数据全部派上了用场，帮助我快速迭代出一个真正懂我的数字分身。

之后有机会的话，我会分享一下我搭建个人知识库的心得。

## 十、写在最后

最后，如果你在搭建 Agent 的过程中遇到任何问题，欢迎在教程下方评论区交流讨论。

也可以加入电报群交流讨论：https://t.me/nicoinvestmentfriends

后续我也会将大家交流反馈过程中遇到的常见问题，汇总到这篇教程下方，供大家参考。

X/Youtube 同名：Nico投资有道

---

> 网页版阅读体验更好，配套工具和评论区都在网站上：[在投资导航阅读本文](https://invest-nav.com/tutorials/ai-tutorials/text/claude-agent-setup/)
