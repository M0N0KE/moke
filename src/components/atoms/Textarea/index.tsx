import React from 'react'
import './textarea.css'

/**
 * @description tipado.
 */
export interface TextareaProps {
  error: boolean
  disabled: boolean
  placeholder?: string
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  error = false,
  disabled = false,

  ...rest
}) => {
  return (
    <textarea
      className={`textarea textarea--${error && 'error'}`}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue='kksks'
    />
  )
}

export default Textarea
