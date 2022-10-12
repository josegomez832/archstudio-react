import React, {useState} from 'react'
import Image from 'next/image'
import { links } from '../utils/constants'
import {FiMenu} from 'react-icons/fi'
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
 
    return (
        <div className="container navigation-header">
          <div className={`mobileMenu ${navbarOpen ? "open" : "close"}`}>
            <div className='close-icon'>
                <AiOutlineClose 
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                  }} />
            </div>
                <ul className="nav" role="navigation">
                { links.map( (link) => {
                  const {id, text, url} = link;
                    return (
                    <li key={id}><Link href={url}><a>{text}</a></Link></li>  
                    )
                })}
              </ul>
          </div>
        <div className="row">
          <div className="col-2 col-sm-6">
            <Link href="/">
              <a>
                  <Image
                  src="/ArchLogo.svg"
                  alt="Arch Studio Houston"
                  width={96}
                  height={40}
                />
              </a>
            </Link>
              
          </div>
          
            <div className={`col-10  hidden-md`}>
              <ul className="nav" role="navigation">
                { links.map( (link) => {
                  const {id, text, url} = link;
                    return (
                    <li key={id}><Link href={url}><a>{text}</a></Link></li>  
                    )
                })}
              </ul>
            </div>
            
         
          <div className="col-sm-6 visible-md">
            <div className=' menu-hamburger'>
              <FiMenu onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }} />
            </div>
             
          </div>
        </div>
      </div>
    )
}
