export const profile = {
  name: '오가람',
  role: 'Frontend Developer',
  email: 'dhrkfkald@naver.com',
  github: 'https://github.com/rami242424',
  githubLabel: 'github.com/rami242424',
  book: 'https://ridibooks.com/books/2773000088',
} as const

export const stats = [
  { value: 99, unit: '개 문구', label: '매장에서 자주 쓰는 응대 문구' },
  { value: 14, unit: '개 언어', label: '고객 국적 분포를 보고 선정' },
  { value: 88, unit: '명', label: '앱을 공유한 크루 단체방 인원' },
] as const

export const stack = [
  { group: '매 프로젝트에서', items: ['React 18 / 19', 'TypeScript', 'JavaScript (ES2022)', 'Vite', 'Git / GitHub'] },
  { group: '스타일', items: ['Tailwind CSS', 'styled-components', 'CSS Modules', '반응형 · 접근성'] },
  { group: '상태 · 데이터', items: ['useReducer', 'Recoil · recoil-persist', 'Custom Hooks', 'Supabase', 'REST API'] },
  { group: '테스트 · 배포', items: ['Vitest', 'React Router', 'PWA', 'Vercel · Netlify'] },
] as const

export const experience = [
  {
    org: '올리브영 인천공항점',
    period: '2023.12 – 현재',
    role: '매장 크루',
    title: '응대 문구 99개를 앱으로 만들어 매장 88명에게 공유',
    body: '택스리펀이나 기내반입처럼 조건이 붙는 안내는 매번 번역기에 같은 문장을 다시 입력해야 했습니다. 반복되는 안내를 문구로 정리해 앱으로 만들었고, 점장·직원 동의를 거쳐 매장 단체방에 공유했습니다. 재고가 없을 때 대체 상품을 권하는 응대 순서는 그대로 앱의 문구 체인이 됐습니다.',
    points: [
      '영어 · 중국어 · 일본어로 다국적 고객의 결제 · 택스리펀 · 할인 적용 응대',
      '고객의 피부 타입과 요구를 파악해 상품을 추천하고, 미취급 상품은 온라인·인근 지점까지 안내',
      '응대용 번역 앱 OY-trans 제작 — 점장·직원 동의를 거쳐 매장 단체방 88명에게 공유',
    ],
  },
  {
    org: '멋쟁이사자처럼 프론트엔드 스쿨 7기',
    period: '2023.07 – 2023.11',
    role: '수료 · 프론트엔드 전환',
    title: '8인 공저 자바스크립트 이론서 집필 총괄 — 리디북스 인기순위 1위',
    body: '수료 무렵 여덟 명이 파트를 나눠 이론서를 썼습니다. 제 파트를 쓰면서 원고 편집·검수와 표지 선정, 배포까지 마무리를 맡았습니다. 개념을 글로 설명해야 하니 대강 알고 넘어갔던 부분이 하나씩 드러났고, 그때부터 동작 확인에서 멈추지 않고 원리를 확인하게 됐습니다.',
    points: [
      'JavaScript(ES6+) · React · Redux Toolkit',
      '팀 프로젝트 — 운동 기록 앱 Gymnect (React · Recoil · styled-components)',
      '《자바스크립트 개념서 기초부터 핵심까지》 집필 총괄 — 원고 편집·검수, 표지 선정, 배포',
    ],
  },
  {
    org: '중부에스켐',
    period: '2020.04 – 2023.04',
    role: '구매관리 / 주임',
    title: '협력업체 100여 곳 발주 전담 — 3중 대조로 수량·단가 검증',
    body: '입고 수량이나 단가가 한 자리만 어긋나도 회사가 실제로 돈을 더 내거나 덜 내는 자리였습니다. 발주 건마다 영수증·ERP·업체 청구서를 대조해 결재를 올렸고, 맞지 않으면 업체에 재확인과 세금계산서 재발행을 요청했습니다.',
    points: [
      '협력업체 100여 곳 발주 전담 및 이행 관리',
      '입고 수량·단가 검증 (영수증 · ERP · 업체 청구서 3중 대조) 및 결재',
      '수량이 맞지 않으면 업체에 재확인 · 세금계산서 재발행 요청',
      '월말 · 연말 구매 실적 정리 및 결재 보고',
    ],
  },
  {
    org: '대상에스티',
    period: '2018.06 – 2019.05',
    role: '생산 및 구매관리 / 사원',
    title: '생산·자재 데이터 일일 집계 및 ERP → MEMS 전환 참여',
    body: '기계로봇공학과를 졸업하고 제조 현장에서 첫 일을 시작했습니다. 생산수량과 불량수량을 매일 집계해 ERP에 입력하고 자재 입고와 재고 현황을 관리했습니다. 사내 시스템을 ERP에서 MEMS로 옮기는 작업에도 참여했습니다.',
    points: [
      '생산수량 · 불량수량 일일 집계 및 ERP 입력',
      '자재 입고 수량 ERP 입력 및 재고 현황 관리',
      'ERP → MEMS 시스템 전환 참여',
    ],
  },
] as const

export const education = [
  { label: '인천대학교 기계로봇공학과', value: '2012.03 – 2017.02 졸업' },
  { label: '영국 어학연수', value: 'Sprachcafe Brighton · 2015.02 – 2015.12' },
  { label: '토익스피킹 · 컴퓨터활용능력', value: 'IM3 · 2급' },
]