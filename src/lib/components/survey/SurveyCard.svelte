<script lang="ts">
	import type { Survey } from "$lib/types";

	export let survey: Survey;
</script>

{#if survey}
	<div class="bg-base-100 dark:bg-base-50 text-base-900 rounded-md shadow-lg">
		<div class="bg-base-200 dark:bg-base-100 rounded-t-lg p-2 pl-3">
		<a href={"/survey/confirm/" + survey.ID}>
			{survey.Subject}
		</a>
		</div>
		<div class="p-6 pl-3">{survey.Description}</div>
		<div class="bg-base-200 dark:bg-base-100 rounded-b-lg p-2 pl-3">
			{survey.DateStart}~{survey.DateEnd}
		</div>
	</div>
{:else}
<p>Loading</p>
{/if}
