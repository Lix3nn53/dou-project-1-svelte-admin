<script lang="ts">
	export let faClass: string; // font awesome class
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class="flex items-center justify-center 
h-12 w-full mt-2 mb-2 mx-auto  
hover:bg-base-100 dark:hover:bg-primary-500 bg-base-800 dark:bg-base-900
text-primary-400 hover:text-base-900 dark:hover:text-base-50
hover:rounded-xl rounded-3xl
transition-all duration-300 ease-linear
cursor-pointer shadow-lg hover:no-underline group"
>
	<i class={faClass} />
	<span
		class="p-2 m-2 text-base-100 group-hover:text-base-900 dark:group-hover:text-base-100 text-xs font-semibold"
	>
		<slot />
	</span>
</button>
