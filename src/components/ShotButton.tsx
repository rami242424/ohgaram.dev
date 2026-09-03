import type { Shot } from '../data/projects'

/**
 * 썸네일은 잘라서(cover) 보여줍니다.
 * 어디를 남길지는 이미지마다 달라서, 데이터의 focus 값으로 정합니다.
 * 목록 화면은 위쪽이 중요하고, 고객 화면은 글이 가운데 있어서 top 으로 자르면 사라집니다.
 */
export default function ShotButton({
  shot,
  onOpen,
  eager,
}: {
  shot: Shot
  onOpen: (shot: Shot) => void
  eager?: boolean
}) {
  const objectPosition = shot.focus === 'center' ? 'center' : 'top center'

  return (
    <button
      type="button"
      className={`shot${shot.wide ? ' shot--wide' : ''}`}
      onClick={() => onOpen(shot)}
      aria-label={`${shot.alt} — 크게 보기`}
    >
      {shot.type === 'video' ? (
        <video
          poster={shot.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ objectPosition }}
        >
          {(shot.sources ?? [{ src: shot.src, type: 'video/mp4' }]).map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        <img
          src={shot.src}
          alt={shot.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ objectPosition }}
        />
      )}
    </button>
  )
}