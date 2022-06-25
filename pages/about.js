import React, {useEffect }  from 'react'
import styles from '../styles/Home.module.css'
import Navigation from '/sections/Header'
import Footer from '/sections/Footer'
import { teams } from '../utils/constants'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { AiFillLinkedin } from "react-icons/ai"
import {AiOutlineTwitter} from 'react-icons/ai'
import Link from 'next/link'

//import headerImg from '/about-header.jpg'
export default function About() {
    useEffect(() => {
        // Client-side-only code
        AOS.init();
      },[])
  return (
    <div>
        <Navigation />
        <div className='container section about-intro' data-aos="fade-right" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-6'>
                <Image
                    src='/about-header.jpg'
                    alt="About Arch Studio"
                    width={645}
                    height={720}
                    />
                </div>
                <div className='col-6 bleed-content'>
                    <div className='about-content'>
                        <h1 className='lg-heading'>About</h1>
                        <h3>Your team of professionals</h3>
                        <p>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container section' data-aos="fade-left" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-6'>
                    <h3>Our Heritage</h3>
                    <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>

                    <p>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>

                    <p>Our small team of world-class professionals provides input on every project.</p>
                </div>
                <div className='col-6'>
                    <Image
                        src="/our-heritage.jpg"
                        alt="Our Heritage image block"
                        width={540}
                        height={568}
                    />
                </div>
            </div>
        </div>
        <div className='container section' data-aos="fade-right" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-3'><h3>The Leaders</h3></div>
                <div className='col-9'>
                    <div className='row'>
                    { teams.map( (team) => {
                            const {id, name, title, image, linkedin, twitter} = team;
                            return (
                                <div className='col-6' key={id}>
                                    <div className='team-img'>
                                        <Image
                                            src={image}
                                            alt={name}
                                            width={350}
                                            height={350}
                                            layout="raw"
                                        />
                                        <div className='social hvr'>
                                            <Link href={linkedin}><a><AiFillLinkedin /></a></Link>
                                            <Link href={twitter}><a><AiOutlineTwitter /></a></Link>
                                        </div>
                                    </div>
                                    <h4>{name}</h4>
                                    <p className='xs-fs'>{title}</p>
                                </div>
                            
                            )
                        })}
                    </div>
                </div>
            </div>
         </div>
         <Footer />
    </div>
  )
}
