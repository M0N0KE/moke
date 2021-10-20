import { themes } from '@storybook/theming'
export const parameters = {
  docs: {
    themes: themes.dark
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
