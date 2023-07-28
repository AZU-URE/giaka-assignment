import React from 'react'
import {BsTwitter,BsDiscord} from 'react-icons/bs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <section id ="hero" className='flex items-center justify-around py-5 px-8'>
    <p className='w-full'>Logo</p>
    <div className='flex justify-evenly w-full items-center'>
        <div className='flex space-x-10 items-center'>
        <p>About</p>
        <p>Collection</p>
        <p>FAQs</p>
            <button className='bg-NavBtnClr px-4 py-2 rounded-full'>Connect wallet</button>
        
        <div className='flex space-x-5 items-center'>
            <BsTwitter style={{color:'white', fontSize:'24px'}}/>
            <BsDiscord style={{color:'white', fontSize:'24px'}}/>
        </div>
        </div>
    </div>    
    </section>
  )
}

export default Navbar