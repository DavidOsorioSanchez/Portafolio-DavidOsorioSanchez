import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundSize: {
			total: "100% 100%",
		},
		extend: {
			fontSize: {
				"min-tarjeta": "7rem"
			},
			listStyleType: {
				square: 'square',
			},
			backgroundImage: {
				"Fondo-Estrellas": "url('/Fondo.webp')",
				"EnglishCorner": "url('/EnglishCorner.webp')",
				"portafolio": "url('/portafolio.webp')",
				"ArteyForma": "url('/ArteyForma.webp')",
				"altoFlora": "url('/altoFlora.webp')",
				"Comida": "url('/Comida.webp')"
			},
		},
		colors: {
			BlancoTransparente: "rgba(245, 245, 245, 0.775)",
			transarente: "rgba(245, 245, 245, 0)",
			negro: "rgb(0,0,0)",
			blancoEstrella: "#dbdbdb",
			colorFondo: "#242021",
			colorDeAccion: "#9290C3",
			colorActivoFront: "#E8751A",
			colorActivoBack: "#007F73",
			colorBordePerfil: "#00A9FF",
			colorFooter: "#110f10",
		},
		animation: {
			bajada: "normal pabajo 2s ease-in-out",
			transicion: "normal 1s ease-in",
			giro: "giro 20s linear infinite"
		},
		keyframes: {
			pabajo: {
				"0%, 100%": { transform: "translateY(0rem)", opacity: 1 },
				"0%": { transform: "translateY(-10rem)", opacity: 0 },
			},
			giro: {
				"0%": { transform: "rotate(0deg)" },
				"50%": { transform: "rotate(180deg)" },
				"100%": { transform: "rotate(360deg)" },
			},
		},
		brightness: {
			50: ".50",
		},
	},
	plugins: [],
}
