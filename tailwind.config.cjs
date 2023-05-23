const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				base03: "#002b36",
				base02: "#073642",
				base01: "#586E75",
				base00: "#657B83",
				base0: "#839496",
				base1: "#93A1A1",
				base2: "#EEE8D5",
				base3: "#FDF6E3",
				yellow: "#B58900",
				orange: "#CB4B16",
				red: "#DC322F",
				magenta: "#D33682",
				violet: "#6C71C4",
				blue: "#268BD2",
				cyan: "#2AA198",
				green: "#859900",
			},
			fontFamily: {
				sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
				mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
			},
			animation: {
				"spin-slow": "spin 30s linear infinite",
			},
		},
	},
	plugins: [],
};
