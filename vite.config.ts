import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Pages({
			dirs: "src/pages",
		}),
		tailwindcss(),
	],
	server: {
		port: 3000,
	},
});
