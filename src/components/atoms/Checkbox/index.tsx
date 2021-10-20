/* eslint-disable no-unused-vars */
import React, { useState, ChangeEvent } from 'react'

export interface CheckboxProps {
  disabled?: boolean
  checked?: boolean
  htmlFor?: string
  label?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false
}) => {
  const [currentChecked, setCurrentChecked] = useState(checked)

  const changeHandler = (_event: ChangeEvent<HTMLElement>) => {
    setCurrentChecked(!currentChecked)
  }
  return (
    <>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={changeHandler}
      />
    </>
  )
}

export default Checkbox
