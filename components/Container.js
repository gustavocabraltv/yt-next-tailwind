import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full mx-auto flex items-center justify-center py-8' >
        <div className='flex max-w-[1140px] justify-between w-full items-center px-8 md:px-4 lg:px-0 flex-col'>{children}</div>
    </div>
  )
}

export default Container