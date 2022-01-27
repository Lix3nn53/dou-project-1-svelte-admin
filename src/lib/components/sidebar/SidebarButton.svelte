<script lang="ts">
	export let faClass: string; // font awesome class
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class="flex items-center justify-center 
h-12 w-full mt-2 mb-2 mx-auto  
bg-primary-200 hover:bg-green-600 dark:bg-primary-800 
text-green-500 hover:text-white
hover:rounded-xl rounded-3xl
transition-all duration-300 ease-linear
cursor-pointer shadow-lg hover:no-underline"
>
	<i class={faClass} />
	<span class="p-2 m-2 text-primary-900 dark:text-primary-100 text-xs font-semibold">
		<slot />
	</span>
</button>
