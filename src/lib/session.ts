import { browser } from '$app/environment'
import { page } from '$app/stores'
import { derived, writable } from 'svelte/store'
import { auth } from './auth'
import { dedupe } from './dedupe'
import type { Session } from './types'


const internal = writable<Session>()

const external = dedupe(derived(page, $page => $page.data.session))

export const session = derived([internal, external], ([$internal, $external]) => $internal || $external)

async function syncSession() {
    if (!browser) return


    const { onIdTokenChanged, getIdToken } = await import('firebase/auth')

    auth.subscribe($auth => {
        if ($auth) {
            onIdTokenChanged($auth, async user => {

            const req = user
                ? fetch('/session', {
                    method: 'post',
                    body: await getIdToken(user),
                })
                : fetch('/session', {
                    method: 'delete'
                })

                const res = await req
                const data: Session = await res.json()
                internal.set(data)
            })
        }
    })
}

syncSession()