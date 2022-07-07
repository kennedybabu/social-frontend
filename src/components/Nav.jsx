import React, { useState } from 'react'
import {GoThreeBars} from 'react-icons/go'
import {IoMdClose} from 'react-icons/io'

const Nav = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <>
    <div className='w-full h-[80px] bg-blue-500'>
        {/* container    */}

        <div className="w-full h-full flex justify-between px-4 items-center">
            <div className='flex items-center'>
                logo
            </div>
            <div className='h-full hidden md:flex'>
                <ul className='flex h-full items-center'>
                    <li className='m-4'>Home</li>
                    <li className='m-4'>Profile</li>
                    <li className='m-4'>Chat</li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div className='md:hidden z-20' onClick={handleNav}>
                {nav ? <GoThreeBars /> : <IoMdClose />}
            </div>

            {/* mobile menu */}
            <div className={nav ? 'hidden' : 'absolute h-screen w-[40vh] right-0 bg-blue-400 top-0  list-none justify-end'} >
                    <li className='m-4'>Home</li>
                    <li className='m-4'>Profile</li>
                    <li className='m-4'>Chat</li>
            </div>
        </div>

    </div>
    </>
  )
}

export default Nav