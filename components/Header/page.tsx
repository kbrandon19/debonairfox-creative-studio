import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <header className='md:flex justify-center content-center'>
        <div className='nav w-full md:max-w-screen-2xl h-16 flex justify-between  px-10 items-center fixed'>
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

        </div>

    </header>

    // Side Nav
    // <div className='w-screen h-screen relative'>
    //     <div className='h-64 w-fit p-5 bg-red-300  right-0 bottom-1/2 fixed'>
    //         H
    //     </div>

    // </div>
  )
}

export default Header