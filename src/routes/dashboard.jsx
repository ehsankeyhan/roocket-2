import React from 'react'
import CloudProfile from '../components/icons/cloudProfile'
import ProfileAvatar from '../components/profile/profileAvatar'
import Recent from '../components/icons/recent'

export default function Dashboard() {
  return (
    <>
    <div className='md:flex md:flex-row md:w-full md:gap-x-8 '>
        <div className=' basis-1/3 mb-10 py-3 h-80 w-80 cursor-pointer rounded-2xl shadow-2xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-300 ease-in-out'  style={{background:'radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, .85) 0, hsla(0, 0%, 96.1%, .13) 183%)'}}>
            <div className='w-48 h-48'>
                <CloudProfile />
                <div className='absolute w-28 top-10 left-8'>
                    <ProfileAvatar />
                </div>
            </div>
            <div className='ml-10 mt-2'>
                <h2 className='text-3xl font-bold'>Ehsan</h2>
                <p className='font-thin tracking-wide'>ehsankeyhan75@gmail.com</p>
                <p className='uppercase mt-2'>premium</p>
            </div>
        </div>
        <div className=' basis-2/3 mb-10 h-80  rounded-2xl bg-white overflow-hidden shadow-2xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-300 ease-in-out' >
            <div className='w-full bg-[#dceefd] p-3 '>
                <div className='p-3 items-center flex gap-x-3 hover:bg-neutral-500 cursor-pointer hover:bg-opacity-15 rounded-xl'>
                    <div className='w-10'>
                        <img src="/articles.png" alt="article" />
                    </div>
                    <div>
                        <p className='font-semibold text-xl tracking-wide'>Articles</p>
                        <div className='flex items-center -mt-1 text-sm text-neutral-600 font-extralight gap-x-1'>
                            <Recent />
                            <p>Recents</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''></div>
        </div>
    </div>
       
    </>
  )
}
