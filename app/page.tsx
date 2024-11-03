import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex h-screen items-center justify-between'>
        <div className='w-[656] h-[361] gap-8 flex flex-col justify-center b p-5 ml-20 mt-10'>
        <h1 className='font-bold text-5xl'>
            <span className='mb-2 inline-block'>Get More Done with</span>
            <br />
            <span className='mt-2 inline-block'>whitepace</span>
          </h1>
        <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        <button className='bg-[#4F9CF9] text-center rounded w-48 py-3 flex items-center justify-center space-x-1'>
        Try Whitespace Free<span className='ml-1'>&rarr;</span>
        </button>
        </div>
        <div className='bg-[#C4DEFD] w-[800px] h-[432px] mr-28'></div>
      </div>
    </div>
  )
}

export default page


