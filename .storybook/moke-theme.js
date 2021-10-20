// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'Moke Theme',
  brandUrl: 'https://github.com/M0N0KE',
  brandImage:
    'https://firebasestorage.googleapis.com/v0/b/monokedev-d17dd.appspot.com/o/moke.png?alt=media&token=46d278ab-ffa4-4c18-a5e2-a63cb9cec127',
  // custom
  colorPrimary: '#2d3436',
  colorSecondary: '#2d3436',

  // UI
  appBg: 'white',
  appContentBg: '#f9ffff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Input Mono", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2f3640',
  // textInverseColor: 'rgba(255,255,255,0.9)',
  textInverseColor: '#4ebeb1',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#4ebeb1',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#2d3436',
  inputBorderRadius: 4
})
