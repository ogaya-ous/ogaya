import { browser } from '$app/environment';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';
import { readable } from 'svelte/store';

/*
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
    projectId: process.env['FIREBASE_PROJECT_ID'],
    storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: process.env['FIREBASE_MESSAGE_SENDER_ID'],
    appId: process.env['FIREBASE_APP_ID'],
}*/
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyDENWIbvQodB8MbZXispbqxw4-FWl2vcVk",
    authDomain: "ogaya-8e672.firebaseapp.com",
    projectId: "ogaya-8e672",
    storageBucket: "ogaya-8e672.appspot.com",
    messagingSenderId: "552254909048",
    appId: "1:552254909048:web:1c4ced2226d2a840d31b8d"
};

function createApp() {
    let app: FirebaseApp

    const { subscribe } = readable<FirebaseApp>(undefined, (set) => {
        async function init() {
            if (!app) {
                const { initializeApp } = await import('firebase/app')
                app = initializeApp(firebaseConfig)
            }
            set(app)
        }

        if (browser) init()
    })

    return { subscribe }
}

export const app = createApp()