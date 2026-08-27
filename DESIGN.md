# OhGaram Portfolio Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=ko -->
### Scope

오가람(프론트엔드 개발자)의 개인 포트폴리오 웹사이트 한 개 화면(단일 페이지 + 프로젝트 상세 뷰)에 적용되는 시스템입니다. 한국어 우선, 데스크톱과 모바일 브라우저 양쪽에서 동작하며, 로그인·결제·사용자 데이터 입력이 없는 읽기 전용 정보 표면입니다.

이 표면이 설득해야 하는 것은 "무엇을 만들 줄 아는가"가 아니라 **"어떤 문제를 어떤 근거로 어떻게 풀었는가"** 입니다. 프로젝트 4개(dayMatch, OY-trans, CineSearch, Kanban Board)는 각각 문제 → 판단 → 결과의 3단 구조로 서술되며, 기술 스택 나열은 판단의 근거로만 등장합니다.

구조적 골격은 카카오뱅크 공개 웹 표면에서 가져옵니다. 흰 캔버스, 검정 우선 타이포그래피, 아주 큰 한글 제목, `#f7f7f7` 섹션 구분, 그림자 없는 평면 컴포넌트, 6px 반경의 검정 액션. 개성은 장식이 아니라 **지원자 본인의 프로젝트에서 실제로 쓰인 색**에서 옵니다 — OY-trans의 고객 표시 화면이 쓰는 라임(`#8ED320`)과 딥그린 잉크(`#16250B`)입니다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=ko -->
### Primary tasks

- 채용 담당자가 첫 화면에서 3분 안에 "면접에 부를지"를 판단한다.
- 면접관이 특정 프로젝트 하나를 골라 문제 정의·기술 판단·검증 결과를 읽는다.
- 방문자가 각 프로젝트의 라이브 데모 또는 GitHub 저장소로 한 번의 클릭으로 이동한다.
- 모바일에서 공유 링크로 열어 세로 스크롤만으로 전체 내용을 훑는다.
- 이메일 주소와 GitHub 주소를 복사하거나 바로 연다.
<!-- design-md:claim-end -->

### Design direction

- 자기소개 형용사보다 검증된 사실을 앞에 둔다. "꼼꼼합니다" 대신 "단위 테스트 26개", "5년 무결근".
- 이력이 아니라 궤적을 보여준다. 구매관리 3년 → 매장 크루 → 매장 문제를 코드로 해결이라는 한 줄이 이 사람의 차별점이다.
- 프로젝트 카드는 결과물 이미지가 아니라 문장 하나로 먼저 설득한다.
- 라임은 아껴 쓴다. 강조가 두 곳 이상 동시에 보이면 강조가 아니다.

### Principles

1. **근거가 없으면 쓰지 않는다.** 사용자 수, 성능 개선율, 수상 이력처럼 검증 불가능한 수치는 넣지 않는다.
2. **읽는 사람의 시간을 기준으로 배치한다.** 위에서 아래로 갈수록 관심 있는 사람만 읽는 내용이 온다.
3. **색은 의미가 있을 때만 바뀐다.** 라임이 보이면 그 자리는 반드시 "지금 봐야 할 것"이다.
4. **움직임은 읽기를 돕는 선에서 멈춘다.** 등장 애니메이션은 시선을 유도하고, 스스로 주인공이 되지 않는다.

### Avoid

- 다크 무드 개발자 포트폴리오의 관용구(터미널 창, 매트릭스 그린, 타이핑 커서 효과).
- 채워지지 않은 스킬 게이지 바, 별점 5개 중 4개 같은 자기 평가 시각화.
- 라임을 본문 텍스트 색으로 쓰는 것. 흰 배경 대비 1.83:1로 읽히지 않는다.
- 프로젝트 하나당 스크린샷 여러 장을 나열해 스크롤을 늘리는 것.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=ko -->
### Semantic tokens

- **color.canvas**: `#ffffff`
- **color.foreground**: `#000000`
- **color.body**: `#444444`
- **color.muted**: `#666666`
- **color.secondary**: `#888888`
- **color.surface**: `#f7f7f7`
- **color.divider**: `#e6e6e6`
- **color.accent**: `#8ED320`
- **color.accent-ink**: `#16250B`
- **color.accent-text**: `#4A6B0F`
- **space.xs**: `8px`
- **space.sm**: `12px`
- **space.md**: `16px`
- **space.lg**: `24px`
- **space.xl**: `40px`
- **space.2xl**: `80px`
- **space.section**: `120px`
- **radius.action**: `6px`
- **radius.section**: `16px`
- **radius.full**: `9999px`
- **motion.duration.enter**: `560ms`
- **motion.duration.state**: `160ms`
- **motion.easing.enter**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **motion.easing.state**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Color roles

- **Canvas** (`#ffffff`)와 **foreground** (`#000000`): 기본 쌍. 제목과 주요 문장은 순검정.
- **Body** (`#444444`): 문단 본문.
- **Muted** (`#666666`): 날짜, 기술 스택 라벨 등 작은 보조 텍스트. 흰 배경 대비 5.74:1.
- **Secondary** (`#888888`): 비텍스트 아이콘과 보조 구분선 전용. 본문 텍스트에는 쓰지 않는다.
- **Surface** (`#f7f7f7`): 섹션 단위 묶음. 카드를 띄우는 대신 배경을 눕힌다.
- **Divider** (`#e6e6e6`): 1px 경계선.
- **Accent** (`#8ED320`): 면(fill) 전용. 하이라이트 블록 배경, 활성 탭 배경, 히어로 강조 마킹.
- **Accent ink** (`#16250B`): 라임 면 위에 올라가는 유일한 텍스트 색.
- **Accent text** (`#4A6B0F`): 흰 배경 위에서 강조가 필요한 텍스트와 링크. 라임의 텍스트 대역.

### Contrast pairs

- `#000000` on `#ffffff`: minimum 21:1
- `#444444` on `#ffffff`: minimum 9.74:1
- `#666666` on `#ffffff`: minimum 5.74:1
- `#16250B` on `#8ED320`: minimum 8.81:1
- `#4A6B0F` on `#ffffff`: minimum 6.17:1
- `#444444` on `#f7f7f7`: minimum 9.09:1
- `#16250B` on `#f7f7f7`: minimum 15.04:1

### Reduced motion

Required. `prefers-reduced-motion: reduce`에서 모든 등장 트랜지션과 카운트업은 최종 상태로 즉시 확정되고, 위치 이동은 발생하지 않는다.

### Foundation rules

- 그림자는 쓰지 않는다. 분리는 흰/`#f7f7f7` 면과 `#e6e6e6` 1px 선, 그리고 타이포 스케일이 담당한다.
- `#8ED320`은 텍스트 색으로 절대 쓰지 않는다. 흰 배경 대비 1.83:1로 WCAG AA에 미달한다.
- 한 화면(뷰포트)에 라임 면은 최대 한 곳만 등장한다.
- 색만으로 상태를 구분하지 않는다. 활성 탭은 배경색과 함께 굵기 변화를 동반한다.
- 모든 인터랙티브 요소의 터치 영역은 최소 44×44px를 확보한다.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font

Pretendard Variable 한 벌로 전체 표면을 처리한다. 한글 우선 메트릭과 음수 자간이 큰 제목에서 필요하고, 지원자의 기존 프로젝트(OY-trans)가 이미 같은 서체를 쓰고 있어 실물과 문서가 어긋나지 않는다. 폴백 스택은 `Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, 'Malgun Gothic', sans-serif`.

숫자는 `font-variant-numeric: tabular-nums`를 적용해 카운트업 중 폭이 흔들리지 않게 한다.

| Role | Size (desktop) | Size (mobile) | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|---:|
| Hero | 88px | 40px | 800 | 1.15 | -0.03em |
| Display | 42px | 28px | 700 | 1.24 | -0.02em |
| Section heading | 32px | 24px | 700 | 1.36 | -0.02em |
| Card title | 24px | 20px | 700 | 1.44 | -0.02em |
| Lead | 20px | 17px | 500 | 1.6 | -0.01em |
| Body | 16px | 16px | 400 | 1.7 | normal |
| Meta | 14px | 13px | 500 | 1.5 | normal |
| Label | 12px | 12px | 700 | 1.4 | 0.08em |

### Assets

이미지는 각 프로젝트 저장소가 이미 보유한 실제 화면 캡처만 사용한다. 일러스트레이션, 스톡 사진, 3D 목업 프레임은 사용하지 않는다. 아이콘은 인라인 SVG stroke 방식으로 `currentColor`를 따르며, 아이콘 단독으로 의미를 전달하는 곳에는 텍스트 라벨을 함께 둔다.

<!-- design-md:section components-states -->
## 4. Components & States

### Top navigation

- 투명 배경 / `#000000`, 반경 `0px`, 높이 `62px`, 패딩 `0 20px`
- 14px / 600 / 자간 -0.01em
- 스크롤이 `1px`를 넘기면 배경이 `rgba(255,255,255,0.86)` + `backdrop-filter: blur(12px)`로 바뀌고 하단에 `#e6e6e6` 1px 선이 생긴다
- 상태: hover는 `#4A6B0F`, 현재 섹션은 굵기 700 + 하단 2px `#8ED320` 밑줄, focus-visible은 2px `#16250B` 외곽선 + 2px 오프셋

### Section tab

- 투명 배경 / `#000000`, 하단 1px `#e6e6e6`, 반경 `0px`, 패딩 `16px 0`, 16px / 400
- 선택 상태: 배경 `#8ED320`, 텍스트 `#16250B`, 굵기 700, 반경 `9999px`, 패딩 `10px 18px`

### Primary action

- 배경 `#000000` / 텍스트 `#ffffff`, 반경 `6px`, 높이 `44px`, 패딩 `11px 18px`, 15px / 600
- hover에서 배경 `#16250B`, active에서 `scale(0.98)`, 전환 160ms

### Secondary action

- 투명 배경 / 텍스트 `#000000`, 1px `#000000` 테두리, 반경 `6px`, 높이 `44px`, 패딩 `11px 18px`, 15px / 600
- hover에서 배경 `#f7f7f7`

### Project card

- 배경 `#ffffff`, 1px `#e6e6e6` 테두리, 반경 `16px`, 패딩 `32px`
- hover에서 테두리 `#16250B`, `translateY(-4px)`, 전환 160ms — 그림자는 추가하지 않는다
- 내부 순서: 번호 라벨 → 제목 → 한 줄 요약 → 문제/판단/결과 3행 → 스택 배지 → 데모·GitHub 링크

### Badge

- 배경 `#f7f7f7` / 텍스트 `#444444`, 반경 `9999px`, 패딩 `6px 12px`, 13px / 500
- 강조 변형: 배경 `#8ED320` / 텍스트 `#16250B`, 굵기 700

### Fact row

- 투명 배경 / `#000000`, 상단 1px `#e6e6e6`, 패딩 `16px 0`, 16px / 400 / 행간 24px
- 좌측 라벨은 `#666666` 14px / 500, 우측 값은 `#000000` 16px / 600

### States

- **Focus-visible**: 모든 인터랙티브 요소에 2px `#16250B` 외곽선 + 2px 오프셋. 마우스 클릭에는 나타나지 않는다.
- **Hover**: 색 또는 4px 이하 위치 변화 중 하나만. 두 가지를 동시에 쓰는 곳은 프로젝트 카드뿐이다.
- **Active**: `scale(0.98)`, 160ms.
- **외부 링크**: 새 탭으로 열리며 `rel="noopener noreferrer"`와 스크린리더용 "새 창" 안내를 함께 둔다.
- 이 표면에는 로딩·빈 상태·에러·비활성 상태가 없다. 데이터를 가져오지 않고 폼이 없기 때문이다.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Layout principles

- 콘텐츠 최대 폭 `1120px`, 좌우 여백은 데스크톱 `40px` / 모바일 `20px`.
- 섹션 사이 수직 간격은 데스크톱 `120px`, 모바일 `72px`. 이 리듬이 스크롤의 박자를 만든다.
- 섹션 단위 묶음은 카드를 띄우지 않고 `#f7f7f7` 배경을 깔아 처리한다.
- 히어로는 화면 높이를 채우지 않는다. 첫 스크롤 이전에 프로젝트 섹션의 존재가 보여야 한다.
- 프로젝트 그리드는 데스크톱 2열, 태블릿 이하 1열.
- 각 프로젝트의 문제·판단·결과는 좌측 라벨 + 우측 문장의 2열 구조를 유지하고, 모바일에서만 상하로 접힌다.

### Breakpoints

- `≥1120px`: 2열 프로젝트 그리드, 히어로 88px
- `768px – 1119px`: 1열 그리드, 히어로 64px, 좌우 여백 32px
- `<768px`: 단일 열, 히어로 40px, 좌우 여백 20px, 상단 내비게이션은 섹션 링크를 가로 스크롤 행으로 전환

### Motion

- 섹션 등장: `IntersectionObserver`가 뷰포트 진입을 감지하면 `opacity 0 → 1`, `translateY(24px) → 0`, 560ms, `cubic-bezier(0.16, 1, 0.3, 1)`. 같은 섹션 내 항목은 60ms씩 순차 지연하며 최대 6개까지만 계단식으로 처리한다.
- 상태 전환(hover, active, focus): 160ms, `cubic-bezier(0.4, 0, 0.2, 1)`.
- 숫자 카운트업은 히어로의 지표 3개에만 적용하고 1회만 실행한다.
- 스크롤 위치에 연동해 계속 움직이는 패럴랙스 요소는 두지 않는다.
- `prefers-reduced-motion: reduce`에서는 위 모든 값이 `0ms`가 되고 요소는 최종 상태로 렌더링된다.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Locale

한국어(ko-KR) 단일 로케일. 기술 용어(React, Supabase, Discriminated Union 등)는 원문 표기를 유지하고 억지로 번역하지 않는다. 영문 섹션 라벨은 한글 제목의 보조로만 쓰며 단독으로 정보를 전달하지 않는다.

### Voice & tone

문장은 짧고 서술적이다. 무엇을 했는지 먼저 쓰고, 왜 그렇게 했는지를 뒤에 붙인다. "~할 수 있습니다" 같은 가능성 표현보다 "~했습니다" 같은 완료 표현을 쓴다.

실패와 한계를 숨기지 않는다. Places API 정책 변경으로 검색이 깨졌던 일, RLS를 꺼둔 채 배포했다가 고친 일은 약점이 아니라 판단 과정의 증거로 서술한다. 남은 과제는 "앞으로의 계획"이 아니라 "지금 인지하고 있는 것"으로 쓴다.

과장 형용사(혁신적인, 최적화된, 완벽한)와 검증 불가능한 수치는 쓰지 않는다. 쓸 수 있는 숫자는 저장소에서 셀 수 있는 것뿐이다 — 문구 99개, 언어 14개, 단위 테스트 26개, 매장 구역 27개, 근무 연수.

### Required content

각 프로젝트 카드는 다음 5가지를 반드시 포함한다: 한 줄 요약, 해결한 문제, 그 문제에 대한 기술적 판단, 확인된 결과, 라이브 데모와 저장소 링크.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=ko -->
### Authority

이 문서는 명시된 범위의 프로젝트 디자인 계약이다.
<!-- design-md:claim-end -->

### Evidence basis

구조·타이포·간격·컴포넌트 기하는 카카오뱅크 공개 웹 표면(2026-07-12 검증) 근거에서 채택했습니다. 강조색 `#8ED320`과 `#16250B`는 이 프로젝트 소유자의 OY-trans 저장소(`src/pages/CustomerDisplay.tsx`, `index.html`)에서 실제로 사용 중인 값입니다. 카카오뱅크의 브랜드 색 `#FFE300`은 채택하지 않았고, 이 문서는 카카오뱅크나 올리브영의 브랜드 자산에 대한 권한을 주장하지 않습니다.

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=ko -->
### Application priority

1. 요청 범위의 명시적 사용자 지침.
2. 저장소 사실.
3. 이 시스템 계약.
4. 레퍼런스 영감.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=ko -->
### Unknowns

가장 작은 미확정 값이나 그룹만 생략한다. 그럴듯한 기본값으로 대체하지 않는다.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=ko -->
### Changes

채택 전에 변경을 기록하고 검토하고 검증한다.
<!-- design-md:claim-end -->

### Do

- 라임 `#8ED320`은 면으로만 쓰고, 그 위 텍스트는 `#16250B`만 올린다.
- 흰 배경 위 강조 텍스트가 필요하면 `#4A6B0F`를 쓴다.
- 저장소에서 셀 수 있는 숫자만 쓴다.
- 프로젝트마다 "무엇이 문제였는지"를 먼저 쓴다.
- 그림자 대신 면과 1px 선으로 분리한다.

### Don't

- `#8ED320`을 텍스트, 링크, 아이콘 색으로 쓰지 않는다.
- 카카오뱅크의 `#FFE300`이나 다른 카카오 계열 노랑을 가져오지 않는다.
- 한 뷰포트 안에 라임 면을 두 곳 이상 두지 않는다.
- 스킬 게이지, 별점, 퍼센트 숙련도 같은 자기 평가 그래픽을 넣지 않는다.
- 등장 애니메이션을 재진입할 때마다 반복 재생하지 않는다.

### Agent prompt guide

> 흰 캔버스와 검정 우선 타이포그래피, Pretendard Variable, 아주 큰 한글 제목, `#f7f7f7` 섹션 면, 그림자 없는 평면 컴포넌트, 6px 반경 검정 액션으로 한국어 프론트엔드 포트폴리오를 만든다. 강조는 라임 `#8ED320` 면과 그 위의 `#16250B` 잉크로만 주고, 흰 배경 위 강조 텍스트는 `#4A6B0F`를 쓴다. 뷰포트당 라임 면은 한 곳. 등장 애니메이션은 560ms 페이드+24px 상승으로 한 번만 재생하고 `prefers-reduced-motion`에서 즉시 확정한다.
