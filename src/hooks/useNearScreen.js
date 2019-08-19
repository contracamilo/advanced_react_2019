import { useEffect, useState, useRef } from 'react'

/**
 * Custom Hook to create a lazy load for this comp using the IntersectionObserver from the window API (needs polyfill for IE),
 * using dinamic import to use the polifyll on demand
 * @function {Hook} useNearScreen
 * @returns [show, el] if the element is avalable to be rendered in the viwport, ans recover the element reference
 */

export const useNearScreen = () => {
  const [show, setShow] = useState(null)
  const el = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          // console.log('showing')
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(el.current)
    })
  }, [el])

  return [show, el]
}
