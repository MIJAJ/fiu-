import React, { useState, useEffect } from "react";
import Link from 'next/link'

export default function TopBar() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  
  return (
    <div className={"fixed w-full z-30 bg-white md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
            <div className="flex-shrink-0 mr-4">
            <Link href='/'>
                <img className='block w-9 h-9' src='/images/logo2.png' alt='logo'/>
                </Link>
            </div>
          
          <a className="font-medium text-gray-600 flex items-center transition duration-150 ease-in-out" href="/">
                  <span>fiu-</span>
                </a>
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" href="artworks">
                  <span>Artworks</span>
                </a>
              </li>
              <li>
                <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" href="aboutus">
                  <span>About Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}