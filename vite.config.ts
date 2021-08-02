import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
			'@icons': path.resolve(__dirname, '/src/components/icons')
		}
	},
	base: './',
	server: {
		port: 4500,
		open: false,
		cors: true

		// proxy: {
		//   '/api': {
		//     target: 'http://xxx.xxx.xxx.xxx:x000',
		//     changeOrigin: true,
		//     secure: false,
		//     rewrite: (path) => path.replace('/api/', '/')
		//   }
		// },
	}
})
