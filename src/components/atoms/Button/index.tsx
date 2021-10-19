import React from 'react'

export interface ButtonProps {
  text: string
  color: string
}
const Button = ({ text, color }: ButtonProps) => {
  return <button className={color}>{text}</button>
}

export default Button
