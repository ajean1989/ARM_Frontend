"use client";

import React from 'react';
import Link from 'next/link'
import { useState } from 'react';
import { getEnabledExperimentalFeatures } from 'next/dist/server/config';
// import { navItems } from 'middleware';


const navItems = ["Home", "Try it", "Dataset", "Model monitoring", "API monitoring", "Logs"] 

const Nav = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isContent, setIsContent] = useState("Home");
      
  // Evénements qui ouvre/ferme la nav + récupère le titre cliqué pour l'afficher en haut de la nav
  const handleClick = (event) => {
          setIsClicked(!isClicked);
          setIsContent(isContent => event.target.innerText);
        };


  return (
    <nav className='bg-my-yellow-50 absolute top-20 w-full flex flex-col justify-center hover:cursor-pointer'>

      <p id="home" className='text-center hover:font-semibold' onClick={handleClick}>{isContent}</p>

      <ul className={`*:text-center ${isClicked ? 'hidden' : 'block'}`}>
        
        {/* {navItems.map((navItems) => (
            <li key={navItems} onClick={handleClick}>
                <Link href={`${navItems.toLowerCase() == "home" ? "/" : "/" + navItems.toLowerCase().replace(/\s+/g, '-')}`}>
                    {navItems}
                </Link>
            </li>
            ))} */}
        <li onClick={handleClick}><Link href={"/"}>Home</Link></li>
        <li><Link href={"http://localhost/gradio/"} target='_blank'>Try-it</Link></li>
        <li onClick={handleClick}><Link href={"/dataset"}>Dataset</Link></li>
        <li><Link href={"http://localhost/mlflow/"} target='_blank'>Model monitoring</Link></li>
        <li><Link href={"http://localhost/mlflow/"} target='_blank'>API monitoring</Link></li>
        <li onClick={handleClick}><Link href={"/logs"}>Logs</Link></li>

      </ul>
    </nav>
  );
};

export default Nav;
