import App from './app.svelte';

export default new App({
	target: document.body,
	props: {
		name: 'world'
	},
});
