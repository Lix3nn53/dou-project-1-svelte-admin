<script context="module" lang="ts">
</script>

<script lang="ts">
	import type { Survey } from '$lib/types';
	import AdminSurveyAPI from '$lib/api/AdminSurveyAPI';

	import Question from './Question.svelte';
	import Button from '../button/Button.svelte';

	export let survey: Survey;
	let confirmStatus: String;

	export async function loadConfirmStatus() {
		confirmStatus = await AdminSurveyAPI.getConfirmed(survey.ID);

		return {};
	}

	loadConfirmStatus();
</script>

<div class="bg-base-100 dark:bg-base-50 text-base-900 rounded-md shadow-lg">
	<div class="bg-base-200 dark:bg-base-100 rounded-t-lg p-2 pl-3">
		<a href={'/survey/confirm/' + survey.ID}>
			{survey.Subject}
		</a>
	</div>
	<div class="p-6 pl-3">
		<p class="py-4">{survey.Description}</p>
		{#if survey.Questions}
			{#each survey.Questions as question, i}
				<div class="py-4">
					<p class="italic">Question #{i + 1}</p>
					<Question {question} />
				</div>
			{/each}
		{/if}
		<p class="pt-4">Current Status: {confirmStatus}</p>
		<Button
			type="button"
			on:click={async () => {
				AdminSurveyAPI.confirm(survey.ID, 'declined');
				loadConfirmStatus();
			}}
			disabled={false}>Decline</Button
		>
		<Button
			type="button"
			on:click={async () => {
				AdminSurveyAPI.confirm(survey.ID, 'confirmed');
				loadConfirmStatus();
			}}
			disabled={false}>Confirm</Button
		>
	</div>
	<div class="bg-base-200 dark:bg-base-100 rounded-b-lg p-2 pl-3">
		{survey.DateStart}~{survey.DateEnd}
	</div>
</div>
