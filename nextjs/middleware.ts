import { cookies } from 'next/headers'
 
export function getSessionData() {
  const SessionData = cookies().get('session')?.value
  return SessionData ? JSON.parse(SessionData) : null
}


import type { NextRequest } from 'next/server'
 


export async function middleware(request: NextRequest) {
  const currentUser = await getSessionData()
  // if (currentUser){
    // Si il y a des cookies de session
    // if ((currentUser.user.role != 0 || currentUser.user.role != 1) && (request.nextUrl.pathname.startsWith('/dataset') || (request.nextUrl.pathname.startsWith('/log')))) {
      // return Response.redirect(new URL('/accesdenied', request.url))
    // }
  
    // if (!currentUser && (!request.nextUrl.pathname.startsWith('/dataset') || !request.nextUrl.pathname.startsWith('/log'))) {
      // return Response.redirect(new URL('/connexion', request.url))
    // }
  // }
}
 

export const navItems =  () => {

    const user = getSessionData()

    if (user && user.user && user.user.role){
      if (user.user.role === 0) {
        return ["Home", "Try it", "Dataset", "Model monitoring", "API monitoring", "Logs"]    
      }
      else if ( user.user.role === 1) {
        return ["Home", "Try it",  "Dataset", "Model monitoring"]    
      }
      else {
        return ["Home", "Try it"]   
      }
    }
    else {
      return ["Home", "Try it"] 
    }

  }
