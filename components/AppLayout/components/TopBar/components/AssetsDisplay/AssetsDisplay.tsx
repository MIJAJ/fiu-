import React from 'react'
import RoundButton from '@components/buttons/RoundButton'
import { switchBorderColor, switchTextColor } from '@lib/color'
import { AssetsDisplayPorps } from './interface'

export default function AssetsDisplay({
  icon,
  amount,
  color,
}: AssetsDisplayPorps) {
  return (
    <div
      className={`flex items-center border-2 rounded-[25px] w-[130px] h-[30px] even: ml-[10px] ${switchBorderColor(
        color
      )}`}
    >
      <div className='mx-2 flex'>{icon}</div>
      <div className='flex-1'>{amount}</div>
      <RoundButton title='' color={color} />
    </div>
  )
}
