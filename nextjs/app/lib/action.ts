'use server'
 
import { cookies } from 'next/headers'
 
export async function setcookie(sessionData) {
  //const encryptedSessionData = encrypt(sessionData) // Encrypt your session data
  cookies().set('session', sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  // Redirect or handle the response after setting the cookie
}

export async function deleteSession() {
  cookies().delete('session');
  // Redirect or handle the response after setting the cookie
}