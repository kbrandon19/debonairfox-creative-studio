import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextBackground from '../TextBackground/page'
import EmailNewsletter from '../Form/EmailNewsletter'

function ComingSoon() {
  return (

    <div className='hero-wrapper  justify-center items-center'>

        <TextBackground/>

        <div className=' h-[calc(100vh-6rem)] px-4 flex flex-col justify-center text-center items-center gap-y-4'>
          <h1 className='text-titleSm smd:text-titleMd lg:text-titleLg l leading-titleSm uppercase font-semibold text-accent-default'>Coming Soon</h1>
          <div className=' h-auto w-80 smd:w-1/3 text-base  mt-5  md:text-l sd:mt-8 lg:mt-10'>
            <p>Get ready to embark on a creative journey with our upcoming creative studio, where innovation thrives.</p> 
            <br />
            <p> We specialize in developing captivating websites, engaging emails, and more, infusing each project with our unique blend of creativity and expertise. </p>
            <br />
            <p>Your daily dose of inspiration and innovation starts here.</p>
            <br />
          
          </div>
          
          <div className='form'>
            <form action="">
              
            </form>
          </div>

          {/* <EmailNewsletter/> */}

          
        </div>
    </div>
  )
}

export default ComingSoon