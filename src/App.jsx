import React from 'react'
import Navbar from './components/Navbar'
import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import WorkFlow from './components/WorkFlow'
import Price from './components/Price'
import Testimonials from './components/Testinomials'
import Footer from './components/Footer'
function App() {
  return (
  <>
<Navbar/>
<div className='max-w-7xl pt-20 px-6 mx-auto'>
  <HeroSection/>
</div>
<FeaturesSection/>
<WorkFlow/>
<Price/>
<Testimonials/>
<Footer/>
</>  )
}

export default App