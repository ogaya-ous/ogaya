import { AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { PrismaClient } from "@prisma/client";
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from "@sveltejs/kit/hooks";

const prisma = new PrismaClient()

const authorization: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/manage')) {
		const session = await event.locals.getSession();
		if (session?.user?.role != "ADMIN") {
			throw redirect(303, '/')
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
		adapter: PrismaAdapter(prisma),
        secret: AUTH_SECRET,
        trustHost: true,
		callbacks: {
			async session({ session, user, token }) {
				session.user = session.user || {};
				session.user.id = user.id;
				session.user.role = user.role;
				return session;
			},
		},
	}),
	authorization
);