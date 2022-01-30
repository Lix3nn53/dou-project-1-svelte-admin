<script lang="ts">
	export let classes: string;
	export let spanClasses: string;
	export let faClass: string; // font awesome class
	export let to: string;
	export let collapse: boolean;
</script>

<a
	href={to}
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
</a>
