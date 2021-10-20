/* eslint-disable no-unused-vars */
import React from 'react'
import { Colors } from '../../../commons'

import './sticker.css'

/**
 * @description tipado del componente
 */
export interface StickerProps {
  text?: string
  variant?: Colors
}

const Sticker: React.FC<StickerProps> = ({ variant, text = 'TXT' }) => {
  return (
    <div className={`sticker sticker--${variant}`}>
      <span className='sticker__text'>{text}</span>
    </div>
  )
}

export default Sticker
