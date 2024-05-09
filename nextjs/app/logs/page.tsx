'use client'

import React from 'react';
import {useState, useEffect} from 'react';
import { permanent_dns, dev_dns } from '../lib/link_dev'


export default function LogPage() {

  const [logContent, setLogContent] = useState('');


  useEffect(() => {
    fetch(`https://${permanent_dns}/api-backend/logs/api-ia/`,{
      method:"GET",
      mode:"cors",
      credentials:"include",
      headers: {
        'X-API-Key': process.env.ARM_VPS1_API_KEY
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