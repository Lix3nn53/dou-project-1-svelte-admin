<script context="module" lang="ts">
	import { user } from "../stores"

	let success = false;

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url, params, fetch, session, stuff }) {
		success = await user.fetchUser();

		if (success || url.pathname === "/login") {
			return {}
		} else {
			return {
				status: 302,
				redirect: '/login'
			};
		}
	}
</script>

<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
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
