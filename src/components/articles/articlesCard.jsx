import React from 'react'
import Recent from '../icons/recent'

export default function ArticlesCard() {
  return (
    <>
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
        <div className='max-h-[480px] overflow-y-scroll'>
            <div className='h-[1400px]'>
        </div>
        </div>
    </>
  )
}
