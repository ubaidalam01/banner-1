import React from 'react'

const Work = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-2'>
        <h1 className='text-[70px] font-bold mb-2'>Your work, everywhere you are</h1>
        <p className='text-center text-[17px] mb-12 font-normal'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and<br/> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    <button className='w-44 py-4 bg-[#4F9CF9] rounded-lg font-medium mr-3'>Try Taskey
        <span className='ml-1'>&rarr;</span>
    </button>
    </div>
  )
}

export default Work