import Google from '@auth/core/providers/google';
import SvelteKitAuth from "@auth/sveltekit";
import * as dotenv from "dotenv";
dotenv.config();

export const handle = SvelteKitAuth({
    providers: [
        Google({ clientId: process.env.GOOGLE_OAUTH_CLIENT_ID, clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET}),
    ],
    secret: process.env.NEXT_AUTH_SECRET,
});
