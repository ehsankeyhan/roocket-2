import React from 'react'
import { NavLink } from 'react-router-dom'
import Recent from '../../assets/icons/Recent'

export default function HeaderCard({title}) {
  return (
    <NavLink to={`/${title}`} className='p-3  flex justify-between hover:bg-neutral-500 cursor-pointer hover:bg-opacity-15 rounded-xl'>
        <div className='flex items-center gap-x-3'>
            <div className='w-10'>
                <img src={`/${title.toLowerCase()}.png`} alt="article" />
            </div>
            <div>
                <p className='font-semibold text-xl tracking-wide'>{title}</p>
                <div className='flex items-center -mt-1 text-sm text-neutral-600 font-extralight gap-x-1'>
                    <Recent />
                    <p>Recents</p>
                </div>
            </div>
        </div>
    </NavLink>
  )
}
