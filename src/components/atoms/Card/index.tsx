/* eslint-disable no-unused-vars */
import React from 'react'
import './card.css'

/**
 * @description enum para controlar la dirección de la sombra
 */
export enum ShadowDirection {
  LEFT = 'left',
  RIGHT = 'right'
}

/**
 * @description para colores de las Card
 */
export enum CardColors {
  DEFAULT = 'default',
  PRIMARY = 'primary'
}

/**
 * @description interfaz de tipado del componente
 */
export interface CardProps {
  color?: CardColors
  shadow?: boolean
  shadowDirection?: ShadowDirection
  border?: boolean
  children: any
}

export const svgShadow = (shadowDirection: string) => (
  <svg
    fill='currentColor'
    role='img'
    aria-hidden='true'
    className={`card__shadow card__shadow--${shadowDirection}`}
  >
    <pattern
      id='CheckerDense-pattern-1'
      x='0'
      y='0'
      width='4'
      height='4'
      patternUnits='userSpaceOnUse'
    >
      <rect width='1' height='1' fill='currentColor' />
      <rect x='2' y='2' width='1' height='1' fill='currentColor' />
    </pattern>
    <rect width='100%' height='100%' fill='url(#CheckerDense-pattern-1)' />
  </svg>
)

const Card: React.FC<CardProps> = ({
  children,
  border = true,
  shadow = false,
  color = CardColors.DEFAULT,
  shadowDirection = ShadowDirection.LEFT
}) => {
  return (
    <div className={`card bg-${color} ${border && 'border'}`}>
      {shadow && svgShadow(shadowDirection)}
      <div className='card__content'>{children}</div>
    </div>
  )
}

export default Card
