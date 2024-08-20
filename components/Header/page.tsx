import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <header className='justify-center content-center px-5'>
        <div className=' w-full md:w-5/6 mx-auto h-16 flex justify-between  px-10 items-center sticky'>
                      
              <div className="logo flex flex-row gap-2 -ml-10 absolute bottom-18">
                <div className="h-5 w-5 bg-accent-default rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-tangerine rounded-full  ">{" "}</div>
                <div className="h-5 w-5 bg-background rounded-full ">{" "}</div>
              
            </div>
        </div>

    </header>

  )
}

export default Header