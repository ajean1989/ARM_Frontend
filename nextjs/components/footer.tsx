export const dynamic = 'force-dynamic'

import React from 'react';
import Link from 'next/link'
import { getSessionData } from '../middleware'
// import { deleteSession } from 'app/lib/action';
import LogBtn from './button_log';






// const logout = async () => {
//   "use server"
//   try{
//     console.log('heyeyy')
//     // cookies().delete('session');
//     // Redirect or handle the response after setting the cookie
//     // redirect('/')
//   }
//   catch(e) {console.log(e)}
// }

const Footer = async () => {
  try{

    const session = getSessionData()

    return (
      <footer className='bg-my-yellow h-20 flex flex-col justify-center'>
        <ul className='flex justify-around'>
          <li>Mentions légales</li>
          <li><Link href="/contact">Contact</Link></li>
          <li><LogBtn data={session} /></li>
        </ul>
      </footer>
    );
  }
  catch (e) {console.log("ERR >>> ",e)}
};

export default Footer;
