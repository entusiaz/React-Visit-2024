import { useEffect, useRef, useState } from 'react'
// import './App.css'
import Hero from './sections/Hero'
import Collection from './sections/Collection'
import Impossibility from './sections/Impossibility'
import Nav from './components/Nav'
import NextLevel from './sections/NextLevel'
import TextHero from './sections/TextHero'
import Products from './sections/Products'
import Footer from './sections/Footer'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 


function App() {
  const [count, setCount] = useState(0)

  const container = useRef();

  useGSAP(
    () => {
      gsap.to('.box', { rotation: 0  });
    },
    { scope: container }
  )

  return (
    <main ref={container} className='app bg-gray-950 relative text-white'>
      <section className='box'>
        <Nav />
      </section>
      <section className=''>
        <Hero />
      </section>

      <section className='z-0'>
        <Products />
      </section>

      <section className=''>
        <TextHero />
      </section>
      
      <section className=''>
        <NextLevel />
      </section>

      <section className=''>
        <Footer />
      </section>
    </main>

  )
}

export default App
