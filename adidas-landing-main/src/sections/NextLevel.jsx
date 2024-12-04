import React from 'react'
import Button from '../components/Button'
import {discountLogo, shoeTrGray} from '../assets/images'

const NextLevel = () => {
  return (
    <section
        id=''
        className='flex flex-col xl:flex-row justify- items-center  gap-10 mx-10 px-0 py-40 max-sm:py-20  max-sm:mx-0 max-sm:gap-10'
        >
            <div className='flex xl:w-3/5 justify-evenly items-center relative max-sm:p-0'>
                <div className="absolute w-[640px] h-[220px] max-sm:w-[250px] max-sm:h-[95px] mt-5 max-sm:mt-2 bg-yellow-100 rounded-full">
                </div>
                <img className='z-10 w-[800px] max-sm:w-full' src={shoeTrGray} alt="Ultraboost sneakers" />

                <div>
                    <img className=' absolute w-[120px] h-[120px] -ml-20 top-60 max-sm:left-24 max-sm:top-2 max-sm:w-[50px] max-sm:h-[50px]' src={discountLogo} alt="" />
                </div>
                
            </div>

           

            <div className='relative xl:w-2/5 flex flex-col jusitfy-center items-start max-sm:items-center w-full max-xl:padding-x max-sm:p-0'>
                <p className='text-xl max-sm:text-center'>2024 <span>New </span> Dawn</p>
                
                <h1 className='mt-10 text-8xl font-bold max-sm:text-[42px] max-sm:leading-[42px] max-sm:text-center'>
                    Adidas
                    <br />
                    <span className='text-lime-100'>UltraBoost</span>
                    <br />
                    Venom
                </h1>

                <p className='max-sm:text-center'>New steppers that enable you attain groundbreaking greatness with speed and comfort.
                </p>
                <div className='flex justify-center items-center gap-4 mt-8'>
                    <span className='text-3xl font-bold'>$230</span>
                    <Button label="Add to Cart" linkUrl="/" />
                </div>
               
            </div>

            

    </section>
  )
}

export default NextLevel