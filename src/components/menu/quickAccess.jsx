import React from 'react'
import { toggleQuickAccess } from '../store/slice/quickAccessSlice'
import { useDispatch, useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import Plus from '../../assets/icons/Plus'

export default function QuickAccess() {
    const quickAccessIsOpen = useSelector((state) => state.quickAccessIsOpen.value)
    const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(toggleQuickAccess())} className={`hover:bg-opacity-65 transition-all duration-300 ease-in-out z-40 relative cursor-pointer w-24 h-24 bg-white shadow-2xl bg-opacity-30 flex justify-center items-center rounded-2xl }`}>
        <span className={`transition-all duration-300 ease-in-out ${quickAccessIsOpen?'rotate-90 bg-opacity-65':''}`}>
            <Plus w='30' h='30' />
        </span>
        <div className={`top-0 h-24 flex flex-row-reverse left-0 -z-10 transition-all duration-300 ease-in-out absolute bg-white rounded-2xl overflow-hidden ${quickAccessIsOpen?'w-80 bg-opacity-65':'w-0 bg-opacity-0 opacity-0'}`}>
            <MenuItem name='Dashboard' bg='false' />
            <MenuItem name='Articles' bg='false' />
        </div>
    </div>
  )
}
