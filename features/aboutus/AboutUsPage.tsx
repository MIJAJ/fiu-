import { withAboutUsPage } from '@features/aboutus/withAboutUs'
import { AboutUsPageProps } from '@features/aboutus/interface'
import styles from './index.module.scss'

import React, { useState } from "react";
import Link from 'next/link'
import "../../node_modules/tailwindcss/dist/tailwind.css";

function AboutUsPage() {

  return (
  <section className="relative">

      {/* [1] content header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-7xl font-extrabold leading-tighter tracking-tighter mb-4 inline-block">About
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-800"> Us</span>
            </h1>
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

export default AboutUsPage
