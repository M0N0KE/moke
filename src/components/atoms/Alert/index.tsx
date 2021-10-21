/* eslint-disable no-unused-vars */
import React from 'react'
import './alert.css'
import { Colors } from '../../../commons/commons'

export interface AlertProps {
  variant: Colors
  border: boolean
}

const Alert: React.FC<AlertProps> = ({
  border = false,
  variant = Colors.PRIMARY,
  ...rest
}) => {
  return (
    <div className={`alert alert--${variant} ${border && 'alert--border'}`}>
      {rest.children}
    </div>
  )
}

export default Alert
