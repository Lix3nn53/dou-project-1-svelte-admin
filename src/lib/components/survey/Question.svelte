<script lang="ts">
	import type { Question } from '$lib/types';
	import Choice from './Choice.svelte';

	export let question: Question;
</script>

{#if question}
	<div>
		<p class="font-bold">{question.Value}</p>

		{#each question.Choices as choice, i}
			<div>
				{i + 1}:
				<Choice {choice} />
			</div>
		{/each}
	</div>
{:else}
	<p>Loading</p>
{/if}
