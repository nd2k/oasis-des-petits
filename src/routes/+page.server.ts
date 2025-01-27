import type { Actions } from '../$types';

export const actions = {
	default: async ({ request }) => {
		console.log('actions');		
		const data = await request.formData();
        const formEntries = Object.fromEntries(data.entries()); // Convert form data to an object
        console.log(formEntries);
		
	}
} satisfies Actions;