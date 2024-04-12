import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: Event) => void,
  acceptClick?: boolean
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }

      handler(event) // Call the handler only if the click is outside of the element passed.
    }
    acceptClick && document.addEventListener('click', listener)
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      acceptClick && document.addEventListener('click', listener)
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler]) // Reload only if ref or handler changes
}
export default useOnClickOutside
