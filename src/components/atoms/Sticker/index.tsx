/* eslint-disable no-unused-vars */
import React from 'react'
import './sticker.css'

/**
 * @description enum de colores
 */
export enum StickerColors {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  SUCCESS = 'success',
  WARNING = 'warning',
  SUCCESS_LIGHT = 'success-light',
  PRIMARY_LIGHT = 'primary-light',
  WARNING_LIGHT = 'warning-light'
}

/**
 * @description tipado del componente
 */
export interface StickerProps {
  text?: string
  color?: StickerColors
}

const Sticker: React.FC<StickerProps> = ({ color, text = 'TXT' }) => {
  return (
    <div className={`sticker sticker--${color}`}>
      <span className='sticker__text'>{text}</span>
    </div>
  )
}

export default Sticker
