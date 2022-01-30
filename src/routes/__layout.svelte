<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';

	import { user } from "../stores"
	import { goto } from '$app/navigation';
	import { onMount, tick } from 'svelte';

	let success = false;

	onMount(async () => {
		success = await user.fetchUser();

		if (!success) goto("/login")
	})
</script>

<div class="flex md:flex-row flex-col">
	{#if success}
		<Sidebar />
	{/if}
	<div class="min-h-screen w-full flex flex-col">
		<main>
			<slot />
		</main>

		<footer class="mt-auto text-center">
			<p>Welcome to my footer</p>
			{JSON.stringify($user, null, 2)}
		</footer>
	</div>
</div>
