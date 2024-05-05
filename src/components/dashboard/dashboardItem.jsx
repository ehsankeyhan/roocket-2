import React from 'react'
import ArticlesCard from '../articles/ArticlesCard'
import UserInfo from '../profile/UserInfo'
import QuickAccess from '../menu/QuickAccess'
import ChartsCard from '../charts/ChartsCard'
import { Transition } from '@headlessui/react'

export default function DashboardItem() {


  return (
    <div className='md:flex md:flex-row md:w-full md:gap-x-8 '>
        <Transition
        appear={true}
        show={true}
        enter="transition ease-in duration-300"
        enterFrom="transform opacity-0 translate-x-10"
        enterTo="transform opacity-100 translate-x-0"
        >
          <div className='basis-1/3 mb-10'>
              <UserInfo />
              <QuickAccess />
          </div>
        </Transition>
        <div className='basis-2/3'>
        <Transition
          appear={true}
          show={true}
          enter="transition ease-in duration-200"
          enterFrom="transform opacity-0 translate-y-10"
          enterTo="transform opacity-100 translate-y-0"
          >
          <div className='  mb-10 h-80  rounded-2xl  bg-white overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out' >
              <ArticlesCard limited={true}/>
          </div>
          </Transition>
          <Transition
          appear={true}
          show={true}
          enter="transition ease-in duration-500"
          enterFrom="transform opacity-0 translate-y-10"
          enterTo="transform opacity-100 translate-y-0"
          >
          <div className='  mb-10 min-h-80 rounded-2xl bg-white overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out' >
              <ChartsCard />
          </div>
          </Transition>
        </div>
    </div>
  )
}
