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
 * 규칙: 저장소나 이력에서 직접 셀 수 있고, 다른 지원자에게는 없는 것만 씁니다.
 * 99 / 14 는 phrases.json, langs.ts 에서 그대로 확인됩니다.
 */
export const stats = [
  { value: 99, unit: '개 문구', label: '14개 언어로 정리한 매장 응대 문구' },
  { value: 60, unit: '여 명', label: '앱을 공유한 매장 크루 단체방' },
  { value: 4, unit: '년', label: '제조사 구매·생산관리 경력' },
] as const

export const track = [
  {
    period: '2018.06 – 2023.04',
    role: '구매 · 생산관리',
    org: '대상에스티 · 중부에스켐',
    title: '틀리면 회사가 돈을 더 내거나 덜 내는 자리',
    body: '기계로봇공학과를 졸업하고 제조사 구매팀에서 일했습니다. 협력업체 100여 곳의 발주를 맡았는데, 입고 수량이나 단가가 한 자리만 어긋나도 회사가 실제로 돈을 더 내거나 덜 내게 됩니다. 그래서 발주 건마다 영수증·ERP·업체 청구서를 대조하고 결재까지 올렸습니다. 예외를 만들 수 있는 일이 아니었습니다.',
    points: [
      '협력업체 100여 곳 발주 전담 및 이행 관리',
      '발주 건마다 영수증 · ERP · 업체 청구서 3중 대조 후 결재',
      '수량이 맞지 않으면 업체에 재확인·세금계산서 재발행 요청',
    ],
  },
  {
    period: '2023.07 – 2023.11',
    role: '프론트엔드 전환',
    org: '멋쟁이사자처럼 프론트엔드 스쿨 7기',
    title: '아는 것과 설명하는 것은 달랐습니다',
    body: '수료와 비슷한 시기에 스터디원 여덟 명이 자바스크립트 이론서를 함께 썼고, 저는 집필 총괄을 맡았습니다. 안다고 생각했던 개념도 막상 글로 풀어보면 빈 곳이 보이더군요.',
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

/**
 * 괄호 안 숫자는 실제로 사용한 프로젝트 수입니다.
 * 한 프로젝트에서만 써본 것을 매일 쓰는 것과 같은 줄에 두면
 * 면접에서 기대와 실제 사이에 간극이 생겨서, 층을 나눠 표기합니다.
 */
export const stack = [
  { group: '매 프로젝트에서', items: ['React 18 / 19', 'TypeScript', 'JavaScript (ES2022)', 'Vite', 'Git / GitHub'] },
  { group: '스타일', items: ['Tailwind CSS (2)', 'styled-components (1)', 'CSS Modules (1)', '반응형 · 접근성'] },
  { group: '상태 · 데이터', items: ['useReducer (1)', 'Recoil · recoil-persist (1)', 'Custom Hooks', 'Supabase (1)', 'REST API'] },
  { group: '테스트 · 배포', items: ['Vitest (1)', 'React Router (2)', 'PWA (1)', 'Vercel · Netlify'] },
] as const

export const experience = [
  {
    org: '올리브영 인천공항점',
    period: '2023.12 – 현재',
    role: '매장 크루 · 주 3일 근무',
    points: [
      '영어 · 중국어 · 일본어로 다국적 고객의 결제 · 택스리펀 · 할인 적용 응대',
      '고객의 피부 타입과 요구를 파악해 상품을 추천하고, 미취급 상품은 온라인·인근 지점까지 안내',
      '응대용 번역 앱 OY-trans 제작 — 점장·직원 동의를 거쳐 크루 단체방에 공유',
    ],
  },
  {
    org: '중부에스켐',
    period: '2020.04 – 2023.04',
    role: '구매관리 / 주임',
    points: [
      '협력업체 100여 곳 발주 전담 및 이행 관리',
      '입고 수량·단가 검증 (영수증 · ERP · 업체 청구서 대조) 및 결재',
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
      'ERP → MEMS 시스템 전환 참여',
    ],
  },
] as const

export const education = [
  { label: '멋쟁이사자처럼 프론트엔드 스쿨 7기', value: '2023.07 – 2023.11 수료' },
  { label: '인천대학교 기계로봇공학과', value: '2012.03 – 2017.02 졸업' },
  { label: '영국 어학연수', value: 'Sprachcafe Brighton · 2015.02 – 2015.12' },
  { label: '토익스피킹 · 컴퓨터활용능력', value: 'IM3 · 2급' },
]
