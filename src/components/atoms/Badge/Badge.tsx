import React from 'react'

export interface BadgeProps {
  text: string
  color: string
}
const Badge = ({ text, color }: BadgeProps) => {
  return <span className={color}>{text}</span>
}

export default Badge
