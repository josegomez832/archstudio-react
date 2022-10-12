import React from 'react'
import Image from 'next/image'
import { links } from '../utils/constants'
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai"

export default function footer() {
    return (
        <div className='footer container'>
            <div className='footer-inner'>
                <div className='logo'>
                    <Image
                        src='/ArchLogo-white.svg'
                        alt="Footer logo"
                        width={96}
                        height={40}
                    />
                </div>
                <div className='nav'>
                <ul className="nav" role="navigation">
                    { links.map( (link) => {
                        const {id, text, url} = link;
                        return (
                        <li key={id}><Link href={url}><a>{text}</a></Link></li>  
                        )
                    })}
                </ul>
                </div>
                <Link href="/portfolio">
                    <a className='button btn-dark right-bleed'>See Our Portfolio <AiOutlineArrowRight /></a>
                </Link>
            </div>
        </div>
    )
}