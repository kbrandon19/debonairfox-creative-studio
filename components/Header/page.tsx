import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <header className='md:flex justify-center content-center'>
        <div className='nav w-full md:max-w-screen-2xl h-16 flex justify-between  px-10 items-center'>
            <div className='logo'>
                <Link href="/">
                    <Image
                    src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1710306493/Debonair%20Fox%20Creative%20Studio/logos/logo-03_enyv1m.svg"
                    width={40}
                    height={40}
                    alt="DFCS Logo"
                    />
                </Link>
            </div>

            {/* <div className='menu w-auto flex flex-row gap-x-12 items-center'>
                
                    <ul className='hidden smd:flex gap-x-12 font-normal text-sm'>
                        <li>
                            <Link href="/about">
                            <p>about</p>
                            </Link>
                           
                        </li>
                        <li>
                            <Link href="/services">
                                <p>services</p>
                                </Link>
                        </li>
                            <li>
                                <Link href="/work">
                                <p>work</p>
                                </Link>
                            </li>
                    </ul>

                
                
                    
                    <Button className='ct bg-accent-default text-white text-xs  tracking-widest font-normal contact block'>
                        Lets Chat
                    </Button>                 
    
               
            </div> */}
        </div>

    </header>
  )
}

export default Header