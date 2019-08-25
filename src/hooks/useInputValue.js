import { useState } from 'react'

/**
 * Hook to update the state of the inputs in a form
 * @function useInputValue
 * @returns {value, onChange}
 */
export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}
