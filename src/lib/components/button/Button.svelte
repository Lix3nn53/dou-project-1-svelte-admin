<script lang="ts">
	export let type: 'button' | 'menu' | 'reset' | 'submit';
</script>

<button
	on:click
	class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
	{type}
>
	<slot />
</button>
