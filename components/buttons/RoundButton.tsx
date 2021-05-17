import { EmailIcon } from '@components/Icons/Icons'
import { switchBackgroundColor } from '@lib/color'
import React from 'react'
import { ButtonInterfaceProps } from './interface'

const RoundButton = ({ title, color, ...props }: ButtonInterfaceProps) => {
  return (
    <button
      type='button'
      className={`rounded-full bg-gray-line cursor-pointer h-[27px] w-[27px] ${switchBackgroundColor(
        color
      )}`}
      {...props}
    >
      <EmailIcon className='text-white m-auto' />
    </button>
  )
}

export default RoundButton
