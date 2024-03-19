import React from 'react'
import Image from 'next/image'

function page() {
  return (
  //   <p className='banner-text text-3xl font-bold uppercase'>
  //   Debonair Fox <br />
  //   Creative Studios
  //   </p>
  // )
 
     <div className='hero-background -z-50 absolute'>
       <Image
                src={'https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png'}
                fill={true}
                quality={80}
                priority={true}
                alt='mobile-background'
                style={{objectFit:"cover"}}
                />
     </div>

)
}

export default page