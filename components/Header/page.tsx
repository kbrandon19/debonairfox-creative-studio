import React from 'react'
import Link from 'next/link'


function Header() {
  return (
    <header className='relative flex justify-center content-center px-5 bg-red-300'>
        <div className='w-full md:w-5/6 mx-auto h-16 flex justify-between  px-10 items-center sticky z-10'>
                      
              <div className="logo flex flex-row gap-2">
                <Link href={'/'} className='flex flex-row gap-2'>
                <div className="h-5 w-5 bg-accent-default rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-tangerine rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-background rounded-full ">{" "}</div>
                </Link>
              
            </div>
        </div>

        <div className='w-full h-auto flex flex-row items-center justify-center gap-x-5'>
          

        </div>

    </header>

  )
}

export default Header