'use client';
import React from 'react'
import { permanent_dns, dev_dns } from '../lib/link_dev'



async function DownloadDataset() {
  const res = await fetch(`http://${permanent_dns}/api-ia/dataset/0`,{
    method:"GET",
    mode:"cors",
    credentials:"include",
    headers: {
      'X-API-Key': 'blabla'
    }})
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.click();
  window.URL.revokeObjectURL(url);

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 return blob
}

export default function DatasetPage() {
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4'>
        <p>Dataset</p>
        <button onClick={DownloadDataset}>Télécharger le dataset</button>
        <p>Le téléchargement met plusieurs minutes à démarrer. En effet, pour le moment la mise en forme au format YOLO et la compression des images se fait à la volée.</p>
      </div>
    )
  }