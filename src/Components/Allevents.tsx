import React from 'react'
import card1 from '../Assets/first_group.png'
import card2 from '../Assets/second_group.png'
import card3 from '../Assets/third_group.png'

const Allevents = () => {
  return (
    <div className='max-w-[1200px] mx-auto relative overflow-hidden md:mx-5 sm:mx-3  '>
      <div className='flex items-center justify-between pt-[72px] border-b border-solid border-[#BCD7FF] py-3'>
        <h1 className='text-[60px] font-[900] font-Sora md:text-[30px] '>All events</h1>
        <div className='flex items-center gap-2'>
          <span className='font-[500] font-Sora text-[16px] md:text-[14px]'>View all speakers</span>
          <span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L11 11.5M11 11.5V4M11 11.5H3.5" stroke="#424245" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-4 justify-between mt-[40px] '>
        <div className='relative  md:w-full'>
          <img src={card1} alt="/" className=' w-[380px] h-[394px] md:w-full' />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white sm:text-[25px]'>Re-connting Family</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Learn More</span>
            </div>
          </div>
        </div>
        <div className='relative md:w-full '>
          <img src={card2} alt="/" className=' w-[380px] h-[394px] md:w-full' />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white sm:text-[25px]'>Friendship and Belonging</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Learn More</span>
            </div>
          </div>
        </div>
        <div className='relative md:w-full '>
          <img src={card3} alt="/" className=' w-[380px] h-[394px] md:w-full' />
          <div className='absolute bottom-6 w-full px-3'>
            <p className='text-[32px] font-[900] font-Sora text-white sm:text-[25px]'>The Friendship Reset</p>
            <div className='border-y border-solid border-white flex items-center justify-between py-3'>
              <h1 className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Nov 20th - 21st</h1>
              <span className='text-[16px] font-[500] font-Sora text-white sm:text-[12px]'>Learn More</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 mt-[24px] absolute right-0'>
        <div className='flex items-center justify-center w-[60px] h-[60px] border border-solid border-[#717172] rounded-full'>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00003 17.67C7.81003 17.67 7.62003 17.6 7.47003 17.45L0.950029 10.93C-0.109971 9.87 -0.109971 8.13 0.950029 7.07L7.47003 0.550004C7.76003 0.260004 8.24003 0.260004 8.53003 0.550004C8.82003 0.840004 8.82003 1.32 8.53003 1.61L2.01003 8.13C1.53003 8.61 1.53003 9.39001 2.01003 9.87L8.53003 16.39C8.82003 16.68 8.82003 17.16 8.53003 17.45C8.38003 17.59 8.19003 17.67 8.00003 17.67Z" fill="#151517"/>
          </svg>
        </div>
        <div className='flex items-center justify-center w-[60px] h-[60px] border border-solid border-[#717172] rounded-full'>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.909975 17.67C0.719975 17.67 0.529976 17.6 0.379976 17.45C0.0899756 17.16 0.0899756 16.68 0.379976 16.39L6.89998 9.87C7.37998 9.39001 7.37998 8.61 6.89998 8.13L0.379976 1.61C0.0899756 1.32 0.0899756 0.840004 0.379976 0.550004C0.669976 0.260004 1.14998 0.260004 1.43998 0.550004L7.95998 7.07C8.46998 7.58 8.75998 8.27 8.75998 9C8.75998 9.73001 8.47998 10.42 7.95998 10.93L1.43998 17.45C1.28998 17.59 1.09998 17.67 0.909975 17.67Z" fill="#151517"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Allevents;