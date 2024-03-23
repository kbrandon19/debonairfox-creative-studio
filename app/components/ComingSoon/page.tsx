import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextBackground from '../TextBackground/page'
import Form from '../Form/page'

function ComingSoon() {
  return (

    <div className='hero-wrapper h-[calc(100%-8rem)] md:h-[calc(100%-6rem)] w-full  flex justify-center items-center'>

        <TextBackground/>

        <div className=' h-auto px-4 flex flex-col justify-center text-center items-center'>
          <h1 className='text-titleSm smd:text-titleMd lg:text-titleLg l leading-titleSm uppercase font-semibold text-accent-default transition ease-in-out'>Coming Soon</h1>
          <div className=' h-auto w-80 smd:w-1/2 text-base lg:text-l mt-5  sd:mt-8 lg:mt-10 3xl:mt-16'>
            <p >Subscribe now to stay ahead with insights and updates on cutting-edge digital services and innovations. </p>
            <br />
            <p className=''>Your daily dose of inspiration and innovation starts here.</p>
          </div>
          
          <div className='form'>
            <form action="">
              
            </form>
          </div>

          <Form/>

          
        </div>
    </div>
  )
}

export default ComingSoon