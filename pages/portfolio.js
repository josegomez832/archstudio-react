import React from 'react'
import { createClient,contentful } from 'contentful'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Header'
import AOS from 'aos';
import PortfolioItems from '../components/PortfolioItems'
import Footer from '../components/Footer'
import 'aos/dist/aos.css'; // You can also use <link> for styles
export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({
    content_type: 'portfolio'
  })

  return {
    props: {
      portfolio: res.items
    }
  }
}
function portfolio({portfolio}) {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className='container section portfolio-page'>
        <div className='row'>
        { portfolio.map( project => (
                    <PortfolioItems key={project.sys.id} project={project} /> 
                )) }
        </div>
      </div>
      <Footer  />
    </div>
    
  )
}

export default portfolio