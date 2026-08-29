import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Publication() {
  return (
    <section className="section shell" id="publication">
      <Reveal className="book">
        <div className="book__inner">
          <p className="t-label book__label">Publication · 2023.10</p>
          <h2>개발자 8명과 책을 썼습니다</h2>
          <p className="book__title-line">《자바스크립트 개념서 기초부터 핵심까지》 · 리디북스</p>
          <p>
            스터디에서 시작해 여덟 명이 나눠 쓴 자바스크립트 이론서입니다. 저는 집필 총괄을 맡아
            기획부터 편집·검수·배포까지 마무리를 챙겼습니다. 글로 설명하려다 보니 제가 대강 알고
            넘어갔던 부분이 하나씩 드러나더군요.
          </p>
          <p className="book__meta">리디북스 무료 배포 · 개발자 8인 공저</p>
          <a
            className="btn btn--primary book__cta"
            href={profile.book}
            target="_blank"
            rel="noopener noreferrer"
          >
            리디북스에서 보기<span className="sr-only"> (새 창)</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
