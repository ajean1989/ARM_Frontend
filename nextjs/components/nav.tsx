"use client";

import React from 'react';
import Link from 'next/link'
import { useState } from 'react';
import { getEnabledExperimentalFeatures } from 'next/dist/server/config';
import { permanent_dns, dev_dns } from '../app/lib/link_dev'
import navBtn from './btn_nav';

// import { navItems } from 'middleware';

// const dns = getEnvironment()[0]
const navItems = ["Home", "Try it", "Dataset", "Model monitoring", "API monitoring", "Logs"] 
const navUri = ["/", "try-it", "dataset", "gradio", "grafana", "logs"] 

const Nav = () => {
  const [isClicked, setIsClicked] = useState(true);
  // const [isContent, setIsContent] = useState("Home");
  const [count, setCount] = useState(0);


      
  // Evénements qui ouvre/ferme la nav + récupère le titre cliqué pour l'afficher en haut de la nav
  const handleClick = (event) => {
          setIsClicked(!isClicked);
          // setIsContent(isContent => event.target.innerText);
        };


  return (
    <nav className='bg-my-yellow-50 absolute top-20 w-full flex flex-col justify-center hover:cursor-pointer'>

      <p id="home" className='text-center hover:font-semibold' onClick={handleClick}>Menu</p>

      <ul className={`*:text-center ${isClicked ? 'hidden' : 'block'}`}>
 
        <li onClick={handleClick}><Link href={"/"}>Home</Link></li>
        <li onClick={handleClick}><Link href={`https://${dev_dns}/gradio/`} target='_blank'>Try-it</Link></li>
        <li onClick={handleClick}><Link href={"/dataset"}>Dataset</Link></li> 
        <li onClick={handleClick}><Link href={`https://${dev_dns}/mlflow/`} target='_blank'>Model monitoring</Link></li>
        <li onClick={handleClick}><Link href={`https://${dev_dns}/grafana/`} target='_blank'>API monitoring</Link></li>
        <li onClick={handleClick}><Link href={"/logs"}>Logs</Link></li>

      </ul>
    </nav>
  );
};

export default Nav;
