import React from 'react'
import MenuDots from '../icons/menuDots'
import ProfileAvatar from '../profile/profileAvatar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../store/slice/menuSlice'
import { NavLink } from 'react-router-dom'
import MenuItem from './menuItem'


export default function Menu() {
    const menuIsOpen = useSelector((state) => state.menuIsOpen.value)
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
        const menu = document.getElementById('mainMenu');
        if (menu) {
            if (menuIsOpen) {
                console.log(true);
                menu.style.opacity = '1';
                menu.style.height = '9rem';
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
            <div id="mainMenu" className='right-24  top-[3.2rem] grid grid-cols-3 gap-x-3 p-4 max-w-72 mx-auto absolute  bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out'>
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
