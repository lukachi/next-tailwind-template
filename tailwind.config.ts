import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {},
      dark: {
        colors: {
          background: '',
          foreground: '',
          divider: '',
          overlay: '',
          focus: '',
          content1: '',
          content2: '',
          content3: '',
          content4: '',

          default: '',
          primary: '',
          secondary: '',
          success: '',
          warning: '',
          danger: '',
        }
      },
    },
  })],
}
export default config
