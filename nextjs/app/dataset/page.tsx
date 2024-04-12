'use client';
import React from 'react';

async function DownloadDataset() {
  const res = await fetch('http://localhost/api-ia/dataset/0',{
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

export default function Page() {
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4'>
        <p>Dataset</p>
        <button onClick={DownloadDataset}>Télécharger le dataset</button>
      </div>
    )
  }