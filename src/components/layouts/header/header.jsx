import React from 'react'
import Menu from '../../menu/Menu'

export default function Header() {
  return (
    <div className='w-full h-14 fixed z-50 backdrop-blur-lg bg-neutral-600 bg-opacity-20  '>
        <Menu />
    </div>
  )
}
