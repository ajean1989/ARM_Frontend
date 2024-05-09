import React from 'react';
import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image'
import github from '../public/images/github.png'
import linkedin from '../public/images/linkedin.png'

// export let navName : string = "Home"
  
export const metadata: Metadata = {
  title: 'ARM - Home',
  description: "Page d'accueil de la plateforme ARM",
}


// `app/page.tsx` is the UI for the `/` URL
export default function IndexPage() {
    return (
      <div className='bg-my-yellow rounded-xl w-4/5 m-auto p-4 my-20 md:w-3/4'>
        <div>
          <div className="flex items-center justify-center">
            <h1 >Projet E4 de la certification de développeur en intelligence artificielle Simplon</h1>
          </div>
          <br />
          <p>Cette application permet de tester le modèle d'IA. Ce modèle permet, grâce à l'image d'un article, d'obtenir son code barre (identifiant international unique).</p>
          <p>Vous pouvez aussi télécharger le dataset d'entrainement au format YOLO.</p>
          <p>L'application propose plusieurs interfaces de monitoring (application, modèle, api, scripts sous-jacents).</p>
          <br />
          <p>Ce projet est architecturé en micro-services répartis sur 4 principaux repositories github : </p>
          <br />
          <ul>
            <li className='flex'><Link href="https://github.com/ajean1989/ARM_Starter" target='_blank'><Image src={github} width={45} height={45} alt="git" /></Link>Le kit de démarrage : reverse-proxy, bases de données, monitoring app.</li>
            <li className='flex'><Link href="https://github.com/ajean1989/ARM_Backend" target='_blank'><Image src={github} width={45} height={45} alt="git" /></Link>Une partie "backend" qui gère la base de données relationnelle et les services relatifs.</li>
            <li className='flex'><Link href="https://github.com/ajean1989/ARM_IA" target='_blank'><Image src={github} width={45} height={45} alt="git" /></Link>Une partie "IA" en charge du dataset, de la base de données NoSQL, la prédiction du modèle, MLFlow...</li>
            <li className='flex'><Link href="https://github.com/ajean1989/ARM_Frontend" target='_blank'><Image src={github} width={45} height={45} alt="git" /></Link>La partie frontend réalisée avec React et NextJS.</li>
          </ul>
          <br />
          <p>J'espère que vous trouverez l'application passionnante et innovante. N'hésitez pas à explorer chaque partie du site et à me faire part de vos commentaires.</p>
          <br />
          {/* <div className='flex m-2'><Link href="https://github.com/ajean1989/ARM_Frontend"><Image src={linkedin} width={25} height={25} alt="git" /></Link><p>Adrien Jacquenet</p></div> */}
        </div>
      </div>
    )
  }