import { cookies } from 'next/headers'
 
export function getSessionData() {
  // const SessionData = cookies().get('session')?.value
  const SessionData = cookies().get('session')?.value
  // console.log(typeof(SessionData))
  // console.log(SessionData)
  console.log('---')
  console.log('1',SessionData)
  console.log('2',typeof(SessionData))
  // console.log('3',JSON.parse(SessionData))
  return SessionData ? JSON.parse(SessionData) : null
  // return SessionData ? SessionData : null
}


import type { NextRequest } from 'next/server'
 


export async function middleware(request: NextRequest) {
  const currentUser = getSessionData()
  if (currentUser){
    console.log(currentUser)
    // Si il y a des cookies de session
    if ((currentUser.user.role === 1) && (request.nextUrl.pathname.startsWith('/api-monitoring') || (request.nextUrl.pathname.startsWith('/log')))) {
      return Response.redirect(new URL('/accesdenied', request.url))
    }
    else if ((currentUser.user.role === 2) && (request.nextUrl.pathname.startsWith('/api-monitoring') || request.nextUrl.pathname.startsWith('/model-monitoring') || (request.nextUrl.pathname.startsWith('/log')) || request.nextUrl.pathname.startsWith('/dataset') )) {
      return Response.redirect(new URL('/accesdenied', request.url))
    }
  }
  else {
    if (request.nextUrl.pathname.startsWith('/api-monitoring') || request.nextUrl.pathname.startsWith('/model-monitoring') || (request.nextUrl.pathname.startsWith('/log')) || request.nextUrl.pathname.startsWith('/dataset')) {
      return Response.redirect(new URL('/accesdenied', request.url))
    }
  }
}
 

// export const navItems = () => {

//     const currentUser = getSessionData()

//     if (currentUser){
//       if (currentUser.currentUser.role === 0) {
//         return ["Home", "Try it", "Dataset", "Model monitoring", "API monitoring", "Logs"]    
//       }
//       else if ( currentUser.currentUser.role === 1) {
//         return ["Home", "Try it",  "Dataset", "Model monitoring"]    
//       }
//       else {
//         return ["Home", "Try it"]   
//       }
//     }
//     else {
//       return ["Home", "Try it"] 
//     }

//   }
