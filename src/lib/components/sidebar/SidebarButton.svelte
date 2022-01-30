<script lang="ts">
	export let classes: string;
	export let spanClasses: string;
	export let faClass: string; // font awesome class
	export let onClick: () => void;
	export let collapse: boolean;
</script>

<button
	on:click={onClick}
	class={classes}
>
	<i class={faClass} />
	{#if collapse}
		<span />
	{:else}
		<span
			class={spanClasses}
		>
			<slot />
		</span>
	{/if}
</button>
