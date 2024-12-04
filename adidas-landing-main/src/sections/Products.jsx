import React, { useRef } from 'react'
import { productCards } from '../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
    const container = useRef();

    useGSAP(
        () => {
        // gsap.from('.header', { x: 100  });
        // gsap.to('#title', { opacity: 1, y: 0 })
        // gsap.to('#originals', { rotation: 45  });
        // gsap.to('#originals', { y: 0, opacity: 1})
        // gsap.to('.originals', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
        // gsap.fromTo(
        //     '#originals',
        //     { x: 100 }, // H1 Starts on the rights
        //     {
        //       x: 1, // Moves to the left
        //         ease: 'power1.inOut',
        //         scrollTrigger: {
        //             // pin: '.header',
        //             trigger: '#originals',
        //             duration: 5,
        //             start: 'top 100%',
        //             end: 'top 20%',
        //             scrub: true,

        //         },
        //     }
        // )
        },
        { scope: container },

        
    )

    return (
        <section ref={container} className='w-full py-40 max-sm:py-20 z-0'>
            <div >
                <h3 className='header z-0'>
                    <span id='originals' className='originals uppercase text-4xl max-sm:text-lg text-white font-bold italic mb-10 max-sm:mb-2 px-10 max-sm:px-2' >Shop by Originals</span></h3>
            </div>
            
            <div className="flex snap-x snap-mandatory w-full mx:auto overflow-scroll gap-4">
                {
                    productCards.map((product, i) => (
                        <div key={i} className="snap-center shrink-0 bg-white  flex w-[640px] max-sm:w-[260px] h-[500px] max-sm:h-[240px] flex-col justify-between items-center">
                            <img className='w-[400px] h-[340px] max-sm:w-[160px] max-sm:h-[140px]' src={product.imgUrl} alt="" />

                            <div className='bg-black text-white flex flex-col gap-4 max-sm:gap-1 w-full px-2 py-2'>
                            <h3 className='text-2xl  max-sm:text-lg text-left font-bold'>{product.pName}</h3>
                            <p className=' text-xl max-sm:text-xs text-left uppercase'>{product.category}</p>
                            </div>
                            
                            
                        </div>
                    ))
                }
                
                

            </div>
        </section>
  )
}

export default Products