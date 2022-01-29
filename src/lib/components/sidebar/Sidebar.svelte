<script lang="ts">
	import SidebarLink from './SidebarLink.svelte';
	import SidebarButton from './SidebarButton.svelte';
	import SidebarDivider from './SidebarDivider.svelte';
	import SidebarTheme from './SidebarTheme.svelte';
	import SidebarCollapser from './SidebarCollapser.svelte';
	import { onDestroy } from 'svelte';
	import { user } from '../../../store';

	let user_value;

	const unsubscribe = user.subscribe((value) => {
		user_value = value;
	});

	onDestroy(unsubscribe);

	let collapse = false;
	let sidebar: HTMLElement;

	function toggleCollapse() {
		sidebar.classList.toggle('w-60');
		sidebar.classList.toggle('w-20');

		collapse = !collapse;
	}
</script>

<nav
	bind:this={sidebar}
	class="flex flex-col
	bg-primary-500 dark:bg-base-800 
	shadow-lg p-2
	w-60"
>
	{#if user_value}
		<SidebarButton faClass="fas fa-fire" onClick={() => {}}>Log out</SidebarButton>
	{:else}
		<SidebarLink faClass="fas fa-fire" to="/login" {collapse}>login</SidebarLink>
	{/if}
	<SidebarDivider />
	<SidebarLink faClass="fas fa-fire" to="/" {collapse}>home</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/about" {collapse}>about</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
	<SidebarDivider />
	<SidebarLink faClass="fas fa-fire" to="/" {collapse}>text</SidebarLink>
	<div class="mt-auto mb-2 flex items-center flex-row w-full flex-wrap">
		<SidebarCollapser faClass="fas fa-angle-double-left" onClick={toggleCollapse} />
		<span class="ml-auto">
			<SidebarTheme />
		</span>
	</div>
</nav>
