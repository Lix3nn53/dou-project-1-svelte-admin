<script lang="ts">
	export let faClass: string; // font awesome class
	export let to: string;
</script>

<a
	href={to}
	class="flex items-center justify-center 
h-12 w-full mt-2 mb-2 mx-auto  
bg-base-200 hover:bg-primary-500 dark:bg-base-800 dark:hover:bg-primary-500
text-primary-600 dark:text-primary-400 hover:text-white dark:hover:text-primary-50
hover:rounded-xl rounded-3xl
transition-all duration-300 ease-linear
cursor-pointer shadow-lg hover:no-underline group"
>
	<i class={faClass} />
	<span
		class="p-2 m-2 text-base-900 dark:text-base-100 group-hover:text-base-100 text-xs font-semibold"
	>
		<slot />
	</span>
</a>
