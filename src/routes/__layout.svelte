<script context="module" lang="ts">
	import { browser } from '$app/env';
	import { user } from '../stores';

	let success = false;
	let fetched = false;

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url }) {
		if (!browser) return {}; // do not run on the server, only browser. Throws error on server 'window not defined'
		if (fetched) return {};

		success = await user.fetchUser();
		fetched = true;

		if (success || url.pathname === '/login') {
			return {};
		} else {
			return {
				status: 302,
				redirect: '/login'
			};
		}
	}
</script>

<!-- <script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { user } from "../stores"

	let success = false;
	let count = 1;

	onMount(async () => {
		alert(count);
		count++;
		success = await user.fetchUser();

		if (success || $page.url.pathname === "/login") {
			return;
		} else {
			goto("/login")
		}
	});
</script> -->
<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>

<div class="flex md:flex-row flex-col">
	{#if $user}
		<Sidebar />
	{/if}
	<div class="min-h-screen w-full flex flex-col">
		<main>
			<slot />
		</main>

		<footer class="mt-auto text-center">
			<p>Gotham Surveys Administration</p>
		</footer>
	</div>
</div>
