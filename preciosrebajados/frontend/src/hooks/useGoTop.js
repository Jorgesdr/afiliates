import { useState, useEffect } from 'react'

export function useGotop () {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      checkScrollTop()
    })
  }, [showScroll])

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return { scrollTop, showScroll }
}
