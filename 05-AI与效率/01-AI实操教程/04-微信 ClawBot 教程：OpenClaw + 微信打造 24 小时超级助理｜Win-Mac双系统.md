# 零、教程配置速读（看 Youtube 视频的朋友必读）

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/ai-tutorials/text/wechat-clawbot/) · [返回本分类](./README.md)

### 0.1 Mac 系统配置

#### 0.1.1 网站列表

| 用途                            | 地址                                                |
| ----------------------------- | ------------------------------------------------- |
| Node.js 官网（Mac/Windows 下载安装包） | https://nodejs.org/en                             |
| 小米大模型官网（获取 API Key）           | https://platform.xiaomimimo.com/#/console/balance |

#### 0.1.2 命令列表

| 命令说明                   | 具体命令                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| 安装 Homebrew（不翻墙）       | `/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"` |
| 通过 Homebrew 安装 Git     | `brew install git`                                                                       |
| 修改 Node.js 镜像源         | `npm config set registry https://registry.npmmirror.com`                                 |
| 修改 Git 远程仓库拉取方式        | `git config --global url."https://github.com/".insteadOf ssh://git@github.com/`          |
| 用 npm 安装 OpenClaw 最新版本 | `sudo npm install -g openclaw@latest`                                                    |
| 启动 OpenClaw 配置流程       | `openclaw onboard --install-daemon`                                                      |
| 更改 OpenClaw 文件夹权限      | `sudo chown -R $(whoami) ~/.openclaw`                                                    |
| 安装 gateway 网关          | `openclaw gateway install`                                                               |
| 安装微信 OpenClaw 插件       | `npx -y @tencent-weixin/openclaw-weixin-cli@latest install`                                |

### 0.2 Windows 系统配置

#### 0.2.1 网站列表

| 用途                    | 地址                                                |
| --------------------- | ------------------------------------------------- |
| Node.js 官网            | https://nodejs.org/en                             |
| Git 下载页面（Windows x64） | https://git-scm.com/install/windows               |
| 小米大模型官网（获取 API Key）   | https://platform.xiaomimimo.com/#/console/balance |

#### 0.2.2 命令列表

| 命令说明               | 具体命令                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| PowerShell 权限变更    | `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| 安装 OpenClaw        | iwr -useb https://openclaw.ai/install.ps1 \| iex                       |
| 确认 OpenClaw 配置文件位置 | `echo "$env:USERPROFILE\.openclaw"`                                    |
| 进入 OpenClaw 配置目录   | `cd [openclaw路径]`（上面这行命令得到的路径）                                         |
| 创建 extensions 文件夹   | `mkdir extensions`                                                     |
| 进入 extensions 文件夹   | `cd extensions`                                                         |
| 初始化 npm 项目         | `npm init -y`                                                          |
| 手动安装微信官方插件         | `npm install @tencent-weixin/openclaw-weixin-cli`                      |
| 让 OpenClaw 接入插件    | `openclaw plugins install "@tencent-weixin/openclaw-weixin"`          |
| 进入微信官方插件目录         | `cd .\openclaw-weixin\`                                                |
| 再次安装依赖             | `npm install`                                                          |
| 重启 OpenClaw        | `openclaw gateway restart`                                             |
| 启动微信插件             | `openclaw channels login --channel openclaw-weixin`                    |
| 安装微信 OpenClaw 插件       | `npx -y @tencent-weixin/openclaw-weixin-cli@latest install`                               |

---
> 💡 正文教程开始

微信正式上线了 ClawBot 插件，帮助所有微信用户以几乎零门槛的方式接入 OpenClaw，直接在微信 App 中与你的 AI Agent 对话。

这篇文章教程将从 0 到 1，分别在 Mac 和 Windows 双系统上，完成 OpenClaw 的安装部署，并将 Agent 接入微信，打造一个 24 小时在线的超级 AI 助理。

## 一、为什么需要 ClawBot？

前段时间 OpenClaw 爆火出圈，很多人都在研究如何搭建自己的 AI Agent。

但 OpenClaw 有一个比较大的痛点：搭好 Agent 之后，想要与它交互，要么在电脑上对话，要么连接 Telegram、Discord，虽然也提供了飞书的接入选项，但对于大多数国内用户来说并不方便。

毕竟国内用户每天打开次数最多的社交 App 是微信。

腾讯这次上线的 ClawBot 恰好解决了这个问题。它是一个官方微信插件，能够让用户直接在微信里与自己的 OpenClaw Agent 对话，不需要翻墙，不需要切换 App，在最熟悉的聊天界面里完成所有交互。

## 二、开始前准备

只需要准备一台电脑，Windows 或 Mac 都会演示到。

如果你对于教程中提到的概念和工具有不理解的地方，可以直接询问你手头 AI 大模型，比如 Claude 或 ChatGPT。

## 三、Mac 系统安装 OpenClaw + 接入微信 ClawBot

### 3.1 基础环境配置

#### 3.1.1 安装 Homebrew

在 Mac 电脑屏幕右上角，找到搜索按钮，点击打开。

![微信 ClawBot 教程：安装 Homebrew（配图 1）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272205291_idyqvp.png)

在搜索框中输入"终端"，点击第一个选项

![微信 ClawBot 教程：安装 Homebrew（配图 2）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272217044_ybmbjn.png)

将 Homebrew 安装命令复制粘贴到终端中，按下回车。

这一步是在不翻墙的情况下安装 Homebrew。Homebrew 是 Mac 系统的包管理器，后续需要用它来安装必要的软件和配置环境。

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

![微信 ClawBot 教程：安装 Homebrew（配图 3）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272229455_6qot1n.png)

提示输入序号时，输入 1，按下回车。

![微信 ClawBot 教程：安装 Homebrew（配图 4）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272286270_8k1uxe.png)

输入 Mac 电脑的开机密码，按下回车。

![微信 ClawBot 教程：安装 Homebrew（配图 5）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272302640_ymxf6o.png)

终端提示是否删除之前安装过的 brew，输入 n，防止误删除已有的 brew。

![微信 ClawBot 教程：安装 Homebrew（配图 6）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272313217_dodwuj.png)

终端开始拉取下载文件。

![微信 ClawBot 教程：安装 Homebrew（配图 7）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272332400_mq5yj1.png)

几十秒后弹出提示，按下回车继续。

![微信 ClawBot 教程：安装 Homebrew（配图 8）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272344261_raf28u.png)

配置国内镜像源：输入 5，选择阿里巴巴镜像源，按下回车。

![微信 ClawBot 教程：安装 Homebrew（配图 9）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272359276_tzsbwx.png)

终端显示安装成功。

![微信 ClawBot 教程：安装 Homebrew（配图 10）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272404173_p4camw.png)

#### 3.1.2 安装 Git

Git 是版本控制工具，后续需要用它从 GitHub 仓库中拉取文件。

将 Git 安装命令复制粘贴到终端，按下回车。

```bash
brew install git
```

![微信 ClawBot 教程：安装 Git（配图 11）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272416603_1pck40.png)

大约一分钟后显示安装成功。

![微信 ClawBot 教程：安装 Git（配图 12）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272732796_y6j4de.png)

#### 3.1.3 安装 Node.js

Node.js 也是一个包管理工具，用于安装 OpenClaw。

打开 Node.js 官网：https://nodejs.org/en 点击左边的 Get Node.js

![微信 ClawBot 教程：安装 Node.js（配图 13）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272741217_muyxb5.png)

点击下方的 macOS Installer，下载 pkg 文件。

![微信 ClawBot 教程：安装 Node.js（配图 14）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272787605_auzqz9.png)

打开安装包，点击继续，一直重复点击继续完成安装。

![微信 ClawBot 教程：安装 Node.js（配图 15）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272802508_43z557.png)

提示安装成功后，点击关闭

![微信 ClawBot 教程：安装 Node.js（配图 16）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272818492_bgwn08.png)

#### 3.1.4 最后的基础配置

打开终端，将修改 Node.js 镜像源的命令复制粘贴进来，按下回车。这一步方便快速拉取国外资源。

```bash
npm config set registry https://registry.npmmirror.com
```

输入修改 Git 远程仓库拉取方式的命令，按下回车，避免后续出现问题。

```bash
git config --global url."https://github.com/".insteadOf ssh://git@github.com/
```

### 3.2 安装配置 OpenClaw

输入 npm 安装 OpenClaw 最新版本的命令，按下回车。

```bash
sudo npm install -g openclaw@latest
```

![微信 ClawBot 教程：安装配置 OpenClaw（配图 17）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272968477_u67va8.png)

终端提示 "added 541 packages in 9s"，表示安装成功。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 18）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774272988864_xtllwp.png)

将配置命令复制粘贴到终端，按下回车。

```bash
openclaw onboard --install-daemon
```

![微信 ClawBot 教程：安装配置 OpenClaw（配图 19）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273006155_5yyfro.png)

弹出选项，选择 Yes，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 20）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273049393_594xsd.png)

选择 QuickStart。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 21）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273068326_hydyro.png)

Config handling 选择第一个。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 22）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273088666_mtzxqr.png)

可以看到 OpenClaw 提供了多种大模型选项。从实际效果角度出发，Anthropic Claude 大模型应该是最优选择，各种场景都适用，但 Token 价格较贵，通过 API 接入对话几轮可能就要消耗几美元。

如果只是简单体验，可以先用国内的大模型。本文选择的是小米大模型，Token 价格相对便宜。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 23）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273101560_2wxacp.png)

获取小米大模型 API Key 的步骤：

1. 打开小米大模型官网
2. 通过手机号登录
3. 点击左侧 API Keys 菜单，点击右侧"新建 API Key"按钮
4. 输入一个 API Key 名称，点击确认
5. 创建成功后，复制 API Key 并保存到临时备忘录
6. 点击账户余额，充值 10 元（需先完成实名认证）
7. 实名认证流程：点击去认证 → 选择个人认证 → 输入姓名、身份证号、行业 → 微信/支付宝扫码认证
8. 认证成功后，账户会多出 5 元免费额度

继续回到教程，按下回车，这里提示需要输入 API Key，把刚才复制的 API Key 粘贴进来，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 24）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273163282_6eqta2.png)

保持默认模型，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 25）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273232850_7akmrs.png)

配置 channel：选择最底部的 skip for now（后续直接用微信）。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 26）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273240348_ckltgm.png)

provider：选择跳过。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 27）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273254558_cqbch2.png)

配置 skills：选择 No（后续可根据需要自行添加）。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 28）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273273599_y7cbg0.png)

hooks：选择第一个，按下空格，再按回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 29）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273283191_5wlttd.png)

选择 restart，OpenClaw 应用成功启动。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 30）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273298125_n2bweo.png)

交互方式选择第二个，通过网页打开 OpenClaw。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 31）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273321537_pekref.png)

在网页界面中可以直接和 OpenClaw 对话，安装配置流程到此就成功结束了。

后续想要了解 OpenClaw 相关的运维命令（如启动、重启等），可以直接询问已安装好的 OpenClaw，让它指导操作。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 32）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273369212_7r26sw.png)

### 3.3 微信接入 OpenClaw

前提条件：微信版本必须大于等于 8.0.70，如果版本较旧，先更新微信。

打开终端，输入权限更改命令，按下回车。

```bash
sudo chown -R $(whoami) ~/.openclaw
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 33）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273506643_tksger.png)

输入 gateway 网关安装命令，按下回车。

```bash
openclaw gateway install
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 34）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273537025_vp52ai.png)

输入微信 OpenClaw 插件的安装命令，耐心等待几十秒。

```bash
npx -y @tencent-weixin/openclaw-weixin-cli@latest install
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 35）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273582937_8pzy9h.png)

终端中出现微信二维码，拿出手机扫描二维码，点击连接按钮。

![微信 ClawBot 教程：微信接入 OpenClaw（配图 36）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273613640_3hvwgg.png)

进入微信 ClawBot 聊天界面，随便输入一句话，即可看到 OpenClaw 的回复

![微信 ClawBot 教程：微信接入 OpenClaw（配图 37）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273646560_rrh74e.png)

## 四、Windows 系统安装 OpenClaw + 接入微信 ClawBot

### 4.1 基础环境配置

#### 4.1.1 安装 Node.js

Node.js 也是一个包管理工具，用于安装 OpenClaw。

打开 Node.js 官网：https://nodejs.org/en 点击左边的 Get Node.js。

![微信 ClawBot 教程：安装 Node.js（配图 38）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273811118_revx70.png)

拉到下方，点击 Windows Installer 下载。

![微信 ClawBot 教程：安装 Node.js（配图 39）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273818363_gnmmcx.png)

打开安装包，点击 Next，一直重复点击 Next 完成安装。

![微信 ClawBot 教程：安装 Node.js（配图 40）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273828499_st5ku4.png)

提示安装成功后，点击 Finish。

![微信 ClawBot 教程：安装 Node.js（配图 41）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273837843_jdjbr9.png)

#### 4.1.2 安装 Git

打开 Git 下载页面：https://git-scm.com/install/windows 点击 Windows x64 下载按钮

![微信 ClawBot 教程：安装 Git（配图 42）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273870334_cwgdzi.png)

打开安装包，一直点击 Next 完成安装。

![微信 ClawBot 教程：安装 Git（配图 43）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273890348_trathu.png)

点击 Finish，完成安装。

![微信 ClawBot 教程：安装 Git（配图 44）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273902492_y2i9l6.png)

### 4.2 安装配置 OpenClaw

点击电脑左下角 Windows 图标，或按下 Windows + S 打开搜索框，搜索 PowerShell，点击"以管理员身份运行"。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 45）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273947488_u7yhi2.png)

输入权限变更命令，按下回车。

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

![微信 ClawBot 教程：安装配置 OpenClaw（配图 46）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273960746_4s19px.png)

出现选项时，输入 Y，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 47）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774273990551_87pcp3.png)

将 OpenClaw 安装命令粘贴进来，按下回车。

```bash
iwr -useb https://openclaw.ai/install.ps1 \| iex
```

![微信 ClawBot 教程：安装配置 OpenClaw（配图 48）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274032085_k2wpvk.png)

耐心等待约 5 分钟，终端提示安装成功，进入配置流程。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 49）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274066233_20gt1r.png)

选择 Yes，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 50）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274086117_ut8pee.png)

选择 Quick Start，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 51）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274102846_7ojz38.png)

选择大模型。

本文选择小米，Token 价格较便宜；如追求效果，推荐 Anthropic Claude。

API Key 获取方式与 Mac 部分相同，参考 3.2 章节。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 52）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274113330_wh604w.png)

终端提示是否提供 API Key，保持默认，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 53）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274157801_mv2cg4.png)

粘贴 API Key，按下回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 54）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274174614_110u2i.png)

Default Model 选择 Keep Current。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 55）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274192988_zv1ghb.png)

channel 选择最后一个跳过（后续接入微信）

![微信 ClawBot 教程：安装配置 OpenClaw（配图 56）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274207133_568kb2.png)

search provider 选择跳过。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 57）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274215946_88xcde.png)

skills 选择 No。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 58）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274222750_ymve43.png)

hooks 选择第一个 skip，按下空格，再按回车。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 59）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274233518_mm27v6.png)

选择第二个，通过网页打开 OpenClaw。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 60）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274240575_7lt797.png)

弹出对话界面后，可以和 OpenClaw 对话，Windows 系统的 OpenClaw 安装配置就成功完成啦。

![微信 ClawBot 教程：安装配置 OpenClaw（配图 61）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274272836_poh5zn.png)

### 4.3 微信接入 OpenClaw

根据我最新的实测，如果直接使用微信官方提供的接入命令，大概率会碰到报错：提示未找到 OpenClaw，要求先安装，但实际上我们已经安装过了。

经过我的调研发现，这是官方脚本的 bug，没有针对 Windows PowerShell 终端做适配，脚本没办法顺利执行。这个 bug 大概率很快会被修复，可能你看到这篇教程的时候，Bug 已经解决了。

建议你可以先尝试官方命令，报错的话再跟着我操作。

```bash
npx -y @tencent-weixin/openclaw-weixin-cli@latest install
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 62）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274322974_htg91e.png)

打开 PowerShell 终端，输入命令确认 OpenClaw 的安装位置，复制该路径。

输入 cd + 路径，按下回车，进入 OpenClaw 配置文件目录。

```bash
echo "$env:USERPROFILE\.openclaw"
cd [openclaw路径]`（上面这行命令得到的路径）
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 63）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274480478_j0pns3.png)

输入创建 extension 文件夹的命令（如果已有该文件夹则跳过）

```bash
mkdir extensions
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 64）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274514639_8b530x.png)

通过 cd 命令进入 extension 文件夹。

输入 `npm init -y`

```bash
cd extensions
npm init -y
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 65）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274557756_ob877l.png)

输入命令，手动安装微信官方插件。

```bash
npm install @tencent-weixin/openclaw-weixin-cli
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 66）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274634381_w3x1sk.png)

输入命令，让 OpenClaw 接入插件。

```bash
openclaw plugins install "@tencent-weixin/openclaw-weixin"
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 67）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274687612_fno398.png)

通过 cd 命令进入微信官方插件目录。

输入 `npm install`，再次安装。

```bash
cd .\openclaw-weixin\
npm install
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 68）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274759298_75wiqi.png)

输入 `openclaw gateway restart`，重启 OpenClaw 应用使配置生效

```bash
openclaw gateway restart
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 69）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274782243_pcvguv.png)

输入启动微信插件的命令。

```bash
openclaw channels login --channel openclaw-weixin
```

![微信 ClawBot 教程：微信接入 OpenClaw（配图 70）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274805511_1gkl24.png)

注意：PowerShell 显示的二维码可能无效，无法扫描。解决办法是换用 cmd 终端，输入上面的命令：

![微信 ClawBot 教程：微信接入 OpenClaw（配图 71）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274852310_y2s34a.png)

此时出现的二维码正常可用，扫描二维码，点击连接按钮。（前提条件：微信版本必须大于等于 8.0.70）

进入微信 ClawBot 聊天界面，输入一句话即可看到 OpenClaw 回复。

![微信 ClawBot 教程：微信接入 OpenClaw（配图 72）](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/1774274889384_j57cn3.png)

Windows 的配置接入过程确实比 Mac 麻烦不少，我自己操作的时候也踩了很多坑，用了大约一个小时才配置好。大家在实际操作的时候，尤其是新手小白，最好耐心一些。遇到问题的话，优先去问 AI 大模型，让它帮你一步步解决。

## 五、ClawBot 背后的意义

之前人们总说腾讯错过了这波 Agent 浪潮，结果这次微信的跟进速度比大多数人想象中快得多。

这次腾讯上线 ClawBot，表面上看只是一个微信插件，但往深了想，它背后的意义不小。

过去这段时间，AI Agent 一直是技术圈的热门话题。但大部分 Agent 工具，说白了还是极客和技术人的玩具——你得会写 Prompt，得会用命令行，得会配置各种 API。要想让年纪大一些的人上手使用，难度还是挺大的。

而微信 ClawBot 做到了一件事：把普通人接入 Agent 的门槛降到了最低。

Agent 的竞争到了最后，一定会回到渠道和入口的竞争。谁能让用户在最熟悉的场景下，以最低的门槛使用到 Agent，谁就赢了。

再牛的技术，如果始终停留在极客圈子里自嗨，那它永远不可能产生真正的社会价值。技术的最终目的是普惠，是真正融入到普通人的日常生活中去。

14 亿人每天都在用的微信，天然就是最大的 AI Agent 分发渠道，没有之一。

不过我也想提醒大家一点，工具和渠道确实很重要，但 Agent 最终好不好用，最关键的还是你喂给它的数据。框架人人都能搭，Prompt 人人都会写，但脑子里的做事逻辑、判断标准、行业经验，这些东西是独一无二的，也是 Agent 真正需要的燃料。

所以搭完 OpenClaw 之后，不要只是把它当成一个聊天玩具。花点时间把你的工作流程、思考习惯、领域知识整理出来，喂给你的 Agent，让它真正理解你，成为你的数字分身。

想要完全自定义的 Agent，可以看[Claude Agent 搭建教程](<./02-Claude Agent 搭建教程：20 分钟零基础打造专属 AI Agent 助手.md>)；另一个开源 Agent 的配置见[Hermes Agent 安装配置实操指南](<./07-Hermes Agent 从 0 到 1 安装配置实操指南：继 OpenClaw 龙虾的后起之秀.md>)。

---

如果你在实操过程中遇到任何问题，可以加入电报群，在 AI 实操群组中交流讨论：https://t.me/nicoinvestmentfriends

我的 X 账号：https://x.com/tychozzz

我的 Youtube 频道：https://www.youtube.com/@NicoGrowthz
