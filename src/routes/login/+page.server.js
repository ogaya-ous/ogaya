import { sendPasswordlessLink } from '$lib/server/auth0.js';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async({cookies, request, url}) => {
        console.log('+page.server.js')
        const data = await request.formData();
        const email = data.get('email');

        if(!email) {
            return fail(400, {email, error: 'missing'});
        }

        const state = crypto.randomUUID();
        const redirectUri = `${url.origin}/api/auth/callback`;
        await sendPasswordlessLink(email, state, redirectUri);

        cookies.set('state', state, {path:'/'});
        return{success: true};
    }
};