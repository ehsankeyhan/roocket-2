import React from 'react'
import MenuDots from '../icons/menuDots'
import ProfileAvatar from '../profile/profileAvatar'

export default function Menu() {
  return (
    <div className='flex justify-between h-full items-center'>
        <h1 className=' ml-10 text-white tracking-wide font-semibold text-xl'>
            iAdmin
        </h1>
        <div className='flex items-center h-full gap-x-5 mx-5'>
            <button className='hover:bg-neutral-600 hover:bg-opacity-20 py-1 px-2 rounded-lg  '>
                <MenuDots />
            </button>
            <button className='h-12 w-14 px-2 py-1 hover:bg-opacity-20 rounded-lg hover:bg-neutral-600'>
                <ProfileAvatar />
            </button>
        </div>
    </div>
  )
}
