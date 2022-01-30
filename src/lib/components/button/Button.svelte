<script lang="ts">
	export let type: 'button' | 'menu' | 'reset' | 'submit';
	export let disabled: boolean;
</script>

<button
	on:click
	{disabled}
	class="shadow bg-indigo-600 hover:bg-indigo-400 
	focus:shadow-outline focus:outline-none 
	text-white font-bold py-2 px-6 rounded 
	disabled:cursor-not-allowed disabled:bg-base-400"
	{type}
>
	<slot />
</button>
