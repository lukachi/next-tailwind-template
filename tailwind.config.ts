import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // colors: {
    //   backgroundPrimaryLight: '',
    //   backgroundPrimaryMain: '',
    //   backgroundPrimaryDark: '',
    //
    //   backgroundSecondaryLight: '',
    //   backgroundSecondaryMain: '',
    //   backgroundSecondaryDark: '',
    //
    //   backgroundTertiaryLight: '',
    //   backgroundTertiaryMain: '',
    //   backgroundTertiaryDark: '',
    //
    //   successLight: '',
    //   successMain: '',
    //   successDark: '',
    //
    //   errorLight: '',
    //   errorMain: '',
    //   errorDark: '',
    //
    //   warningLight: '',
    //   warningMain: '',
    //   warningDark: '',
    //
    //   infoLight: '',
    //   infoMain: '',
    //   infoDark: '',
    //
    //   primaryLight: '',
    //   primaryMain: '',
    //   primaryDark: '',
    //
    //   secondaryLight: '',
    //   secondaryMain: '',
    //   secondaryDark: '',
    //
    //   textPrimaryLight: '',
    //   textPrimaryMain: '',
    //   textPrimaryDark: '',
    //
    //   textPrimaryInvertLight: '',
    //   textPrimaryInvertMain: '',
    //   textPrimaryInvertDark: '',
    //
    //   textSecondaryLight: '',
    //   textSecondaryMain: '',
    //   textSecondaryDark: '',
    //
    //   textTertiaryLight: '',
    //   textTertiaryMain: '',
    //   textTertiaryDark: '',
    //
    //   borderPrimaryLight: '',
    //   borderPrimaryMain: '',
    //   borderPrimaryDark: '',
    //
    //   borderSecondaryLight: '',
    //   borderSecondaryMain: '',
    //   borderSecondaryDark: '',
    // }
  },
  // darkMode: "class",
  plugins: [nextui()],
}
export default config
