import { useState, useRef, useEffect } from 'react'

export function useNearDiv (options) {
  const [isNearDiv, setIsNearDiv] = useState(false)
  const fromRef = useRef()

  const callBackFunction = (entries, options, observer) => {
    const [entry] = entries
    setIsNearDiv(entry.isIntersecting)
    alert('isNearDiv: ' + entry.isIntersecting)
    console.log(entry.isIntersecting)
    console.log(entry.boundingClientRect)
    console.log(entry.intersectionRatio)
    console.log(entry.rootBounds)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options)
    if (fromRef.current) {
      observer.observe(fromRef.current)
      console.log(fromRef.current)
    }
    return () => {
      if (fromRef.current) {
        observer.unobserve(fromRef.current)
      }
    }
  }, [isNearDiv])
  return { fromRef, options }
}
