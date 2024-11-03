import React from 'react'

const Card = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-white text-black'>
        <div className='flex flex-col mb-[600px] absolute bg-cyan-'>
          <h1 className='text-black text-6xl font-bold'>Choose Your Plan</h1>
        </div>
        <p className='bg-red-50 mb-[460px] text-center text-black font-medium flex flex-shrink-0'>
        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br /> right plan for you.
        </p>
        <div className='bg-gray h-[75%] w-[90%] flex flex-row absolute mt-40 justify-between'>
          <div className='bg-yellow w-[30%] h-[100%] p-5'>
            <div className='bg-green h-[100px] w-[100%] flex flex-col justify-between'>
              <h2 className='text-black font-semibold text-xl'>Free</h2>
              <h1 className='text-3xl font-bold text-black'>$0</h1>
              <p className='font-semibold text-black'>Capture ideas and find them quickly</p>
            </div>
            <div className='bg-yellow h-[340px] w-[100%] mt-5 flex flex-col items-center justify-center gap-3  text-black '>
            <p className='flex flex-row gap-2 text-[16px] text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Sync unlimited devices</p>
<p className='flex flex-row gap-2 text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>10 GB monthly uploads</p>
<p className='flex flex-row gap-2 text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>200 MB max. note size</p>
<p className='flex flex-row gap-2 text-nowrap text-[16px] text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Customize Home dashboard and access<br /> extra widgets</p>
<p className='flex flex-row gap-2 text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Connect primary Google Calendar<br /> account
</p>
<p className='flex flex-row gap-2 text-black'>
              <svg className='h-4 w-4 flex' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0059 9.76404V10.5923C19.0047 12.5337 18.3761 14.4228 17.2137 15.9777C16.0512 17.5326 14.4173 18.6702 12.5556 19.2206C10.6938 19.7711 8.70404 19.705 6.88294 19.0322C5.06183 18.3594 3.507 17.1159 2.45034 15.4873C1.39367 13.8586 0.891777 11.932 1.01952 9.9948C1.14725 8.05759 1.89778 6.21358 3.15915 4.73777C4.42053 3.26196 6.12517 2.23344 8.01885 1.80558C9.91253 1.37773 11.8938 1.57348 13.6671 2.36363" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0059 3.38989L10.0029 12.4018L7.30206 9.70094" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Add due dates, reminders, and<br /> notifications to your tasks</p>
<button className='bg-red-500 px-9 py-3 mr-20 rounded-lg'>
  Get Started
</button>
          </div>
          </div>
          <div className='bg-purple-400 w-[30%] h-[100%]'></div>
          <div className='bg-pink-400 w-[30%] h-[100%]'></div>
        </div>
    </div>
  )
}

export default Card



{/* <h1 className='text-5xl font-bold mb-6 ml-[200px]'>Choose Your Plan</h1>
            <p className='text-left font-extralight whitespace-nowrap overflow-x-auto mb-1'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the </p> */}
            // <p className='text-center font-extralight mr-3'>right plan for you.</p> 