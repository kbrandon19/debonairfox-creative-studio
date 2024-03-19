import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroBanner from '../backgroundBanner/page'

function ComingSoon() {
  return (

    <div className='hero-wrapper h-[calc(100%-8rem)] w-full relative '>

        <HeroBanner/>

        <div className='w-full h-full px-4 flex flex-col content-center justify-center'>
          <h1>Coming Soon</h1>
          <p>Subscribe now to stay ahead with insights and updates on cutting-edge digital services and innovations. </p>

          <p>Your daily dose of inspiration and innovation starts here.</p>
          
          <div className='form'>
            <form action="">
              
            </form>
          </div>

          <div className='w-full h-auto social flex gap-x-4 justify-center content-center'>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837682/Debonair%20Fox%20Creative%20Studio/social-icons/LinkedIn_voqnk9.png"
              width={15}
              height={15}
              alt="LinkedIn"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837730/Debonair%20Fox%20Creative%20Studio/social-icons/Instagram_yyqg9d.png"
              width={15}
              height={15}
              alt="Instagram"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837820/Debonair%20Fox%20Creative%20Studio/social-icons/GitHub_ceujuk.png"
              width={15}
              height={15}
              alt="GitHub"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837822/Debonair%20Fox%20Creative%20Studio/social-icons/Email_zixsy3.png"
              width={15}
              height={15}
              alt="Gmail"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837847/Debonair%20Fox%20Creative%20Studio/social-icons/Twitch_zc1buy.png"
              width={15}
              height={15}
              alt="Twitch"
            />
          </Link>
          </div>

          </div>
    </div>
  )
}

export default ComingSoon