<script lang="ts">
	// svelte imports
	import type { Writable } from 'svelte/store';
	// form imports
	import { createForm } from 'felte';
	import { svelteReporter as reporter } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	// component imports
	import Fieldset from '$lib/components/form/Fieldset.svelte';
	import Field from '$lib/components/form/Field.svelte';
	import Button from '$lib/components/button/Button.svelte';
	// api imports
	import AuthAPI from '$lib/api/AuthAPI';

	const schema = yup.object({
		IDNumber: yup.string().length(11).required('Required'),
		password: yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
	});

	const delay = ms => new Promise(res => setTimeout(res, ms));

	async function handleSubmit(
    values: Record<string, string>,
    isSubmitting: Writable<boolean>,
  ): Promise<boolean> {
    // alert(JSON.stringify(values, null, 2));
    isSubmitting.set(true);

	await delay(2000);

    const remember = JSON.parse(values.remember);
    const res = await AuthAPI.login(values.IDNumber, values.password, remember);

    if (res.error) {
      alert(`Login error: ${res.error}`);
      isSubmitting.set(false);
      return false;
    }

    isSubmitting.set(false);
    window.location.href = '/';
    return true;
  }

	// Creating the form
	const { form, data, isSubmitting } = createForm<yup.InferType<typeof schema>>({
		initialValues: {
			IDNumber: '',
			password: ''
		},
		onSubmit: (values) => handleSubmit(values, isSubmitting),
		extend: [validator, reporter],
		validateSchema: schema
	});

	// Use Auto-subscription instead
	// let isSubmittingValue;

	// isSubmitting.subscribe(value => {
	// 	isSubmittingValue = value;
	// 	});
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full items-center flex-col">
	<div class="max-w-screen-md">
		<div class="text-center mb-16">
			<p class="mt-4 text-sm leading-7 font-regular uppercase font-extrabold">Sign in</p>
			<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
				Welcome to <span class="text-primary-500">Gotham Surveys</span>
			</h3>
		</div>

		<div class="bg-base-100 dark:bg-base-50 text-base-900 test">
			<form use:form class="flex flex-col">
				<legend class="font-bold w-full text-center mb-8">Login</legend>
				<Fieldset>
					<Field id="IDNumber" label="IDNumber" type="text" />
				</Fieldset>
				<Fieldset>
					<Field id="password" label="Password" type="password" />
				</Fieldset>
				<Fieldset>
					<Field id="remember" label="Remember Me" type="checkbox" />
				</Fieldset>
				<span class="self-end">
					<Button type="submit" disabled={$isSubmitting}>Login!</Button>
				</span>
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
