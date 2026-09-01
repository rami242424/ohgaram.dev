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

/**
 * 목록 항목.
 * 문자열이면 한 줄, { label, text } 이면 앞머리에 배경 강조가 붙습니다.
 */
export type CaseListItem = string | { label: string; text: string }

export type CaseBlock = {
  no: string
  title: string
  body: string
  /** 강조할 흐름이나 목록. 없으면 본문만 나옵니다. */
  list?: CaseListItem[]
  /** 도식(체인 그림)은 앞에 - 를 붙이지 않습니다. */
  listPlain?: boolean
  /** 코드나 데이터에서 그대로 확인되는 사실 */
  evidence?: string
}

export const caseStudy = {
  title: 'OY-trans',
  badge: '근무 매장에서 사용 중',
  tagline: '인천공항 올리브영 크루가 쓰는 14개 언어 응대 앱',
  demo: 'https://oy-trans.netlify.app',
  github: 'https://github.com/rami242424/oy-trans',
  stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA', 'localStorage', 'Netlify'],
  blocks: [
    {
      no: '01',
      title: '같은 문장을 매번 새로 번역하는 일',
      body: '인천공항 매장은 여러 국적의 고객이 오갑니다. 공항점 특성상 택스리펀과 기내반입 규정 안내는 거의 모든 고객에게 전달됩니다.\n\n인사나 기본 안내는 익힌 문장으로 응대가 가능하지만, 조건이 여러 개 붙는 복잡한 안내는 영어로도 한 번에 전달하기 어려웠습니다. 그때마다 번역 앱에 매번 같은 문장을 입력해 사용했습니다.',
    },
    {
      no: '02',
      title: '그때그때 번역하는 대신, 미리 정리해두기',
      body: '매장에서 나오는 질문은 대체로 정해져 있습니다. 그래서 그때그때 번역하는 대신 안내를 미리 문구로 만들어두고, 탭 한 번으로 고객 화면에 띄우게 했습니다. 매장에서 배운 MOT 응대 기준에 맞춰 문구를 쓰고 6개 카테고리로 나눴습니다. 언어 14개는 매장에 방문하는 고객의 국적 분포를 참고하여 골랐습니다.',
      list: [
        '결제 15개 · 택스리펀 8개 · 교환/기내반입 11개',
        '재고 7개 · 추천 48개 · 기타 10개',
        '상품 위치를 알려주는 매장 지도를 더했습니다.',
        '구역 27개를 좌표로 찍어 현위치와 목적지를 함께 표시합니다.',
      ],
      evidence: 'src/data/phrases.json — 문구 99개, langs.ts — 언어 14개, zones.ts — 매장 구역 27개',
    },
    {
      no: '03',
      title: '응대하던 순서가 그대로 자료 구조가 됐습니다',
      body: '응대 문구들을 정리하다 보니, "문구 목록"이 아니라 "응대 흐름"에 맞춰 기획해야 함을 깨달았습니다.\n\n질문 다음에 어떤 안내가 오는지가 대체로 정해져 있었습니다.\n\n따라서 고객이 답을 고르면 다음 응대로 이어지는 문구 체인을 붙였습니다.',
      list: [
        '쇼핑백 필요하세요?',
        '└ 페이퍼백 100원 / 리유저블백 3,000원',
        '   ├ [페이퍼백 100원] → 네, 페이퍼백 100원 추가해드리겠습니다',
        '   └ [리유저블백 3,000원] → 네, 리유저블백 3,000원 추가해드리겠습니다',
      ],
      listPlain: true,
      evidence: '체인 문구의 기준은 "고객이 응답했을 때 크루가 알아듣기 어려운 질문인가"였습니다.\n\n고객에게 응대 문구 화면을 보여주면 바로 답이 보이는 질문은 제외하여, 99개 문구 중 11개에만 적용했습니다.',
    },
    {
      no: '04',
      title: '두 구조를 하나로 줄였습니다',
      body: '문구를 이어 붙이다 보니 두 가지 경우가 나왔습니다. 다음 문구가 하나로 정해진 경우, 그리고 고객의 답에 따라 갈라지는 경우입니다.\n\n처음에는 둘을 각각 다른 코드로 만들려고 했습니다. 그런데 하나로 이어지는 것은 갈래가 하나뿐인 경우와 같았습니다. 갈래 구조 하나로 둘 다 표현할 수 있어서, 코드를 하나로 줄였습니다.\n\n갈래가 하나든 셋이든 같은 코드로 화면을 그립니다. 문구를 늘릴 때는 데이터만 추가하면 됩니다.',
      list: [
        '쇼핑백 필요하세요? → 가격 안내  (갈래 1개)',
        '피부 타입이 어떻게 되세요? → 건성 / 지성 / 복합성  (갈래 3개)',
      ],
      listPlain: true,
    },
    {
      no: '05',
      title: '번역 품질을 확인한 방법',
      body: '14개 언어의 번역은 API로 만들었습니다. 모든 언어가 완벽하지는 않기 때문에, 몇 개의 언어는 현지에 있거나 해당 언어를 전공한 지인들에게 부탁해 검수를 받았습니다. 추후 여러 번역 앱으로 비교해 검수해 나갈 예정입니다.',
    },
    {
      no: '06',
      title: '고객이 번역 버튼을 누르기 전에',
      body: '영어로 안내해도 소통이 되지 않을 때, 고객은 번역기를 켜 자국어로 입력하기 시작합니다. 그동안 전달하려는 응대 문구를 앱에서 찾아 화면을 보여줍니다. 고객이 번역 버튼을 누르기 전에 앱의 문구로 해결되는 경우가 많아졌습니다. 결제 고객에게 쓸 때는 고객이 입력을 마치기도 전에 문구를 띄워 빠르게 해결할 수 있습니다.',
    },
    {
      no: '07',
      title: '현장에서 직접 사용하며 발견한 것들',
      body: '배포한 뒤에도 고객 응대에 직접 사용하며 수정하고 추가하고 있습니다.',
      list: [
        {
          label: '크루 요청',
          text: '다른 매장에서 구매한 올리브영 쇼핑백이나 개인 가방에 상품을 담는 경우가 자주 있었습니다. 이런 경우 결제가 완료된 고객인지 혼동이 되는 문제가 발생합니다.\n\n사전에 이러한 문제를 방지하기 위해 크루들의 요청으로 "상품은 개인가방이 아니라, 매장 장바구니에 담아 이용해 주세요"라는 문구를 추가했습니다. 이런 요청 문구는 매장에서 직접 사용하면서 계속 늘려가고 있습니다.',
        },
        {
          label: '쇼핑백 흐름',
          text: '전시된 쇼핑백을 고객이 손가락으로 가리킬 때 어느 쪽인지 애매할 때가 있습니다. 앱에서 버튼으로 직접 눌러 고를 수 있게 개선하였더니, 정확한 가격을 확정해 오안내를 줄일 수 있었습니다.',
        },
        {
          label: '즐겨찾기 버그',
          text: '처음 설계 당시에는 문구 id만 저장해 사용했으나, 문구를 정리하며 id를 다시 매기자 엉뚱한 문구가 등록됐습니다. 화면이 깨지지 않아 한참 뒤에야 버그임을 알게 됐습니다. id와 원문을 함께 저장해 둘 다 일치할 때만 유효하도록 개선하여 해결했습니다.',
        },
      ],
    },
    {
      no: '08',
      title: '추후 보완할 점',
      body: '매 근무마다 사용하고, 크루들에게 피드백을 받으며 리팩토링 계획을 추가하고 있습니다.',
      list: [
        '검수하지 못한 몽골어·우즈베크어 등은 다른 번역 도구와 결과를 비교해 더 자연스러운 표현으로 다듬을 계획입니다.',
        '크루들과 함께 응대하면서 필요한 문구를 계속 추가 및 수정하고 있습니다.',
        '응대가 빨라졌다는 것은 쓰면서 체감하고 있습니다. 다만 아직 정확한 숫자로 기록하지는 못하여, 사용 기록을 남기는 기능 등을 넣어 구체적인 수치로 남길 예정입니다.',
      ],
    },
  ] as CaseBlock[],
  shots: [
    { src: '/projects/oy-lang.jpg', alt: 'OY-trans 언어 선택 — 14개 언어를 자국어로 표기' },
    { src: '/projects/oy-phrases.jpg', alt: 'OY-trans 문구 목록 — 즐겨찾기와 카테고리' },
    { src: '/projects/oy-chain.jpg', alt: 'OY-trans 문구 체인 — 고객이 직접 답을 고르는 화면' },
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
      '처음에는 선택마다 점수를 매겨 더하는 방식으로 만들었습니다. 그런데 좋아요 3 + 바빠요 1과 좋아요 2 + 바빠요 0의 점수가 같았습니다. 한 명이라도 못 오면 그날은 약속이 성립하지 않는데, 점수만으로는 그 차이가 드러나지 않았습니다.',
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
    badge: '타입 설계 연습',
    tagline: 'TMDB API로 영화를 검색하고 상세 정보를 보는 앱',
    compact: true,
    summary:
      '키워드 검색, 최신순·별점순 정렬, 상세 페이지 이동, 로딩 중 스켈레톤까지 넣어봤습니다.',
    highlight:
      'isLoading, isError 같은 boolean을 늘려가다 보니 "로딩이면서 에러"처럼 있을 수 없는 조합이 생겼습니다. fetch 상태는 idle · loading · success · error 중 하나뿐입니다. 그래서 Discriminated Union 하나로 바꿨습니다. success일 때만 data에 접근할 수 있어서, 없는 데이터를 읽는 실수를 컴파일 단계에서 걸러냅니다.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router v6', 'TMDB API'],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
    shotLayout: 'single',
    shots: [{ src: '/projects/cine-grid.jpg', alt: 'CineSearch 영화 검색 결과 그리드', wide: true }],
  },
  {
    no: '04',
    title: 'Kanban Board',
    badge: '라이브러리 디버깅',
    tagline: '드래그해서 옮기는 칸반 보드',
    compact: true,
    summary:
      'TO DO · DOING · DONE 세 칸으로 할 일을 관리합니다. 카드 추가·수정·삭제, 칸 사이 이동, 새로고침 후 유지까지 넣었습니다.',
    highlight:
      '드래그 중인 칸에 transform: scale()을 줬더니 카드가 엉뚱한 칸에 떨어졌습니다. 콘솔에는 에러가 전혀 뜨지 않았습니다. 라이브러리는 마우스 위치를 픽셀 좌표로 계산하는데, 부모에 transform이 걸리면 그 기준이 틀어집니다. 칸에는 배경색만 주고 transform은 들려 있는 카드에만 남겼습니다.',
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