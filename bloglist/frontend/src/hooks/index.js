import { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const inputVars = {
    type,
    value,
    onChange,
  }

  return {
    type,
    value,
    onChange,
    reset,
    inputVars,
  }
}

export { useField }