#!/usr/bin/env node
/**
 * 从投资导航网站（invest-nav.com）同步文字教程到本仓库。
 *
 * - 已收录的教程按 assets/tutorial-index.json 里的路径原地更新（网站正文没变就不动）。
 * - 新教程按分类放进对应目录，编号接在已有文章后面。
 * - 自动更新二级分类 README 的「教程目录」表、首页的「最近更新」和 tutorial-index.json。
 *
 * 用法：SUPABASE_URL=... SUPABASE_ANON_KEY=... node scripts/sync-from-site.mjs [仓库根目录]
 * 只读公开数据（anon key 与网站前端相同），不写网站数据库。
 */
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, posix } from 'node:path'

const ROOT = process.argv[2] || process.cwd()
const SITE = 'https://invest-nav.com'
const SUPABASE_URL = (process.env.SUPABASE_URL || 'https://fslrimneaklqmaiyxvoo.supabase.co').replace(/\/$/, '')
const KEY = process.env.SUPABASE_ANON_KEY
if (!KEY) { console.error('缺少 SUPABASE_ANON_KEY'); process.exit(1) }

// 网站二级分类 → 仓库目录。不在表里的分类（如个股投研）不同步。
const FOLDERS = {
  'hk-banks': ['01-美股投资', '01-香港境外银行'],
  'us-brokers': ['01-美股投资', '02-美股券商'],
  'qdii-funds': ['01-美股投资', '03-美股QDII基金'],
  'us-etf': ['01-美股投资', '04-美股ETF'],
  'us-basics': ['01-美股投资', '05-美股基础'],
  'stock-valuation-methods': ['01-美股投资', '06-选股与估值方法'],
  'us-options': ['01-美股投资', '08-美股期权'],
  'us-bonds': ['01-美股投资', '07-美债'],
  'exchanges': ['02-加密货币', '01-交易所'],
  'crypto-basics': ['02-加密货币', '02-加密货币基础'],
  'crypto-cards': ['02-加密货币', '03-加密货币虚拟卡'],
  'web3-wallets': ['02-加密货币', '04-Web3钱包'],
  'crypto-trading': ['02-加密货币', '05-交易与理财'],
  'airdrops': ['02-加密货币', '06-币圈空投'],
  'fund-transfer': ['03-出入金与资金流转', '01-出入金'],
  'overseas-sim': ['03-出入金与资金流转', '02-海外电话卡'],
  'overseas-accounts': ['03-出入金与资金流转', '03-海外账号'],
  'investing-mindset': ['04-财富认知', '01-投资心法'],
  'asset-allocation': ['04-财富认知', '02-资产配置与养老'],
  'book-reviews': ['04-财富认知', '03-书单分享'],
  'experience-sharing': ['04-财富认知', '04-财富人生'],
  'macro-trends': ['04-财富认知', '05-时代趋势'],
  'ai-tutorials': ['05-AI与效率', '01-AI实操教程'],
  'ai-insights': ['05-AI与效率', '02-AI观点'],
}

async function rest(path) {
  const out = []
  for (let from = 0; ; from += 1000) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, Range: `${from}-${from + 999}` },
    })
    if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`)
    const rows = await res.json()
    out.push(...rows)
    if (rows.length < 1000) return out
  }
}

const sha256 = (s) => createHash('sha256').update(s, 'utf8').digest('hex')
const sanitize = (s) => s.replace(/[\/\\:*?"<>|]/g, '-').replace(/\s+/g, ' ').trim()
const pad = (n) => String(n).padStart(2, '0')
const mdHref = (p) => (/[\s()<>]/.test(p) ? `<${p}>` : p)
const siteUrl = (cat, slug) => `${SITE}/tutorials/${cat}/text/${slug}/`

function relLink(fromFile, toFile) {
  let r = posix.relative(posix.dirname(fromFile), toFile)
  if (!r.startsWith('.')) r = `./${r}`
  return r
}

function renderReferral(offer, compact) {
  if (!offer) return null
  const code = offer.code ? `（邀请码：${offer.code}）` : ''
  if (compact) return `> 🎁 [${offer.appName}：${offer.headline}](${offer.url})${code}`
  const benefit = offer.benefit.trim().split('\n').map((l) => (l.trim() ? `> ${l}` : '>'))
  return [`> **🎁 ${offer.appName}：${offer.headline}**`, '>', ...benefit, '>', `> [✨ ${offer.button}](${offer.url})${code}`].join('\n')
}

const FIG_NUMS = /如图\s*((?:\d+\s*(?:[\/、,，和及至到~\-–—]|\s)*)+)/g

function figureLabel(nums) {
  const list = [...new Set(nums)].sort((a, b) => a - b)
  if (list.length === 1) return `图 ${list[0]}`
  // 段落里提到的图号常有跳号，和原仓库一致，统一写成首尾范围。
  return `图 ${list[0]}–${list[list.length - 1]}`
}

/** 把网站正文转成仓库 Markdown：标题降级、去掉网站专用指令、站内链接改成仓库相对路径、空 alt 的配图补说明。 */
function convertBody(content, file, ctx) {
  let lines = content.replace(/\r\n/g, '\n').split('\n')
  let title = ctx.title
  const first = lines.findIndex((l) => l.trim())
  if (first >= 0 && /^# \S/.test(lines[first])) {
    title = lines[first].slice(2).trim()
    lines = lines.slice(first + 1)
  }
  let fence = false
  let minLevel = 6
  for (const l of lines) {
    if (/^\s*(```|~~~)/.test(l)) fence = !fence
    else if (!fence) { const h = l.match(/^(#{1,6}) /); if (h) minLevel = Math.min(minLevel, h[1].length) }
  }
  const shift = minLevel < 2 ? 2 - minLevel : 0
  const shortTitle = ctx.title.split(/[：｜|]/)[0].trim() || ctx.title
  const out = []
  let section = ''
  let figs = []
  let plain = 0
  fence = false
  for (const raw of lines) {
    let line = raw
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; out.push(line); continue }
    if (fence) { out.push(line); continue }
    if (/^\s*::after-hook\s*$/.test(line)) continue
    const ref = line.match(/^\s*::referral\{\s*offer=["']?([0-9a-f-]{36})["']?(\s+variant=["']?compact["']?)?\s*\}\s*$/i)
    if (ref) {
      const block = renderReferral(ctx.offers.get(ref[1]), Boolean(ref[2]))
      if (block) out.push(block)
      continue
    }
    const h = line.match(/^(#{1,6}) (.*)$/)
    if (h) {
      section = h[2].replace(/^(?:\d+(?:\.\d+)*[.、]?|[一二三四五六七八九十]+、|第[一二三四五六七八九十\d]+[步章节部分篇]、?)\s*/, '').trim()
      figs = []
      line = `${'#'.repeat(Math.min(6, h[1].length + shift))} ${h[2]}`
    } else {
      for (const m of line.matchAll(FIG_NUMS)) figs.push(...(m[1].match(/\d+/g) || []).map(Number))
    }
    line = line.replace(/(!?)\[([^\]]*)\]\(\s*<?([^)\s>]+)>?((?:\s+"[^"]*")?)\s*\)/g, (m, bang, text, href, ttl) => {
      if (bang) {
        let alt = text
        if (!alt.trim()) {
          const label = figs.length ? figureLabel(figs) : `配图 ${++plain}`
          alt = section ? `${shortTitle}：${section}（${label}）` : `${shortTitle}（${label}）`
        }
        figs = []
        const src = href.startsWith('/') && !href.startsWith('//') ? `${SITE}${href}` : href
        return `![${alt}](${src}${ttl})`
      }
      return `[${text}](${ctx.resolveHref(href, file)}${ttl})`
    })
    out.push(line)
  }
  return { title, body: out.join('\n').replace(/\n{3,}/g, '\n\n').trim() }
}

async function main() {
  const indexPath = join(ROOT, 'assets/tutorial-index.json')
  const index = JSON.parse(readFileSync(indexPath, 'utf8'))
  const known = new Map(index.tutorials.map((t) => [t.websiteTutorialId, t]))

  const cats = await rest('tutorial_categories?select=id,name,slug,parent_id,display_order&tutorial_type=eq.text')
  const catById = new Map(cats.map((c) => [c.id, c]))
  const tutorials = (await rest('text_tutorials?select=id,slug,title,content,category_id,published_at&is_published=eq.true&order=published_at.asc'))
    .filter((t) => t.content && catById.has(t.category_id))
  const apps = new Map((await rest('support_registration_apps?select=id,app_name,registration_url,is_active&is_active=eq.true')).map((a) => [a.id, a]))
  const offers = new Map()
  for (const o of await rest('tutorial_referral_offers?select=id,support_registration_app_id,headline,benefit_description,invite_code,registration_url_override,button_text,is_active&is_active=eq.true')) {
    const app = apps.get(o.support_registration_app_id)
    const url = o.registration_url_override || app?.registration_url
    if (!app || !url || !o.headline) continue
    offers.set(o.id, { appName: app.app_name, headline: o.headline, benefit: o.benefit_description || '', code: o.invite_code, url, button: o.button_text || '立即注册' })
  }

  // 分配路径：已收录的沿用原路径，新教程接在目录已有编号后面。
  const nextNo = new Map()
  const folderNo = (dir) => {
    if (!nextNo.has(dir)) {
      const full = join(ROOT, dir)
      const nums = existsSync(full) ? readdirSync(full).map((f) => parseInt(f, 10)).filter((n) => !Number.isNaN(n)) : []
      nextNo.set(dir, (nums.length ? Math.max(...nums) : 0) + 1)
    }
    const n = nextNo.get(dir); nextNo.set(dir, n + 1); return n
  }
  const entries = []
  const skipped = []
  for (const t of tutorials) {
    const cat = catById.get(t.category_id)
    const prev = known.get(t.id)
    let path = prev?.path
    if (!path) {
      const folder = FOLDERS[cat.slug]
      if (!folder) { skipped.push(`${cat.slug}/${t.slug}`); continue }
      const dir = folder.join('/')
      path = `${dir}/${pad(folderNo(dir))}-${sanitize(t.title)}.md`
    }
    entries.push({ t, cat, path, prev })
  }
  const bySlug = new Map(); const byId = new Map()
  for (const e of entries) { bySlug.set(e.t.slug, e); byId.set(e.t.id, e) }
  const catBySlugOrId = new Map(cats.flatMap((c) => [[c.slug, c], [c.id, c]]))
  const allBySlug = new Map(tutorials.flatMap((t) => [[t.slug, t], [t.id, t]]))

  const resolveHref = (href, file) => {
    if (href.startsWith('download:')) href = href.slice('download:'.length)
    const m = href.match(/^(?:https?:\/\/(?:www\.)?invest-nav\.com)?\/tutorials\/([^/]+)\/text\/([^/?#]+)\/?(#[^)]*)?$/)
    if (m) {
      const e = bySlug.get(m[2]) || byId.get(m[2])
      if (e) return mdHref(relLink(file, e.path) + (m[3] || ''))
      const t = allBySlug.get(m[2]); const c = t ? catById.get(t.category_id) : catBySlugOrId.get(m[1])
      return t && c ? siteUrl(c.slug, t.slug) + (m[3] || '') : `${SITE}${href.replace(/^https?:\/\/[^/]+/, '')}`
    }
    if (href.startsWith('/') && !href.startsWith('//')) return `${SITE}${href}`
    return mdHref(href)
  }
  const ctx = { offers, resolveHref }

  let added = 0; let updated = 0
  const sameSource = []
  const newIndex = []
  for (const e of entries) {
    const contentSha = sha256(e.t.content)
    const abs = join(ROOT, e.path)
    if (!process.env.FORCE && e.prev && e.prev.websiteContentSha256 === contentSha && existsSync(abs)) {
      newIndex.push(e.prev); continue
    }
    const conv = convertBody(e.t.content, e.path, { ...ctx, title: e.t.title })
    const md = [
      `# ${conv.title}`,
      '',
      `作者：[Nico 投资有道](https://www.youtube.com/@NicoGrowthz) · [投资导航网页版](${siteUrl(e.cat.slug, e.t.slug)}) · [返回本分类](./README.md)`,
      '',
      conv.body,
      '',
    ].join('\n')
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, md)
    if (e.prev) { updated++; if (e.prev.websiteContentSha256 === contentSha) sameSource.push(e.path) } else added++
    newIndex.push({ title: e.t.title, path: e.path, websiteUrl: siteUrl(e.cat.slug, e.t.slug), websiteTutorialId: e.t.id, markdownSha256: sha256(md), websiteContentSha256: contentSha })
  }
  // 网站已下线的教程保留在仓库和索引里，不自动删除。
  const live = new Set(entries.map((e) => e.t.id))
  for (const t of index.tutorials) if (!live.has(t.websiteTutorialId)) newIndex.push(t)
  newIndex.sort((a, b) => a.path.localeCompare(b.path, 'zh'))
  writeFileSync(indexPath, `${JSON.stringify({ ...index, tutorials: newIndex }, null, 2)}\n`)

  // 二级分类 README：重写「教程目录」表。
  const dirs = new Map()
  for (const e of newIndex) {
    const dir = posix.dirname(e.path)
    if (!dirs.has(dir)) dirs.set(dir, [])
    dirs.get(dir).push(e)
  }
  const slugByDir = new Map(Object.entries(FOLDERS).map(([s, f]) => [f.join('/'), s]))
  for (const [dir, list] of dirs) {
    list.sort((a, b) => a.path.localeCompare(b.path, 'zh', { numeric: true }))
    const rows = list.map((x) => `| ${posix.basename(x.path).slice(0, 2)} | [${x.title}](${mdHref(`./${posix.basename(x.path)}`)}) |`)
    const table = ['| 顺序 | 教程 |', '| --- | --- |', ...rows].join('\n')
    const readme = join(ROOT, dir, 'README.md')
    if (existsSync(readme)) {
      const text = readFileSync(readme, 'utf8')
      const re = /\| 顺序 \| 教程 \|\n\| --- \| --- \|\n(?:\|.*\|\n?)*/
      if (re.test(text)) writeFileSync(readme, text.replace(re, `${table}\n`))
      else console.warn(`README 没有教程目录表：${dir}`)
    } else {
      const slug = slugByDir.get(dir)
      const cat = cats.find((c) => c.slug === slug)
      const l1 = dir.split('/')[0].replace(/^\d+-/, '')
      writeFileSync(readme, [
        `# ${cat?.name || dir.split('/')[1].replace(/^\d+-/, '')}`, '',
        '## 教程目录', '', table, '',
        `以上教程同步收录于投资导航网站，可[在线阅读](${SITE}/tutorials/${slug}/text/)。`, '',
        `[返回${l1}](../README.md) · [返回指南首页](../../README.md)`, '',
      ].join('\n'))
      console.warn(`新建二级分类：${dir}（记得在一级分类 README 和首页导航里加入口）`)
    }
  }

  // 首页「最近更新」：按网站发布时间取最新 10 篇。
  const readmePath = join(ROOT, 'README.md')
  const home = readFileSync(readmePath, 'utf8')
  const pub = new Map(tutorials.map((t) => [t.id, t.published_at]))
  const latest = newIndex.filter((x) => pub.has(x.websiteTutorialId))
    .sort((a, b) => String(pub.get(b.websiteTutorialId)).localeCompare(String(pub.get(a.websiteTutorialId)))).slice(0, 10)
  const block = ['<!-- sync:latest:start -->', ...latest.map((x) => `- ${String(pub.get(x.websiteTutorialId)).slice(0, 10)} · [${x.title}](${mdHref(`./${x.path}`)})`), '<!-- sync:latest:end -->'].join('\n')
  if (/<!-- sync:latest:start -->[\s\S]*<!-- sync:latest:end -->/.test(home)) {
    writeFileSync(readmePath, home.replace(/<!-- sync:latest:start -->[\s\S]*<!-- sync:latest:end -->/, block))
  }
  if (process.env.FORCE) writeFileSync(join(ROOT, '.sync-same-source.txt'), sameSource.join('\n'))
  console.log(`新增 ${added} 篇，更新 ${updated} 篇，共收录 ${newIndex.length} 篇；未同步分类 ${skipped.length} 篇`)
}

main().catch((err) => { console.error(err); process.exit(1) })
