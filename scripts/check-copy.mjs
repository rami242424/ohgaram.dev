#!/usr/bin/env node
/**
 * 글 검사기 — WRITING.md 의 규칙을 강제합니다.
 *
 * 사람이 지키는 규칙은 네 번째 수정에서 무너집니다.
 * 색과 간격은 DESIGN.md + CSS 토큰이 잡아주는데 글에는 그런 장치가 없어서
 * 매번 다른 기준으로 다시 쓰이는 문제가 있었습니다. 그래서 만들었습니다.
 *
 * 검사 대상: src/data/*.ts, src/components/*.tsx 안의 한국어 문장
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const TARGET_DIRS = ['src/data', 'src/components']
const MAX_SENTENCE = 90

/** 어길 수 없는 규칙. 하나라도 걸리면 실패합니다. */
const BANNED = [
  // 말끝 버릇 — 한 번은 자연스럽지만 두 번부터 버릇이 됩니다
  { pattern: /더군요/g, why: '말끝 버릇. 평서형(~했습니다)으로 쓰십시오.' },
  { pattern: /거든요/g, why: '말끝 버릇. 구어체 설명조입니다.' },
  { pattern: /네요/g, why: '말끝 버릇. 지원 서류에 맞지 않습니다.' },
  { pattern: /답니다/g, why: '말끝 버릇.' },
  { pattern: /인 것 같습니다/g, why: '본인 경험을 추측형으로 쓰지 않습니다.' },

  // 상투어
  { pattern: /시너지/g, why: '상투어.' },
  { pattern: /기여하고자/g, why: '상투어.' },
  { pattern: /도모/g, why: '상투어.' },
  { pattern: /이바지/g, why: '상투어.' },
  { pattern: /역량을 발휘/g, why: '상투어.' },
  { pattern: /열정을 가지고/g, why: '상투어.' },
  { pattern: /최선을 다하/g, why: '상투어.' },
  { pattern: /노력하겠습니다/g, why: '상투어. 무엇을 할지 쓰십시오.' },
  { pattern: /발돋움/g, why: '상투어.' },
  { pattern: /밑거름/g, why: '상투어.' },

  // 번역투
  { pattern: /라는 점에 착안/g, why: '번역투.' },
  { pattern: /로 이어지고 있습니다/g, why: '번역투.' },
  { pattern: /출발점을 (바꿨|옮겼)/g, why: '번역투.' },
  { pattern: /역할이 넓어졌/g, why: '번역투.' },
  { pattern: /비로소/g, why: '번역투.' },
  { pattern: /에 있어서/g, why: '번역투. 조사로 줄이십시오.' },
  { pattern: /되어집|지어집|되어지/g, why: '이중 피동.' },
  { pattern: /하고 있는 중/g, why: '군더더기. "하고 있습니다"로 충분합니다.' },

  // 검증할 수 없는 수식어
  { pattern: /대폭|획기적|현저히|눈에 띄게|매우 빠르게/g, why: '측정하지 않은 수식어.' },
  { pattern: /크게 개선/g, why: '측정하지 않은 수식어.' },
  { pattern: /다수의|수많은/g, why: '숫자를 세지 않았다는 뜻입니다. 세거나, 세지 않았다고 쓰십시오.' },
]

/** 남용 감시. 문서 전체에서 기준을 넘으면 실패합니다. */
const OVERUSED = [
  { pattern: /을 통해|를 통해/g, limit: 2, why: '`~을 통해` 남용. 대부분 조사 하나로 줄어듭니다.' },
  { pattern: /에 대한|에 대해/g, limit: 2, why: '`~에 대한` 남용.' },
]

/**
 * 길이를 잴 단위를 뽑습니다.
 *
 * 1) 따옴표 안 문자열은 각각 따로 잽니다.
 *    배열의 목록 항목을 이어 붙이면 한 문장처럼 보여 오탐이 납니다.
 * 2) 문자열을 걷어낸 나머지 한국어는 JSX 본문입니다.
 *    JSX 는 한 문장이 여러 줄에 걸쳐 있어서 이어지는 줄을 묶어서 잽니다.
 */
function measurable(source) {
  const units = []
  const lineOf = (index) => source.slice(0, index).split('\n').length

  const QUOTED = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"/g
  let m
  while ((m = QUOTED.exec(source)) !== null) {
    const text = m[1] ?? m[2] ?? ''
    if (/[가-힣]/.test(text)) units.push({ no: lineOf(m.index), text })
  }

  const withoutStrings = source.replace(QUOTED, ' ')
  let current = null
  withoutStrings.split('\n').forEach((raw, i) => {
    const stripped = raw
      .replace(/<[^>]*>/g, ' ')
      .replace(/\{[^}]*\}/g, ' ')
      .replace(/^\s*(\/\/|\*|\/\*).*/, '')
      .replace(/\s+/g, ' ')
      .trim()
    if (/[가-힣]/.test(stripped)) {
      if (current) current.text += ' ' + stripped
      else current = { no: i + 1, text: stripped }
    } else if (current) {
      units.push(current)
      current = null
    }
  })
  if (current) units.push(current)
  return units
}

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (/\.(ts|tsx)$/.test(name)) out.push(full)
  }
  return out
}

/** 코드가 아니라 사람이 읽는 문장만 남깁니다. 주석과 import 는 검사하지 않습니다. */
function readableLines(source) {
  return source
    .split('\n')
    .map((line, i) => ({ line, no: i + 1 }))
    .filter(({ line }) => /[가-힣]/.test(line))
    .filter(({ line }) => !/^\s*(\/\/|\*|\/\*)/.test(line))
    .filter(({ line }) => !/^\s*import\s/.test(line))
}

const files = TARGET_DIRS.flatMap((d) => walk(join(ROOT, d)))
const problems = []
const overuseCount = new Map(OVERUSED.map((r) => [r.why, 0]))

for (const file of files) {
  const source = readFileSync(file, 'utf8')
  const rel = relative(ROOT, file)

  for (const { line, no } of readableLines(source)) {
    for (const { pattern, why } of BANNED) {
      const hits = line.match(new RegExp(pattern.source, 'g'))
      if (hits) problems.push({ rel, no, found: hits[0], why, line: line.trim() })
    }
    for (const { pattern, why } of OVERUSED) {
      const hits = line.match(new RegExp(pattern.source, 'g'))
      if (hits) overuseCount.set(why, overuseCount.get(why) + hits.length)
    }

  }

  // 문장 길이 — 따옴표 안 문자열과 JSX 본문을 모두 봅니다.
  // JSX 는 한 문장이 여러 줄에 걸쳐 있어서, 이어지는 줄을 한 덩어리로 묶어 검사합니다.
  for (const block of measurable(source)) {
    // 화살표나 트리 기호가 들어간 것은 도식입니다. 산문 길이 규칙을 적용하지 않습니다.
    if (/[└├→]/.test(block.text)) continue
    // 데이터 안의 \n\n 은 문단 구분입니다. 문장 경계로 함께 처리합니다.
    const normalized = block.text.replace(/\\n/g, ' ')
    for (const sentence of normalized.split(/(?<=[.?!])\s+/)) {
      const clean = sentence.trim()
      if (clean.length > MAX_SENTENCE) {
        problems.push({
          rel,
          no: block.no,
          found: `${clean.length}자`,
          why: `문장이 ${MAX_SENTENCE}자를 넘습니다. 두 문장으로 나누십시오.`,
          line: clean.slice(0, 56) + '…',
        })
      }
    }
  }
}

for (const { limit, why } of OVERUSED) {
  const count = overuseCount.get(why)
  if (count > limit) {
    problems.push({ rel: '(문서 전체)', no: 0, found: `${count}회`, why: `${why} 최대 ${limit}회.`, line: '' })
  }
}

if (problems.length === 0) {
  console.log(`✓ 글 검사 통과 — 파일 ${files.length}개, 규칙 ${BANNED.length + OVERUSED.length}개`)
  process.exit(0)
}

console.error(`\n✗ 글 검사 실패 — ${problems.length}건\n`)
for (const p of problems) {
  console.error(`  ${p.rel}${p.no ? `:${p.no}` : ''}`)
  console.error(`    "${p.found}" — ${p.why}`)
  if (p.line) console.error(`    ${p.line}`)
  console.error('')
}
console.error('규칙은 WRITING.md 에 있습니다.\n')
process.exit(1)
