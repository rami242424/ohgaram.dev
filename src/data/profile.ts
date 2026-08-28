export const profile = {
  name: '오가람',
  role: 'Frontend Developer',
  email: 'dhrkfkald@naver.com',
  github: 'https://github.com/rami242424',
  githubLabel: 'github.com/rami242424',
  book: 'https://ridibooks.com/books/2773000088',
} as const

/**
 * 히어로 지표.
 * 규칙: 세어서 확인할 수 있고, 다른 지원자에게는 없는 것만 씁니다.
 * "배포한 프로젝트 4개" 같은 건 변별력이 없어서 뺐습니다.
 */
export const stats = [
  { value: 14, unit: '개 언어', label: '근무 매장에서 쓰는 응대 앱' },
  { value: 8, unit: '인 공저', label: '리디북스 출간 자바스크립트 이론서' },
  { value: 4, unit: '년', label: '제조사 구매·생산관리 경력' },
] as const

export const track = [
  {
    period: '2018.06 – 2023.04',
    role: '구매 · 생산관리',
    org: '대상에스티 · 중부에스켐',
    title: '숫자 하나가 틀리면 결재가 멈추는 자리',
    body: '기계로봇공학과를 졸업하고 제조사 구매팀에서 일했습니다. 협력업체 100여 곳의 발주를 맡아, 입고 수량과 단가를 영수증·ERP·업체 청구서 세 군데에서 대조했습니다. 한 군데라도 맞지 않으면 결재가 넘어가지 않다 보니, 확인하는 절차를 만들어두는 습관이 자연스럽게 몸에 뱄습니다.',
    points: [
      '협력업체 100여 곳 발주 전담 및 이행 관리',
      '입고 수량·단가를 영수증 · ERP · 업체 청구서로 3중 대조',
      'ERP → MEMS 시스템 전환 참여 및 현업 적용',
    ],
  },
  {
    period: '2023.07 – 2023.11',
    role: '프론트엔드 전환',
    org: '멋쟁이사자처럼 프론트엔드 스쿨 7기',
    title: '아는 것과 설명하는 것은 달랐습니다',
    body: '수료와 비슷한 시기에 스터디원 여덟 명이 자바스크립트 이론서를 함께 썼고, 저는 집필 총괄을 맡았습니다. 안다고 생각했던 개념도 막상 글로 풀어보면 빈 곳이 보이더군요. 그때부터 새로 배운 내용은 꼭 한 번 정리해보고 넘어갑니다.',
    points: [
      'JavaScript(ES6+) · React · Redux Toolkit',
      '팀 프로젝트 — 운동 기록 앱 Gymnect (React · Recoil · styled-components)',
      '《자바스크립트 개념서 기초부터 핵심까지》 집필 총괄',
    ],
  },
  {
    period: '2023.12 – 현재',
    role: '매장 크루',
    org: '올리브영 인천공항점',
    title: '매일 마주치는 일을 코드로',
    body: '외국인 고객을 영어·중국어·일본어로 응대합니다. 찾으시는 제품의 재고가 없으면 비슷한 제품을 권해드리고, 그것도 맞지 않으면 온라인이나 근처 지점 입고 일정을 확인해 안내합니다. 이 순서를 그대로 옮긴 것이 OY-trans의 문구 체인입니다.',
    points: [
      '다국적 고객의 결제 · 택스리펀 · 할인 적용 응대',
      '재고가 없을 때 대체 상품 → 온라인 → 인근 지점 순으로 안내',
      '그 응대 흐름을 OY-trans의 문구 체인 구조로 구현',
    ],
  },
] as const

export const stack = [
  { group: 'Core', items: ['React 18 / 19', 'TypeScript', 'JavaScript (ES2022)'] },
  {
    group: 'State & Data',
    items: ['useReducer', 'Recoil · recoil-persist', 'Custom Hooks', 'Supabase (Postgres)', 'REST API'],
  },
  { group: 'Styling', items: ['Tailwind CSS', 'styled-components', 'CSS Modules', '반응형 · 접근성'] },
  { group: 'Tooling', items: ['Vite', 'Vitest', 'React Router', 'Git / GitHub', 'Vercel · Netlify'] },
] as const

export const experience = [
  {
    org: '올리브영 인천공항점',
    period: '2023.12 – 현재',
    role: '매장 크루',
    points: [
      '영어 · 중국어 · 일본어로 다국적 고객의 결제 · 택스리펀 · 할인 적용 응대',
      '고객의 피부 타입과 요구를 파악해 상품을 추천하고, 미취급 상품은 온라인·인근 지점까지 안내',
    ],
  },
  {
    org: '중부에스켐',
    period: '2020.04 – 2023.04',
    role: '구매관리 / 주임',
    points: [
      '협력업체 100여 곳 발주 전담 및 이행 관리',
      '입고 수량·단가 검증 (영수증 · ERP · 업체 청구서 대조)',
      '월말·연말 구매 실적 정리 및 결재 보고',
    ],
  },
  {
    org: '대상에스티',
    period: '2018.06 – 2019.05',
    role: '생산 및 구매관리 / 사원',
    points: [
      '생산수량 · 불량수량 일일 집계 및 ERP 입력',
      '자재 입고 수량 ERP 입력 및 재고 현황 관리',
      'ERP → MEMS 시스템 전환 참여 및 현업 적용',
    ],
  },
] as const

export const education = [
  { label: '멋쟁이사자처럼 프론트엔드 스쿨 7기', value: '2023.07 – 2023.11 수료' },
  { label: '인천대학교 기계로봇공학과', value: '2012.03 – 2017.02 졸업' },
  { label: '영국 어학연수', value: 'Sprachcafe Brighton · 2015.02 – 2015.12' },
  { label: '토익스피킹 · 컴퓨터활용능력', value: 'IM3 · 2급' },
]
