import { browser } from '$app/environment';
import type { FirebaseApp } from 'firebase/app';
import { GoogleAuthProvider, type Auth } from "firebase/auth";
import { derived, type Readable } from 'svelte/store';
import { app } from './app';

const createAuth = () => {
    let auth: Auth

    const { subscribe } = derived<Readable<FirebaseApp>, Auth>(
        app,
        ($app, set) => {
            async function init() {
                if ($app && !auth) {
                    const { getAuth } = await import('firebase/auth')
                    auth = getAuth($app)
                    set(auth)
                }
            }
            if (browser) init()
        }
    )

    async function providerFor(name: string) {
            switch (name) {
                case 'google': return new GoogleAuthProvider()
                default: throw 'unknown provider ' + name
            }
    }

    async function signInWith(name: string) {
        const { signInWithPopup } = await import('firebase/auth')
        const provider = await providerFor(name)
        await signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            // The signed-in user info.
            const user = result.user
            // ...
        }).catch((error) => {
            console.log(error)
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.email
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error)
            // ...
        })
    }

    async function signOut() {
        const { signOut } = await import('firebase/auth')
        await signOut(auth)
    }

    return {
        subscribe,
        signInWith,
        signOut,
    }
}

export const auth = createAuth()