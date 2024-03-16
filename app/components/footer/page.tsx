import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

function Footer() {
  return (
    <footer className='md:flex '>
        <div className='w-full md:max-w-screen-2xl h-16 grid grid-cols-2 grid-rows-2 justify-between gap-y-4 pt-2.5 px-10 items-center'>

          



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

            <div>
                
                <Link href="/">
                 <p>Top</p>
                </Link>   
                
   
              
           </div>

            <div className='social-icons '>
                    
                   <p className='text-xs uppercase'> 
                    &copy; {new Date().getFullYear()} <span className='font-bold'> Kenneth Brandon </span> <br/>
                    <span className=''>All Rights Reserved</span>
                   </p>               
    
               
            </div>

           
            <div className='logo'>

            </div>

        </div>

    </footer>
  )
}

export default Footer