'use client'

import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function handleClick(event) {
    // Empêche le comportement par défaut du bouton
    event.preventDefault();

    
  }

const LogBtn = (props) => {
    try{
        const session = props.data

        return (
            <span>
            {/* {session?.success ? (
                <button onClick={handleClick}><Link href="/logout">Déconnexion</Link></button>
            ) : (
                <button onClick={handleClick}><Link href="/connexion">Connexion</Link></button>
            )} */}
            <button onClick={handleClick}><Link href="/connexion">Connexion</Link></button>
            </span>
        )
    }
    catch(e) {console.log("ERR >>> ",e)};
};




export default LogBtn;
