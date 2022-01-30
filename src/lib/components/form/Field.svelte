<script>
	import { ValidationMessage } from '@felte/reporter-svelte';

	export let id;
	export let label;
	export let type;

	let labelClass = "m-0 w-full"
	let inputClass = "text-base-100 dark:text-base-800 w-full rounded-md h-8 px-2 text-base my-2"
	if (type === "checkbox") {
		inputClass = "w-5 ml-1"
		labelClass = "m-0 mark-container"
	}
</script>

<label for={id} class={labelClass}>{label}
	<input
		{id}
		name={id}
		{type}
		class={inputClass}
	/>
	<ValidationMessage for={id} let:messages={message}>
		<p>{message || ''}</p>
	</ValidationMessage>
	{#if type === "checkbox"}
		<span class="mark crossmark" />
	{/if}
</label>

<style>
	input {
		outline-style: solid !important;
		outline-offset: 0px !important;
		outline-color: rgb(var(--color-base-400)) !important;
		outline-width: 4px !important;
	}
	input:focus-visible {
		outline-color: rgb(var(--color-primary-400)) !important;
	}
	input:invalid {
		outline-color: rgb(var(--color-danger-400)) !important;
	}

	label.mark-container input {
		outline: none !important;
	}

	/* CUSTOM CHECKBOX START */

	label.mark-container {
		display: block;
		position: relative;
		padding-left: 28px;
		cursor: pointer;
		font-size: 16px;
		line-height: 21px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	label.mark-container input {
		display: none;
		/* position: absolute;
		opacity: 0;
		cursor: pointer; */
	}

	/* Create a custom checkbox */
	label.mark-container .mark {
		position: absolute;
		top: 0;
		left: 0;
		height: 22px;
		width: 22px;
		background-color: rgb(var(--color-base-900));
		border-radius: 6px;
		transition: border-color 0.1s ease-in-out, background-color 0.1s ease-in-out;
		border-width: 1px;
		border-style: solid;
		border-color: rgb(var(--color-base-700));
		color: rgb(var(--color-base-900));
	}

	html.dark label.mark-container .mark {
		background-color: rgb(var(--color-base-50));
		border-color: rgb(var(--color-base-200));
		color: rgb(var(--color-base-800));
	}

	/* On mouse-over, add a grey background color */
	label.mark-container:hover input ~ .mark {
		background-color: rgb(var(--color-base-700));
	}
	html.dark label.mark-container:hover input ~ .mark {
		background-color: rgb(var(--color-base-200));
	}

	/* When the checkbox is checked, add a blue background */
	label.mark-container input:checked ~ .mark {
	background-color: rgb(var(--color-primary-300));
	border-color: rgb(var(--color-primary-400));
	}
	html.dark label.mark-container input:checked ~ .mark {
	background-color: rgb(var(--color-primary-300));
	border-color: rgb(var(--color-primary-400));
	}

	/* Create the mark/indicator (hidden when not checked) */
	label.mark-container .mark:after {
	content: '';
	display: none;
	}

	/* Show the mark when checked */
	label.mark-container input:checked ~ .mark:after {
	display: block;
	}

	/* Style the mark/indicator */
	label.mark-container .mark:after {
	font-weight: 700;
	text-align: center;
	}

	label.mark-container .crossmark:after {
	content: '\f00d';
	font-family: 'Font Awesome 5 Free';
	}

	label.mark-container .check:after {
	content: '\f00c';
	font-family: 'Font Awesome 5 Free';
	}

	label.mark-container .circle {
	border-radius: 50%;
	}

	label.mark-container .circle:after {
	content: '\f111';
	font-family: 'Font Awesome 5 Free';
	}

	/* CUSTOM CHECKBOX END */
</style>
