import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>

    {/* Option 1 */}
    {/* <div className='w-full h-screen relative '>
        <div className=' w-full h-auto   fixed -z-10 top-0 bottom-0 flex justify-center items-center text-center'>
            <div className='blob fixed -z-10'>
                <Image
                    src='https://kbrandon19.github.io/assets/blob(1).svg'
                    width={600}
                    height={500}
                    // style={{width:'100%',height:'auto'}}
                    alt='blob'
                />

             
            </div>
            <p className='w-5/6 h-auto mx-auto text-titleSm lg:text-titleMd 2xl:text-titleLg  font-bold leading-tight uppercase text-primary-default drop-shadow-md'>
            Creating a digital presence doesn’t have to be hard.
            </p>
        </div>
    </div> */}

    {/* Option 2 */}
    <div className='w-full h-screen relative'>
        <div className='w-full h-auto mx-auto  fixed -z-10 bottom-5 flex justify-center items-center text-left'>

            <p className='h-auto mx-auto text-titleSm md:text-titleMd lg:text-titleLg 2xl:text-titleXl  font-bold uppercase text-accent-default drop-shadow-md leading-[4rem] md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[10rem]'>
            Debonair Fox Creative Studio
            </p>
        </div>
    </div>
    </>
  )
}

export default Hero