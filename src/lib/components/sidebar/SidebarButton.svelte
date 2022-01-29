<script lang="ts">
	export let faClass: string; // font awesome class
	export let onClick: () => void;
	export let collapse: boolean;
</script>

<button
	on:click={onClick}
	class="flex items-center justify-center 
h-12 w-full mt-2 mb-2 mx-auto  
hover:bg-primary-300 dark:hover:bg-base-600 bg-base-900 dark:bg-base-900
text-primary-400 hover:text-base-900 dark:hover:text-base-50
hover:rounded-xl rounded-3xl
transition-all duration-200 ease-linear
cursor-pointer shadow-lg hover:no-underline group"
>
	<i class={faClass} />
	{#if collapse}
		<span />
	{:else}
		<span
			class="p-2 m-2 text-base-100 group-hover:text-base-900 dark:group-hover:text-base-100 text-xs font-semibold"
		>
			<slot />
		</span>
	{/if}
</button>
