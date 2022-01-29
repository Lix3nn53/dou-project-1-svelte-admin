<script lang="ts">
	import { createForm } from 'felte';
	import { svelteReporter as reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import Fieldset from '$lib/components/form/Fieldset.svelte';
	import Field from '$lib/components/form/Field.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import Wave from '$lib/components/divider/DividerWave.svelte';

	const schema = yup.object({
		email: yup.string().email().required(),
		password: yup.string().min(5).required()
	});

	let submitted;

	// Creating the form
	const { form, data } = createForm<yup.InferType<typeof schema>>({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: (values) => alert(values),
		extend: [validator, reporter],
		validateSchema: schema
	});
</script>

<div class="flex w-full items-center flex-col">
	<div class="max-w-screen-md">
		<div class="text-center mb-16">
			<p class="mt-4 text-sm leading-7 font-regular uppercase font-extrabold">Sign in</p>
			<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
				Welcome to <span class="text-primary-500">Gotham Surveys</span>
			</h3>
		</div>

		<div class="bg-base-50 text-base-900 test">
			<form use:form>
				<legend> Account </legend>
				<Fieldset>
					<Field id="email" label="Email" type="email" />
				</Fieldset>
				<Fieldset>
					<Field id="password" label="Password" type="password" />
				</Fieldset>
				<Button type="submit">Create Account</Button>
			</form>

			<pre>
    	{JSON.stringify($data, null, 2)}
 			 </pre>
		</div>
	</div>
</div>

<style>
	.test {
		padding: 50px;
		border-radius: 10% 90% 10% 90% / 90% 10% 90% 10%;
	}
</style>
