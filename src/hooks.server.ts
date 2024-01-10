import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from "@sveltejs/kit/hooks";

async function authorization({ event, resolve }) {
	if (event.url.pathname.startsWith('/upload')) {
        const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/');
		}
	}
	return resolve(event);
}

/*
export const handle = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
        secret: AUTH_SECRET,
        trustHost: true
    }
    return authOptions;
}) satisfies Handle;
*/

export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
        secret: AUTH_SECRET,
        trustHost: true
	}),
	authorization
);