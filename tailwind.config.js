/** @type {import('tailwindcss').Config} */
const shadcnConfig = {
	darkMode: ["class"],
	content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
	theme: {
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  module.exports = {
	  darkMode: shadcnConfig.darkMode,
	  content: ["./src/**/*.{html,js,svelte,ts}", "*.{js,ts,jsx,tsx,mdx}", ...shadcnConfig.content],
	  theme: {
		  fontSize: {
			  xxxs: ['14px', '1.5rem'],
			  xxs: ['15px', '1.5rem'],
			  xs: ['16px', '1.5rem'],
			  sm: ['17px', '1.6rem'],
			  base: ['19px', '1.7rem'],
			  lg: ['20px', '1.7rem'],
			  xl: ['24px', '1.7rem'],
			  xxl: ['28px', '1.7rem'],
		  },
		  extend: {
			  ...shadcnConfig.theme.extend,
			  colors: {
				  ...shadcnConfig.theme.extend.colors,
				  primary: {
					  50: '#f0f9ff',
					  100: '#e0f2fe',
					  200: '#bae6fd',
					  300: '#7dd3fc',
					  400: '#38bdf8',
					  500: '#0ea5e9',
					  600: '#0284c7',
					  700: '#0369a1',
					  800: '#075985',
					  900: '#0c4a6e',
					  950: '#082f49',
				  },
				  secondary: {
					  50: '#f5f3ff',
					  100: '#ede9fe',
					  200: '#ddd6fe',
					  300: '#c4b5fd',
					  400: '#a78bfa',
					  500: '#8b5cf6',
					  600: '#7c3aed',
					  700: '#6d28d9',
					  800: '#5b21b6',
					  900: '#4c1d95',
					  950: '#2e1065',
				  },
				  accent: {
					  50: '#ecfdf5',
					  100: '#d1fae5',
					  200: '#a7f3d0',
					  300: '#6ee7b7',
					  400: '#34d399',
					  500: '#10b981',
					  600: '#059669',
					  700: '#047857',
					  800: '#065f46',
					  900: '#064e3b',
					  950: '#022c22',
				  },
			  },
			  fontFamily: {
				  sans: ['Inter', 'system-ui', 'sans-serif'],
				  mono: ['Roboto Mono', 'monospace'],
				  display: ['Manrope', 'sans-serif'],
			  },
			  animation: {
				  'gradient-x': 'gradient-x 15s ease infinite',
				  'gradient-y': 'gradient-y 15s ease infinite',
				  'gradient-xy': 'gradient-xy 15s ease infinite',
			  },
			  keyframes: {
				  'gradient-y': {
					  '0%, 100%': {
						  'background-size': '400% 400%',
						  'background-position': 'center top'
					  },
					  '50%': {
						  'background-size': '200% 200%',
						  'background-position': 'center center'
					  }
				  },
				  'gradient-x': {
					  '0%, 100%': {
						  'background-size': '200% 200%',
						  'background-position': 'left center'
					  },
					  '50%': {
						  'background-size': '200% 200%',
						  'background-position': 'right center'
					  }
				  },
				  'gradient-xy': {
					  '0%, 100%': {
						  'background-size': '400% 400%',
						  'background-position': 'left top'
					  },
					  '50%': {
						  'background-size': '200% 200%',
						  'background-position': 'right bottom'
					  }
				  }
			  },
		  },
	  },
	  plugins: [...shadcnConfig.plugins],
  }