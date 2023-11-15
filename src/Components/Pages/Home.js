import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/popular/MostPopular'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"
import "../../App.css"

const Home = () => {
  return (
    <>
      <Hero/>
      <HomeAbout/>
      <MostPopular/>
      <DestinationHome/>
      <Download />
      <Works />
      <Gallery />
    </>
  )
}

export default Home
