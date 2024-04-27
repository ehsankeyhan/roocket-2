import React from 'react'
import ArticlesCard from '../articles/ArticlesCard'
import UserInfo from '../profile/UserInfo'
import QuickAccess from '../menu/QuickAccess'
import ChartsCard from '../charts/ChartsCard'

export default function DashboardItem() {


  return (
    <div className='md:flex md:flex-row md:w-full md:gap-x-8 '>
        <div className='basis-1/3 mb-10'>
            <UserInfo />
            <QuickAccess />
        </div>
        <div className='basis-2/3'>
          <div className=' basis-2/3 mb-10 h-80  rounded-2xl bg-white overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out' >
              <ArticlesCard limited={true}/>
          </div>
          <div className='  mb-10  rounded-2xl bg-white overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out' >
              <ChartsCard />
          </div>
        </div>
    </div>
  )
}
