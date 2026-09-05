import type { Shot } from '../data/projects'

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