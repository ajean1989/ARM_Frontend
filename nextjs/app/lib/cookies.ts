"use server";

import { cookies } from 'next/headers'
 
export async function getSessionData() {
  const SessionData = cookies().get('session')?.value
  return SessionData ? JSON.parse(SessionData) : null
}
