import React from 'react'
import World from './icons/World'
import Vector from './icons/Vector'
import FBook from './icons/FBook'
import Twitter from './icons/Twitter'
import LinkedIn from './icons/LinkedIn'

const Footer1 = () => {
  return (
    <div className='min-h-[50vh] w-full p-10'>
        <div className='flex bg-green h-[300px] justify-evenly'>
            <div className='flex flex-col bg-red h-[180px] w-48 gap-5'>
                <h1 className='flex text-2xl font-bold'>
                <svg 
          width="37" 
          height="30" 
          viewBox="0 0 37 30" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="mr-2"
        >
          <g clipPath="url(#clip0_9_316)">
            <path d="M0 2.86525V9.6182C0 11.6749 2.50611 12.7719 4.03763 11.3322L11.3471 4.5792C12.9483 3.1052 11.904 0.5 9.71119 0.5H2.40169C1.07902 0.5 0 1.56265 0 2.86525Z" fill="white"/>
            <path d="M34.5983 0.5H27.2888C25.1308 0.5 24.0517 3.1052 25.6529 4.5792L32.9624 11.3322C34.4939 12.7376 37 11.6749 37 9.6182V2.86525C37 1.56265 35.921 0.5 34.5983 0.5Z" fill="white"/>
            <path d="M20.1533 16.9884L32.9624 28.8489C34.4939 30.2543 37 29.1917 37 27.1349V20.3134C37 19.6621 36.7215 19.0451 36.2342 18.5995L20.1533 3.68814C19.2135 2.83117 17.7865 2.83117 16.8467 3.68814L0.765757 18.5995C0.278457 19.0451 0 19.6621 0 20.3134V27.1349C0 29.1917 2.50611 30.2886 4.03763 28.8489L16.8467 16.9884C17.7865 16.1314 19.2135 16.1314 20.1533 16.9884Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_9_316">
              <rect width="37" height="29" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
                    Whitepace</h1>
                <div className='bg-cyan h-full'>
                <p className=''>whitepace was created for<br/> the new ways we live and<br/> work. We make a better workspace around the world</p>
                </div>                
            </div>
            <div className='bg-pink flex flex-col gap-3 h-[180px] w-40'>
                <h1 className='text-xl font-semibold'>Product</h1>
                <h2>Overview</h2>
                <h2>Pricing</h2>
                <h2>Customer Stories</h2>
            </div>
            <div className='bg-orange h-[180px] flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Resources</h1>
                <h2>Blog</h2>
                <h2>Guides & tutorials</h2>
                <h2>Help center</h2>
            </div>
            <div className='bg-gray flex flex-col gap-3 h-[180px] w-28'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <h2>About us</h2>
                <h2>Careers</h2>
                <h2>Media kit</h2>
            </div>
            <div className='bg-pink flex flex-col justify-between h-[180px] w-64'>
                <h1 className='text-2xl font-bold '>Try it Today</h1>
                <p className='mt-2'>Get started for free.
                Add your<br/> whole team as your needs grow.</p>
                <button className='text-white bg-[#4F9CF9] rounded-lg font-medium w-40 py-3 mt-8'>Get Started <span className='ml-1'>&rarr;</span></button>
            </div>
            <div className='h-4 bg-red'></div>
        </div>
        <div className='h-[1px] w-[91%] ml-14 bg-gray-500 mb-10'></div>
        <div className='flex justify-between w-full px-14 h-6 bg-yellow-'>
          <div className='bg-blue w-[60%] h-full'>
            <ul className='flex justify-between text-[16px] font-normal'>
              <li className='flex gap-2'><World/>English<Vector/></li>
              <li>Terms & privicy</li>
              <li>Security</li>
              <li>Status</li>
              <li className='flex gap-1'><h1>©</h1>2021 Whitepace LLC.</li>
            </ul>
          </div>
          <div className='flex justify-between h-6 w-[15%] bg-cyan'>
            <FBook />
            <Twitter />
            <LinkedIn />
          </div>
        </div>
    </div>  
  )
}

export default Footer1