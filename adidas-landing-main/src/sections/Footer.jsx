import React from 'react'
import { privacyChoices } from '../assets/icons'

const Footer = () => {
  return (
   
   <div className='flex flex-col justify-center items-center'>
    <section className='w-full flex justify-center items-center gap-10 max-sm:gap-3 py-10 px-10 max-sm:py-5 bg-amber-300 text-black font-montserrat max-sm:px-2'>
      <span className='font-bold text-4xl max-lg:text-xl max-sm:text-sm'>JOIN OUR ADICLUB & GET 15% OFF</span>
      <button className="bg-black hover:bg-gray-700 hover:text-gray-300 text-white font-bold  py-2 px-4 max-sm:px-2 inline-flex items-center max-lg:w-[55%] max-sm:w-[40%]">
      <span className=' text-xl max-lg:text-sm'>SIGN UP <span className='max-sm:hidden'> FOR FREE</span></span>
      <svg className="ml-0 w-10 h-10 max-sm:w-5 max-sm:h-5" fill="#ffffff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>

    </section>
    <section className='flex justify-center w-[100%] font-palanquin bg-white py-20 max-sm:py-5'>
      <div className='w-[96%] px-20 grid grid-cols-5 gap-30 justify-start items-start text-black text-xl max-lg:text-sm max-lg:w-[100%] max-lg:px-2 max-md:grid-cols-1 max-md:gap-10 max-md:text-lg'>
        <div className='flex flex-col gap-4 '>
          <span className='font-bold pb-3 max-sm:pb-0  text-2xl max-lg:text-sm font-montserrat uppercase'>Products</span>
          <span>Shoes</span>
          <span>Clothing</span>
          <span>Accessories</span>
          <span>Sale</span>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='font-bold pb-3 max-sm:pb-0 max-lg:text-sm font-montserrat text-2xl uppercase'>Resources</span>
          <span>Gift Cards</span>
          <span>Find a Store</span>
          <span>Become a Member</span>
          <span>Site Feedback</span>
        </div>
        <div className='flex flex-col gap-4 '>
          <span className='font-bold pb-3 max-sm:pb-0 text-2xl max-lg:text-sm font-montserrat uppercase'>Support</span>
          <span>Returns & Exchanges</span>
          <span>Order Tracker</span>
          <span>Store Locator</span>
          <span>Contact us</span>
        </div>
        <div className='flex flex-col'>
        </div>
        <div className='flex flex-col gap-4  max-sm:hidden'>
          <span className='font-bold pb-3 max-sm:pb-0 font-montserrat text-2xl max-lg:text-sm uppercase text-gray-700'>Nigeria</span>
        </div>
      </div>
      
      

    </section>
    <section className='w-full flex justify-center items-center gap-5 py-10 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-3 max-lg:px-2'>
  <h3 className='flex justify-start items-center gap-2 text-lg'>
    <span>
      <a href="/">Your Privacy Choices</a>
    </span>
    <span>
      <img className='h-5 max-sm:h-3' src={privacyChoices} alt="" />
    </span>
  </h3>
  <span className='max-sm:hidden'> | </span>
  <h3><a href="/">Terms & Conditions</a></h3>
  <span className='max-sm:hidden'> | </span>
  <h3><a href="/">Sitemap</a></h3>
</section>

   </div>
   
   
  )
}

export default Footer