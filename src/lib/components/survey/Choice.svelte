<script lang="ts">
	import type { Choice } from "$lib/types";

	export let choice: Choice;
</script>

{#if choice}
	<p>{choice.Value}</p>
{:else}
	<p>Loading</p>
{/if}
