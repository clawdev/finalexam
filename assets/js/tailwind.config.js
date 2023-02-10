module.exports = {
    darkMode: 'media',
    // ...
}

module.exports = {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: '#666',
              a: {
                color: '#3182ce',
                '&:hover': {
                  color: '#2c5282',
                },
              },
            },
          },
        },
      },
    },
    plugins: [
      require('flowbite-typography'),
      // ...
    ],
  }