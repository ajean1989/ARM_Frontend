'use client' ;

import React, { useEffect} from 'react';
import { deleteSession } from '../lib/action';



const SignOutPage = () => {
    useEffect(() => {
      deleteSession().then();
  }, []);
    deleteSession()
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4 flex justify-center'>
            <p>Déconnexion ...</p>

      </div>
    )
  }

export default SignOutPage;