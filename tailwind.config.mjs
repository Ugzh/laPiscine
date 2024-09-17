import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ['Inter',...defaultTheme.fontFamily.sans]
			}
		},
		colors:{
			black:'#262625',
			white:'#F3F3F1', 
		},
	},
	plugins: [],
}
