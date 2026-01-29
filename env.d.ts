/// <reference types="vite/client" />

// Allow TypeScript to import `.vue` single-file components
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const wcomponent: DefineComponent<{}, {}, any>
	export default component
}
