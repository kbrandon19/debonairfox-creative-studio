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

          {/* <div className='w-full h-auto social flex gap-x-4 justify-center content-center'>
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
          </div> */}

        </div>
    </div>
  )
}

export default ComingSoon