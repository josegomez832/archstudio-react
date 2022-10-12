import React,{useEffect} from 'react'
import Navigation from '../sections/Header'
import Footer from '../sections/Footer'
import Image from 'next/image'
import AOS from 'aos'
import Head from 'next/head'
import 'aos/dist/aos.css'; // You can also use <link> for styles
//import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { AiOutlineArrowRight } from "react-icons/ai"
import dynamic from 'next/dynamic'


const Map = dynamic(() => import('/components/Map'), {
    ssr: false
  });
function Contact() {
    useEffect(() => {
        // Client-side-only code
        AOS.init();
        
      },[]);
      
      // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
}
  return (
    <div>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossOrigin=""/>
        </Head>
        <Navigation />
        <div className='container section about-intro' data-aos="fade-right" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-6'>
                <Image
                    src='/contact-header.jpg'
                    alt="Contact Arch Studio"
                    width={645}
                    height={720}
                    />
                </div>
                <div className='col-6 bleed-content'>
                    <div className='about-content'>
                        <h1 className='lg-heading'>Contact</h1>
                        <h3>Tell us about your project</h3>
                        <p>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container section location-details' data-aos="fade-left" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-4'>
                    <h3>Contact Details</h3>
                </div>
                <div className='col-4'>
                    <p><strong>OfficeOne</strong></p>
                    <p>Mail :archone@mail.com<br />
                        Address: 2409 University Ave,<br />
Austin, TX 78712<br />
                        Phone: 123-456-3451</p>
                </div>
                <div className='col-4'>
                    <p><strong>OfficeOne</strong></p>
                    <p>Mail :archone@mail.com<br />
                        Address: 4800 Calhoun Rd,<br/>
Houston, TX 77004<br/>
                        Phone: 123-456-3451</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Map />
                </div>
            </div>
        </div>
        <div className='container section map-container' data-aos="fade-right" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            
        </div>
        <div className='container section form-container' data-aos="fade-left" data-aos-mirror="true" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='row'>
                <div className='col-3'>
                    <h3>Connect With Us</h3>
                </div>
                <div className='col-9'>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="name"> Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="user-box">
                        <input type="textbox" id="message" name="message" required />
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className='button btn-dark '><span className='d-none'>Submit</span><AiOutlineArrowRight /></button>
                </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact