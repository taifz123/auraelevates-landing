import { useEffect, useRef, useState } from 'react'
import CONFIG from '../data/config'

export default function MediaPlayer({
  className = '',
  autoPlay = true,
  compact = false,
  label = 'AuraElevates demonstration film',
}) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !autoPlay) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [autoPlay])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => undefined)
    } else {
      video.pause()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <figure
      className={`media-player ${compact ? 'media-player--compact' : ''} ${className}`.trim()}
    >
      <video
        ref={videoRef}
        muted={muted}
        loop
        playsInline
        preload={autoPlay ? 'metadata' : 'none'}
        poster={CONFIG.media.demo.poster}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={CONFIG.media.demo.webm} type="video/webm" />
        <source src={CONFIG.media.demo.mp4} type="video/mp4" />
      </video>

      <div className="media-player__edge" aria-hidden="true" />
      <div className="media-player__status" aria-hidden="true">
        <span />
        Demonstration film
      </div>
      <div className="media-player__controls">
        <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause film' : 'Play film'}>
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 6v12M16 6v12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 7 7 5-7 5V7Z" />
            </svg>
          )}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? 'Unmute film' : 'Mute film'}>
          {muted ? 'Sound off' : 'Sound on'}
        </button>
      </div>
      <figcaption className="visually-hidden">
        On-screen text reads: What if the camera disappeared? Not watched. Experienced.
      </figcaption>
    </figure>
  )
}
