/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      display: [
        '6.25rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h1: [
        '3rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h2: [
        '2.5rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h3: [
        '2rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h4: [
        '1.75rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h5: [
        '1.5rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      h6: [
        '1.25rem',
        {
          lineHeight: 1.2,
          letterSpacing: '0.05em',
          fontWeight: '700'
        }
      ],
      title: [
        '1rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '700',
        }
      ],
      'sub-title': [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '700'
        }
      ],
      'body-2': [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '500'
        }
      ],
      tiny: [
        '0.75rem',
        {
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          fontWeight: '500'
        }
      ]
    },
    screens: {
      sm: '576px',
      md: '720px',
      lg: '960px',
      xl: '1320px'
    },
    container: {
      center: true,
      padding: '0.75rem'
    },
    extend: {
      colors:{
        system:{
          primary:{
            120: '#7B6651',
            100: '#BF9D7D',
            80: '#AE9984',
            60: '#E1D1C2',
            40: '#F1EAE4',
            10: '#FAF7F5'
          },
          success: {
            120: '#299F65',
            100: '#52DD7E',
            20: '#BCFBBD',
            10: '#E8FEE7'
          },
          info: {
            120: '#1D66AC',
            100: '#3BADEF',
            20: '#B1EFFD',
            10: '#E6FBFE'
          },
          error: {
            120: '#C22538',
            100: '#DA3E51',
            20: '#F5CCD1',
            10: '#FDECEF'
          },
          background: '#140F0A',
          gray: {
            80: '#4B4B4B',
            60: '#ECECEC',
            40: '#ECECEC',
            10: '#F9F9F9'
          }
        }
      }
    }
  },
  plugins: []
}
