import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Publication() {
  return (
    <section className="section shell" id="publication">
      <Reveal className="book">
        <div className="book__inner">
          <p className="t-label book__label">Publication · 2023.10</p>
          <h2>개발자 8명과 책을 썼습니다</h2>
          <p className="book__title-line">
            《자바스크립트 개념서 기초부터 핵심까지》 · 리디북스 · 개발/프로그래밍 인기순위 1위
          </p>
          <p>
            스터디로 시작해 여덟 명이 함께 쓴 자바스크립트 개념서입니다. 기초부터 핵심 이론까지
            예시를 붙여 자세히 설명했습니다. 초보 개발자 입장에서 정리한 덕분인지 리디북스
            개발/프로그래밍 인기순위 1위에 올랐습니다.
          </p>
          <p className="book__meta">리디북스 무료 배포 · 개발자 8인 공저 · 집필 총괄</p>
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