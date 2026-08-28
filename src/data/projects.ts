export type Shot = {
  src: string
  alt: string
  /** 브라우저별 코덱 지원이 갈려서 webm(VP9) + mp4(H.264) 두 벌을 함께 둡니다. */
  sources?: { src: string; type: string }[]
  poster?: string
  type?: 'video'
  wide?: boolean
}

export type Project = {
  no: string
  title: string
  /** 학습 프로젝트인지 실제로 쓰는 것인지 먼저 밝힙니다. 감추면 오히려 손해입니다. */
  badge: string
  badgeAccent?: boolean
  tagline: string
  summary: string
  problem: string
  decision: string
  result: string
  stack: string[]
  demo: string
  github: string
  shots: Shot[]
  shotLayout: 'pair' | 'single'
}

export const projects: Project[] = [
  {
    no: '01',
    title: 'OY-trans',
    badge: '근무 매장에서 사용 중',
    badgeAccent: true,
    tagline: '인천공항 올리브영 크루가 쓰는 14개 언어 응대 앱',
    summary:
      '제가 일하는 매장에서 쓰고 있는 앱입니다. 자주 나오는 안내 99개를 14개 언어로 넣어두고, 탭 한 번으로 고객 화면에 띄웁니다.',
    problem:
      '택스리펀이나 기내반입 안내는 조건이 여러 개 붙다 보니 영어로도 한 번에 전달하기가 어려웠습니다. 그때마다 번역 앱에 문장을 새로 입력했는데, 같은 질문을 하루에 열 번 받으면 열 번 모두 처음부터 다시 입력하게 되더군요.',
    decision:
      '매장에서 나오는 질문은 대체로 정해져 있습니다. 그래서 매번 번역하는 대신 안내를 미리 문구로 만들어두고, 평소 응대하던 순서를 그대로 옮겨봤습니다. "쇼핑백 필요하세요?" 다음에 가격 두 가지가 뜨고, 고객이 고르시면 확인 문구가 이어지는 식입니다. 다음 문구를 붙일지는 "고객이 답해주셔도 제가 알아듣기 어려운 질문인가"로 정했습니다. 카드를 꺼내면 답이 보이는 질문은 제외해서 99개 중 11개에만 적용했습니다.',
    result:
      '쓰다 보니 한 가지를 더 알게 됐습니다. 가격 두 가지를 보여드리면 고객이 손가락으로 가리키시는데, 어느 쪽인지 애매한 경우가 있었습니다. 직접 눌러 고르시게 했더니 선택이 분명해졌고, 그 확인 문구가 영수증 전 마지막 점검이 됐습니다. 즐겨찾기는 처음에 문구 id만 저장했는데, 문구를 정리하면서 id를 다시 매기자 엉뚱한 문구가 등록되어 있었습니다. 화면이 깨지지 않아 한참 뒤에야 알아챘고, id와 원문을 함께 저장해 둘 다 일치할 때만 유효하도록 바꿨습니다.',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA', 'localStorage', 'Netlify'],
    demo: 'https://oy-trans.netlify.app',
    github: 'https://github.com/rami242424/oy-trans',
    shotLayout: 'pair',
    shots: [
      { src: '/projects/oy-phrases.jpg', alt: 'OY-trans 문구 목록 — 즐겨찾기와 카테고리' },
      { src: '/projects/oy-chain.jpg', alt: 'OY-trans 문구 체인 — 고객이 직접 답을 고르는 화면' },
      { src: '/projects/oy-lang.jpg', alt: 'OY-trans 언어 선택 — 14개 언어를 자국어로 표기' },
      { src: '/projects/oy-map.jpg', alt: 'OY-trans 매장 지도 — 현위치와 목적지를 함께 표시' },
    ],
  },
  {
    no: '02',
    title: 'dayMatch',
    badge: '직접 기획 · 구현',
    tagline: '각자 되는 날을 표시하면, 다 같이 되는 날을 골라주는 웹앱',
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
    summary:
      '키워드 검색, 최신순·별점순 정렬, 상세 페이지 이동, 로딩 중 스켈레톤까지 넣어봤습니다.',
    problem:
      'isLoading, isError 같은 boolean을 하나씩 늘려가며 관리했습니다. 개수가 늘어나자 "로딩이면서 에러"처럼 실제로는 있을 수 없는 조합이 생겼고, 어떤 경우를 어떻게 처리해야 할지 판단하기가 점점 어려워졌습니다.',
    decision:
      'fetch 상태는 실제로 idle, loading, success, error 중 하나이고 동시에 둘일 수는 없습니다. boolean 여러 개 대신 Discriminated Union 하나로 표현해봤더니, success일 때만 data에 접근할 수 있게 되어 없는 데이터를 읽는 실수를 컴파일 단계에서 걸러주었습니다.',
    result:
      'useMovieDetail 훅은 처음에 내부에서 useParams()로 id를 가져오도록 만들었습니다. 그러면 이 훅은 React Router가 있는 화면에서만 쓸 수 있게 되더군요. id를 외부에서 받도록 바꿔 URL 구조를 몰라도 동작하게 했습니다. 스켈레톤은 실제 카드와 같은 크기로 만들어서, 로딩이 끝나도 화면이 밀리지 않습니다.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router v6', 'TMDB API'],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
    shotLayout: 'single',
    shots: [
      { src: '/projects/cine-grid.jpg', alt: 'CineSearch 영화 검색 결과 그리드', wide: true },
      { src: '/projects/cine-detail.jpg', alt: 'CineSearch 영화 상세 페이지', wide: true },
    ],
  },
  {
    no: '04',
    title: 'Kanban Board',
    badge: '학습 프로젝트',
    tagline: '드래그해서 옮기는 칸반 보드',
    summary:
      'TO DO · DOING · DONE 세 칸으로 할 일을 관리합니다. 카드 추가·수정·삭제, 칸 사이 이동, 새로고침 후 유지까지 넣었습니다.',
    problem:
      '드래그 중인 칸을 눈에 띄게 하려고 transform: scale()을 줬더니, 카드가 엉뚱한 칸에 떨어졌습니다. 콘솔에 에러가 전혀 뜨지 않아 원인을 찾는 데 시간이 꽤 걸렸습니다.',
    decision:
      '라이브러리가 마우스 위치를 픽셀 좌표로 계산하는데, 부모에 transform이 걸리면 그 기준이 틀어진다는 것을 확인했습니다. 그래서 칸에는 배경색 변화만 주고, transform은 들려 있는 카드에만 남겼습니다. 들어올리는 쪽과 내려놓는 쪽의 역할을 나눈 셈입니다.',
    result:
      '좌표가 어긋나지 않으면서 의도했던 느낌은 그대로 살릴 수 있었습니다. 스타일용으로 만든 prop이 DOM까지 전달되어 React가 경고를 띄우던 것은 styled-components의 $ 접두사로 막았고, 새로고침하면 카드가 사라지던 것은 recoil-persist로 해결했습니다.',
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
      { src: '/projects/kanban-board.jpg', alt: 'TO DO · DOING · DONE 3열 보드 화면', wide: true },
    ],
  },
]
