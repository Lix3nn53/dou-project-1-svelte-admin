<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<div class="md:h-screen md:grid md:grid-cols-12">
	<Sidebar />
	<div class="md:col-span-10 2xl:col-span-11 min-h-screen flex flex-col">
		<main>
			<slot />
		</main>

		<footer class="mt-auto">
			<p>Welcome to my footer</p>
		</footer>
	</div>
</div>
