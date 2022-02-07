<script lang="ts" >
	// Components
	import Button from "$lib/components/button/Button.svelte";
	import Card from "$lib/components/card/Card.svelte";
	import SurveyCard from "$lib/components/survey/SurveyCard.svelte";

	// api
	import AdminSurveysAPI from "$lib/api/AdminSurveysAPI";

	let surveys;
</script>

<svelte:head>
	<title>Confirm Surveys</title>
</svelte:head>

<div class="content">
	<h1>Survey Confirm</h1>

	<Button type="button" on:click={async () => {
		surveys = await AdminSurveysAPI.listWaitingConfirmation(5, 0);
	}} disabled={false} >PULL</Button>

	{#if surveys}
		{#each surveys as survey}
			<SurveyCard survey={survey} />
		{/each}
	{/if}
	
	<Card>
		<span slot="header"> P. Sherman </span>
		<p>
			{JSON.stringify(surveys, null, 2)}
		</p>
		<span slot="footer"> P. Sherman </span>
	</Card>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
