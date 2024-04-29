import React, { Fragment } from 'react'
import MenuDots from '../../assets/icons/MenuDots'
import ProfileAvatar from '../profile/ProfileAvatar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../store/slice/menuSlice'
import MenuItem from './MenuItem'
import useAuth from '../../hooks/useAuth'
import { Menu, Transition } from '@headlessui/react'



export default function MainMenu() {
    const {handleLogout} = useAuth()
    // const menuIsOpen = useSelector((state) => state.menuIsOpen.value)
    // const dispatch = useDispatch()
    // const handleToggleMenu = () => {
    //     const menu = document.getElementById('mainMenu');
    //     dispatch(toggleMenu())
    //     if (menu) {
    //         if (menuIsOpen===false) {
    //             menu.style.opacity = '1';
    //             menu.style.height = '8rem';
    //             menu.style.width = '19rem';
    //             menu.style.scale = '1.03'
    //             setTimeout(() => {
    //                 menu.style.scale = '1'
    //             }, 200);
    //         } else {
    //             menu.style.opacity = '0';
    //             setTimeout(() => {
    //                 menu.style.height = '0';
    //                 menu.style.width = '0';
    //                 menu.style.overflow = 'hidden'
    //             }, 200);
    //         }
    //     }
    // };



  return (
    <div className='flex justify-between h-full items-center'>
        <h1 className=' ml-10 text-white tracking-wide font-semibold text-xl'>
            iAdmin
        </h1>
        <div className='flex items-center  gap-x-5 mx-5'>
            <Menu as="div">
                <Menu.Button className='relative hover:bg-neutral-600 hover:bg-opacity-20 py-1 px-2 rounded-lg  '>
                    <MenuDots />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0 scale-110"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className={`right-24  top-[3.2rem] grid grid-cols-3 gap-x-3 p-4 max-w-72 mx-auto absolute  bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out`}>
                        <MenuItem name='Dashboard' />
                        <MenuItem name='Articles' />
                    </Menu.Items>
                </Transition>
            </Menu>
            
            <Menu as="div" className=''>
                <Menu.Button className='h-12 w-14 px-2 py-1 hover:bg-opacity-20 rounded-lg hover:bg-neutral-600'>
                    <ProfileAvatar />
                </Menu.Button>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-110"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className='absolute right-0 mr-5 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"'>
                        <Menu.Item>
                        {({ active }) => (
                            <button
                            className={`${
                              active ? 'bg-gray-200 text-red-500' : 'text-red-500'
                            } group flex w-full font-semibold items-center justify-center rounded-md px-2 py-2 `}
                            onClick={handleLogout}
                          >

                            LogOut
                            </button>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </div>
  )
}
