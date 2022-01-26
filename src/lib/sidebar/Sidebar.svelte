<script lang="ts">
	import SidebarIcon from './SidebarIcon.svelte';
	import SidebarDivider from './SidebarDivider.svelte';
	import SidebarTheme from './SidebarTheme.svelte';
</script>

<nav
	class="md:col-span-1 flex flex-col place-items-center
                  bg-primary-400 dark:bg-primary-900 shadow-lg p-2"
>
	<SidebarIcon faClass="fas fa-fire" text="text" to="/" />
	<SidebarDivider />
	<SidebarIcon faClass="fas fa-fire" text="text" to="/about" />
	<SidebarIcon faClass="fas fa-fire" text="text" to="/" />
	<SidebarIcon faClass="fas fa-fire" text="text" to="/" />
	<SidebarDivider />
	<SidebarIcon faClass="fas fa-fire" text="text" to="/" />
	<div class="mt-auto mb-2">
		<SidebarTheme />
	</div>
</nav>
