import React from 'react'
import blur from '@/app/media/blur.png'
import App from '@/app/media/App.png';
import Image from "next/image";

const Hero = () => {
  return (
    <div className='text-gray-300 px-16 pt-16 flex flex-col items-center relative'>
      <div className='flex border border-white/15 px-3 py-1 rounded-md items-center'>
        <div className='bg-white text-black text-xs font-semibold rounded-md px-1.5 py-0.5 mr-2 flex items-center'>
          NEW
        </div>
        <h1 className='text-sm'>Introducing our latest integration</h1>
      </div>
      <div className='text-center'>
        <h1 className='text-[84px] mb-0'>AI</h1>
        <h1 className='text-[84px] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-blue-700 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]'>Your Ranking Superpower!</h1>
        <p className='w-1/2 text-center mx-auto '>"Boost your site's visibility with ease using AI—smart technology paired with user-friendly SEO tools!"</p>
      </div>
      <Image src={App}></Image>
      <Image 
        src={blur} 
        height={1000}
        width={1000}
        className='absolute top-1/2  z-[-1]'
        alt="Blur effect"
      />
    </div>
  )
}

export default Hero