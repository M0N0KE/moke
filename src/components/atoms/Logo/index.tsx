/* eslint-disable no-unused-vars */
import React from 'react'

import './logo.css'
import Sticker from '../Sticker'

import monoke from './images/monoke.svg'
import monokeWhite from './images/monoke-white.svg'
import monokeIso from './images/monoke-iso.svg'
import monokeIsoWhite from './images/monoke-iso-white.svg'

export interface LogoProps {
  variant: 'monoke' | 'monoke-w' | 'monoke-iso' | 'monoke-iso-w'
}

const Logo: React.FC<LogoProps> = ({ variant = 'monoke' }) => {
  const mapImages: Map<string, string> = new Map()
  mapImages.set('monoke', monoke)
  mapImages.set('monoke-w', monokeWhite)
  mapImages.set('monoke-iso', monokeIso)
  mapImages.set('monoke-iso-w', monokeIsoWhite)
  // return <img src={mapImages.get(variant)} alt='Monoke' />
  return <Sticker text='Monoke' />
}

export default Logo
