<script lang="ts">
	let isDarkMode = true;

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
		isDarkMode = document.documentElement.classList.contains('dark');

		if (isDarkMode) {
			localStorage.theme = 'dark';
		} else {
			localStorage.theme = 'light';
		}
	}

	import Switch from '../switch/Switch.svelte';
</script>

<Switch id="theme" onSwitch={toggleTheme} />
