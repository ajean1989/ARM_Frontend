'use client'

import React from 'react';
import {useState, useEffect} from 'react';


export default function Page() {

  const [logContent, setLogContent] = useState('');

  useEffect(() => {
    fetch('http://localhost/api-backend/logs/api-ia/',{
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
          'X-API-Key': 'blabla'
        }
      })
      .then((response) => response.json())
      .then((text) => {
        setLogContent(text.log);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération du fichier de log:', error);
      });
  }, []);


    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4'>
        <div dangerouslySetInnerHTML={{ __html: logContent }}/>
      </div>
    )
  }