"use client";

import React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { setcookie } from '../lib/action'


const loginAction = async (formData) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    const response = await fetch('http://localhost/api-backend/authenticate/',{
        method:"POST",
        mode:"cors",
        credentials:"include",
        headers: {
            'X-API-Key': 'blabla'
        },
        body: formData
    })

    const jsonData = await response.text();
    const data = JSON.parse(jsonData)
    if (data.success === true) {
        console.log(jsonData)
        setcookie(jsonData)
    }
        // const a = handleLogin(jsonData)

        redirect(`/`) // Navigate to the new post page
    
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