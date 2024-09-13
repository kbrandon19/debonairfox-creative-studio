import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'


function Header() {
  return (
    <header className='w-5/6 mx-auto  relative flex justify-between content-center   '>
        <div className=' w-auto h-16 flex justify-between  items-center sticky z-10 '>
                      
              <div className="logo flex flex-row gap-2">
                <Link href={'/'} className='flex flex-row gap-2'>
                <div className="h-5 w-5 bg-accent-default rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-tangerine rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-background rounded-full ">{" "}</div>
                </Link>
              
            </div>
        </div>

        <div className='w-auto h-auto md:flex flex-row items-center content-center justify-center gap-x-2 text-sm uppercase tracking-wider '>
          <div className='hidden md:flex h-auto flex-row items-center gap-x-5'>
            <Link href={"/About"}>About</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"/case-study"}>Case Study</Link>
          </div>
          <Button className='border-2 border-transparent  hover:border-accent-default font-semibold  tracking-widest hover:text-tangerine text-accent-default'>
          <Link href={"#contact"}>Contact</Link>
            </Button>

        </div>

    </header>

  )
}

export default Header