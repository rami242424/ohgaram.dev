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
    title: 'dayMatch',
    tagline: '여러 명이 되는 날짜를 표시하면, 모두가 되는 날을 찾아주는 일정 조율 웹앱',
    summary:
      '로그인 없이 방 코드 하나로 모이는 구조입니다. 각자 달력에 좋아요·괜찮아요·바빠요를 찍으면, 전원 가능한 날부터 순서대로 묶어서 보여줍니다.',
    problem:
      '선택을 점수로 합산하면 "좋아요 3 + 바빠요 1"과 "좋아요 2 + 바빠요 0"이 같은 점수가 됩니다. 하지만 한 명이라도 못 오면 그날 약속은 성립하지 않습니다. 합산 방식으로는 이 차이를 표현할 수 없었습니다.',
    decision:
      '"바빠요"를 점수에서 빼고, 그룹을 나누는 필터로만 썼습니다. 그룹 안에서만 가능 인원 수 → 좋아요 수 순으로 정렬합니다. 동점 처리 같은 경계 조건은 눈으로 확인하기 어려워서, 순수 함수로 분리한 뒤 Vitest 단위 테스트 26개로 직접 검증했습니다.',
    result:
      '전원 가능 / 1명만 빼고 가능 / 2명 이상 불가 3그룹과 히트맵 달력·리스트 두 가지 보기를 제공합니다. 배포 후 Supabase 테이블의 RLS가 꺼져 있어 anon key만으로 전체 데이터 접근이 가능하다는 것을 발견해, 앱이 실제로 쓰는 동작만 정책으로 허용하도록 고쳤습니다.',
    stack: ['React 19', 'React Router 7', 'Supabase', 'Vitest', 'Vercel'],
    demo: 'https://day-match-lime.vercel.app',
    github: 'https://github.com/rami242424/dayMatch',
    shotLayout: 'pair',
    shots: [
      {
        src: '/projects/daymatch-heatmap.jpg',
        alt: 'dayMatch 결과 화면 — 날짜별 가능 인원을 진하기로 표시한 히트맵 달력',
      },
      {
        src: '/projects/daymatch-list.jpg',
        alt: 'dayMatch 결과 화면 — 전원 가능 / 1명만 빼고 가능으로 나뉜 리스트',
      },
      {
        src: '/projects/daymatch-calendar.jpg',
        alt: 'dayMatch 입력 화면 — 색과 함께 ✕ △ ◎ 기호를 병행 표기한 달력',
      },
      {
        src: '/projects/daymatch-confirm.jpg',
        alt: 'dayMatch — 같은 이름으로 재참여할 때 뜨는 본인 확인 화면',
      },
    ],
  },
  {
    no: '02',
    title: 'OY-trans',
    tagline: '올리브영 인천공항점 크루를 위한 14개 언어 고객 응대 도구',
    summary:
      '근무 중인 매장에서 실제로 쓰고 있는 도구입니다. 자주 나오는 안내 99개를 14개 언어로 미리 정리해두고, 탭 한 번으로 고객 화면에 띄웁니다.',
    problem:
      '택스리펀이나 기내반입처럼 조건이 여러 개 붙는 안내는 영어로도 온전히 전달하기 어렵습니다. 크루는 매번 번역 앱에 문장을 새로 입력했고, 같은 질문을 하루에 열 번 받아도 열 번 처음부터 다시 시작했습니다.',
    decision:
      '매장에서 반복되는 상황은 대부분 정해져 있다는 점에서 출발점을 바꿨습니다. 안내를 미리 문구로 정리하고, 고객이 답을 선택하면 다음 문구로 이어지는 체인을 붙였습니다. 체인 기준은 "고객의 답을 크루가 알아들을 수 없는 질문인가" — 카드를 꺼내면 답이 보이는 질문은 제외해, 99개 중 11개에만 적용했습니다.',
    result:
      '실사용하면서 체인의 역할이 "정보 전달"에서 "선택 확정"까지 넓어졌습니다. 즐겨찾기는 처음에 문구 id만 저장했는데, 문구를 정리하며 id를 재부여하자 엉뚱한 문구가 조용히 표시됐습니다. id와 원문을 함께 저장해 둘 다 일치할 때만 유효하게 처리하고, 구버전 데이터 마이그레이션도 넣었습니다.',
    stack: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'PWA', 'localStorage', 'Netlify'],
    demo: 'https://oy-trans.netlify.app',
    github: 'https://github.com/rami242424/oy-trans',
    shotLayout: 'pair',
    shots: [
      { src: '/projects/oy-phrases.jpg', alt: 'OY-trans 문구 목록 — 즐겨찾기와 카테고리' },
      { src: '/projects/oy-lang.jpg', alt: 'OY-trans 언어 선택 화면 — 14개 언어를 자국어로 표기' },
      { src: '/projects/oy-chain.jpg', alt: 'OY-trans 문구 체인 — 고객이 직접 답을 선택하는 화면' },
      { src: '/projects/oy-map.jpg', alt: 'OY-trans 매장 지도 — 현위치와 목적지를 함께 표시' },
    ],
  },
  {
    no: '03',
    title: 'CineSearch',
    tagline: 'TMDB API 기반 영화 검색 및 상세 정보 조회 앱',
    summary:
      '키워드 검색, 최신순·별점순 정렬, 상세 페이지 이동, 로딩 중 스켈레톤 UI를 포함합니다.',
    problem:
      'isLoading, isError 같은 boolean 플래그를 여러 개 두고 관리하기 시작했는데, 상태 조합이 늘어날수록 "로딩이면서 에러일 때"처럼 의미가 모호한 케이스가 생기고 예외 처리가 복잡해졌습니다.',
    decision:
      'fetch 단계는 실제로는 idle · loading · success · error 중 하나에만 속하는 배타적 상태라는 점에 착안해, 이를 Discriminated Union 타입으로 표현했습니다. success 상태일 때만 data에 접근 가능하도록 타입 레벨에서 강제되기 때문에 런타임 에러 가능성을 줄일 수 있었습니다.',
    result:
      '커스텀 훅 useMovieDetail은 처음에 훅 내부에서 useParams()로 id를 가져왔는데, 이러면 훅이 React Router의 URL 구조에 묶입니다. id를 외부에서 인자로 주입받도록 시그니처를 바꿔, 훅 자체는 URL 구조를 모르고도 동작하게 분리했습니다. 스켈레톤은 실제 카드와 동일한 레이아웃으로 만들어 로딩 완료 시점의 레이아웃 이동을 없앴습니다.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router v6', 'TMDB API'],
    demo: 'https://movie-app-zeta-ruby.vercel.app/',
    github: 'https://github.com/rami242424/movie-app',
    shotLayout: 'single',
    shots: [
      { src: '/projects/cine-grid.jpg', alt: 'CineSearch 영화 검색 결과 그리드 화면', wide: true },
      { src: '/projects/cine-detail.jpg', alt: 'CineSearch 영화 상세 페이지 화면', wide: true },
    ],
  },
  {
    no: '04',
    title: 'Kanban Board',
    tagline: '@hello-pangea/dnd 기반 드래그앤드롭 칸반 보드',
    summary:
      'TO DO · DOING · DONE 세 컬럼으로 할 일을 관리합니다. 카드 CRUD, 컬럼 내·컬럼 간 이동, 새로고침 후 상태 유지를 지원합니다.',
    problem:
      '드래그 중인 컬럼에 transform: scale()로 강조 효과를 주자, 카드를 놓을 때 위치가 흔들리거나 잘못된 칸에 들어갔습니다. 콘솔 에러가 전혀 없어서 원인을 찾는 데 시간이 걸렸습니다.',
    decision:
      '라이브러리가 드래그 위치를 픽셀 좌표로 계산하는데, 부모에 transform이 걸리면 좌표 기준이 어긋난다는 것을 확인했습니다. 컬럼(Droppable)에는 transform 대신 background 색 변화로 상태를 표현하고, transform은 개별 카드(Draggable)에만 적용했습니다. 들어올려지는 카드와 내려놓는 영역의 역할을 분리한 것입니다.',
    result:
      '좌표가 깨지지 않으면서 의도한 UX를 구현했습니다. 함께 겪은 문제 두 가지도 정리했습니다 — 스타일 전용 prop이 DOM으로 새어 React 경고를 띄우던 것은 styled-components의 transient props($isDragging)로 막았고, 새로고침 시 카드가 사라지던 것은 recoil-persist로 해결하면서 localStorage 값이 atom 기본값보다 우선한다는 점을 학습했습니다.',
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
