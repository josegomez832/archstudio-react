import React, {useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function PortfolioItems({project}) {
  const d = new Date(project.fields.projectDate);
  let year = d.getUTCFullYear();
  let month = d.getUTCMonth();
  console.log(month);
  useEffect(() => {
    // Client-side-only code
    AOS.init();
  },[])
  console.log(project);
  return (
    
    <div className='featured-items col-4'  data-aos="fade-in" data-aos-mirror="true">
      <div className='number'></div>
        <div className='featured-items--content dark-theme'>
          <p className='project-title'>{project.fields.title}</p>
          <p  className='project-date'>{project.fields.projectDate}</p>          
        </div>
        <div className='gradient'></div>
        <div className='featured-items--img hvr'>
          <Image
            src={`https:${project.fields.projectImage.fields.file.url}`}
            alt={project.fields.title}
            width={350}
            height={560}
            layout="raw"
          />
        </div>
        
        
    </div>
  )
}

export default PortfolioItems