import React from 'react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-my-yellow h-20 flex flex-col justify-center'>
      <ul className='flex justify-around'>
        <li>Mentions légales</li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/connexion">Connexion</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
