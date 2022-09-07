import { variables } from '$lib/variables';
/** @type {import('./$types').RequestHandler} */
export async function POST({locals, request}) {
    const body = await request.json();
    const resource = 'pauseContribution';
	const rawResponse = await fetch(`${variables.privatePath}/${resource}`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization:  locals.esiToken
        },
        body
    });
	const response = await rawResponse.json();
	if (!response.status) {
		return {
			status: 403,
			errors: {
			  message: response.errorMessage
			}
		  };
	}
	return new Response(JSON.stringify({ status: response.status, message: response.data.message}), { status: 200 }) 
}