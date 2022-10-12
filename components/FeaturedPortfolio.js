import React, {useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function FeaturedPortfolio({project, count}) {
  useEffect(() => {
    // Client-side-only code
    
  },[])
  if(project.fields.featured == true){
    return (
      <div className='featured-items col-4'>
        <div className='count'>{count}</div>
          <div className='featured-items--content dark-theme'>
            <p className='project-title'>{project.fields.title}</p>
            <Link href='/portfolio'>
              <a className='text-link white-text'>View All Projects</a>
            </Link>
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
}

export default FeaturedPortfolio