<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<div class="flex flex-row">
	<Sidebar />
	<div class="min-h-screen w-full flex flex-col">
		<main>
			<slot />
		</main>

		<footer class="mt-auto text-center">
			<p>Welcome to my footer</p>
		</footer>
	</div>
</div>
