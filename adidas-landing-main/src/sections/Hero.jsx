import React from 'react'

const Hero = () => {
  return (
    <section 
      id='home'
      className='w-full flex flex-col xl:flex-row justify-center min-lg:min-h-screen max-lg:max-container'
      >

      <video
          autoPlay playsInline 
          loop
          muted
          className="select-none object-contain z-8 w-full h-full max-w-none"
        >
          <source className='select-none '
            src="https://res.cloudinary.com/diiayntjq/video/upload/v1721137776/heroVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* <video className='w-auto h-auto' src="/src/assets/videos/heroVideo.mp4">

        </video> */}

      </section>
  )
}

export default Hero
