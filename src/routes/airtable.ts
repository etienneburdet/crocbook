import { API_KEY } from '$lib/env';

const headers: Headers = new Headers({ Authorization: `Bearer ${API_KEY}` });
const request: Request = new Request('https://api.airtable.com/v0/appGca1zvRwNN4TnZ/Familles', {
	headers
});
request;

export async function get({ params }) {
	const res = await fetch(request);
	const json = await res.json();

	return {
		body: {
			json
		}
	};
}
