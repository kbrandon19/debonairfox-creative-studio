import React from 'react'
import Image from 'next/image'

function page() {
  return (
    // wrapper for entire block
    <div className='w-5/6 h-full bg-red-400 mx-auto'>
         {/* section title - make into component */}
        <div className=' h-auto'>
            <p className='text-secTitle uppercase font-semibold opacity-30'>Who I am</p>
        </div>

        {/* spacer */}
        <div className='w-full h-12'></div>

        {/* content container */}
        <div className=' w-full h-auto flex flex-col px-4 smd:flex-row smd:justify-evenly'>
            {/* image */}
            <div className='h-auto basis-1/2 justify-center content-center'>
                <Image
                    src={'https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png'}
                    width={526}
                    height={766}
                    alt="profile photo"
                />
            </div>

            {/* text content area */}
            <div className='h-auto basis-1/2'>

                <div className='flex flex-row items-center bg-accent-default w-full h-24 smd:h-40  gap-x-5 text-secTitle mt-6 '>
                    <p>Designer</p>
                    <p>Photographer</p>
                    <p>Developer</p>
                    <p>Innovator</p>
                </div>

                {/* bio copy  */}
                <div className='w-full bg-secondary-default text-base font-light'>
                    <p className="my-6">A thoughtful creative that sees beauty everywhere, even in the most mundane of things. Passionate creative that believes in the first impression and that everyone has a story that deserves to be told. No matter what your reason for having a digital presence is, it’s important to have a great one!</p>


                    <p className="my-6">I enjoy anything within the world of art, coffee, photography and of course designing cool things to share with the people of the world. When not taking photos or working on websites, you’ll find me scouring the internet for new music, going on family adventures, learning random skills, or enjoying a nice cup of coffee.</p>


                </div>
            </div>

        </div>

    </div>
  )
}

export default page