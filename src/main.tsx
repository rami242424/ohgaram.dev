import { createRoot } from 'react-dom/client'
// Pretendard 를 CDN 대신 의존성으로 직접 번들합니다.
// dynamic-subset 은 한글 자주 쓰는 글자부터 잘라 놓은 92개 조각이라,
// 브라우저가 실제로 화면에 쓰인 글자에 해당하는 파일만 내려받습니다.
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <App />
)