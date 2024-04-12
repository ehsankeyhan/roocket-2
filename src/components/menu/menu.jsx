import React from 'react'
import MenuDots from '../../assets/icons/MenuDots'
import ProfileAvatar from '../profile/ProfileAvatar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../store/slice/menuSlice'
import MenuItem from './MenuItem'


export default function Menu() {
    const menuIsOpen = useSelector((state) => state.menuIsOpen.value)
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        const menu = document.getElementById('mainMenu');
        dispatch(toggleMenu())
        if (menu) {
            if (menuIsOpen===false) {
                menu.style.opacity = '1';
                menu.style.height = '8rem';
                menu.style.width = '19rem';
                menu.style.scale = '1.03'
                setTimeout(() => {
                    menu.style.scale = '1'
                }, 200);
            } else {
                menu.style.opacity = '0';
                setTimeout(() => {
                    menu.style.height = '0';
                    menu.style.width = '0';
                    menu.style.overflow = 'hidden'
                }, 200);
            }
        }
    };



  return (
    <div className='flex justify-between h-full items-center'>
        <h1 className=' ml-10 text-white tracking-wide font-semibold text-xl'>
            iAdmin
        </h1>
        <div className='flex items-center  gap-x-5 mx-5'>
            <button onClick={handleToggleMenu} className='relative hover:bg-neutral-600 hover:bg-opacity-20 py-1 px-2 rounded-lg  '>
                <MenuDots />
            </button>
            <div id="mainMenu" className={`right-24  top-[3.2rem] grid grid-cols-3 gap-x-3 p-4 max-w-72 mx-auto absolute  bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out ${menuIsOpen?'':'opacity-0 w-0 h-0 overflow-hidden'}`}>
                <MenuItem name='Dashboard' />
                <MenuItem name='Articles' />
            </div>
            <button className='h-12 w-14 px-2 py-1 hover:bg-opacity-20 rounded-lg hover:bg-neutral-600'>
                <ProfileAvatar />
            </button>
        </div>
    </div>
  )
}
