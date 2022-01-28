<script>
	import { ValidationMessage } from '@felte/reporter-svelte';

	export let id;
	export let label;
	export let type;
</script>

<label for={id} class="m-0">{label}</label>
<input {id} name={id} {type} class="text-base-900 w-full rounded-md h-8 px-2 text-base my-2" />
<ValidationMessage for={id} let:messages={message}>
	<span>{message || ''}</span>
</ValidationMessage>

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
</style>
