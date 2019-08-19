import { useState } from 'react'

/**
 * Custom Hook: useLocalStorage to save the component state in the browser local storage
 * @function useLocalStorage
 * @param key object identificator
 * @param initial value number of likes
 * @returns array
 */

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(e)
      return initialValue
    }
  })

  /**
   * Set items in the local storage
   * @function setLocalStorage
   * @param value the value to storage and change the state
   * @return [storedValue, setLocalStorage] an array the stored value and a way to update the local storage
   */

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
