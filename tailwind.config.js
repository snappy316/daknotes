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
            'ol > li::before': {
              color: defaultTheme.colors.gray[600],
            },
            'figure figcaption': {
              color: defaultTheme.colors.gray[600],
            },
          },
        },
        dark: {
          css: {
            color: defaultTheme.colors.gray[300],
            '[class~="lead"]': {
              color: defaultTheme.colors.gray[200],
            },
            blockquote: {
              color: defaultTheme.colors.gray[200],
            },
            code: {
              color: defaultTheme.colors.gray[200],
            },
            strong: {
              color: defaultTheme.colors.gray[200],
            },
            th: {
              color: defaultTheme.colors.gray[300],
            },
            a: {
              color: defaultTheme.colors.gray[300],
            },
            'a code': {
              color: defaultTheme.colors.gray[100],
            },
            'ol > li::before': {
              color: defaultTheme.colors.gray[400],
            },
            'figure figcaption': {
              color: defaultTheme.colors.gray[300],
            },
            h1: {
              color: defaultTheme.colors.gray[100],
            },
            h2: {
              color: defaultTheme.colors.gray[100],
            },
            h3: {
              color: defaultTheme.colors.gray[100],
            },
            h4: {
              color: defaultTheme.colors.gray[100],
            },
            h5: {
              color: defaultTheme.colors.gray[100],
            },
            h6: {
              color: defaultTheme.colors.gray[100],
            },
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
