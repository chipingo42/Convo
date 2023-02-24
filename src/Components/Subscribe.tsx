import React from 'react'
import group_line from '../Assets/Group_line.png'

const Subscribe = () => {
  return (
    <div className='w-screen h-[435px] mt-[124px] relative top-0 bg-[#E7F0FF]'>
      <img src={group_line} alt="" className='h-full ' />
      <div className='relative -top-64 flex flex-col items-center justify-center'>
        <h1 className='text-[48px] font-[900]'>Subscribe to our newsletter</h1>
        <p className='font-[400] text-[16px] font-Sora'>Be notified about our events before everyone else</p>
        <form action="" className='flex gap-1 items-center mt-[36px]'>
          <div>
           <input type="text" placeholder='Textfield text' className='w-[320px] pl-5 py-1 text-[16px] font-[500] rounded-md' />
          </div>
          <div className='px-4 py-1 bg-[#1070FF] flex gap-2 items-center justify-center rounded-md'>
            <span className='text-[20px] font-[700] text-white '>Subscribe</span>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="white"/>
              </svg>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe