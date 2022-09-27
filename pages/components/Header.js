
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className=' sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5  w-screen justify-center '>
      {/* sticky top-0 z-50 */}

        <div className='flex h-24 max-w-[1140px] justify-between w-full items-center px-8 md:px-4 lg:px-0'>
            <div>
               <Image
               className='cursor-pointer'
        src="/assets/Logo.svg"
        alt="Logo"
        height={56}
        width={199}
      />
            </div>
            <div className='hidden lg:block'>
              <ul className='flex gap-8 font-semibold'>
                <li>Landing Page</li>
                <li>Pages</li>
                <li>Contact</li>
                <li>About</li>



              </ul>
            </div>
            <div className='gap-2  lg:flex hidden'>
           <button className='bg-[#3865F3] border-[#3865F3] border-[2px] text-white px-8 py-3 rounded-md'>Login</button>
           <button className='border-solid border-[2px] border-[#3865F3] text-[#3865F3] px-8 py-3 rounded-md'>Register</button>

            </div>

        </div>
    </div>
  )
}

export default Header