import { writable } from 'svelte/store';
import UsersAPI from '$lib/api/UsersAPI';
import errors from '$lib/api/errors';

function createUser() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
		fetchUser: async () => {
			try {
				const response = await UsersAPI.userInfo();
			
				if (errors.isError(response)) {
					set(false)
					return;
				}
				let value = response.data;
			
				set(value)
				return;
			} catch (error: any) {
				if (error.response) {
					console.log(error.response);
				}
			}
		
			set(false)
		}
	};
}

export const user = createUser();
