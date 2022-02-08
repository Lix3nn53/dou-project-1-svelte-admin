<script lang="ts">
	import type { Choice } from '$lib/types';

	export let choice: Choice;
</script>

{#if choice}
	<span>{choice.Value}</span>
{:else}
	<span>Loading</span>
{/if}
