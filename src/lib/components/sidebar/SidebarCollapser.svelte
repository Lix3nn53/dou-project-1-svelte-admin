<script lang="ts">
	export let faClass: string; // font awesome class
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class="flex items-center justify-center 
py-2 px-4 mx-1
hover:bg-primary-300 dark:hover:bg-base-600 bg-base-900 dark:bg-base-900
text-primary-400 hover:text-base-900 dark:hover:text-base-50
hover:rounded-xl rounded-3xl
transition-all duration-200 ease-linear
cursor-pointer shadow-lg hover:no-underline group"
>
	<i class={faClass} />
</button>
