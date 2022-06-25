import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import teamBg from '../public/home-about-section.jpg'
import { AiOutlineArrowRight } from "react-icons/ai"
export default function HomeMeetTeam() {
  return (
    <div className='about-us section' data-aos="fade-in" data-aos-mirror="true">
      <div className='about-us--content dark-theme'>
        <p className='h3 white-text'>Small team, big ideas</p>
        <Link href="/">
          <a className='button btn-dark'>About Us <AiOutlineArrowRight /></a>
        </Link>
      </div>
      <Image
            src={teamBg}
            alt="Arch Studio team"
        />
    </div>
  )
}
