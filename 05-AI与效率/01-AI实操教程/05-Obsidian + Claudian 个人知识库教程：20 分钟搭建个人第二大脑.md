# Obsidian + Claudian 个人知识库教程：20 分钟搭建个人第二大脑

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/ai-tutorials/text/obsidian-claudian-knowledge-base/) · [返回本分类](./README.md)

## 零、教程配置速读（看 Youtube 视频的朋友必读）

### 0.1 Obsidian 下载链接

Obsidian 官网下载地址：https://obsidian.md/download

### 0.2 Claudian 插件三个文件

[main.js](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040201602_main.js)

[manifest.json](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040206964_manifest.json)

[styles.css](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040209485_styles.css)

### 0.3 代理环境变量配置

```bash
https_proxy=http://127.0.0.1:7890
http_proxy=http://127.0.0.1:7890
```

如下是常见代理软件的端口号（不知道就去问 AI）：

| 代理软件 | 默认端口 |
|---|---|
| Clash | 7890 |
| V2RayN | 10809 |
| Shadowsocks | 1080 |

### 0.4 知识库 Agent 搭建指南文件

[知识库Agent搭建指南.md](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775038735467_知识库Agent搭建指南.md)

### 0.5 Markdown 基础教程

[Markdown 零基础入门教程](<./06-Markdown 零基础入门：5 分钟学会 AI 时代的通用语言.md>)

---
> 💡 正文开始

调教一个好的 AI Agent，核心在于什么？

绝对是个性化的数据。你喂给 AI 的数据越个性化，AI 就越懂你，产出就越精准。

但问题来了，你的个性化数据存在哪里？是不是散落在微信聊天记录里面？或者躺在收藏夹吃灰？还是分散在十几个不同的 App 里？

如果你的数据没有一个统一的地方去沉淀、整理、积累，那你的 Agent 永远只能是一个通用的工具，而不是一个真正懂你、能够提高你生产效率的助手。

所以今天这篇文章，我会带你从 0 到 1 搭建一个 AI 时代的外置大脑，终极个人知识库。

整个搭建过程，不到 20 分钟时间，不需要任何编程基础，不需要折腾复杂的配置，跟着一步步操作就行。

---

## 一、个人知识库长什么样？

先给大家看一下最后的成品，也就是我目前正在使用的知识库。

我把它划分为 6 个大项：

- **📅 日常工作**，每天的待办项、近期的规划、日报周报之类的东西。
- **📈 个人投资**，分为加密投资和美股投资，记录日常投资相关的学习思考和复盘。
- **📋 工作专项**，我每天自媒体的工作内容，比如写推文、做视频、做网站以及商务合作。
- **📝 日常记录**，随手记下来的东西，暂时不知道放哪个目录下，就先丢到这个临时文件夹。
- **💡 个人思考**，日常想到的、思考的所有东西，都记录在这里。
- **🤖 AI 学习实操**，AI 学习过程中的经验心得。

![Obsidian + Claudian 个人知识库教程：个人知识库长什么样？（配图 1）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038018493_wbb1rk.png)

如果只有这些内容的话，这就只是一个非常普通的知识库，因为它还是由人来完成记录、修改、整理这些日常操作。

重点在于，用 AI 来赋能整个知识库，将核心的读写权限，由人转移向 AI。

我可以借助 Claude 大模型，在对话框中通过 skill 命令的方式，向知识库发号施令。

比如说，我想找一篇之前写过的笔记，但自己检索太麻烦了，这种活儿就可以直接交给 AI，通过 ask 命令让它帮我去找。

```bash
/ask 我之前写了一篇关于体制化思考的推文，帮我找出来。
```

比如说，日常工作经常需要写周报。只要把每周干过的事情简单记录下来，AI 就可以帮你生成相应的报告。通过 report 命令，它就直接帮我写好了上周的周报。

```bash
/report 周报 上周
```

比如说，我想定期回顾一下之前记录下来的东西，让 AI 帮忙总结消化。使用 review 命令，设置对应的时间范围和知识库文件路径，AI 就帮我完成总结了。

```bash
/review 上周 X推文专项/个人分享文件夹
```

比如说，为了提高每天的工作效率，我可以让 AI 帮我自动生成每天的工作任务，拉取昨天没有完成的工作事项，只需要一个 daily 命令就搞定了。

```bash
/daily
```

还有一个 capture 命令，叫做万能捕获命令，我们可以把一段文字或者一个网页链接，塞给 AI，让它帮忙转化为结构性的笔记，快速捕获有价值的信息。

```bash
/capture All of those countries that can’t get jet fuel because of the Strait of Hormuz, like the United Kingdom, which refused to get involved in the decapitation of Iran, I have a suggestion for you: Number 1, buy from the U.S., we have plenty, and Number 2, build up some delayed courage, go to the Strait, and just TAKE IT. You’ll have to start learning how to fight for yourself, the U.S.A. won’t be there to help you anymore, just like you weren’t there for us. Iran has been, essentially, decimated. The hard part is done. Go get your own oil! President DJT
所有因为霍尔木兹海峡而无法获得喷气燃料的国家，比如拒绝参与伊朗斩首行动的英国，我有个建议：第一，从美国购买，我们有充足的，第二，积累一些延迟的勇气，去海峡， 然后就拿去吧。你得开始学会为自己而战，美国不会再帮你，就像你当初没帮过我们一样。伊朗基本上已经被摧毁殆尽。最难的部分已经过去了。去自己买油吧！总会主席
```

这么一番操作下来，你会发现 AI 加持之下的知识库，可以称得上是我们的外置大脑。

## 二、我的知识库演进之路

在正式教大家搭建之前，我想先分享一下我自己的知识库是怎么一步步演进到今天这个形态的。

这个过程，很多朋友可能都会有类似的共鸣。

### 2.1 知识库 1.0 时代：iOS 备忘录，全塞进去

最早的时候，我和大多数人一样，用的是 iPhone 自带的备忘录。

想到什么就往里面扔，不分类、不整理、不打标签。就是一个纯粹的信息大杂烩。

这种方式的优势非常明显，没有任何门槛，随手就可以记录，iCloud 自动同步，手机电脑都能看都能写。

但问题也很快就暴露了出来，记了几百条之后，找东西完全靠翻。

搜索关键词有时候能找到，有时候找不到，效率非常低。

而且很多时候我写的都是碎片化的想法，连标题都没有，没办法快速检索。

### 2.2 知识库 2.0 时代：iOS 备忘录 + 文件夹分类

意识到问题之后，我开始给备忘录建文件夹。

投资相关的是一个文件夹，个人思考一个文件夹，自媒体运营相关的是一个文件夹。

中间调整了好几次文件结构，怎么分都不太满意。有些笔记横跨多个领域，放哪个文件夹都不对。

更大的问题是，随着内容越来越多，备忘录本身的局限性越来越明显：

它不支持 Markdown 格式，排版很难看。

它没有插件生态，功能就那么多，想扩展也扩展不了。

最致命的是，iOS 备忘录没办法接入 Claude AI 大模型。

在 AI 时代，一个不能和 AI 交互的笔记工具，就像一辆上不了高速的老爷车。确实可以用，但远远跟不上时代的需求。

![Obsidian + Claudian 个人知识库教程：知识库 2.0 时代：iOS 备忘录 + 文件夹分类（配图 2）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038150748_51l1ro.png)

### 2.3 知识库 3.0 时代：Obsidian + Claudian

一个多月之前，我把所有的 iOS 备忘录笔记，都迁移到了 Obsidian。

它解决了备忘录的几乎所有痛点：支持 Markdown、支持双向链接、有丰富的插件生态、数据完全存在本地，隐私有保障。

再加上 Claudian 这个社区插件，可以直接让我们在 Obsidian 里面，通过对话框的方式和 Claude 大模型对话。

让 AI 帮我总结文章、搜索笔记内容、回答问题，体验非常好。

但这个阶段，本质上还是"我自己主导，AI 偶尔帮忙"，它更多是充当一个被动的工具。

### 2.4 知识库 4.0 时代：知识库 Agent（AI 时代的外置大脑）

最近，我把知识库升级到了 4.0 版本，也就是今天要教大家搭建的知识库 Agent。

和 3.0 最大的区别在于：AI 从"被动工具"变成了"主动助手"。

它不再只是你问什么答什么，而是可以主动帮你捕获信息、整理归类、发现知识之间的连接、定期帮你回顾、生成工作报告。

打一个比方：3.0 时代，就像是你自己在家做饭，偶尔拿手机查个菜谱。4.0 时代，像是你雇了一个私人管家，帮你打理整个厨房，只要你愿意，他可以帮你完成采购、备菜、做饭、洗碗所有重复的环节，你只需要决定自己想吃什么菜就可以了。

只要你用的越多，这个 Agent 就越聪明越懂你，因为它的记忆和能力，全部都存在你的知识库里面。

今天这篇文章，就是要教大家搭建这个 4.0 版本的终极知识库。

---

## 三、从 0 到 1 搭建知识库

接下来进入实操环节。

在开始之前，你需要准备好一台电脑，Windows 或者 Mac 都可以。

电脑上还需要订阅 Claude 大模型，在本地安装配置好 Claude Code。

如果你还没有搞定这些前置条件，可以参考我之前的订阅教程和 Agent 搭建教程。

- [订阅 Claude 教程](<./01-大陆用户订阅 Claude AI 大模型教程：无门槛从 0 到 1 开通.md>)
- [Claude Code 安装以及 Agent 搭建教程](<./02-Claude Agent 搭建教程：20 分钟零基础打造专属 AI Agent 助手.md>)

### 3.1 搭骨架：下载安装 Obsidian

首先，下载 Obsidian。

进入 Obsidian 官网 https://obsidian.md/download 根据你自己的操作系统，选择对应的下载方式。安装过程全都保持默认就行。

![Obsidian + Claudian 个人知识库教程：搭骨架：下载安装 Obsidian（配图 3）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038216647_rfnhgd.png)

下载安装好之后，打开 Obsidian，点击「创建」按钮，新建一个本地仓库（也就是知识库）。

![Obsidian + Claudian 个人知识库教程：搭骨架：下载安装 Obsidian（配图 4）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038234503_bxizvp.png)

给仓库取个名字，选一下存放位置，然后点击创建。

![Obsidian + Claudian 个人知识库教程：搭骨架：下载安装 Obsidian（配图 5）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038240587_vdw9cv.png)

进入主界面之后：最左边是知识库的文件目录，中间是文件内容的展示区域。

![Obsidian + Claudian 个人知识库教程：搭骨架：下载安装 Obsidian（配图 6）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038254052_xwx7ac.png)

Obsidian 中所有的文件，都是用 Markdown 格式来存储的。关于 Markdown，我会在后面单独讲。

对于完全没用过 Obsidian 的朋友，不用紧张。它本质上就是一个本地的笔记软件，只不过功能比备忘录强大很多。

### 3.2 装大脑：安装 Claudian 插件

打开 Obsidian 左下角的设置，找到「第三方插件」选项，点击关闭安全模式。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 7）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038275919_t6rdf8.png)

Claudian 是今天最重要的一个东西，它可以让我们直接在 Obsidian 里面和 Claude 大模型对话。

目前 Claudian 还没有上架到社区插件市场，所以需要手动安装。

在「已安装插件」右侧，点击文件夹图标按钮。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 8）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038325263_1ourbz.png)

进入 Obsidian 本地的 plugins 插件目录。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 9）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038352973_wiikns.png)

新建一个文件夹，命名为 `claudian`

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 10）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038366759_yqf0e6.png)

把如下 `main.js`、`manifest.json`、`styles.css` 这三个文件下载下来，放到 claudian 文件夹内

[main.js](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040201602_main.js)

[manifest.json](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040206964_manifest.json)

[styles.css](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775040209485_styles.css)

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 11）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038376974_nnrfjd.png)

回到 Obsidian，点击刷新按钮，就能看到 Claudian 插件了，启动它。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 12）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038392137_5jkzbu.png)

回到 Obsidian 主页面，最左边菜单栏会出现一个机器人图标，点击它就能看到 Claudian 的对话框。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 13）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038400973_7rf8lk.png)

**大陆用户注意**：如果输入"你好"之后提示 403 报错，说明本地环境还没有配置好代理。即使你开了 VPN 能访问外网，本地软件和浏览器是两套环境，还得额外配置环境变量。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 14）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038445452_2gzqvv.png)

进入设置界面，点击第三方插件中的 Claudian，拖到最下方找到 environment 配置项，在方框中填入如下两行环境变量。

```bash
https_proxy=http://127.0.0.1:7890
http_proxy=http://127.0.0.1:7890
```

变量末尾的端口号，需要和你的代理软件保持一致，Clash 默认是 7890。

如下是常见代理软件的端口号（不知道就去问 AI）：

| 代理软件 | 默认端口 |
|---|---|
| Clash | 7890 |
| V2RayN | 10809 |
| Shadowsocks | 1080 |

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 15）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038483239_7s6bym.png)

配置好之后，按理就可以在聊天框中，和 Claudian 正常对话了。

![Obsidian + Claudian 个人知识库教程：装大脑：安装 Claudian 插件（配图 16）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1775038679763_ok7hyo.png)

如果还是报错，按这个步骤排查：
1. 确认你能在终端命令行界面正常使用 Claude Code
2. 检查环境变量的端口号是否和代理软件一致

实在解决不了，可以直接问 Claude AI 大模型，或者加入电报群讨论。

### 3.3 注灵魂：5 分钟搭建知识库 Agent

前置环境都搭好之后，就是今天最核心的环节，搭建知识库 Agent。

听起来好像很复杂，但实际上你只需要做一件事：**把搭建指南发给 Claudian**。

把如下搭建指南文件下载下来，拖到当前知识库的目录中。

[知识库Agent搭建指南.md](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-downloads/1775038735467_知识库Agent搭建指南.md)

然后在对话框中输入一句话：

> 按照知识库 Agent 搭建指南，帮我搭建知识库 Agent。

接下来，你就可以看着 Claude 大模型自动操作了。

它会自动完成以下事情：

**第一，创建 6 个核心文件夹：**

- 📅 日常工作，放每日待办、近期规划、工作报告
- 💼 工作专项，按你自己的工作内容，创建子文件夹，存放具体的工作产出
- 📚 专业领域，按你的专业方向，创建子文件夹，存放领域知识和学习笔记
- 💡 个人思考，记录个人观点、灵感、想法
- 🤖 AI 学习&实操，记录 AI 工具的使用经验和学习笔记
- 📝 日常记录，万能收件箱，所有临时内容先扔到这里，之后再整理

**第二，创建 7 个 Skill 技能。**

Skill 可以理解为 Agent 的"技能包"，每个 Skill 负责一个特定的功能，就是我前面演示的那些命令。

感兴趣的话，可以详细看刚才那个搭建指南文件，里面写得很清楚。

**第三，创建 CLAUDE 相关的配置文件。**

整个搭建过程，大概需要 5 分钟左右的时间。

你不需要手动创建任何文件夹，不需要写任何配置，不需要任何编程基础。

你只需要给 Claude 大模型一份指南，它就帮你把所有事情搞定了。

搭建完成之后，就可以用 skill 命令的方式去操控整个知识库。

### 3.4 学语言：5 分钟玩转 Markdown

当然，在这之前，你还需要用几分钟时间，简单熟悉一下 Markdown 的最基础用法。

很多朋友可能不知道 Markdown 是什么。

简单来说，Markdown 就是 AI 时代下的 Word 文档，但是它远比 Word 更加高效简洁和通用。

你在写笔记的时候，用一些简单的符号，就能实现非常美观的排版效果，比如用 `#` 表示标题，用 `-` 表示列表，用 `**两个星号**` 表示加粗。

它的语法非常少，核心的就那么几个，5 分钟就能学会。

而且 Markdown 并不是程序员的专属，它是 AI 时代下的通用语言，是你和 AI 沟通的桥梁。

把 Markdown 当作 Word 去学，PC 时代下你能学会 Word，AI 时代下没理由学不会 Markdown。

[Markdown 基础教程](<./06-Markdown 零基础入门：5 分钟学会 AI 时代的通用语言.md>)

新手朋友可以去学习一下。只要多使用多练习，一定能学会，非常简单。

---

## 四、更多进阶玩法

搭建好基础的知识库 Agent，这只是一个起点。

接下来再分享几个进阶的玩法，帮助你把知识库用得更好。

### 4.1 装技能：个性化 Skill

刚才我们搭建了 7 个内置的 Skill，这些是通用场景下最常用的功能。

但每个人的工作和生活场景都不一样，7 个 Skill 不可能覆盖所有人的需求。

好消息是，你完全可以根据自己的实际情况，让 Claudian 帮你设计新的 Skill。

比如说：

你是程序员，可以让 Claudian 帮你定制一个 /code-review Skill，每次写完代码让它帮你做 Code Review。

你是学生，可以定制一个 /study-plan Skill，让它帮你根据考试时间生成学习计划。

你是产品经理，可以定制一个 /prd Skill，让它帮你快速生成产品需求文档的框架。

方法非常简单：在 Claudian 里告诉它，"我需要一个什么什么功能的 Skill"，描述清楚你的需求，它就会帮你生成对应的 Skill 配置文件。

甚至你可以让 Claudian 分析你目前知识库的使用习惯，让它主动推荐适合你的 Skill。

这才是 AI 最擅长的事情。

### 4.2 通经脉：多设备同步

知识库搭建好了，但如果只能在电脑上用，那就太可惜了。

很多灵感和想法，都是在路上、在地铁上、在吃饭的时候突然冒出来的。如果不能随时记录，等到坐在电脑前，早就忘了。

所以多设备同步非常重要。

如果你是 Mac + iPhone 用户，最简单的方案就是 iCloud 同步。Obsidian 原生支持 iCloud，你只需要把知识库文件夹放在 iCloud Drive 里，手机和电脑就会自动同步。我日常用的就是这种方案。

当然，你也可以使用 Obsidian 原生提供的同步方案，这个是付费功能。

网上也有各种 Obsidian 的多端同步教程，大家可以自己去学习一下。

### 4.3 上战场：知识库 × 工作流闭环

最后分享一个更高阶的玩法，也是我自己目前在用的，用知识库驱动工作流。

拿我的自媒体工作举例。

我的知识库里沉淀了大量的投资笔记、市场分析、个人思考、各种推文和视频稿。这些内容，可以直接被知识库 Agent 调用，帮我做选题、写大纲、写视频稿。

流程大概是这样的，总共分为三个阶段：

**第一个阶段是输入。** 我平时随手记录的灵感、想法以及写出来的完整推文，全部会沉淀到知识库中。

**第二个阶段是沉淀。** 知识库 Agent 帮我整理归类、打标签、发现其中的关联。

**第三个阶段是输出创作。** Agent 从知识库中提取素材，帮我生成选题报告，然后我从选题中挑一个最合适的内容，Agent 帮我生成大纲，产出初步的文字稿。

最后，我会在这个稿子的基础上不断地修改，调整结构，调整内容，调整表达方式，确保它符合我的要求，而不只是一眼 AI 生成出来的垃圾。

这就形成了一个完整的闭环：**输入 → 沉淀 → 输出**。

在 AI 时代下，知识库不仅仅是存储信息的地方，它更是驱动工作流、驱动产出的引擎。

对于我来说，这就是知识库最高级、最贴近生产环境、最能够提高我工作效率的玩法。

大家也可以根据自己的实际工作场景，抽象出来一个工作流，把重复性的任务都交给 Agent，大幅提高自己的工作效率。

## 五、为什么人人都应该打造自己的知识库？

最后再聊一个问题，为什么在 AI 时代下，人人都应该打造自己的知识库？

在没有 AI 之前，个人知识库更像是一个私人笔记本。你记了之后，主要还是自己翻着看，价值有限。

但到了 AI 时代，情况完全不一样了。

我经常说，调教一个好的 Agent，核心在于个性化数据，而不是底层大模型或者上层的框架和工具。

你喂给 AI 的数据越个性化，AI 就越懂你，产出就越精准，越符合你的预期。

你的知识库不再只是给你自己看的笔记本了，它同时也是 AI 的记忆系统和训练数据。

你积累的每一条笔记、每一个想法、每一次思考，都在让你的 AI 助手变得更聪明、更懂你。

举个例子，如果你问 AI "我应该怎么做投资"，它只能给你一套教科书模式的回答。

但如果你的知识库里沉淀了你过去三年的投资记录、买入逻辑、踩坑经验，AI 就能基于你自己的数据，给出真正有参考价值的个性化建议。

这就是知识库在 AI 时代的核心价值，它让通用 AI 变成了专属于你的 Agent 助手。

每个人的经历、思考、专业知识都是独一无二的。这些东西是通用 AI 永远给不了你的，只有你自己积累下来，才有价值。

还有一点，就是知识复利。

可能很多朋友之前并没有沉淀知识库的习惯，只是看了这篇文章，觉得新鲜好玩，才想要搭建一个知识库。

但如果你刚开始记录的话，可能会觉得没什么变化，记录下来的东西对知识库 Agent 没有任何帮助作用。

这是因为数据太少，记录的时间太短了。

打造知识库和长期投资，本质上都是复利的逻辑。

每天花 5 到 10 分钟，把你的思考、灵感、学到的东西记录下来，沉淀到知识库中。

短期来看，好像没什么变化。但长期来看，这些知识之间会产生连接和碰撞。你今天记录的一个灵感，可能三个月后和另一条笔记碰撞出一个全新的想法。

你半年前写下的一个投资逻辑，可能在市场大跌时帮你做出正确的决策。

这就是知识的复利。

长期主义不只适用于投资，也适用于知识积累。

从今天开始，每天花 5 到 10 分钟时间，记录一点想法，沉淀一点认知，然后让知识库 Agent 去不断地整理吸收迭代，逐渐将它打造为你的外置第二大脑。

---

以上就是本篇教程的全部内容，欢迎大家点赞、收藏、转发，感谢支持🙏

我的投资导航网站，收录过往的文字教程，提供好用的投资工具，供大家从 0 到 1 一站式学习和检索：https://invest-nav.com

⬇️ 如下平台，分享美股投资、加密投资、AI 体验、香港/境外银行、出入金、资金流转等经验心得、实操分享，欢迎关注：

X 账号：https://x.com/tychozzz

Youtube 频道：https://www.youtube.com/@NicoGrowthz

---

> 网页版阅读体验更好，配套工具和评论区都在网站上：[在投资导航阅读本文](https://invest-nav.com/tutorials/ai-tutorials/text/obsidian-claudian-knowledge-base/)
