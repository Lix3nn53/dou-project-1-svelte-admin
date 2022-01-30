import { writable } from 'svelte/store';
import UsersAPI from '$lib/api/UsersAPI';
import errors from '$lib/api/errors';

function createUser() {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		fetchUser: async (): Promise<boolean> => {
			try {
				const response = await UsersAPI.userInfo();
			
				if (errors.isError(response)) {
					set(false)
					return false;
				}
				let value = response.data;
			
				set(value)
				return true;
			} catch (error: any) {
				if (error.response) {
					console.log(error.response);
				}
			}
		
			set(false)
			return false;
		}
	};
}

export const user = createUser();
