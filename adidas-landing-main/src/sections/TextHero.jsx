import React, { useRef } from 'react'
import Button from '../components/Button'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);


const TextHero = () => {
  const container = useRef();
    useGSAP(
        () => {
        gsap.fromTo(
            '.heroTexts',
            { opacity: 0 }, // H1 Starts on the rights
            {
              opacity: 1, // Moves to the left
                // ease: 'power1.inOut',
                scrollTrigger: {
                    // pin: '.heroTexts',
                    trigger: '.heroTexts',
                    duration: 1.5,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                },
            }
        ),
        gsap.fromTo(
          '.buttonShop',
          { opacity: 0 }, // H1 Starts on the rights
          {
            opacity: 1, // Moves to the left
              // ease: 'power1.inOut',
              scrollTrigger: {
                  // pin: '.heroTexts',
                  trigger: '.buttonShop',
                  duration: 2,
                  start: 'top 100%',
                  end: 'top 40%',
                  scrub: true,

              },
          }
      )
        },
        { scope: container },   
    )

  return (
    <section ref={container} >
        <div className="heroBg flex flex-col w-full justify-center items-center gap-10 bg-[url('/src/assets/images/textHeroBg.png')] bg-no-repeat bg-cover max-sm:bg-center py-60">
            <div className='heroTexts flex flex-col w-[40%] max-sm:w-[100%] max-sm:px-4 justify-center items-center text-center'>
                <h1 className='mt-10 text-4xl uppercase font-bold max-sm:text-[42px] max-sm:leading-[42px] max-sm:text-center'>
                    Get on with Speed and Fit
                </h1>

                <p>Ready to do more in your game with energy, comfort, ease and power with the new release shoes. It is new dawn here.</p>
            </div>
           <div className='buttonShop' >
            <Button label="Shop New Styles" />
           </div>
            
        </div>
       
    </section>
  )
}

export default TextHero