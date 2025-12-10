/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#1695F2',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        grayXerlock:
        {
          50: '#ECF1F8',
          100: '#D0DDED',
          200: '#A2BCDC',
          300: '#79A0CA',
          400: '#6586A9',
          500: '#526D8B',
          600: '#40566E',
          700: '#2F4154',
          800: '#202D38',
          900: '#121B25',
          950: '#060B11'
        },
        purpleXerlock: {
          50: '#F2EFFF',
          100: '#E1D8FF',
          200: '#CBB4FF',
          300: '#B393FE',
          400: '#A172FE',
          500: '#914EFE',
          600: '#8629FE',
          700: '#6E04D3',
          800: '#4B0289',
          900: '#28015B',
          950: '#14002C'
        },
        blueXerlock: {
          50: '#EAF1FF',
          100: '#C9DDFE',
          200: '#9BBEFE',
          300: '#4BA4FD',
          400: '#1695F2',
          500: '#1180D0',
          600: '#0C68A8',
          700: '#074F85',
          800: '#03375E',
          900: '#011E38',
          950: '#011224'
        }
      },
      purple: {
        400: '#a855f7',
        500: '#9448FF',
        600: '#914EFE',
        700: '#7A67FE',
        800: '#6d28d9',
      },
      orange: {
        400: '#fb923c',
        500: '#FF990A',
        600: '#ea580c',
      },
      dark: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#090D16',
      },
      blue: {
        100: 'D0DCED',
        200: 'A2BCDC',
        300: '#79A0CA',

      }
    },
    fontFamily: {
      'geist': ['Geist', 'system-ui', 'sans-serif'],
      'inter': ['Inter', 'system-ui', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(135deg, #38B9FC 0%, #9448FF 100%)',
      'gradient-radial': 'radial-gradient(circle, rgba(6,10,19,0.2) 0%, rgba(8,11,18,1) 80%)',
      'gradient-footer': 'linear-gradient(180deg, rgba(9,13,22,0.6) 0%, rgba(30,10,63,0.6) 49%, rgba(75,2,152,0.6) 100%)',
    },
    boxShadow: {
      'custom': '0px 4px 4px rgba(0, 0, 0, 0.1)',
      'custom-dark': '0px 4px 4px rgba(30, 30, 30, 0.4)',
      'custom-light': '0px 4px 4px rgba(30, 30, 30, 0.2)',
      'card': '0px 7px 4px rgba(0, 0, 0, 0.15)',
    }
  },
}
