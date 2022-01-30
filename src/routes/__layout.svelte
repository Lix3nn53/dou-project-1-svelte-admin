<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';

	import { user } from "../stores"

	user.fetchUser();
</script>

<div class="flex md:flex-row flex-col">
	<Sidebar />
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
