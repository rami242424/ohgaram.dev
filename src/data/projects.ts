export type Shot = {
  src: string
  alt: string
  /** 브라우저별 코덱 지원이 갈려서 webm(VP9) + mp4(H.264) 두 벌을 함께 둡니다. */
  sources?: { src: string; type: string }[]
  poster?: string
  type?: 'video'
  wide?: boolean
}

/* ------------------------------------------------------------------ 사례 연구 */

export type CaseBlock = {
  no: string
  title: string
  body: string
  /** 강조할 흐름이나 목록. 없으면 본문만 나옵니다. */
  list?: string[]
  /** 코드나 데이터에서 그대로 확인되는 사실 */
  evidence?: string
}

export const caseStudy = {
  title: 'OY-trans',
  badge: '근무 매장 크루 60여 명에게 공유',
  tagline: '인천공항 올리브영 크루가 쓰는 14개 언어 응대 앱',
  demo: 'https://oy-trans.netlify.app',
  github: 'https://github.com/rami242424/oy-trans',
  stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA', 'localStorage', 'Netlify'],
  blocks: [
    {
      no: '01',
      title: '매번 처음부터 다시 시작하는 일',
      body: '인천공항 매장은 여러 국적의 고객이 오갑니다. 인사나 기본 안내는 익힌 표현으로 되지만, 택스리펀이나 기내반입처럼 조건이 여러 개 붙는 안내는 영어로도 한 번에 전달하기 어려웠습니다. 그때마다 번역 앱에 문장을 새로 입력했는데, 같은 질문을 하루에 여러 번 받아도 매번 처음부터 다시 입력하게 되더군요.',
    },
    {
      no: '02',
      title: '그때그때 번역하는 대신, 미리 정리해두기',
      body: '매장에서 나오는 질문은 대체로 정해져 있습니다. 그래서 출발점을 옮겨봤습니다. 자주 나오는 안내를 미리 문구로 만들어두고, 탭 한 번으로 고객 화면에 띄우는 방식입니다. 매장에서 배운 MOT 응대 기준에 맞춰 문구를 쓰고, 여섯 개 카테고리로 나눴습니다.',
      list: [
        '결제 15개 · 택스리펀 8개 · 교환/기내반입 11개',
        '재고 7개 · 추천 48개 · 기타 10개',
      ],
      evidence: 'src/data/phrases.json — 문구 99개, langs.ts — 언어 14개',
    },
    {
      no: '03',
      title: '응대하던 순서가 그대로 자료 구조가 됐습니다',
      body: '문구를 정리하다 보니 이건 목록이 아니라 흐름이라는 걸 알았습니다. 질문 다음에 어떤 안내가 오는지가 정해져 있었거든요. 그래서 고객이 답을 고르면 다음 문구로 이어지는 체인을 붙였습니다.',
      list: [
        '쇼핑백 필요하세요?',
        '└ 페이퍼백 100원 / 리유저블백 3,000원',
        '   ├ [페이퍼백 100원] → 네, 페이퍼백 100원 추가해드리겠습니다',
        '   └ [리유저블백 3,000원] → 네, 리유저블백 3,000원 추가해드리겠습니다',
      ],
      evidence: '체인을 붙이는 기준은 "고객이 답해주셔도 제가 알아듣기 어려운 질문인가"였습니다. 카드를 꺼내면 답이 보이는 질문은 제외해서 99개 중 11개에만 적용했습니다.',
    },
    {
      no: '04',
      title: '단순 연결은 선택지가 하나인 분기였습니다',
      body: '"쇼핑백 → 가격 안내"처럼 하나로 이어지는 경우와 "피부 타입이 어떻게 되세요? → 건성/지성/복합성"처럼 갈라지는 경우가 둘 다 필요했습니다. 처음엔 두 구조를 따로 만들려다, 단순 연결이 선택지가 하나뿐인 분기라는 걸 알고 배열 하나로 합쳤습니다. 덕분에 렌더링 코드가 한 갈래로 끝나고, 선택지가 늘어나도 데이터만 추가하면 됩니다.',
    },
    {
      no: '05',
      title: '번역을 어디까지 믿을지 정하는 일',
      body: '14개 언어를 제가 다 아는 것은 아닙니다. 번역은 API로 만들었고, 그중 중국어·일본어·프랑스어는 해당 언어를 아는 분들께 직접 확인을 받았습니다. "문제없이 이해된다"는 답을 듣고 나서 매장에서 쓰기 시작했습니다. 나머지 11개 언어는 아직 검수 전이라는 걸 알고 사용하고 있습니다.',
      evidence: '검수 완료 3개 언어 / 전체 14개 언어',
    },
    {
      no: '06',
      title: '쓰면서 고친 것들',
      body: '만들고 끝난 게 아니라, 매장에서 쓰면서 계속 바뀌었습니다.',
      list: [
        '크루 요청 — "상품은 개인가방이 아니라, 매장 장바구니에 담아 이용해 주세요" 문구를 추가했습니다.',
        '쇼핑백 흐름 — 가격 두 가지를 보여드리면 고객이 손가락으로 가리키시는데 어느 쪽인지 애매할 때가 있었습니다. 직접 눌러 고르시게 바꾸니 그 확정 문구가 영수증 전 마지막 확인이 됐습니다.',
        '즐겨찾기 버그 — 처음엔 문구 id만 저장했는데, 문구를 정리하며 id를 다시 매기자 엉뚱한 문구가 등록되어 있었습니다. 화면이 깨지지 않아 한참 뒤에야 알아챘고, id와 원문을 함께 저장해 둘 다 일치할 때만 유효하도록 바꿨습니다.',
      ],
    },
    {
      no: '07',
      title: '아직 하지 못한 것',
      body: '점장님과 직원분들 동의를 거쳐 크루 60여 명이 있는 단체방에 공유했고, 저는 매 근무마다 쓰고 있습니다. 다만 아래는 아직 확인하지 못했습니다.',
      list: [
        '다른 크루가 얼마나 자주 쓰는지 — 사용 기록을 남기는 기능을 넣지 않았습니다.',
        '검수하지 않은 11개 언어 — 해당 언어를 아는 분을 찾는 대로 확인받을 계획입니다.',
        '안내 시간이 실제로 줄었는지 — 측정하지 않았습니다.',
      ],
    },
  ] as CaseBlock[],
  shots: [
    { src: '/projects/oy-phrases.jpg', alt: 'OY-trans 문구 목록 — 즐겨찾기와 카테고리' },
    { src: '/projects/oy-chain.jpg', alt: 'OY-trans 문구 체인 — 고객이 직접 답을 고르는 화면' },
    { src: '/projects/oy-lang.jpg', alt: 'OY-trans 언어 선택 — 14개 언어를 자국어로 표기' },
    { src: '/projects/oy-map.jpg', alt: 'OY-trans 매장 지도 — 현위치와 목적지를 함께 표시' },
  ] as Shot[],
}

/* ------------------------------------------------------------------ 나머지 프로젝트 */

export type Project = {
  no: string
  title: string
  badge: string
  tagline: string
  summary: string
  /** compact 카드는 핵심 한 덩어리만, full 카드는 문제/판단/결과를 모두 씁니다. */
  compact: boolean
  problem?: string
  decision?: string
  result?: string
  highlight?: string
  stack: string[]
  demo: string
  github: string
  shots: Shot[]
  shotLayout: 'pair' | 'single'
}

export const projects: Project[] = [
  {
    no: '02',
    title: 'dayMatch',
    badge: '직접 기획 · 구현',
    tagline: '각자 되는 날을 표시하면, 다 같이 되는 날을 골라주는 웹앱',
    compact: false,
    summary:
      '로그인 없이 방 코드 하나로 모입니다. 달력에 좋아요·괜찮아요·바빠요를 표시하면 전원이 되는 날부터 묶어서 보여줍니다.',
    problem:
      '처음에는 선택마다 점수를 매겨 더하는 방식으로 만들었습니다. 그런데 좋아요 3 + 바빠요 1과 좋아요 2 + 바빠요 0이 같은 점수가 나오더군요. 한 명이라도 못 오면 그날은 약속이 성립하지 않는데, 점수만으로는 그 차이가 드러나지 않았습니다.',
    decision:
      '바빠요는 점수에서 빼고, 그룹을 나누는 기준으로만 쓰기로 했습니다. 전원 가능 / 1명만 빼고 가능 / 2명 이상 불가로 나눈 뒤, 정렬은 그룹 안에서만 합니다. 다만 동점일 때 어느 날짜가 위로 올라가는지는 눈으로 확인하기 어려워서, 계산 부분을 순수 함수로 떼어내고 테스트 26개를 붙여 확인했습니다.',
    result:
      '배포한 뒤에 Supabase 테이블의 RLS가 꺼져 있다는 걸 발견했습니다. 브라우저에 그대로 노출되는 키만 있으면 다른 방의 데이터까지 읽거나 지울 수 있는 상태였습니다. 두 테이블에 RLS를 켜고 앱이 실제로 사용하는 동작만 허용하도록 정리했습니다. 로그인이 없는 서비스라 "방 코드를 아는 사람 = 참여자"까지는 처음부터 의도한 설계이고, 막고자 한 것은 코드를 모르는 제3자의 접근이었습니다.',
    stack: ['React 19', 'React Router 7', 'Supabase', 'Vitest', 'Vercel'],
    demo: 'https://day-match-lime.vercel.app',
    github: 'https://github.com/rami242424/dayMatch',
    shotLayout: 'pair',
    shots: [
      {
        src: '/projects/daymatch-heatmap.jpg',
        alt: 'dayMatch 결과 — 날짜별 가능 인원을 진하기로 표시한 히트맵 달력',
      },
      {
        src: '/projects/daymatch-list.jpg',
        alt: 'dayMatch 결과 — 전원 가능 / 1명만 빼고 가능으로 나뉜 리스트',
      },
      {
        src: '/projects/daymatch-calendar.jpg',
        alt: 'dayMatch 입력 — 색과 함께 ✕ △ ◎ 기호를 같이 쓴 달력',
      },
      {
        src: '/projects/daymatch-confirm.jpg',
        alt: 'dayMatch — 같은 이름으로 다시 들어올 때 뜨는 본인 확인 화면',
      },
    ],
  },
  {
    no: '03',
    title: 'CineSearch',
    badge: '학습 프로젝트',
    tagline: 'TMDB API로 영화를 검색하고 상세 정보를 보는 앱',
    compact: true,
    summary:
      '키워드 검색, 최신순·별점순 정렬, 상세 페이지 이동, 로딩 중 스켈레톤까지 넣어봤습니다.',
    highlight:
      'isLoading, isError 같은 boolean을 늘려가다 "로딩이면서 에러"처럼 있을 수 없는 조합이 생겼습니다. fetch 상태는 idle · loading · success · error 중 하나뿐이라는 점에서 Discriminated Union 하나로 바꿨더니, success일 때만 data에 접근할 수 있게 되어 없는 데이터를 읽는 실수를 컴파일 단계에서 걸러주었습니다.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router v6', 'TMDB API'],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
    shotLayout: 'single',
    shots: [{ src: '/projects/cine-grid.jpg', alt: 'CineSearch 영화 검색 결과 그리드', wide: true }],
  },
  {
    no: '04',
    title: 'Kanban Board',
    badge: '학습 프로젝트',
    tagline: '드래그해서 옮기는 칸반 보드',
    compact: true,
    summary:
      'TO DO · DOING · DONE 세 칸으로 할 일을 관리합니다. 카드 추가·수정·삭제, 칸 사이 이동, 새로고침 후 유지까지 넣었습니다.',
    highlight:
      '드래그 중인 칸에 transform: scale()을 줬더니 카드가 엉뚱한 칸에 떨어졌는데, 콘솔에 에러가 전혀 뜨지 않았습니다. 라이브러리가 마우스 위치를 픽셀 좌표로 계산하는데 부모에 transform이 걸리면 기준이 틀어진다는 걸 확인하고, 칸에는 배경색만 주고 transform은 들려 있는 카드에만 남겼습니다.',
    stack: ['React 18', 'TypeScript', 'Recoil', 'recoil-persist', '@hello-pangea/dnd', 'styled-components'],
    demo: 'https://kanban-board-nu-ruby.vercel.app/',
    github: 'https://github.com/rami242424/kanban-board',
    shotLayout: 'single',
    shots: [
      {
        src: '/projects/kanban-demo.mp4',
        sources: [
          { src: '/projects/kanban-demo.webm', type: 'video/webm' },
          { src: '/projects/kanban-demo.mp4', type: 'video/mp4' },
        ],
        poster: '/projects/kanban-poster.jpg',
        alt: 'Kanban Board 카드 드래그앤드롭 시연 영상',
        type: 'video',
        wide: true,
      },
    ],
  },
]
