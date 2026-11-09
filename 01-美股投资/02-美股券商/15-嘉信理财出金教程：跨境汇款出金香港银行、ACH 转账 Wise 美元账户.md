# 嘉信理财出金教程：跨境汇款出金香港银行、ACH 转账 Wise 美元账户

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/us-brokers/text/charles-schwab-withdrawal/) · [返回本分类](./README.md)

![嘉信理财出金教程封面](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/cover.webp)

嘉信理财美股券商如何出金？手续费磨损是多少？到账时间多久？整个过程中有哪些注意事项？还有就是，嘉信理财的借记卡，大陆用户到底能不能申请？这篇教程，我会从 0 到 1，把以上这些问题，一次性说清楚。

在最近几个月时间里，嘉信理财相关的系列教程，我们已经做了四篇，分别是嘉信理财的[开户](<./03-嘉信理财证券大陆用户从 0 到 1 线上开户攻略：无需海外地址｜免 CRS.md>)、[入金](<./07-嘉信理财入金从 0 到 1 教程：四大入金方案｜Wise 入金｜iFAST 入金｜汇丰香港入金｜Bitget 虚拟卡入金.md>)、[基础功能讲解](<./08-嘉信理财大陆用户从 0 到 1 入门攻略｜手续费率、thinkorswim 如何设置、美股如何下单.md>)、[美股期权讲解](<./14-嘉信理财美股期权从 0 到 1 教程：基础概念、开通权限与 thinkorswim 买卖实操.md>)。这篇应该就是这个系列的最后一篇教程，给大家详细讲讲嘉信理财的出金流程。

对于大陆用户来说，一般就是两种方式，一个是跨境汇款，出金到香港银行，另外一个就是美国本地 ACH 转账，直接转入到 Wise 的美元账户。

![嘉信理财通过国际电汇转入香港银行，或通过 ACH 转入 Wise 美元账户](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-01.webp)

## 结论速览（2026 年 10 月核对）

- **适合谁**：嘉信理财账户里有美元现金、想把钱转出来的大陆用户。有本人的香港银行账户，就用国际电汇（我实测的是香港汇丰），每笔手续费固定，单次金额越大，手续费比例越低，适合大额出金；有 Wise 美元账户，就用美国本地的 ACH 转账，不收手续费。
- **门槛**：电汇要准备好香港银行的 SWIFT 代码和账户号码，香港汇丰的 SWIFT 代码是 HSBCHKHHHKH；不能直接从嘉信理财出金到内地银行，大概率会被拒收。ACH 要先把 Wise 美元账户作为外部账户绑定到嘉信理财，绑定步骤在嘉信理财入金教程里；单笔 ACH 最低 1 美元，最高 10 万美元。
- **费用**：在嘉信官网线上提交电汇，每笔 15 美元；电话人工协助汇出，每笔 25 美元。手续费另外从账户里扣，汇 500 美元一共扣 515 美元。账户总资产超过 10 万美元，每个季度有 3 次免费的线上美国境内电汇。ACH 转到 Wise 没有扣任何手续费；之后在 Wise 换成港币或人民币，要付 Wise 的换汇手续费，换成人民币转回内地还有一笔汇款手续费。
- **要花多久**：电汇提交之后，大概一个工作日左右，香港汇丰就收到了；ACH 第二天就到了 Wise 美元账户。
- **借记卡**：目前不支持中国大陆地区的用户申请；账户资产达到 100 万美元以上，可以联系嘉信申请特批，但还得通过嘉信的审核，不一定能拿到。
- **最容易卡住的地方**：确认页上会多出一笔 34.41 美元的「其他费用」，显示到账只有 465.59 美元，我实测香港汇丰完整到账了 500 美元，没有中转行费用和入账费用；香港银行没有 IBAN，要勾选账户号码；名称填姓名的大写拼音，姓在前、名在后，城市和国家地区填 Hong Kong。Wise 这边，根据 Wise 官网的声明，注册地址在中国大陆的新用户已经拿不到美元本地收款账户，这个消息是 2026 年 9 月初传出来的，不过很多朋友实测新用户仍然可以开通。

## 1. 国际电汇出金到香港银行

首先我们先来看第一种方式，从嘉信理财发起国际电汇，将账户中的美元现金，转入到你自己的香港银行账户。这里大家需要注意一点，不能直接从嘉信理财出金到内地银行，大概率会被拒收。接下来，我就给大家演示一下具体的出金流程。

首先，在电脑上登录[嘉信理财的官网](https://www.schwab.com/)。点击上方的转账与支付，然后再点击下面的电汇转账。

![在转账与支付菜单中选择电汇转账](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-02.webp)

进入电汇转账页面，我们是要出金，所以说直接点击第一个选项，发送电汇。下面我们选中自己的嘉信理财账户。因为我们是第一次电汇，所以勾选新的收款人。点击继续。

![选择发送电汇](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-03.webp)

![选择嘉信理财账户与新的收款人](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-04.webp)

然后，它会问你，收款指示里面有几个银行账户。我们勾选只有一个银行账户，点击继续。

![收款指示只有一个银行账户](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-05.webp)

接下来，就是选择电汇类型，汇款美元，也就是 International USD。下面输入电汇金额，也就是你要出金汇款多少钱。大家可以看到，在电汇金额下面，嘉信理财会显示出一个电汇费用，这就是嘉信理财这边收取的汇出手续费，15 美元。

![选择 International USD，填写电汇金额并查看 15 美元费用](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-06.webp)

这里顺便给大家讲一下嘉信理财国际电汇的手续费收费标准。如果你是通过嘉信官网，线上提交汇款申请的话，每笔会收取 15 美元手续费。但如果你是通过电话人工协助的方式汇出，那么每笔会收取 25 美元手续费。

![嘉信理财国际电汇费用：线上每笔 15 美元，人工每笔 25 美元](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-07.webp)

而且这笔手续费，是直接从账户中扣除的。也就是说，假设你汇款 500 美元，账户里需要留够汇款的本金和这笔手续费用，最后扣款金额是 515 美元。此外，如果你的账户总资产超过 10 万美元，每个季度有 3 次免费线上美国境内电汇的次数。

搞清楚手续费的收费标准之后，我们继续刚才的出金流程，填完电汇金额之后，下面继续填写电汇的日期，一般默认就是当天汇出。

![选择电汇日期](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-08.webp)

接下来，我们就需要填写相关的收款信息了。我这里接收汇款的账户是香港汇丰，它的 SWIFT 代码是 HSBCHKHHHKH。如果你不知道自己银行的 SWIFT 代码，直接在 Google 上搜一下或者问问 ChatGPT 就好了。下面的香港银行代码不是必填项，我就直接跳过了。

![填写香港汇丰 SWIFT 代码 HSBCHKHHHKH](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-09.webp)

对于香港银行来说，没有 IBAN，勾选账户号码。然后把香港汇丰的账户号码填写进去。名称就填写你姓名的大写拼音，姓在前，名在后。下面的部门、街道号码、街道名称、公寓、楼栋这些信息都不需要填写。

![填写收款账户号码与账户姓名，隐私内容已遮挡](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-10.webp)

继续往下拉，下面的城市以及国家地区，就填写 Hong Kong。然后点击继续。

![本次汇款示例的城市及国家地区填写 Hong Kong](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-11.webp)

接下来，我们核对一下信息。大家可以看到，我这里汇款 500 美元，从账户扣除 515 美元，包含嘉信收取的每笔 15 美元手续费。但是这里还有一个其他费用，总共是 34.41 美元，显示最终到账的金额，只有 465.59 美元。

![核对 500 美元本金、515 美元扣款与页面显示的预计其他费用](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-12.webp)

乍一看这个磨损非常大，嘉信可能把电汇的中转行费用以及入账费用，也都计算进去了。不过大家不必担心，经过我的实测，最后香港汇丰到账了 500 美元，并没有收取任何中转行费用以及入账费用。稍后会给大家展示到账截图。

核心信息没有问题之后，我们拉到底部，勾选一下这两个条款，然后点击提交。这里嘉信会再次弹出确认提示，我们点击确认并提交。

![核对条款并提交电汇申请](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-13.webp)

![点击确认并提交](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-14.webp)

接下来，我们选择手机 App 验证。在嘉信理财的 App 上面再次确认一遍。手机上会弹出一个通知，打开之后确认一下就好了。

![选择手机 App 验证](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-15.webp)

![嘉信手机验证页面，确认是本人发起的电汇](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-16.webp)

完成之后，网页就会提示，已经成功提交汇款申请。

![网页提示电汇申请已提交](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-17.webp)

大概过了一个工作日左右的时间，我的汇丰香港账户就收到了这笔 500 美元的汇款，速度还是挺快的。而且大家可以看到，完整到账了 500 美元，没有任何中转行费用以及入账费用。整个过程中，只有一笔固定的 15 美元手续费。不过我目前只实测过香港汇丰银行，不太清楚其他银行会不会收取额外的费用。有经验的朋友可以在评论区分享交流一下。

![作者的香港汇丰到账短信，实际收到 500 美元](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-18.webp)

最后我们做个简单的总结，嘉信理财电汇出金的单笔手续费是固定的，也就是说，你单次出金的金额越大，算下来的手续费比例就越低。所以说，这套方案比较适合大额出金。

## 2. ACH 转账出金到 Wise

接下来，我们继续看第二种出金方案，通过美国本土的 ACH 转账，将嘉信理财账户中的美元，转入到 Wise 的美元账户。ACH 就是一种美国银行账户之间的本地电子转账方式，一般不收取手续费，到账速度也非常快。

![从嘉信理财通过 ACH 转账到 Wise](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-19.webp)

对于这套出金方案来说，有一点需要注意的是，根据 Wise 官网最新的声明，对于注册地址位于中国大陆的新用户来说，目前已经无法获取 Wise 提供的美元本地收款账户了。这个消息是在 2026 年 9 月初的时候流传出来的。

![Wise 官方地区限制页面截图，中国列在不支持获取美元账户资料的地区中](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-20.webp)

不过最近还是有很多朋友实测反馈下来，目前 Wise 新用户仍然可以开通美元账户，大家可以去试试。我认为 Wise 绝对是目前最好用的多币种钱包账户，在出入金以及全球资金流转的过程中，一定会用得到。如果你还没有开通 Wise 账户的话，可以跟着我之前的这篇[从 0 到 1 注册教程](<../../03-出入金与资金流转/01-出入金/14-Wise 多币种钱包从 0 到 1 开户-入金-出金教程：轻松玩转 Wise.md>)，一步步开通。

接下来，我就给大家演示一下 Wise 具体的出金流程。还是打开嘉信理财的官网，点击上面的转账与支付，然后点击转移资金。

![在转账与支付菜单中选择转移资金](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-21.webp)

转移的项目，勾选仅现金。上面第一个账户，就勾选你的嘉信理财账户。第二个账户，就勾选绑定好的 Wise 账户。意思就是从嘉信理财，转入到 Wise。

![选择现金转移，并指定嘉信理财为转出账户、Wise 为转入账户](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-22.webp)

如果你之前在嘉信理财中没有绑定过 Wise 账户的话，可以参考一下我之前的这篇[嘉信理财入金教程](<./07-嘉信理财入金从 0 到 1 教程：四大入金方案｜Wise 入金｜iFAST 入金｜汇丰香港入金｜Bitget 虚拟卡入金.md>)，里面有详细演示过具体的绑定流程，这里我就不再重复演示了。

然后输入转账金额，频率就选择一次性，转账日期保持默认，然后点击继续。

![填写金额，选择一次性转账与转账日期](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-23.webp)

接着核对一下转账的信息，点击提交。然后就可以看到这笔转账已经成功提交了。

![核对 ACH 转账信息并提交](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-24.webp)

![ACH 转账申请提交成功](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-25.webp)

第二天，我的 Wise 美元账户就收到了这笔转账，没有扣除任何手续费。收到这笔美元之后，一般来说，后续还有两个常见的资金流转方案。

![作者的 Wise 收款记录：100 美元到账、手续费为零；日期、参考与交易编号已遮挡](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-26.webp)

一个是将这笔美元，兑换为港币，然后通过香港本地的 FPS 转账，将这笔钱转入到香港银行，整个过程中只有 Wise 收取的换汇手续费。

![Wise 将美元兑换为港币，转往香港银行](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-27.webp)

另一个就是将这笔美元，兑换为人民币，然后直接转入到内地的支付宝、微信或者银行卡。除了换汇手续费之外，Wise 还会收取一笔汇款手续费。这两种方式，我在之前的 [Wise 开户以及出入金教程](<../../03-出入金与资金流转/01-出入金/14-Wise 多币种钱包从 0 到 1 开户-入金-出金教程：轻松玩转 Wise.md>)中，都有详细演示过，感兴趣的朋友可以去看看。

![Wise 将美元兑换为人民币，转往支持的收款渠道](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-28.webp)

除了这两种方案之外，我看到网上还有一些教程，提到了从嘉信理财，转入到美国本土的银行账户，比如说华美银行。只不过我自己目前还没有办过这张卡，听说它的办理流程非常麻烦，我还是优先推荐大家使用香港银行或者 Wise 来接收嘉信理财的汇款。

![嘉信理财转往美国本土银行的路线示意](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-29.webp)

## 3. 嘉信理财借记卡

在教程的最后，我再给大家简单说一下嘉信理财的借记卡。很多朋友对这张卡感兴趣，是因为它可以直接使用股票账户里面的现金消费，也能在全球各地的 ATM 上面取现。

![嘉信理财借记卡消费及 ATM 取现用途示意](https://pub-f5a7bf3ec58b4dbea87a9eb7feddfabe.r2.dev/tutorial-content/charles-schwab-withdrawal/2026-10-05-c012165d2d56/fig-30.webp)

只不过在我调研下来之后，发现它目前的申请门槛非常高。按理来说，现在这张卡不支持中国大陆地区的用户申请，但如果你账户中的资产达到 100 万美元以上，可以联系嘉信，申请借记卡的特批。

但是最后能不能申请下来，还是得通过嘉信理财的审核，并不是说达到 100 万美元的资金规模，就一定能够拿到这张卡。

所以说，大家还是不要对这张借记卡，抱有太大的希望了。

## 4. 常见问题

| 遇到的问题 | 常见原因 | 处理办法 |
| --- | --- | --- |
| 想直接出金到内地银行卡 | 从嘉信理财直接汇到内地银行，大概率会被拒收 | 先电汇到本人的香港银行账户，或者用 ACH 转到 Wise 美元账户，再在 Wise 换成人民币，转到支付宝、微信或者银行卡 |
| 不知道收款银行的 SWIFT 代码 | 每家银行的 SWIFT 代码不一样 | 香港汇丰是 HSBCHKHHHKH；其他银行直接在 Google 上搜一下，或者问问 ChatGPT |
| 收款信息里找不到 IBAN | 香港银行没有 IBAN | 勾选账户号码，填你的港卡账户号码；香港银行代码不是必填项，可以跳过 |
| 收款人名称和地址不知道怎么填 | 表单里的项目比较多 | 名称填姓名的大写拼音，姓在前，名在后；部门、街道号码、街道名称、公寓、楼栋都不用填；城市和国家地区填 Hong Kong |
| 汇 500 美元，账户却扣了 515 美元 | 电汇手续费是另外从账户里扣的：线上提交每笔 15 美元，电话人工协助每笔 25 美元 | 账户里留够汇款本金加手续费；在嘉信官网线上提交，比电话汇出少 10 美元 |
| 确认页显示还有 34.41 美元其他费用，到账只有 465.59 美元 | 嘉信可能把中转行费用和入账费用也算进去了 | 我实测香港汇丰完整到账了 500 美元；其他银行会不会收额外的费用，我还没有实测过 |
| 出金金额不大，电汇手续费显得很贵 | 电汇手续费每笔固定，金额越小，手续费比例越高 | 电汇尽量一次多汇一些；有 Wise 美元账户的话，用 ACH 转账，不收手续费 |
| 转移资金时选不到 Wise 账户 | 还没有把 Wise 绑定到嘉信理财 | 按[嘉信理财入金教程](<./07-嘉信理财入金从 0 到 1 教程：四大入金方案｜Wise 入金｜iFAST 入金｜汇丰香港入金｜Bitget 虚拟卡入金.md>)里的步骤，先把 Wise 美元账户绑定好 |
| 注册了 Wise，却拿不到美元账户 | 根据 Wise 官网的声明，注册地址在中国大陆的新用户无法获取美元本地收款账户 | 很多朋友实测新用户仍然可以开通，可以先去试试；拿不到的话，用第一种方式电汇到香港银行 |
| 想申请嘉信理财借记卡 | 目前这张卡不支持中国大陆地区的用户申请 | 账户资产达到 100 万美元以上，可以联系嘉信申请特批，但不一定能批下来 |

## 5. 延伸阅读

- 嘉信理财系列的其他几篇：[嘉信理财入金教程：四大入金方案](<./07-嘉信理财入金从 0 到 1 教程：四大入金方案｜Wise 入金｜iFAST 入金｜汇丰香港入金｜Bitget 虚拟卡入金.md>)、[嘉信理财入门攻略：手续费率、thinkorswim 设置与美股下单](<./08-嘉信理财大陆用户从 0 到 1 入门攻略｜手续费率、thinkorswim 如何设置、美股如何下单.md>)、[嘉信理财美股期权教程](<./14-嘉信理财美股期权从 0 到 1 教程：基础概念、开通权限与 thinkorswim 买卖实操.md>)
- 开美股券商：[嘉信理财开户教程](<./03-嘉信理财证券大陆用户从 0 到 1 线上开户攻略：无需海外地址｜免 CRS.md>)、[复星证券开户教程](./01-复星证券开户教程：大陆用户无门槛开户免佣.md)、[BIT 开户入金教程](<./02-BIT 合规美股券商 + USDT 直接入金：大陆用户无门槛从 0 到 1 开户入金教程.md>)
- 用 Wise 接收出金：[Wise 开户、入金、出金教程](<../../03-出入金与资金流转/01-出入金/14-Wise 多币种钱包从 0 到 1 开户-入金-出金教程：轻松玩转 Wise.md>)
- 还没有港卡：[大陆用户开通港卡必读指南](../01-香港境外银行/15-大陆用户开通港卡必读指南：翻越金融长城，为什么必须人手一个香港银行账户？.md)、[中银香港开户教程](<../01-香港境外银行/02-中银香港开户教程：大陆用户从 0 到 1 实操指南.md>)、[香港银行开户最常见的 20 个问题](<../01-香港境外银行/13-香港银行开户最常见的 20 个问题 Q&A 解答.md>)
- 钱到了港卡之后：[港卡的钱怎么在内地花？9 大港币消费方式](<../../03-出入金与资金流转/01-出入金/13-港卡的钱怎么在内地花？9 大港币消费方式全解析.md>)、[跨境出入金从 0 到 1](<../../03-出入金与资金流转/01-出入金/17-跨境出入金从 0 到 1：美股、加密货币的资金流转原理与常见路径.md>)

## 6. 参考资料（2026-10-18 核对）

- [嘉信个人投资者价目表（2026 年 4 月版）](https://www.schwab.com/legal/schwab-pricing-guide-for-individual-investors)：出金电汇每笔 25 美元，线上提交每笔 15 美元，汇入不收费；家庭总资产（Household Balances）达到 10 万美元，每个季度有 3 次免费的线上美国境内电汇；这份价目表也适用于住在美国以外的国际客户
- [嘉信 MoneyLink 条款（2026 年 10 月版）](https://www.schwab.com/legal/schwab-moneylink-terms-and-conditions)：单笔 ACH 最低 1 美元，最高是账户可用余额和 10 万美元两者中较低的那个；美东时间下午 5:30 前提交并被嘉信确认的转账，下一个工作日完成划转
- [汇丰香港常见问题](https://www.hsbc.com.hk/help/faq/)：从海外银行电汇到汇丰香港账户，SWIFT 代码是 HSBCHKHHHKH；每笔汇入电汇免收本地服务费，海外银行或其他银行可能另外收费
- [Wise 帮助中心：如何用美元账户信息收款](https://wise.com/help/articles/2827506/how-do-i-receive-money-with-my-usd-account-details)：通过 ACH 接收美元不收费

好了，以上就是本篇出金教程的全部内容了。

最后，如果你觉得嘉信理财出入金复杂或者功能比较难用的话，也可以考虑了解一下香港复星券商，出入金简单方便、UI 简洁友好。

目前复星的开户门槛也非常低，使用海外 IP + 身份证就可以成功开户，对于大陆用户来说很友好。注意在打开开户链接的时候，一定要切换到全局 IP 模式。

新用户入金之后，还可以享受终身免佣以及股票现金卡返现的福利，感兴趣的朋友可以通过如下链接注册，谢谢支持。

- 复星开户教程：https://invest-nav.com/tutorials/us-brokers/text/fosun-securities/

> **🎁 复星证券：注册复星证券，入金 1 万港币终身免佣港美股**
>
> **✅ 首次入金 1 万等值港币**
>
> - 港股、美股终身免佣
> - 送 **200 港币**股票现金卡
> - 0 手续费买美债
>
> [✨ 立即注册复星](https://h5.fotechwealth.com/pages/startAccount.html?channel=030003&aeCode=B2&invitationCode=PWZYR2&langType=zhCn)（邀请码：PWZYR2）

---

我的投资导航网站，收录过往的文字教程，提供好用的投资工具，供大家从 0 到 1 一站式学习和检索：https://invest-nav.com

⬇️ 如下平台，分享美股投资、加密投资、AI 体验、香港/境外银行、出入金、资金流转等经验心得、实操分享，欢迎关注：

X 账号：https://x.com/tychozzz

Youtube 频道：https://www.youtube.com/@NicoGrowthz

---

> 网页版阅读体验更好，配套工具和评论区都在网站上：[在投资导航阅读本文](https://invest-nav.com/tutorials/us-brokers/text/charles-schwab-withdrawal/)
