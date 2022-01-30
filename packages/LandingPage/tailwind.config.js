module.exports = {
  content: ["./views/**/*.{js,ts,jsx,tsx,pug}"],
  theme: {
    extend: {
      fontSize: {
        '11xl': '12rem',
      },
      backgroundColor: {
        'dark': '',
      },
      screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
		styled: true,
		themes: ['light', 'dark'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
}
