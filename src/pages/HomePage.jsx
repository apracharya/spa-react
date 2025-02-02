import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-24 flex-grow">
            <div className='hero-section'>
                HERO SECTION
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage