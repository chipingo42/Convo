import React from 'react'
import card1 from '../Assets/first_group.png'
import card2 from '../Assets/second_group.png'
import card3 from '../Assets/third_group.png'

const Allevents = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex items-center justify-between pt-[72px] border-b border-solid border-[#BCD7FF] py-3'>
        <h1 className='text-[60px] font-[900] font-Sora '>All events</h1>
        <div className='flex items-center gap-2'>
          <span>View all speakers</span>
          <span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L11 11.5M11 11.5V4M11 11.5H3.5" stroke="#424245" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className='flex items-center gap-4 mt-[40px]'>
        <div className='relative  w-[413px]'>
          <img src={card1} alt="/" />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white'>Re-connting Family</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white'>Learn More</span>
            </div>
          </div>
        </div>
        <div className='relative  w-[413px]'>
          <img src={card2} alt="/" />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white'>Friendship and Belonging</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white'>Learn More</span>
            </div>
          </div>
        </div>
        <div className='relative  w-[413px]'>
          <img src={card3} alt="/" />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white'>The Friendship Reset</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white'>Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allevents