export const profile = {
  name: '오가람',
  role: 'Frontend Developer',
  email: 'dhrkfkald@naver.com',
  github: 'https://github.com/rami242424',
  githubLabel: 'github.com/rami242424',
  book: 'https://ridibooks.com',
} as const

/** 히어로 지표 — 전부 저장소나 이력에서 직접 셀 수 있는 값만 씁니다. */
export const stats = [
  { value: 4, unit: '개', label: '배포·운영 중인 프로젝트' },
  { value: 14, unit: '개 언어', label: 'OY-trans 지원 언어' },
  { value: 26, unit: '개', label: 'dayMatch 단위 테스트' },
] as const

export const track = [
  {
    period: '2018.06 – 2023.04',
    role: '구매·생산관리',
    org: '대상에스티 · 중부에스켐',
    title: '숫자가 틀리면 돈이 틀어지는 자리',
    body: '100여 개 협력업체 발주를 전담하며, 입고 수량과 단가를 영수증·ERP·업체 청구서 세 곳에서 대조했습니다. 검증 단계를 만들어두는 습관이 여기서 생겼습니다.',
    points: [
      '100여 개 협력업체 발주 전담 및 이행 관리',
      '입고 수량·단가 3중 대조 검증 (영수증 · ERP · 청구서)',
      'ERP → MEMS 시스템 전환 참여 및 현업 적용',
    ],
  },
  {
    period: '2023.07 – 2023.11',
    role: '프론트엔드 전환',
    org: '멋쟁이사자처럼 프론트엔드 스쿨 7기',
    title: '배운 것을 설명할 수 있을 때까지',
    body: '수료와 같은 시기에 8인 스터디의 집필 총괄을 맡아 자바스크립트 개념서를 출간했습니다. 남에게 설명할 수 있어야 아는 것이라는 기준이 이때 생겼습니다.',
    points: [
      'HTML/CSS · JavaScript(ES6+) · React · Redux Toolkit',
      '팀 프로젝트: 운동 기록 앱 Gymnect (React · Recoil · styled-components)',
      '《자바스크립트 개념서 기초부터 핵심까지》 리디북스 출간 — 집필 총괄',
    ],
  },
  {
    period: '2023.12 – 현재',
    role: '매장 크루',
    org: '올리브영 인천공항점',
    title: '현장의 페인 포인트를 코드로',
    body: '매주 부딪히던 언어 장벽을 직접 도구(OY-trans)로 만들어 해결했고, 지금도 근무 매장에서 실사용하며 현장 피드백으로 고치고 있습니다.',
    points: [
      '영어·일어·중국어 다국적 고객 응대',
      '매장 재고 응대 4단계 검증 프로세스 자체 구축',
      'OY-trans 제작 후 실사용 — 체인 구조를 현장 피드백으로 확장',
    ],
  },
] as const

export const principles = [
  {
    no: '01',
    title: '맡은 일은 끝까지',
    body: '결근·지각 없이 5년 이상 근무한 기록이 있습니다. 같은 태도로 코드를 짜고, 시작한 기능은 배포까지 끌고 갑니다.',
  },
  {
    no: '02',
    title: '실수를 시스템으로',
    body: '한번 발생한 실수는 다음에 일어나지 않도록 검증 단계를 만듭니다. 매장 재고 응대 4단계 검증도, 코드의 단위 테스트도 같은 이유입니다.',
  },
  {
    no: '03',
    title: '막힐 지점을 먼저',
    body: '매장에서 고객 응대를 단계화해 오안내를 줄였던 방식이, 지금은 에러 케이스를 미리 분기 처리하는 방식으로 이어지고 있습니다.',
  },
] as const

export const stack = [
  { group: 'Core', items: ['React 18 / 19', 'TypeScript', 'JavaScript (ES2022)'] },
  {
    group: 'State & Data',
    items: ['useReducer', 'Recoil · recoil-persist', 'Custom Hooks', 'Supabase (Postgres)', 'REST API'],
  },
  { group: 'Styling', items: ['Tailwind CSS', 'styled-components', 'CSS Modules', 'Responsive · a11y'] },
  { group: 'Tooling', items: ['Vite', 'Vitest', 'React Router', 'Git / GitHub', 'Vercel · Netlify'] },
] as const

export const experience = [
  {
    org: '올리브영 인천공항점',
    period: '2023.12 – 현재',
    role: '매장 크루 / 무기계약직',
    points: [
      '외국인 고객 응대 (영어 · 일어 · 중국어 다국적 고객층)',
      '매장 재고 응대 시스템화 — 4단계 검증 프로세스 자체 구축',
    ],
  },
  {
    org: '중부에스켐',
    period: '2020.04 – 2023.04',
    role: '구매관리 / 주임',
    points: [
      '100여 개 협력업체 발주 전담 및 이행 관리',
      '입고 수량·단가 검증 (영수증 · ERP · 업체 청구서 대조)',
      '월말·연말 구매 실적 정리 및 결재 보고',
    ],
  },
  {
    org: '대상에스티',
    period: '2018.06 – 2019.05',
    role: '생산 및 구매관리 / 사원',
    points: [
      '생산수량·불량수량 일일 집계 및 ERP 입력',
      '자재 입고 수량 ERP 입력 및 재고 현황 관리',
      'ERP → MEMS 시스템 전환 참여 및 현업 적용',
    ],
  },
] as const

export const education = [
  { label: '멋쟁이사자처럼 프론트엔드 스쿨 7기', value: '2023.07 – 2023.11 수료' },
  { label: '영국 어학연수', value: 'Sprachcafe Brighton · 2015.02 – 2015.12' },
  { label: '토익스피킹', value: 'IM3' },
  { label: '컴퓨터활용능력', value: '2급' },
]
