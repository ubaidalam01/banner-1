import React from 'react'

const Landing1 = () => {
  return (
    <div className='bg-white flex items-center justify-center h-screen gap-7'>
    <div className='flex flex-col justify-center bg-red'>
       <h1 className='text-black font-bold text-5xl'>Project</h1>
       <h1 className='text-black font-bold text-5xl mt-3'> Management</h1>
        <p className='mt-6 text-black font-normal'>Images, videos, PDFs and audio files are supported. Create math expressions and <br/> diagrams directly from the app. Take photos with the mobile app and save them <br/> to a note.</p>
        <button className='text-white bg-[#4F9CF9] rounded-lg font-medium w-40 py-3 mt-8'>Get Started <span className='ml-1'>&rarr;</span></button>
        <div className='bg-emerald-700 h-1/3 w-1/4'></div>
    </div>
    <div className='bg-[#C4DEFD] h-[500px] w-[600px] rounded-lg'></div>
    </div>
  )
}

export default Landing1

