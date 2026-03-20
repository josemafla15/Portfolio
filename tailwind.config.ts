import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#EFE6DE',
        navy:   '#1E2A50',
        crimson:'#8B0000',
        ink:    '#111111',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body:    ['Cabinet Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config