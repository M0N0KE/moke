import React from 'react'
import './typography.css'

export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Typography: React.FC<TypographyProps> = ({ variant, ...rest }) => {
  return <span className={variant}>{rest.children}</span>
}

export default Typography
