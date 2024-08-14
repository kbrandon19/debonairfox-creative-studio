'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextBackground from '../TextBackground/page'
import {motion} from 'framer-motion'

function ComingSoon() {
  return (

    <div className='hero-wrapper  justify-center items-center'>

        <div ><TextBackground/></div>

        <motion.div className=' h-[calc(100vh-6rem)] px-4 flex flex-col justify-center text-center items-center gap-y-4'   initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.5, delay:1}}>
          <h1 className='text-titleSm smd:text-titleMd lg:text-titleLg l leading-titleSm uppercase font-semibold text-accent-default'>Coming Soon</h1>
          <div className=' h-auto w-80 smd:w-1/3 text-base  mt-5  md:text-l sd:mt-8 lg:mt-10'>
            <p>Get ready to embark on a creative journey with our upcoming creative studio, where innovation thrives.</p> 
            <br />
            <p> We specialize in developing captivating websites, engaging emails, and more, infusing each project with our unique blend of creativity and expertise. </p>
            <br />
            <p>Your daily dose of inspiration and innovation starts here.</p>
            <br />
          
          </div>
      

          
        </motion.div>
    </div>
  )
}

export default ComingSoon