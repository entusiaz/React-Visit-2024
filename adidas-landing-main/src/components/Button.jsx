import React from 'react'

const Button = ({label, linkUrl}) => {
  return (
    <a href={linkUrl}>
        <button className='flex justify-center items-center px-7 py-4 border bg-white text-black font-bold rounded-full'>
            {label}
        </button>
    </a>
    
  )
}

export default Button