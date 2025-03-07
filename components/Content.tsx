import React from 'react'

const Content = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-white gap-28'>
        <div className='flex flex-col justify-center h-[60%] w-[30%] bg-pink'>
        <svg viewBox="0 0 710 661" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="365.5" cy="330.5" r="329.5" stroke="#A7CEFC" strokeWidth="2" strokeDasharray="15 15"/>
<circle cx="365.5" cy="330.5" r="192.5" stroke="#A7CEFC" strokeWidth="2" strokeDasharray="15 15"/>
<circle cx="35" cy="331" r="35" fill="#FF5758"/>
<circle cx="559" cy="331" r="35" fill="#37A3FF"/>
<circle cx="366" cy="524" r="35" fill="#FFBF60"/>
<circle cx="172" cy="331" r="35" fill="#37A3FF"/>
<circle cx="172" cy="603" r="35" fill="#37A3FF"/>
<circle cx="599" cy="106" r="35" fill="#37A3FF"/>
<circle cx="675" cy="436" r="35" fill="#00CA75"/>
<mask id="mask0_107_52346"  maskUnits="userSpaceOnUse" x="640" y="401" width="70" height="70">
<circle cx="675" cy="436" r="35" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_107_52346)">
</g>
<circle cx="367" cy="137" r="35" fill="#00CA75"/>
<mask id="mask1_107_52346"maskUnits="userSpaceOnUse" x="332" y="102" width="70" height="70">
<circle cx="367" cy="137" r="35" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask1_107_52346)">
</g>
<circle cx="175" cy="58" r="35" fill="#FFDC4D"/>
<g filter="url(#filter0_d_107_52346)">
<rect x="316" y="281" width="100" height="100" rx="10" fill="white"/>
</g>
<g clipPath="url(#clip0_107_52346)">
<path d="M338 312.589V322.835C338 325.955 341.861 327.619 344.22 325.435L355.481 315.189C357.947 312.953 356.339 309 352.96 309H341.7C339.662 309 338 310.612 338 312.589Z" fill="#5986EF"/>
<path d="M391.3 309H380.04C376.715 309 375.053 312.953 377.519 315.189L388.78 325.435C391.139 327.567 395 325.955 395 322.835V312.589C395 310.612 393.338 309 391.3 309Z" fill="#5986EF"/>
<path d="M369.047 334.017L388.78 352.012C391.139 354.144 395 352.532 395 349.411V339.062C395 338.073 394.571 337.137 393.82 336.461L369.047 313.837C367.599 312.537 365.401 312.537 363.953 313.837L339.18 336.461C338.429 337.137 338 338.073 338 339.062V349.411C338 352.532 341.861 354.196 344.22 352.012L363.953 334.017C365.401 332.716 367.599 332.716 369.047 334.017Z" fill="#5986EF"/>
</g>
<defs>
<filter id="filter0_d_107_52346" x="277" y="246" width="178" height="178" filterUnits="userSpaceOnUse"colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="11" operator="erode" in="SourceAlpha" result="effect1_dropShadow_107_52346"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_52346"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_52346" result="shape"/>
</filter>
<clipPath id="clip0_107_52346">
<rect width="57" height="44" fill="white" transform="translate(338 309)"/>
</clipPath>
</defs>
</svg> 
        </div>
        <div className='flex flex-col justify-center bg-red'>
   <h1 className='text-black font-bold text-6xl'>Work together</h1>
    <p className='mt-6 text-black font-normal'>With whitepace, share your notes with your colleagues and collaborate on them.<br/>
You can also publish a note to the internet and share the URL with others.
</p>
    <button className='text-white bg-[#4F9CF9] rounded-lg font-medium w-40 py-3 mt-8'>Get Started <span className='ml-1'>&rarr;</span></button>
</div>
    </div>
  )
}

export default Content