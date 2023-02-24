import React from 'react'
import group_line from '../Assets/Group_line.png'

const Subscribe = () => {
  return (
    <div className='w-screen h-[435px] mt-[124px] relative top-0 bg-[#E7F0FF] overflow-hidden sm:px-3'>
      <img src={group_line} alt="" className='h-full ' />
      <div className='relative -top-72 flex flex-col items-center justify-center sm:-top-80  '>
        <h1 className='text-[48px] font-[900] font-Sora md:text-[38px] sm:text-[32px]'>Subscribe to our <span className='md:flex md:justify-center'>newsletter</span></h1>
        <p className='font-[400] text-[16px] font-Sora sm:text-[13px]'>Be notified about our events before everyone else</p>
        <form action="" className='flex gap-1 items-center mt-[36px] md:gap-0'>
          <div>
           <input type="text" placeholder='Textfield text' className='w-[320px] pl-5 py1 text-[16px] font-[500] rounded-md md:py-2  sm:w-full' />
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