import { browser } from '$app/environment';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { readable } from 'svelte/store';

export const firebaseConfig: FirebaseOptions = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// console.log(firebaseConfig)


function createApp() {
    let app: FirebaseApp
    console.log('create app')

    const { subscribe } = readable<FirebaseApp>(undefined, (set) => {
        console.log('subscribe')
        async function init() {
            if (!app) {
                app = initializeApp(firebaseConfig)
                console.log('app initialized')
            }
            console.log('not initialized')
            set(app)
        }

        if (browser) init()
    })

    return { subscribe }
}

export const app = createApp()