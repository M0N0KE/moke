/* eslint-disable no-unused-vars */
import React from 'react'
import { Colors } from '../../../commons'

/**
 * @description tipado del componente
 */
export interface ButtonProps {
  disabled?: boolean
  variant?: Colors
  type?: 'button' | 'submit'
  small?: boolean
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  small = false,
  variant = Colors.DEFAULT,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={rest.disabled}
      onClick={() => rest.handleClick()}
      className={`button button--${variant} ${small && 'button--small'}`}
    >
      {rest.children}
    </button>
  )
}

export default Button
