import defaultTheme from 'tailwindcss/defaultTheme'
import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ['Inter',...defaultTheme.fontFamily.sans]
			},
			keyframes:{
				lightButton: {
					'0%, 100%': { transform: 'rotate(-3deg)',
					 },
          			'50%': { transform: 'rotate(3deg)' },
				},
				darkButton:{
					'0%, 100%': { transform: 'translateX(0) rotate(-10deg)',
					 },
          			'50%': { transform: 'translateX(0) rotate(15deg)' },
					
				},
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
			},
			animation:{
				none1 : 'lightButton 2s ease-in-out infinite',
				none2 : 'darkButton 2s ease-in-out infinite',
				darkButton : 'darkToLightAnimmation 0.5s ease-in-out forwards',
				lightButton : 'ligthToDarkAnimmation 0.5s ease-in-out forwards',
			}
		},
		
	},
	darkMode: 'selector',
	plugins: [],
}
