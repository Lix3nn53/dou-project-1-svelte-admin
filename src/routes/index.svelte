<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import logo from '$lib/img/logo.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col content-center">
	<picture>
		<source srcset={logo} type="image/png" />
		<img src="svelte-welcome.png" alt="Welcome" />
	</picture>

	<div class="text-center pt-12">
		<h2>Welcome to Gotham Surveys Administration</h2>
	</div>
</section>

<style>
	img {
		width: auto;
		height: 420px;
		display: block;
		margin: 0 auto;
	}
</style>
