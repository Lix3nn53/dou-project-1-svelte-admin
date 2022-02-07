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

	// pass to children instead of defining multiple times in child components
	const buttonClasses = "flex items-center justify-center h-12 w-full mt-2 mb-2 mx-auto hover:bg-primary-300 dark:hover:bg-base-600 bg-base-900 dark:bg-base-900 text-primary-400 hover:text-base-900 dark:hover:text-base-50 hover:rounded-xl rounded-3xl transition-all duration-200 ease-linear cursor-pointer shadow-lg hover:no-underline group"
	const buttonSpanClasses = "p-2 m-2 text-base-100 group-hover:text-base-900 dark:group-hover:text-base-100 text-xs font-semibold"
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
			<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/login" {collapse}>login</SidebarLink>
		{:else}
			<p class="text-center">Welcome {user_value.Name}</p>
			<SidebarButton classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" onClick={async () => {
				await AuthAPI.logout();
  
				window.location.href = '/';
			  }} {collapse}>Log out</SidebarButton>
		{/if}
		<SidebarDivider />
		<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/" {collapse}>home</SidebarLink>
		<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/about" {collapse}>about</SidebarLink>
		<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/surveys/confirm" {collapse}>surveyConfirm</SidebarLink>
		<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/asdfgh" {collapse}>asdfgh</SidebarLink>
		<SidebarDivider />
		<SidebarLink classes={buttonClasses} spanClasses={buttonSpanClasses} faClass="fas fa-fire" to="/text" {collapse}>text</SidebarLink>
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
