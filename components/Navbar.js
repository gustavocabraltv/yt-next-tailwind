import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='shaddow-sm  w-full z-10'>

            <div className='w-full'>
                <div className='flex items-center h-20 w-full justify-center'>
                   { /*First block section outer part */}
                    <div className='flex items-center items mx-8 max-w-[1280px] justify-between w-full bg-[lightgray]'>
                        <div className='flex justify-center item-center flex-shrink-0 '>
                            <h1 className='font-bold text-xl cursor-pointer '>
                                Stream
                            </h1>

                        </div>

                        <h1 className='font-bold text-xl cursor-pointer '>
                                Stream
                            </h1>
                       

                    </div>

                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar