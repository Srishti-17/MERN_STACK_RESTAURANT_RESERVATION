import React from 'react'
import HeroSection from '../src/components/HeroSection'
import About from '../src/components/About'
import Qualities from '../src/components/Qualities'
import Menu from '../src/components/Menu'
import WhoAreWe from '../src/components/WhoAreWe'
import Team from '../src/components/Team'
import Reservation from '../src/components/Reservation'
import Footer from '../src/components/Footer'

function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default Home