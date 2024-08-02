import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='w-auto h-auto bg-background py-24'>
        <div className='w-full pl-5 lg:w-5/6 mx-auto h-auto'>
        <p className='text-titleMid leading-[5rem] md:text-titleMd uppercase font-semibold opacity-30'>Crafting Unique Digital Experiences</p>
        {/* <div className='h-auto basis-1/2 justify-center content-center'>
                <Image
                    src='https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png'
                    width={416}
                    height={656}
                    alt="profile photo"
                />
            </div> */}

        <p className='bodyText text-l md:text-xl'>
        At Debonair Fox Creative Studio, we believe that every story deserves to be told with elegance and creativity. With a background steeped in diverse creative pursuits, we’ve honed a keen eye for intriguing visuals and the subtleties of our environment. This heightened awareness allows us to find beauty in the most unexpected places, transforming the ordinary into extraordinary. As thoughtful creatives, were passionate about making impactful first impressions and bringing our clients unique narratives to life. At Debonair Fox, we dont just design; we craft bespoke digital experiences that resonate and inspire.
        </p>

        </div>

        </div>


  )
}

export default About