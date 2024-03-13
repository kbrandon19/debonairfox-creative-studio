import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header >
        <div className='w-full h-16 flex justify-between px-4 items-center'>
            <div className='logo'>
                <Link href="/">
                    <Image
                    src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1710306493/Debonair%20Fox%20Creative%20Studio/logos/logo-03_enyv1m.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    />
                </Link>
            </div>
            </div>
            <div className="nav">
                <div className="contact">
                    {/* Button goes here */}
                </div>

                <div className="menu-links">
                    {/* Links to other pages but will only show when at certain screen size */}
                </div>
            </div>
    </header>
  )
}

export default Header