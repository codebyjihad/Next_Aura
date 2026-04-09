import { User02Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowRoundBack } from "react-icons/io";
import { ProfileData } from './pfSidebar';
import { CiLogout } from "react-icons/ci";



const ProfileSidebar = () => {
  return (
    <div className='fixed top-0 overflow-auto  h-screen w-56 bg-background text-foreground flex flex-col justify-between border-r border-border'>
         {/* Profile Icone */}
        <div>
             <Link href='/profile' className='text-2xl font-bold'><IoIosArrowRoundBack/></Link>
             <div className='p-3 flex items-center border-b-2'>
              <FaUserCircle className="text-5xl mr-3"/>
              <span className='text-xl font-bold text-foreground'>User Name ?</span>
         </div>
         {/* Sidebar mapping */}
         <div className='flex flex-col gap-5 mt-5'> 
              {
                  ProfileData.map((items) => (
                    <div key={items.id} className='flex items-center gap-3 text-md'>
                          <span><items.icone/></span>
                         <Link href={items.href}>{items.name}</Link>
                    </div>
                  ))
              }
         </div>
        </div>
        <div className='p-4 border-t'>
          <Link className='flex items-center gap-2 text-xl bg-destructive/20  justify-center rounded-2xl' href='/'><CiLogout/>Logout</Link>
        </div>
    </div>
  )
}

export default ProfileSidebar