import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg1 from '../components/HeroImg1'
import Form  from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg1 heading="<CONTACT. />" details="Contact to me"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact