import { writable } from 'svelte/store';

function createUser() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		signout: () => {
			set(null);
		},
		signin: (user) => {
			set(user);
		}
	};
}

export const user = createUser();
