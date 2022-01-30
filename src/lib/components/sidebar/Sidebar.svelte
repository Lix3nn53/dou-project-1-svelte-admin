<script lang="ts">
	import { onDestroy } from 'svelte';

	import SidebarLink from './SidebarLink.svelte';
	import SidebarButton from './SidebarButton.svelte';
	import SidebarDivider from './SidebarDivider.svelte';
	import SidebarTheme from './SidebarTheme.svelte';
	import SidebarCollapser from './SidebarCollapser.svelte';
	import Loading from '../Loading.svelte';

	import AuthAPI from '$lib/api/AuthAPI';

	import { user } from '../../../stores';

	let user_value;

	const unsubscribe = user.subscribe((value) => {
		user_value = value;
	});

	onDestroy(unsubscribe);

	let collapse = false;
	let sidebar: HTMLElement;

	function toggleCollapse() {
		sidebar.classList.toggle('md:w-64');
		sidebar.classList.toggle('md:w-16');

		collapse = !collapse;
	}
</script>

<nav
	bind:this={sidebar}
	class="flex flex-col
	bg-primary-500 dark:bg-base-800 
	shadow-lg p-2
	w-full md:w-64 transition-all duration-200 ease-out"
>
	<div class={collapse ? "md:block hidden" : ""}>
		{#if user_value == null}
			<Loading />
		{:else if !user_value}
			<SidebarLink faClass="fas fa-fire" to="/login" {collapse}>login</SidebarLink>
		{:else}
			<p class="text-center">Welcome {user_value.Name}</p>
			<SidebarButton faClass="fas fa-fire" onClick={async () => {
				await AuthAPI.logout();
  
				window.location.href = '/';
			  }} {collapse}>Log out</SidebarButton>
		{/if}
		<SidebarDivider />
		<SidebarLink faClass="fas fa-fire" to="/" {collapse}>home</SidebarLink>
		<SidebarLink faClass="fas fa-fire" to="/about" {collapse}>about</SidebarLink>
		<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
		<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
		<SidebarDivider />
		<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
	</div>
	<div class="mt-auto flex flex-col">
		<span class="my-2">
			<SidebarTheme />
		</span>
		<span class="">
			<SidebarCollapser onClick={toggleCollapse} {collapse} />
		</span>
	</div>
</nav>
