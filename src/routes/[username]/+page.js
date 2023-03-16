import { error } from '@sveltejs/kit';
import { users } from '../../store/data';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const user = users.find((user) => user.username === params.username);
	if (user) {
		return {
			user
		};
	}

	throw error(404, 'Not found');
}
