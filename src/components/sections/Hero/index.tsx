import React from 'react'
import Navbar from '@/components/atoms/Navbar'
import Slider from '@/components/atoms/Slider'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=''>
      <Navbar/>
      <div className='text-center py-[131px] px-[308px]'>
        <p className='text-3xl pb-[38px] font-bold'>The project that inspired the modern CryptoArt movement</p>  
        <p className='text-xl'>10,000 unique collectible characters with proof of ownership stored</p>
        <p className='text-xl pb-[38px]'>on the ethereum blockchain.</p>
      <Slider/>
      </div>  
      </div>
  )
}

export default Hero