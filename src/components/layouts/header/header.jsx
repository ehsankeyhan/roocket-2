import React from 'react'
import Menu from '../../menu/menu'

export default function Header() {
  return (
    <div className='w-full h-14 fixed z-50 backdrop-blur-lg bg-neutral-600 bg-opacity-20  '>
        <Menu />
    </div>
  )
}
