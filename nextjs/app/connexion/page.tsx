export const dynamic = 'force-dynamic'

import React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { setcookie } from '../lib/action'
import { getEnvironment } from '../lib/getEnv'
import { permanent_dns, dev_dns } from '../lib/link_dev'
import { useRouter } from 'next/navigation'
import { revalidatePath } from 'next/cache'




const loginAction = async (formData) => {
    'use server'
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    
    // const dns = (process.env.NODE_ENV === "production") ? "jacquenet.com" : "jacquenen"  
    // const dns = "traefik"



    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    
    
    console.log(`https://${permanent_dns}/api-backend/authenticate/`)

    try{
        const response = await fetch(`https://${permanent_dns}/api-backend/authenticate/`,{
            method:"POST",
            mode:"cors",
            credentials:"include",
            headers: {
                'X-API-Key': process.env.ARM_VPS1_API_KEY
            },
            body: formData,
        
        })

        const dataFetch = await response.text()
        console.log("response connexion : ", dataFetch)

        const jsonData = dataFetch;
        const data = JSON.parse(jsonData)
        if (data.success === true) {
            setcookie(jsonData)
        }
            // const a = handleLogin(jsonData)
    }
    catch(err){
        console.log(err)
    }
      


};



const LoginPage = async () => {
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4 flex justify-center'>
            <form action={loginAction}>
                <div className="flex flex-col justify-center">
                    <label className='text-center'>e-mail</label>
                    <input
                        type="text"
                        name='email'
                        id="username"
                        required
                        className='rounded'
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <label className='text-center'>Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        required
                        className='rounded'
                    />
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className='hover:cursor-pointer hover:font-semibold'>Se connecter</button>
                </div>
            </form>

      </div>
    )
  }

  export default LoginPage;