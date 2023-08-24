import { defineConfig, configDefaults } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [Vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		environment: 'happy-dom',
		exclude: [...configDefaults.exclude],
	},
})
