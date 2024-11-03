import React from 'react'

const Customise = () => {
  return (
    <div className='bg-white flex items-center justify-center h-screen gap-7'>
    <div className='bg-[#C4DEFD] h-[500px] w-[600px]'></div>
    <div className='flex flex-col justify-center bg-red'>
       <h1 className='text-black font-bold text-5xl'>Customise it to</h1>
       <h1 className='text-black font-bold text-5xl mt-2'>your needs</h1>
        <p className='mt-6 text-black font-normal'>Customise the app with plugins, custom themes and multiple text editors (Rich<br/> Text or Markdown). Or create your own scripts and plugins using the Extension<br/> API.</p>
        <button className='text-white bg-[#4F9CF9] rounded font-medium w-40 py-3 mt-8'>Try it now <span className='ml-1'>&rarr;</span></button>
        <div className='bg-emerald-700 h-1/3 w-1/4'></div>
    </div>
    </div>
  )
}

export default Customise
