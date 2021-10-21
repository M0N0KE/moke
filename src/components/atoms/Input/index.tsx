import React from 'react'
import './input.css'

export interface InputProps {
  name?: string
  disabled: boolean
  placeholder?: string
  type: 'text' | 'password' | 'email'
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type = 'text',
  disabled = false
}) => {
  return (
    <input
      type={type}
      name={name}
      disabled={disabled}
      className='input'
      placeholder={placeholder}
    />
  )
}

export default Input
