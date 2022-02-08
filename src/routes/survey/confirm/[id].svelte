<script context="module" lang="ts">
	import SurveysAPI from '$lib/api/SurveysAPI';

	let survey;

	/** @type {import('@sveltejs/kit').RequestHandler} */
	export async function load({ params }) {
		// `params.id` comes from [id].js
		const surveyId = params.id;

		survey = await SurveysAPI.info(surveyId);

		return {};
	}
</script>

<script lang="ts">
	// Components
	import Button from '$lib/components/button/Button.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import SurveyCard from '$lib/components/survey/SurveyCard.svelte';

	// api
	import AdminSurveysAPI from '$lib/api/AdminSurveysAPI';
	import Loading from '$lib/components/Loading.svelte';

	let surveys;
</script>

<svelte:head>
	<title>Confirm Survey</title>
</svelte:head>

<div class="content">
	<h1>Survey Confirmation</h1>

	{#if survey}
		<SurveyCard {survey} />
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
