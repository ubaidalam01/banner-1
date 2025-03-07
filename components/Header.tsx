import Link from 'next/link';
import React from 'react';
// import "./globals.css";

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center text-white font-bold text-lg ml-20'>
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
        whitepace
      </div>

      <nav className='flex gap-4 justify-between font-normal m-3'>
        <div className='flex items-center'>
        <Link className='hover:underline' href={'#'}>Products</Link>
          <svg 
            className="h-8 w-8 text-red-500 font-light ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            aria-label="Arrow down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        
        <div className='flex items-center'>
          <Link className='hover:underline' href={'#'}>Solutions</Link>
          <svg 
            className="h-8 w-8 text-red-500 font-light ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            aria-label="Arrow down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div className='flex items-center'>
        <Link className='hover:underline' href={'#'}>Resources</Link>
          <svg 
            className="h-8 w-8 text-red-500 font-light ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            aria-label="Arrow down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div className='flex items-center'>
        <Link className='hover:underline' href={'#'}>Pricing</Link>
          <svg 
            className="h-8 w-8 text-red-500 font-light ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            aria-label="Arrow down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        
        <button className='bg-[#FFE492] rounded px-7 h-12 -mt-1 text-[#043873] font-medium ml-12 mr-4'>
          Login
        </button>
        <button className='bg-[#4F9CF9] text-center rounded px-4 h-12 -mt-1 mr-16'>
          Try Whitespace Free <span>&rarr;</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
