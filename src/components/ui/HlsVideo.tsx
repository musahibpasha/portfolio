import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

export const VIDEO_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export function HlsVideo({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(VIDEO_SRC)
      hls.attachMedia(v)
      return () => hls.destroy()
    }
    if (v.canPlayType('application/vnd.apple.mpegurl')) v.src = VIDEO_SRC
  }, [])
  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${className}`}
    />
  )
}
