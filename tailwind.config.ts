import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: '#121212',
            },
            foreground: '#ffffff',
            divider: '#302E2E',
            // overlay: '',
            // focus: '',
            // content1: '',
            // content2: '',
            // content3: '',
            // content4: '',

            // default: '',
            primary: {
              DEFAULT: '#F5A600',
              foreground: '#212121',
            },
            // secondary: '',
            // success: '',
            // warning: '',
            // danger: '',
          },
        },
      },
    }),
  ],
}

export default config
