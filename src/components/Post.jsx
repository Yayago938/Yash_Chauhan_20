import React from 'react'

const Post = ({ post }) => {
  return (
    <div className='w-[80vw] sm:mr-12 sm:w-[100%]  bg-white shadow-lg shadow-blue-700 rounded-lg p-4 mb-6 '>
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <div className='rounded-full bg-amber-600 w-10 h-10'></div>
                <div className='font-bold'>{post.username}</div>
            </div>
            <div>
                <img src="/images/more.png" alt="more options" className='w-6 cursor-pointer' />
            </div>
        </div>

      <div className='flex justify-center mb-2'>
        <img src={post.image} alt="" className='object-contain w-full rounded-md' />
      </div>

      <div className='flex justify-around w-full mb-2'>
        <button><img src="/images/heart.png" alt="" className='inline-block' /><span>{post.likes}</span></button>
        <button><img src="/images/commentblue.png" className='inline-block' alt="" /><span>Comment</span></button>
        <button><img src="/images/share.png" className='inline-block' alt="" /><span>Share</span></button>
      </div>

      <div className='w-full text-gray-700'>{post.caption}</div>
    </div>
  )
}

export default Post
