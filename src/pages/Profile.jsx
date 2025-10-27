import React from 'react'
import Sidebar from '../components/Sidebar'
const Profile = () => {
  return (
    <div className='flex w-full '>
    <div className='w-fit'>
      <Sidebar/>
    </div>
    <div className='flex-1 h-screen'>
        <div className='flex flex-col gap-2'>
                <div className='rounded-full bg-amber-500 w-10 h-10'></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-black font-extrabold'>Name</div>
                    <div className='text-gray-800'>Username</div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Profile
