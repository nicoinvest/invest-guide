# 美股投研常用的 5 个工具：Seeking Alpha、Investing.com、华尔街见闻、ETFDB、Portfolio Visualizer 怎么用

作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](https://invest-nav.com/tutorials/stock-valuation-methods/text/us-stock-research-tools/) · [返回本分类](./README.md)

我发现很多新手刚开始入门美股投资的时候，总是依赖各种博主、热衷于加入各种付费群，希望在大神的带领下赚到第一桶金。但结局往往是还没真正进入市场，就先交了不少学费，被所谓的知识付费割了韭菜。

其实长期价值投资真的没有想象中那么难。很多人一开始没有头绪，一方面是因为没有系统学过投资、没有树立正确的投资观念；另一方面是缺少高效的投资工具，也不知道怎么用。

第一点，可以看我之前分享过的[投资体系：道、势、法、术四层框架](../../04-财富认知/01-投资心法/01-我的投资体系：用「道、势、法、术」四层框架，理清底层认知、时代趋势、投资纪律和具体操作.md)。这篇文章主要讲第二点：我最常用的投研工具有哪些，以及怎么用它们辅助投资决策。

## 结论速览（2026 年 10 月核对）

| 工具 | 主要用途 | 费用 | 中文 |
| --- | --- | --- | --- |
| [Seeking Alpha](https://seekingalpha.com/) | 财报数据、EPS 预期修正、财报会议文字稿、分析文章 | 免费功能有限，Premium 年费两三百美元 | 无 |
| [Investing.com](https://cn.investing.com/) | 中文看基本面、新闻、财报会议总结；InvestingPro 给合理估值和选股组合 | 基础免费，InvestingPro 付费（[专属折扣链接](https://www.investing-referral.com/nicoinv/)，优惠码 nicoinv） | 有 |
| [华尔街见闻](https://wallstreetcn.com/) | 全球快讯、市场文章、宏观日历（CPI、非农等） | 免费 | 有 |
| [ETFDB](https://etfdb.com/) | 查 ETF 发行商、费率、规模、持仓、收益 | 免费 | 无 |
| [Portfolio Visualizer](https://www.portfoliovisualizer.com/) | 回测投资组合，看收益、波动和回撤 | 免费版够用（最多 25 个资产，不能保存） | 无 |

![美股投研 5 个工具的分工：Seeking Alpha 看财报和预期，Investing.com 中文看基本面和估值，华尔街见闻看快讯和宏观日历，ETFDB 查 ETF，Portfolio Visualizer 回测组合](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/fig-01.webp)

## 一、Seeking Alpha：财报数据、预期修正和分析文章

Seeking Alpha 是我日常用得最多的美股投研工具。对我来说它有 3 个最实用的功能：基本面数据、财报会议文字稿和个股分析文章。下面用英伟达举例。

搜索股票代码 NVDA 进入个股页面，上面有很多标签：Summary、Ratings、Financials、Earnings、Dividends 等。很多标签平时用不到，我只讲自己最常用的几个。

### 1. Financials：历史财报数据

Financials 集中展示公司历史财报的基本面数据，里面有 Income Statement（利润表）、Balance Sheet（资产负债表）和 Cash Flow（现金流量表）。

- 可以在年度和季度财报之间切换；
- 数值可以显示绝对值，也可以切到 YoY Growth，也就是同比增长率；
- Order 和 Currency 保持默认就可以。

数据非常全，做基本面分析的时候经常会用到。

### 2. Earnings：看公司的利润和市场预期

美股投资里有一个常识：如果只能用一个数据判断一家公司的价值，那就是 EPS（Earnings Per Share，每股收益），它直接反映公司的赚钱能力。

当最新财报显示 EPS 开始收缩或者放缓，股价却因为市场情绪高涨或者宏观环境宽松而大涨的时候，投资者就要格外小心了，这时候的股价非常脆弱。市场短期可以忽略 EPS 的利空，但宏观利好一消失，市场一定会重新审视公司的业绩。

Earnings 标签里我常看这几项：

- **Earnings Summary**：我一般只看最上面。左边是最新一期财报的实际 EPS 和营收，后面标 Beat（超出市场预期）或 Miss（低于预期）；右边是即将公布的下一期财报的市场预期。
- **Earnings Estimates**：市场对公司未来几年 EPS 和营收的预期。
- **Earnings Revisions**：分析师上调或下调 EPS、营收预期的轨迹。连续上修说明公司预期增长强劲，连续下修说明增长动能转弱。2025 年 9 月我录视频的时候，英伟达的 EPS 预期被上修了 44 次，只被下修了 2 次，营收也是类似情况，说明市场一直在上调对英伟达的预期。
- **Earnings Surprise**：过去几年公司财报有多少次超出预期、多少次低于预期、差距有多大。如果大多数时候都能超出预期，一方面说明公司赚钱能力强，另一方面说明管理层在财报会议上给的指引靠谱，值得市场信任。

- **图 1**：Financials 标签里的 Income Statement（利润表），Period 选 Annual 看年度，View 选 Absolute 显示绝对值，旁边还有 Balance Sheet 和 Cash Flow。
- **图 2**：把 Period 切到 Quarterly 看季度数据；View 可以切到 YoY Growth 看同比增长，这张截图选的是 As a % of Revenue，看各项占营收的比例。
- **图 3**：Earnings Summary：左边是 2025 年 8 月 27 日公布的最新一期，EPS 1.05 美元，比预期高 0.04 美元（Beat），营收 467.4 亿美元；右边是 2025 年 11 月 19 日下一期的市场预期。
- **图 4**：Earnings Estimates：市场对英伟达未来几个财年 EPS 和营收的一致预期，下面的表格还有同比增速和前瞻市盈率。

![图 1 至图 4：Seeking Alpha 的 Financials 年度和季度财报、Earnings Summary 最新财报和下期预期、Earnings Estimates 未来几年预期](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-01.webp)

### 3. Transcripts：财报会议文字稿

- **Insights**：Seeking Alpha 对最新一次财报会议的总结。没耐心把财报会议完整听完的话，直接看这个总结就行。
- **Full Transcripts**：财报会议的完整文字稿。

我一般只看总结；如果这次会议细节比较多，或者公布了很重要的进展，才会把完整文字稿通读一遍。

### 4. Analysis：投资者和分析师的文章

Analysis 汇集了很多投资者和分析师的观点文章，这也是我用得最频繁的板块。当我对一家公司没有头绪的时候，就先看这里的文章，再根据文章里的观点去找对应的数据，结合自己的思考，大致就能判断这家公司值不值得投资。

- **图 5**：Earnings Revisions：截图时英伟达过去 3 个月 EPS 预期被上修 44 次、下修 2 次，下面的曲线是每个财年 EPS 预期的变化轨迹。
- **图 6**：Earnings Surprise：过去两年英伟达 8 次财报 EPS 全部超出预期，柱子是每次超出预期的幅度。
- **图 7**：Transcripts & Insights：上面的 Earnings Calls Insights 是财报会议总结，下面的 Full Transcripts 是完整文字稿。
- **图 8**：Analysis：投资者和分析师写的个股文章，每篇标了作者给的评级（Buy、Hold、Sell）。

![图 5 至图 8：Seeking Alpha 的 Earnings Revisions 预期修正、Earnings Surprise 超预期记录、财报会议文字稿和 Analysis 分析文章](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-02.webp)

Seeking Alpha 的问题是只有英文，而且免费能看的内容越来越少，很多文章和数据要订阅 Premium 才能看（2026 年 10 月官网年费两三百美元，有 7 天试用）。

## 二、Investing.com：中文看基本面，InvestingPro 看估值

Investing.com 的定位和 Seeking Alpha 很像，但它有中文版，非常适合华人投资者。

用法也类似：搜索股票代码进入个股页面，最常用的两个标签是「总况」和「财务状况」。

- **总况**：顶部是公司的评级表现，包括稳健程度、公允价值、技术分析和分析师观点；下面是最核心的关键数据，方便快速浏览；再往下是公司资讯和分析文章（类似 Seeking Alpha 的 Analysis）、最新财报会议的总结，以及和行业平均的比较、分析师评级、股息、财报表现、利润表等。日常需要的基本面数据和分析内容，总况页基本都能找到。
- **财务状况**：想看更细的财报数据就进这里，类似 Seeking Alpha 的 Financials，能看到过去多年的全部基本面数据。

- **图 9**：在 Investing.com 中文版搜索英伟达，进入个股的「总况」页，上面是股价走势，右边是评分、分析师观点等信息。
- **图 10**：总况页的「关键数据」：市值、市盈率、营收、净利润、毛利率、下一个财报日、公允价值等一屏看完。
- **图 11**：往下是「资讯和分析评论」，可以按最近报道、分析评论、财报、SEC 文件等筛选。
- **图 12**：「财报电话会议总结」：最新一季财报会议的中文要点。

![图 9 至图 12：Investing.com 中文版的个股总况页、关键数据、资讯和分析评论、财报电话会议总结](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-03.webp)

### InvestingPro：合理估值和选股组合

Investing.com 还有一个付费功能 InvestingPro。如果你对美股个股很迷茫，不知道怎么判断估值、不知道买哪家公司，可以试试它。

**合理估值（Fair Value）**：InvestingPro 的首页会给出分析师目标价和模型估值。我觉得模型估值最有用，它综合了多个估值模型（包括常用的市销率和 DCF 现金流折现等，英伟达这页用了 14 种），直接算出一个合理股价区间。

举个例子，2025 年 9 月我录视频的时候，InvestingPro 给英伟达的估值区间是 74 到 217 美元，合理股价 161.71 美元，而当时英伟达已经涨到 180 多美元，比合理价高一些。据此可以初步判断：这时候不适合大幅加仓，耐心持有就好，现金仓位不够的话也可以卖出一部分止盈。

**ProPicks 选股组合**：选股策略结合了 AI 模型和人工分析，有超越标普、称霸道指、科技巨头、最佳价值股等多个组合，每个组合的历史表现在页面上都能看到。偏保守的投资者可以看「最佳价值股」（主要选市盈率较低、被市场忽视的价值股），偏激进的可以看「科技巨头」。ProPicks 其实就是付费群里所谓的「跟单」，但它有历史表现做支撑，比那些美股带单博主专业得多。

- **图 13**：「与同业和行业的比较」：市盈率、市盈增长比率、市净率等指标和同业公司、板块平均对比。
- **图 14**：「财务状况」：可以切年度和季度，利润表、资产负债表、现金流量的主要数据都在这里。
- **图 15**：InvestingPro 的公允价值：截图时英伟达平均公允价值 161.71 美元，区间 73.80 到 216.65 美元；56 名分析师平均目标价 212.12 美元；14 种投资模型给出的区间是 74 到 217 美元。
- **图 16**：ProPicks AI 选股策略列表：超越标普、称霸道指、科技巨头、中盘股之星、最佳价值股、巴菲特精选等，每个组合都有历史表现。

![图 13 至图 16：Investing.com 的同业比较、财务状况，InvestingPro 公允价值和 ProPicks 选股策略列表](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-04.webp)

**专属折扣**：通过我的专属链接 [investing-referral.com/nicoinv](https://www.investing-referral.com/nicoinv/) 打开订阅页，优惠码 nicoinv 会在结算时自动带上；如果没带上，结算页手动填 nicoinv 就行。2025 年 9 月我截图时，专属页面写的是最高 45% 折扣（一年计划减 40%、两年计划减 45%）。付款支持中国内地的信用卡，也可以用 PayPal、Google Pay 或加密货币虚拟卡。

- **图 17**：「最佳价值股」组合：主要找市盈率低于 15 倍、被市场忽视的股票，适合偏保守的投资者。
- **图 18**：「科技巨头」组合：每月精选 15 只顶尖科技股，适合偏激进的投资者。
- **图 19**：专属折扣订阅页：2025 年 9 月截图时写着最高 45% 折扣，一年计划减 40%、两年计划减 45%。
- **图 20**：结算页：优惠码 nicoinv 已经填上，可以用信用卡、借记卡、PayPal 或 Google Pay 付款。

![图 17 至图 20：InvestingPro 的最佳价值股和科技巨头组合、专属折扣订阅页、填好优惠码 nicoinv 的结算页](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-05.webp)

想自己动手算估值的话，投资导航也有免费的[股票估值工具](https://invest-nav.com/tools/valuation/)，包含 DCF、DDM、市盈率三种方法和大盘、板块估值，方法讲解见 [DCF 现金流折现估值法从 0 到 1 教程](<./01-DCF 现金流折现估值法从 0 到 1 教程.md>)。

## 三、华尔街见闻：快讯和宏观日历

华尔街见闻上可以看到全球范围内最新的资讯和快讯：资讯主要是市场上的文章观点，快讯是当下刚刚发生的新闻。我每天空闲时会大概过一遍，快速了解最近美股市场发生了什么。

它还有一个很好用的功能：**宏观日历**。美国会定期发布 GDP、CPI、PCE、非农就业（大非农）、ADP 就业（小非农）这些宏观数据，公布的那一刻可能大幅影响短期走势。通过这些数据，也可以分析未来一段时间市场的整体情绪和可能走势。宏观日历会列出每项数据的公布时间、预期值和实际值。

- **图 21**：华尔街见闻首页的「资讯」：市场文章和观点，可以按股市、债市、商品、外汇、科技等栏目看。
- **图 22**：「快讯」：按时间排的 7×24 小时新闻，可以按 A 股、美股、港股等筛选，红色是重要快讯。
- **图 23**：「日历」：选日期，再选宏观、财报、新股、活动。
- **图 24**：宏观日历：每项数据的公布时间、重要性（星级）、今值、预期值和前值。

![图 21 至图 24：华尔街见闻的资讯、快讯、日历和宏观数据公布时间表](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-06.webp)

美股公司的财报日期可以看投资导航的[财经日历](https://invest-nav.com/tools/earnings-calendar/)，按周或按月显示盘前盘后发布的公司，点「我的持仓」还能只看自己持有的公司。

## 四、ETFDB：查 ETF 的发行商、费率、规模和持仓

如果你更喜欢投资 ETF 而不是个股，一定要学会用 ETFDB，它整合了市面上几乎所有美股 ETF 的关键数据。

我认为 ETF 有 5 个关键指标：持仓、年平均收益率、管理费率、资金管理规模、发行公司。很多朋友只知道最有名的 VOO 和 QQQ，但想投资其他 ETF 的话，一定要先搞清楚这 5 个指标。ETF 的基础知识可以看[美股 ETF 是什么](<../04-美股ETF/01-美股 ETF 是什么？为什么普通人更适合从 ETF 开始投资.md>)和[如何选择一只 ETF：10 大判断标准](<../04-美股ETF/03-如何选择一只 ETF？必须掌握的 10 大判断标准.md>)。

下面用芯片板块最有名的 SMH 举例，搜索代码进入详情页：

- **Issuer / Brand（发行公司）**：SMH 的发行公司是 VanEck。它没有贝莱德、先锋那么有名，但也是 1955 年成立的老牌资管公司。选 ETF 一定要选这种老牌靠谱的发行商。
- **Expense Ratio（管理费率）**：在发行公司下面。
- **AUM（资金管理规模）**：在 Trading Data 里。AUM 越大，说明这支 ETF 流动性越好、影响力越大。要注意，评估 ETF 数据时一定要和同类别的 ETF 比，比如 SMH 的收益和规模不能拿去和 VOO 比，两者不是一类。
- **Holdings（持仓）**：点左边的 Holdings 能看到全部持仓，看出这支 ETF 的行业偏好和投资风格。SMH 的主要持仓是英伟达、台积电、博通、AMD 这些半导体公司。Holdings Analysis 里还有地区、行业、市值分布。
- **Performance（收益表现）**：左侧点 Performance，可以看过去一段时间的平均表现。
- **Dividend（分红）**：如果投资的是股息类 ETF，可以在这里看分红率。

- **图 25**：在 ETFDB 搜索 SMH，详情页的 Vitals 里能看到发行商 VanEck、管理费率 0.35%、成立时间 2000 年 5 月 5 日。
- **图 26**：Trading Data 里的 AUM 就是资金管理规模，截图时 SMH 大约 300 亿美元。
- **图 27**：左边点 Holdings 看持仓：截图时第一大持仓是英伟达（20.36%），然后是台积电、博通、AMD。
- **图 28**：Performance：SMH 和同类 ETF 平均、细分板块平均的收益对比，1 年以上是年化收益率。

![图 25 至图 28：ETFDB 的 SMH 详情页：发行商和费率、AUM 资金规模、Holdings 持仓、Performance 收益对比](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-07.webp)

投资 ETF 用 ETFDB 基本就够了。担心数据更新不及时的话，直接在 Google 搜 ETF 代码，去发行商官网看最新数据。

## 五、Portfolio Visualizer：免费回测你的投资组合

Portfolio Visualizer 是一个投资组合回测工具，把你的组合输进去，就能看到它过去一段时间的收益和风险。

操作步骤：

1. 进入网站，点右上角 Tools 里的 **Backtest Portfolio**（回测投资组合）。
2. 点 **Edit Portfolio**，自定义组合。比如：VOO 35%、QQQ 25%、SMH 10%，特斯拉、英伟达、谷歌各 10%；Benchmark 选 VOO，也就是和标普 500 比。
3. 在设置里填起始金额 1 万美元，Cashflows 选 Contribute fixed amount，每次追加 1000 美元，追加频率我选的是每年一次（Annually，也可以改成 Monthly），再平衡选每年一次（Rebalance annually）。
4. 点 **Analyze Portfolio**。

- **图 29**：打开 Portfolio Visualizer，点右上角 Tools，选 Backtest Portfolio。
- **图 30**：页面会先展示一个示例组合，点下面的 Edit Portfolio 改成自己的。
- **图 31**：填资产和比例：VOO 35%、QQQ 25%、SMH 10%、特斯拉 10%、英伟达 10%、谷歌 10%，Benchmark Ticker 选 VOO。
- **图 32**：展开设置：起始金额 10000、Cashflows 选 Contribute fixed amount 每次追加 1000、追加频率 Annually、再平衡选 Rebalance annually。

![图 29 至图 32：Portfolio Visualizer 回测设置：Tools 里选 Backtest Portfolio、点 Edit Portfolio、填组合和比例、设置起始金额追加和再平衡](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-08.webp)

结果页能看到：

- **Portfolio Growth**：这段时间组合的回报和风险总结；
- **Performance Summary**：除了收益率，还有波动率、最大回撤等数据，帮你同时评估收益和风险；
- 组合的增长曲线、每年的收益率，以及国家、市值、行业分布。

- **图 33**：Highlights：组合年化收益、相对基准的表现、标准差和最大回撤，下面是一段文字总结。
- **图 34**：Performance Summary：起止金额、年化收益、标准差、最好和最差年份、最大回撤、夏普比率等，左边是组合，右边是基准 VOO。
- **图 35**：Portfolio Growth：组合和标普 500 的增长曲线对比。

![图 33 至图 35：Portfolio Visualizer 回测结果：Highlights 总结、Performance Summary 指标对比、组合增长曲线](https://invest-nav.com/tutorial-content/new-2026-10-25/us-stock-research-tools/steps-09.webp)

我录视频的时候用上面这个组合回测了 2016 年 1 月到 2025 年 8 月，结果大幅跑赢了标普 500，这主要是因为英伟达、特斯拉这几年涨得太多，回测结果不代表未来。

如果只是简单回测一下组合，不要求非常专业的建模分析，免费版就够用了（2026 年 10 月免费版最多 25 个资产，不能保存和导出），没必要付费。只想看定投标普、纳指的历史收益，也可以用投资导航的[定投计算器](https://invest-nav.com/tools/dca-calculator/)。

## 六、投资导航上的免费工具

除了上面 5 个外部工具，投资导航网站上也做了一些我自己常用的免费工具：

| 工具 | 能做什么 |
| --- | --- |
| [股票估值](https://invest-nav.com/tools/valuation/) | DCF、DDM、市盈率估值，以及大盘和板块估值 |
| [财经日历](https://invest-nav.com/tools/earnings-calendar/) | 美股公司财报日期和盘前盘后时段，可以只看自己持仓的公司 |
| [市场温度计](https://invest-nav.com/tools/market-signal/) | 估值、情绪、趋势、资金四组指标合成一个市场温度 |
| [投资组合追踪器](https://invest-nav.com/tools/portfolio-tracker/) | 记录持仓、看收益和占比 |
| [定投计算器](https://invest-nav.com/tools/dca-calculator/) | 算历史上定投标普、纳指、比特币的真实收益 |
| [投资宝典](https://invest-nav.com/tools/investment-handbook/) | AI 光学产业链等专题知识库 |

## 七、工具不在多

有一句话说得很好：差生文具多。话虽然不好听，意思是对的。对长期投资者来说，并不需要很多看起来很复杂的工具，更不需要花钱加什么跟单 VIP 付费群。

一方面，很多投资知识通过看书、看视频就能学会，只要肯花时间、愿意思考，学起来非常快；另一方面，市面上这些免费或便宜的工具，已经足够支撑日常的美股投研。

少即是多，掌握好最关键的几样东西，就可以轻松入门美股投资。

## 八、常见问题

| 问题 | 回答 |
| --- | --- |
| 只能选一个工具的话选哪个？ | 看得懂英文选 Seeking Alpha，想看中文选 Investing.com |
| 这些网站大陆能直接打开吗？ | Seeking Alpha、ETFDB、Portfolio Visualizer 需要能访问海外网站的网络环境；华尔街见闻和 Investing.com 中文版一般可以直接打开 |
| InvestingPro 和 Seeking Alpha Premium 值得买吗？ | 刚入门的话先用免费功能，真的每周都在研究个股再考虑付费 |
| EPS 预期修正怎么看？ | 连续上修代表市场越来越看好，连续下修代表增长在放缓，比单季 Beat 或 Miss 更能看出趋势 |
| 回测结果靠谱吗？ | 只能说明过去，尤其是含个股的组合，回测里涨得最多的股票未来不一定继续涨 |

## 九、接下来可以看

- 估值方法：[DCF 现金流折现估值法从 0 到 1 教程](<./01-DCF 现金流折现估值法从 0 到 1 教程.md>)
- 选 ETF：[如何选择一只 ETF：10 大判断标准](<../04-美股ETF/03-如何选择一只 ETF？必须掌握的 10 大判断标准.md>)、[5 支我会长期拿着不卖的美股 ETF](<../04-美股ETF/08-5 支我会长期拿着不卖的美股 ETF：VOO、QQQ、SMH、IBIT、SGOV 怎么选、怎么搭配.md>)
- 选个股：[美股七巨头入门](https://invest-nav.com/tutorials/us-stock-picks/text/magnificent-7-guide/)、[白毛股神 Serenity 的瓶颈投资法](<./03-白毛股神 Serenity 的瓶颈投资法：Chokepoint 理论 7 步拆解，从 AI 光通信产业链里找十倍股.md>)
- 怎么获取信息：[普通人怎么打破信息差：我常用的 5 个信息获取方式](<../../04-财富认知/04-财富人生/01-普通人怎么打破信息差、不被割韭菜：我常用的 5 个信息获取方式（AI 大模型、Google、YouTube、X、淘宝闲鱼）.md>)

## 十、参考资料（2026-10-25 核对）

- Seeking Alpha 订阅说明
- [InvestingPro 介绍和价格](https://investing.com/pro/pricing)：Fair Value 合理估值和 ProPicks 说明
- [ETFDB：SMH 详情页](https://etfdb.com/etf/SMH/)
- [Portfolio Visualizer：Backtest Portfolio](https://www.portfoliovisualizer.com/backtest-portfolio)

---

投资美股过程中遇到任何问题，可以加入电报群交流：https://t.me/nicoinvestmentfriends
