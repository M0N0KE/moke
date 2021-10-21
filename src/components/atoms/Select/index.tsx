import React from 'react'
import './select.css'

export interface SelectProps {
  options: Array<any>
  variant: 'base' | 'small'
  disabled: boolean
}

const svgArrow = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    role='img'
    aria-hidden='true'
    className='select__arrow'
  >
    <title>Arrow Chevron Down Icon</title>
    <path
      d='M23.25 7.311L12.53 18.03a.749.749 0 01-1.06 0L.75 7.311'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
  </svg>
)
const Select: React.FC<SelectProps> = ({
  disabled = false,
  variant = 'base'
}) => {
  return (
    <div className='select__container'>
      <div className='select__arrowContainer'>{svgArrow}</div>
      <select disabled={disabled} className={`select select--${variant}`}>
        <option value=''>Zapatillas Nike $123.990</option>
      </select>
    </div>
  )
}

export default Select
