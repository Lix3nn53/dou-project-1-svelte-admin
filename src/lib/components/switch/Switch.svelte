<script lang="ts">
	export let id: string;
	export let onSwitch: () => void;
</script>

<label for={id} class="switch">
	<input
		{id}
		type="checkbox"
		on:click={() => {
			if (!onSwitch) return;

			onSwitch();
		}}
	/>
	<span class="switch-button bg-base-900 text-base-50" />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 56px;
		height: 29px;
		--switch-button-radius: 23px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.switch-button {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
		border: 1px solid rgb(var(--color-base-900));
	}

	.switch-button:before {
		position: absolute;
		content: '';
		font-family: 'Font Awesome 5 Free';
		font-size: 21px;
		height: var(--switch-button-radius);
		width: var(--switch-button-radius);
		line-height: var(--switch-button-radius);
		left: 4px;
		top: 2px;
		text-align: center;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .switch-button:before {
		-webkit-transform: translateX(var(--switch-button-radius));
		-ms-transform: translateX(var(--switch-button-radius));
		transform: translateX(var(--switch-button-radius));
	}

	.switch-button:before {
		content: '\f186';
		background-color: transparent;
	}

	input:checked + .switch-button:before {
		content: '\f111';
		background-color: transparent;
	}

	/* Custom Switches */
</style>
