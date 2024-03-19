import React from 'react'
import Image from 'next/image'
import HeroBanner from '../backgroundBanner/page'

function ComingSoon() {
  return (

    <div className='hero-wrapper h-[calc(100%-8rem)] w-full relative '>

        {/* <div className="hero-background h-full w-full absolute -z-50 "></div> */}
        <HeroBanner/>
        {/* <div>does this work</div> */}
    </div>
  )
}

export default ComingSoon