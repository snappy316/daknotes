const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            'ul > li::before': {
              backgroundColor: defaultTheme.colors.gray[500],
            },
            blockquote: {
              borderLeftColor: defaultTheme.colors.gray[500],
            },
            hr: {
              borderColor: defaultTheme.colors.gray[500],
            },
            thead: {
              borderBottomColor: defaultTheme.colors.gray[600],
            },
            'tbody tr': {
              borderBottomColor: defaultTheme.colors.gray[500],
            },
          },
        },
        dark: {
          css: {
            color: defaultTheme.colors.gray[300],
          },
        },
      },
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};
