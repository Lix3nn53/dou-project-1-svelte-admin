<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<div class="md:h-screen md:grid md:grid-cols-12">
	<Sidebar />
	<div class="md:col-span-11">
		<main>
			<slot />
		</main>

		<footer class="mt-auto">
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer>
	</div>
</div>
