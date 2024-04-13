'use server'
 
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 

export async function deconnect (data) {
    cookies().delete('session');
    redirect('/');
};
