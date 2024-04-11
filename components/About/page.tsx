import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='h-auto w-5/6 mx-auto my-0'>
        {/* section title - make into component*/}
        <div>
            <p className='text-secTitle uppercase font-semibold opacity-30'>Who I am</p>
        </div>

    {/* flex this div */}
        <div>
            {/* image */}
            <div>
                <Image
                    src={"https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"}
                    width={300}
                    height={422}
                    quality={80}
                    priority={true}
                    alt='profile photo'
                />
            </div>
            {/* text */}
            <div>
                {/* ticker text */}
                <div className='w-full h-24 smd:h-40 pl-20 my-3 flex flex-row justify-start items-center gap-x-5 text-secTitle overflow-hidden'>
                    <p>Designer</p>
                    <p>Photographer</p>
                    <p>Developer</p>
                    <p>Innovator</p>
                </div>

                <div className='text-base font-light'>
                    <p className='mb-6 '>A thoughtful creative that sees beauty everywhere, even in the most mundane of things. Passionate creative that believes in the first impression and that everyone has a story that deserves to be told.</p>

                    <p className='my-6 '>I enjoy anything within the world of art, coffee, photography and of course designing cool things to share with the people of the world. When not taking photos or working on websites, you’ll find me scouring the internet for new music, going on family adventures, learning random skills, or enjoying a nice cup of coffee.</p>
                </div>
                
            </div>
        </div>


    </div>
  )
}

export default page