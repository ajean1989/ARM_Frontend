"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

 
export async function setcookie(sessionData) {
  //const encryptedSessionData = encrypt(sessionData) // Encrypt your session data
  await cookies().set('session', sessionData, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    secure : true,
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
    sameSite : 'none'
  })
}

