import { withArtHomePage } from '@features/arthome/withHome'
import { ArtHomePageProps } from '@features/arthome/interface'
import styles from './index.module.scss'

import React, { useState } from "react";
import Link from 'next/link'
import "../../node_modules/tailwindcss/dist/tailwind.css";

function HomePage() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
  <section className="relative">

      {/* [1] content header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-6xl font-extrabold leading-tighter tracking-tighter mb-4">Make your life with</h1>
            <h1 className="text-7xl font-extrabold leading-tighter tracking-tighter mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-800">Arts</span></h1>
            <div className="max-w-3xl mx-auto">
              {/* description */}
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics. The resulting artworks are studied in the professional fields of art criticism and the history of art.
              </p>
              {/* button */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="flex items-center justify-center px-8 py-3 border border-transparent btn text-white bg-opacity-90 bg-red-400 hover:bg-red-400 mb-4 sm:w-auto sm:mb-0" href="artworks">Browse Works</a>
                </div>
                <div>
                  <a className="flex items-center justify-center px-8 py-3 border border-transparent btn text-white bg-gray-900 hover:bg-gray-800 sm:w-auto sm:ml-4" href="arthome">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src="/images/logo2.png" width="768" height="432" alt="Hero" />
                <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              {/* button */}
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-purple-800 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the video : What is Art ? (2 min)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* [2] content meaning of art */}
      {/* | */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
              What is Art ?
            </h1>
            <p className="text-xl text-gray-600">
              Art is a highly diverse range of human activities engaged in creating visual, auditory, or performed artifacts— artworks—that express the author’s imaginative or technical skill, and are intended to be appreciated for their beauty or emotional power.
            </p>
          </div>

          {/* image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src="/images/title_art.png" width="1068" alt="Hero" />
                <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div >
      </div >

      {/* [3] content key */}
      {/* | */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4">Key Takeaways</h1>
            <p className="text-xl text-gray-600">
            Interactions between the elements and principles of art help artists to organize sensorially pleasing works of art while also giving viewers a framework within which to analyze and discuss aesthetic ideas.
              </p>
          </div>
          {/* content 6 grid */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-red-400" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-red-400" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">The interplay</h4>
              <p className="text-gray-600 text-center">
              The interplay between the principles and elements of art provide a language with which to discuss and analyze works of art.
              </p>
            </div>

            {/* 2 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-red-400" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">The principles of art include</h4>
              <p className="text-gray-600 text-center">
              movement, unity, harmony, variety, balance, contrast , proportion and pattern.
              </p>
            </div>

            {/* 3 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-red-400" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">The elements of art include</h4>
              <p className="text-gray-600 text-center">
              texture , form , space , shape, color, value and line.
              </p>
            </div>

            {/* 4 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-red-400" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-purple-800" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Defining the word Art</h4>
              <p className="text-gray-600 text-center">
              How best to define the term art is a subject of constant contention.
              </p>
            </div>

            {/* 5 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-red-400" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-purple-800" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Proven</h4>
              <p className="text-gray-600 text-center">
              Since postmodern theory came into prominence, it has been proven that anything can be termed art.
              </p>
            </div>

            {/* 6 */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-82 h-56">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-red-400" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-purple-800" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Formalism</h4>
              <p className="text-gray-600 text-center">
              The study of art by the way objects are made and their purely visual aspects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* [4] example art works */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* BG */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#FF9999" offset="0%" />
                    <stop stopColor="#5E3C8C" offset="60.317%" />
                    <stop stopColor="#FF9999" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left lg:max-w-xl">
                <h1 className="mb-4 text-2xl text-white font-bold leading-tighter tracking-tighter">Art Works</h1>
                {/* col art works */}
                <div className="mb-4 max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
                  {/* 1 */}
                  <div className="relative flex flex-col items-center p-6 bg-gradient-to-b from-gray-900 to-gray-600 rounded shadow-xl h-80">
                    <img className="object-cover h-full w-full mb-4" src="/images/pic001.png"/>
                    <h4 className="text-l font-bold text-white leading-snug tracking-tight">
                      François Bonnel
                    </h4>
                    <p className="text-black text-center">
                    Lanoue Gallery
                    </p>
                    <p className="text-black text-center">
                    $8,900
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="relative flex flex-col items-center p-6 bg-gradient-to-b from-gray-900 to-gray-600 rounded shadow-xl h-80">
                    <img className="object-cover h-full w-full mb-4" src="/images/pic002.png"/>
                    <h4 className="text-l font-bold leading-snug tracking-tight">
                      Alighiero Boetti
                    </h4>
                    <p className="text-white text-center">
                    Dep Art Gallery
                    </p>
                    <p className="text-white text-center">
                    €38,000
                    </p>
                  </div>
                </div>
                <div>
                  <a className="flex items-center justify-center px-8 py-3 border border-transparent btn text-white bg-gray-600 hover:bg-gray-500 mb-4 sm:w-auto sm:mb-0" href="artworks">Browse Works</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* [5] footer */}
      <footer>
        {/* | */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
            {/* 1st block - logo */}
            <div className="sm:col-span-12 lg:col-span-8">
              <div className="mb-2">
                {/* Logo */}
                <div className="inline-block">
                  <Link href='/'>
                    <img className='block w-10 h-10' src='/images/logo2.png' alt='logo'/>
                  </Link>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <Link href='/'>Website : fiu-</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd block - product */}
            <div className="sm:col-span-12 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-800 font-medium mb-2">Products</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <div className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  <Link href='/artworks'>Art Works</Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* 3rd block - website */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-800 font-medium mb-2">Website</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <div className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <Link href='/'>Home</Link>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                    <Link href='/aboutus'>About us</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* | */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
            {/* Made by */}
            <div className="text-sm text-gray-600 mr-4">Made by 
              <a className="text-purple-500 font-bold hover:underline"> fiu-</a>
              . All rights reserved.
            </div>
          </div>
        </div>
    </footer>
  </section>
    
  );
}

export default HomePage
