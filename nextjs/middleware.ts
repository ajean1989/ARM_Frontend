import { cookies } from 'next/headers'
 
export function getSessionData() {
  const SessionData = cookies().get('session')?.value
  return SessionData ? JSON.parse(SessionData) : null
}


import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export async function middleware(request: NextRequest) {
  try{
    console.log(request.nextUrl.pathname)
    const currentUser = await getSessionData()
    // const SessionData = await request.cookies.get('session')?.value
    // SessionData ? JSON.parse(SessionData) : null
    if (currentUser){
      console.log(currentUser)
      // Si il y a des cookies de session
      if ((currentUser.user.role === 1) && (request.nextUrl.pathname.startsWith('/api-monitoring') || (request.nextUrl.pathname.startsWith('/log')))) {
        return Response.redirect(new URL('/accesdenied', request.url))
      }
      else if ((currentUser.user.role === 2) && (request.nextUrl.pathname.startsWith('/api-monitoring') || request.nextUrl.pathname.startsWith('/model-monitoring') || (request.nextUrl.pathname.startsWith('/log')) || request.nextUrl.pathname.startsWith('/dataset') )) {
        return Response.redirect(new URL('/accesdenied', request.url))
      }
      // if ((currentUser.success) && (request.nextUrl.pathname.startsWith('/connexion'))) {
      //   const response = NextResponse.redirect(new URL('/', request.url))
      //   return response
      // }
    }
    else {
      if (request.nextUrl.pathname.startsWith('/api-monitoring') || request.nextUrl.pathname.startsWith('/model-monitoring') || (request.nextUrl.pathname.startsWith('/log')) || request.nextUrl.pathname.startsWith('/dataset')) {
        return Response.redirect(new URL('/accesdenied', request.url))
      }
    }
    if (request.nextUrl.pathname.startsWith('/logout')) {
      // const response = NextResponse.next()
      // console.log("all :", response.cookies.getAll())
      // const a = request.cookies.get('session')
      // console.log("a :", a)
      // request.cookies.delete('session')
      // const b = request.cookies.get('session')
      // console.log("b :", b)
      // console.log("all :", response.cookies.getAll())
      // return Response.redirect(new URL('/', request.url))
      const response = NextResponse.redirect(new URL('/connexion', request.url))
      await response.cookies.delete('session')
      return response
    }
    
  }
  catch (e) {console.log("ERR >>> ",e)}
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
