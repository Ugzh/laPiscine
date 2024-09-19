import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ['Inter',...defaultTheme.fontFamily.sans]
			},
			keyframes:{
				darkToLightAnimmation : {
					'0%': { transform: 'translateX(1.75rem)'
					 },
          			'100%': { transform: 'translateX(0)' },
				},
				ligthToDarkAnimmation : {
					'0%': { transform: 'translateX(0)'
					 },
          			'100%': { transform: 'translateX(1.75rem)' },
				},
				scrollHorizontal:{
					'0%': {  transform: 'translateX(40%)'
					 },
          			'100%': {  transform: 'translateX(-110%)' },
				}
			},
			animation:{
				darkButton : 'darkToLightAnimmation 0.5s ease-in-out forwards',
				lightButton : 'ligthToDarkAnimmation 0.5s ease-in-out forwards',
				scrollHorizontal :  'scrollHorizontal 7s linear infinite'
			}
		},
	},
	darkMode: 'selector',
	plugins: [
	  ],
}


