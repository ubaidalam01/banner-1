import React from 'react'

const Extension = () => {
  return (
    <div className='h-screen flex items-center justify-center gap-8'>
        <div className='bg-gray h-[60%] w-[45%] flex flex-col items-start justify-center gap-5'>
            <h1 className='text-5xl font-bold'>Use as Extension</h1>
            <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages<br/> or take screenshots as notes.
            </p>
            <button className='bg-[#4F9CF9] w-36 py-3 rounded text-[16px] font-medium mt-3'>Lets Go
            <span className='ml-1 text-xl'>&rarr;</span>
            </button>
        </div>
        <div className='h-[45%] w-[35%] bg-[#C4DEFD]'></div>
    </div>
  )
}

export default Extension