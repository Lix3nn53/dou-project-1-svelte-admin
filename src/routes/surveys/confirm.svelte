<script lang="ts">
	// Components
	import Button from '$lib/components/button/Button.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import SurveyCard from '$lib/components/survey/SurveyCard.svelte';

	// types
	import type { Survey } from '$lib/types';

	// api
	import AdminSurveysAPI from '$lib/api/AdminSurveysAPI';
	import errors from '$lib/api/errors';

	const itemPerPage = 5;
	let surveys: Survey[];
	let page: number = 1;
	let lastPage = 0;

	const getLastPage = (count: number): number => {
		if (count === 0) return 0;

		let decimal = count / itemPerPage;

		lastPage = Math.ceil(decimal);
	};

	const getCount = async () => {
		const count = await AdminSurveysAPI.countWaitingConfirmation();

		if (errors.isError(count)) {
			return;
		}

		if (count > 0) {
			onPageChange();
			getLastPage(count);
		}
	};

	getCount();

	const onPageChange = async () => {
		surveys = await AdminSurveysAPI.listWaitingConfirmation(itemPerPage, (page - 1) * itemPerPage);
	};
</script>

<svelte:head>
	<title>Confirm Surveys</title>
</svelte:head>

<div class="content">
	<h1 class="text-center">List of Surveys Waiting for Confirmation</h1>

	<div class="flex flex-row content-center pt-6">
		<div class="flex-1">
			<Button
				type="button"
				on:click={async () => {
					page--;
					onPageChange();
				}}
				disabled={page === 1}
			>
				Prev
			</Button>
		</div>
		<div class="flex-1">
			<p class="h-full px-12">Page: {page}</p>
		</div>
		<div class="flex-1">
			<p class="h-full px-12">LastPage: {lastPage}</p>
		</div>
		<div class="flex-1 text-right">
			<Button
				type="button"
				on:click={async () => {
					page++;
					onPageChange();
				}}
				disabled={page === lastPage}
			>
				Next
			</Button>
		</div>
	</div>

	{#if surveys}
		{#each surveys as survey}
			<div class="py-6">
				<SurveyCard {survey} />
			</div>
		{/each}
	{:else}
		<p>Loading</p>
	{/if}

	<div class="flex flex-row content-center pt-6">
		<div class="flex-1">
			<Button
				type="button"
				on:click={async () => {
					page--;
					onPageChange();
				}}
				disabled={page === 1}
			>
				Prev
			</Button>
		</div>
		<div class="flex-1">
			<p class="h-full px-12">Page: {page}</p>
		</div>
		<div class="flex-1">
			<p class="h-full px-12">LastPage: {lastPage}</p>
		</div>
		<div class="flex-1 text-right">
			<Button
				type="button"
				on:click={async () => {
					page++;
					onPageChange();
				}}
				disabled={page === lastPage}
			>
				Next
			</Button>
		</div>
	</div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
