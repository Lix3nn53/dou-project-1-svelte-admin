<script context="module" lang="ts">
</script>

<script lang="ts">
	import type { Survey } from "$lib/types";
	import AdminSurveyAPI from "$lib/api/AdminSurveyAPI";

	import Question from "./Question.svelte";
	import Button from "../button/Button.svelte";

	export let survey: Survey;
	let confirmStatus: String;

	export async function loadConfirmStatus() {
		confirmStatus = await AdminSurveyAPI.getConfirmed(survey.ID)

		return {};
	}

	loadConfirmStatus();
</script>

{#if survey}
	<div class="bg-base-100 dark:bg-base-50 text-base-900 rounded-md shadow-lg">
		<div class="bg-base-200 dark:bg-base-100 rounded-t-lg p-2 pl-3">
		<a href={"/survey/confirm/" + survey.ID}>
			{survey.Subject}
		</a>
		</div>
		<div class="p-6 pl-3">{survey.Description}</div>
		{#if survey.Questions}
			{#each survey.Questions as question}
				<Question question={question}/>
			{/each}
		{/if}
		<p>Current Status: {confirmStatus}</p>
		<Button type="button" on:click={async () => {
			AdminSurveyAPI.confirm(survey.ID, "declined")
			loadConfirmStatus()
		}} disabled={false} >Decline</Button>
		<Button type="button" on:click={async () => {
			AdminSurveyAPI.confirm(survey.ID, "confirmed")
			loadConfirmStatus()
		}} disabled={false} >Confirm</Button>
		<div class="bg-base-200 dark:bg-base-100 rounded-b-lg p-2 pl-3">
			{survey.DateStart}~{survey.DateEnd}
		</div>
	</div>
{:else}
<p>Loading</p>
{/if}
