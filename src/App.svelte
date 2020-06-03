<script>
	import Fibonacci from "./Fibonacci.svelte";
	export let world;
	export let name;
</script>

<main>
	<h1>Merhaba {world}!</h1>
	<h2>Ben {name}</h2>

	<!--Nested .svelte files-->
	<Fibonacci />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #f1602f;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>