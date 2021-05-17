import React from 'react'
import { ProfilePorps } from './interface'

export default function Profile({ source }: ProfilePorps) {
  return (
    <div className='flex cursor-pointer'>
      <div className='flex w-[40px] h-[40px] border-2 rounded-full mx-2 justify-center items-center'>
        <img
          className='rounded-full w-[85%] h-[85%]'
          src={source}
          alt='profile'
        />
      </div>
    </div>
  )
}
