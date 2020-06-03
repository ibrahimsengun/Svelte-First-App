import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: "İbrahim Şengün",
		world: 'Dünya',
	}
});

export default app;