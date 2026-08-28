# 오가람 | Frontend Developer — Portfolio

> 만든 것보다 **왜 그렇게 만들었는지**를 적은 프론트엔드 포트폴리오

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

---

## 📌 다루는 프로젝트

| # | 프로젝트 | 한 줄 |
| --- | --- | --- |
| 01 | [dayMatch](https://github.com/rami242424/dayMatch) | 각자 되는 날짜를 표시하면 모두가 되는 날을 찾아주는 일정 조율 웹앱 |
| 02 | [OY-trans](https://github.com/rami242424/oy-trans) | 올리브영 인천공항점 크루를 위한 14개 언어 고객 응대 도구 (실사용 중) |
| 03 | [CineSearch](https://github.com/rami242424/movie-app) | TMDB API 기반 영화 검색·상세 조회 |
| 04 | [Kanban Board](https://github.com/rami242424/kanban-board) | 드래그앤드롭 칸반 보드 |

각 프로젝트는 **문제 → 판단 → 결과** 순으로 서술합니다. 학습 목적으로 만든 것은 카드에 그렇게 밝혀뒀습니다.

섹션 순서는 채용 담당자가 먼저 볼 것부터 둡니다 — 프로젝트(증거) → 출판(외부에서 확인 가능한 실적) → 궤적(배경) → 기술 → 경력 → 연락처.

---

## 🎨 디자인 시스템

이 사이트의 색·타이포·간격·컴포넌트 규칙은 [`DESIGN.md`](./DESIGN.md)에 계약으로 정리되어 있고,
`src/index.css`의 CSS 커스텀 프로퍼티가 그 토큰을 그대로 구현합니다.

- **구조** — 카카오뱅크 공개 웹 표면(2026-07-12 검증)의 흰 캔버스·검정 우선 타이포·`#f7f7f7` 섹션 면·6px 검정 액션·그림자 없는 평면 컴포넌트
- **강조** — 라임 `#8ED320` / 딥그린 잉크 `#16250B`. 본인 프로젝트 OY-trans의 고객 표시 화면에서 실제로 쓰는 값
- **규칙** — 라임은 **면(fill)으로만** 사용합니다. 흰 배경 대비 1.83:1이라 텍스트 색으로 쓰면 WCAG AA에 미달하기 때문입니다. 흰 배경 위 강조 텍스트는 `#4A6B0F`(6.17:1)를 씁니다
- 한 뷰포트에 라임 면은 최대 한 곳

DESIGN.md는 [oh-my-design-cli](https://oh-my-design.kr)의 Core v2 계약 형식을 따르며,
`npx oh-my-design-cli@latest design-md validate DESIGN.md` 로 **portable-core 검증을 통과**합니다.

---

## 🔧 구현 포인트

### 1. 등장 애니메이션 — 스크롤 이벤트 대신 IntersectionObserver

스크롤 이벤트마다 `getBoundingClientRect()`를 호출하면 그때마다 레이아웃을 강제로 다시 계산하게 됩니다.
`IntersectionObserver`는 브라우저가 교차 판정을 대신 해주고, 한 번 등장한 뒤에는 `disconnect()`로 관찰을 끊습니다.
재진입할 때마다 다시 재생되면 스크롤을 되돌릴 때 산만해지기 때문입니다.

```ts
const observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return
  setVisible(true)
  observer.disconnect()   // 한 번만 재생
}, { threshold, rootMargin: '0px 0px -8% 0px' })
```

### 2. 카운트업 — setInterval이 아니라 requestAnimationFrame

`setInterval(fn, 16)`으로 값을 올리면 기기 성능과 주사율에 따라 끝나는 시각이 달라집니다.
`requestAnimationFrame`에서 **경과 시간 기준으로 진행률을 계산**하면 프레임이 밀려도 총 소요 시간은 같습니다.

```ts
const progress = Math.min((now - startedAt) / duration, 1)
const eased = 1 - Math.pow(1 - progress, 3)   // easeOutCubic
setValue(Math.round(target * eased))
```

### 3. `prefers-reduced-motion`을 효과가 아니라 초기값으로 처리

축소 모션 환경에서 "효과 안에서 최종값으로 setState" 하면 렌더가 한 번 더 돕니다.
`useState`의 초기화 함수에서 이미 최종값으로 시작하고, 효과는 그냥 빠져나오게 했습니다.

```ts
const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))
useEffect(() => {
  if (!start || prefersReducedMotion()) return
  /* ... rAF ... */
}, [target, start, duration])
```

CSS에서도 `@media (prefers-reduced-motion: reduce)`로 모든 트랜지션을 0으로 확정합니다.

### 4. 한국어 줄바꿈 — `word-break: keep-all`

기본값이면 "먼저 찾습니다"가 "먼 / 저 찾습니다"처럼 어절 중간에서 끊깁니다.
`keep-all`로 어절 단위 줄바꿈을 강제하고, 긴 URL만 `overflow-wrap: break-word`로 예외 처리했습니다.

### 5. 폰트를 CDN이 아니라 의존성으로

Pretendard를 CDN `<link>`로 불러오면 그 CDN이 죽거나 느려질 때 화면이 통째로 기본 고딕으로 떨어집니다.
`npm i pretendard` 후 **dynamic-subset CSS를 `main.tsx`에서 import**하면 Vite가 woff2 조각까지 함께 번들합니다.
한글 dynamic-subset은 자주 쓰는 글자부터 92개로 쪼개져 있어서, 브라우저는 **실제로 화면에 쓰인 글자에 해당하는 조각만** 내려받습니다.

```ts
// main.tsx
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
```

### 6. 데모 영상 — webm(VP9) + mp4(H.264) 두 벌

브라우저마다 코덱 지원이 갈리므로 `<source>` 두 개를 두고, 둘 다 실패해도 포스터 이미지가 남도록 했습니다.
원본 GIF 6.8MB → webm 33KB / mp4 33KB (약 99% 감소).

### 7. 활성 섹션 표시 — 교차 비율이 가장 큰 하나만

스크롤 중에는 섹션 두세 개가 동시에 화면에 걸립니다. `intersectionRatio`를 기록해두고
그중 가장 큰 하나만 활성으로 처리합니다.

---

## ♿ 접근성

- 본문 텍스트 대비비 **WCAG AA 전부 통과** (자체 검사 스크립트 기준 미달 0건)
- 모든 인터랙티브 요소 터치 영역 44×44px 이상
- `:focus-visible` 2px 외곽선 — 마우스 클릭에는 나타나지 않음
- 스킵 링크(Tab 첫 진입 → "프로젝트로 바로 가기")
- 라이트박스 ESC 닫기 · 배경 스크롤 잠금 · 닫힘 시 원복
- 외부 링크 `rel="noopener noreferrer"` + 스크린리더용 "새 창" 안내
- `<h1>` 1개, 헤딩 순서 정상, 이미지 alt 100%
- 320px ~ 1920px 전 구간 가로 스크롤 없음

---

## 📁 프로젝트 구조

```
src/
├── main.tsx
├── App.tsx                    # 섹션 조립
├── index.css                  # DESIGN.md 토큰 + 전역 컴포넌트 스타일
├── data/
│   ├── profile.ts             # 지표 · 궤적 · 경력 · 학력 · 스택
│   └── projects.ts            # 프로젝트 4개 (문제/판단/결과)
├── hooks/
│   ├── useReveal.ts           # 스크롤 등장 (1회)
│   ├── useCountUp.ts          # 지표 카운트업 (rAF)
│   └── useActiveSection.ts    # 현재 섹션 감지
└── components/
    ├── Reveal.tsx             # 등장 래퍼 (계단식 지연 최대 6개)
    ├── Nav.tsx                # 스크롤 시 blur 배경 + 활성 밑줄
    ├── Hero.tsx
    ├── Projects.tsx           # 프로젝트 카드 + 라이트박스
    ├── Publication.tsx        # 출간 기술서
    ├── Track.tsx              # 공대 → 구매팀 → 매장·개발
    ├── Stack.tsx
    ├── Experience.tsx         # 경력 · 학력
    └── Contact.tsx
```

---

## 🚀 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입 체크 + 프로덕션 빌드
npm run lint     # ESLint
```

---

## 📝 앞으로

- [ ] 배포 후 이 README 상단에 Vercel 주소 추가
- [ ] OG 이미지 제작 (현재 `og:image` 미지정)
- [ ] 프로젝트 상세 페이지 분리 (현재는 단일 페이지 + 라이트박스)
- [ ] Lighthouse 실측 기록
