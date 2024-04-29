import React from 'react'
import MainMenu from '../../components/menu/Menu'
import ProtectedRoute from '../ProtectedRoute'
import useAuth from '../../hooks/useAuth'

export default function Header() {

  const {token}= useAuth()

  if (!token){
    return null
  }

  return (
    <div className='w-full h-14 fixed z-50 backdrop-blur-lg bg-neutral-600 bg-opacity-20  '>
        <MainMenu />
    </div>
  )
}
