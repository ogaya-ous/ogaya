import { dev } from '$app/environment'
import { auth } from '$lib/admin.server'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

const WEEK_IN_SECONDS = 60 * 60 * 24 * 7
const WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * 1000

export const POST: RequestHandler = async ({ request, cookies }) => {
    const token = await request.text()

    const user = await auth.verifyIdToken(token)
    const sessionCookie = await auth.createSessionCookie(token, { expiresIn: WEEK_IN_MILLISECONDS })
    const options = { maxAge: WEEK_IN_SECONDS, httpOnly: true, secure: !dev }
    cookies.set('session', sessionCookie, options)

    return json(getSession(user))
}

// クッキーを削除
export const DELETE: RequestHandler = async ({ cookies }) => {
    /* @migration task: add path argument */ /* @migration task: add path argument */ cookies.delete('session')

    return json(getSession(null))
}

/*
export function getSession(user: DecodedIdToken | null): Session {
    if (user) {
        const { name, email, email_verified, uid } = user
        return { user: { name, email: email!, email_verified: email_verified!, uid } }
    }
    return { user }
}
*/