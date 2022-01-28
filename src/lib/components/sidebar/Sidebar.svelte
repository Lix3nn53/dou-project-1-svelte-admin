<script lang="ts">
	import SidebarLink from './SidebarLink.svelte';
	import SidebarButton from './SidebarButton.svelte';
	import SidebarDivider from './SidebarDivider.svelte';
	import SidebarTheme from './SidebarTheme.svelte';
	import { onDestroy } from 'svelte';
	import { user } from '../../../store';

	let user_value;

	const unsubscribe = user.subscribe((value) => {
		user_value = value;
	});

	onDestroy(unsubscribe);
</script>

<nav
	class="md:col-span-2 2xl:col-span-1 flex flex-col place-items-center
                  bg-base-400 dark:bg-base-900 shadow-lg p-2"
>
	{#if user_value}
		<SidebarButton faClass="fas fa-fire" onClick={() => {}}>Log out</SidebarButton>
	{:else}
		<SidebarLink faClass="fas fa-fire" to="/login">login</SidebarLink>
	{/if}
	<SidebarDivider />
	<SidebarLink faClass="fas fa-fire" to="/">home</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/about">about</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/">text</SidebarLink>
	<SidebarLink faClass="fas fa-fire" to="/">text</SidebarLink>
	<SidebarDivider />
	<SidebarLink faClass="fas fa-fire" to="/">text</SidebarLink>
	<div class="mt-auto mb-2">
		<SidebarTheme />
	</div>
</nav>
