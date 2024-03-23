import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextBackground from '../TextBackground/page'
import Form from '../Form/page'

function ComingSoon() {
  return (

    <div className='hero-wrapper h-[calc(100%-8rem)] md:h-[calc(100%-6rem)] w-full  flex'>

        <TextBackground/>

        <div className=' h-auto px-4 flex flex-col justify-center text-center '>
          <h1 className='text-titleSm leading-titleSm uppercase font-semibold text-accent-default'>Coming Soon</h1>
          <div className=' h-auto w-auto text-base mt-5'>
            <p className=''>Subscribe now to stay ahead with insights and updates on cutting-edge digital services and innovations. </p>
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