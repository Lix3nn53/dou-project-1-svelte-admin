<script lang="ts">
	import type { Question } from "$lib/types";
	import Choice from "./Choice.svelte";

	export let question: Question;
</script>

{#if question}
	<div>
		<p>{question.Value}</p>
		
		{#each question.Choices as choice}
			<Choice choice={choice}/>
		{/each}
	</div>
{:else}
<p>Loading</p>
{/if}
