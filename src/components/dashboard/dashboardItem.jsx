import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleQuickAccess } from '../store/slice/quickAccessSlice'
import MenuItem from '../menu/menuItem'
import ArticlesCard from '../articles/articlesCard'
import Plus from '../icons/plus'
import UserInfo from '../profile/userInfo'
import QuickAccess from '../menu/quickAccess'

export default function DashboardItem() {
    const quickAccessIsOpen = useSelector((state) => state.quickAccessIsOpen.value)
    const dispatch = useDispatch()

  return (
    <div className='md:flex md:flex-row md:w-full md:gap-x-8 '>
        <div className='basis-1/3 mb-10'>
            <UserInfo />
            <QuickAccess />
        </div>
        <div className=' basis-2/3 mb-10 h-80  rounded-2xl bg-white overflow-hidden shadow-2xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-300 ease-in-out' >
            <ArticlesCard limited={true}/>
        </div>
    </div>
  )
}
