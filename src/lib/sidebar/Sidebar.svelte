<script lang="ts">
	import SidebarIcon from "./SidebarIcon.svelte"
	import SidebarDivider from "./SidebarDivider.svelte"
	import SidebarTheme from "./SidebarTheme.svelte"
</script>

<nav class="fixed top-0 left-0 h-screen w-16 flex flex-col place-items-center
                  bg-gray-400 dark:bg-gray-900 shadow-lg">
  <SidebarIcon faClass="fas fa-fire" text="text" to="/"/>
  <SidebarDivider />
  <SidebarIcon faClass="fas fa-fire" text="text" to="/about"/>
  <SidebarIcon faClass="fas fa-fire" text="text" to="/"/>
  <SidebarIcon faClass="fas fa-fire" text="text" to="/"/>
  <SidebarDivider />
  <SidebarIcon faClass="fas fa-fire" text="text" to="/"/>
  <div class="mt-auto mb-2">
    <SidebarTheme  />
  </div>
</nav>