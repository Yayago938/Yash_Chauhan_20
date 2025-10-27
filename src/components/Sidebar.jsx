import React from 'react'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
        const navigate = useNavigate();
    return (

        <div>
        
            <div className='flex w-[100vw] h-[12vh] fixed bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100  items-center p-2 justify-between sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:w-fit sm:gap-16 sm:p-4 sm:flex-col sm:justify-start sm:items-center'>
                <div className='font-extrabold text-red-600  text-shadow-lg text-shadow-purple-400 text-2xl sm:text-6xl'>BlueBerry</div>
                <div className='flex sm:flex-col gap-12  '>
                    <button className='flex justify-around items-center gap-4 transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/heart.png" alt="" className='inline-block ' /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl '>Notifications</span></button>
                    <button className='flex justify-around items-center gap-4 transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/chat.png" alt="" className='inline-block' /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl'>Messages</span></button>

                    <button onClick={()=>{navigate('/home')}} className='hidden sm:flex justify-around items-center gap-4  transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/home.png" alt="" className='inline-block' /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl'>Home</span></button>
                    <button onClick={()=>{navigate('/connect')}} className='hidden sm:flex justify-around items-center gap-4 transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/search.png" className='inline-block' alt="" /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl'>Connect</span></button>
                    <button className=' hidden sm:flex justify-around items-center gap-4 transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/create.png" className='inline-block' alt="" /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl'>Create</span></button>
                    <button onClick={()=>{navigate('/profile')}} className='hidden sm:flex justify-around items-center gap-4 transform transition duration-150 active:scale-95 rounded-xl hover:bg-pink-300'><img src="/images/profile.png" className='inline-block' alt="" /><span className='hidden sm:block font:extra-bold text-red-600  text-shadow-lg text-shadow-pink-400 text-2xl'>Profile</span></button>

                </div>
            </div>
        


            <div className='fixed bottom-0 h-20  bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex justify-around w-[100vw] sm:hidden'>
                <button onClick={()=>{navigate('/home')}} className='transform transition duration-300 active:scale-95 hover:bg-blue-300'><img src="/images/home.png" alt="" className='inline-block transform transition duration-150 active:scale-95' /><span className='hidden sm:block'>Home</span></button>
                <button onClick={()=>{navigate('/connect')}} className='transform transition duration-300 active:scale-95'><img src="/images/search.png" className='inline-block transform transition duration-150 active:scale-95' alt="" /><span className='hidden sm:block'>Connect</span></button>
                <button className=''><img src="/images/create.png" className='inline-block transform transition duration-300 active:scale-95' alt="" /><span className='hidden sm:block transform transition duration-150 active:scale-95'>Create</span></button>
                <button onClick={()=>{navigate('/profile')}} className='transform transition duration-300 active:scale-95 hover:bg-blue-300'><img src="/images/profile.png" className='inline-block transform transition duration-150 active:scale-95' alt="" /><span className='hidden sm:block'>Profile</span></button>
            </div>

        </div>
    )
}

export default Sidebar
