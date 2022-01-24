<script lang="ts">
  let isDarkMode = true

  function toggleTheme() {
		document.documentElement.classList.toggle('dark')
    isDarkMode = document.documentElement.classList.contains("dark")
	}

	import Switch from "../Switch.svelte"
</script>


<Switch id="theme" onSwitch={toggleTheme}>
	{isDarkMode}
</Switch>
