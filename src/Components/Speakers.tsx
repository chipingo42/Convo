import React from 'react'
import image1 from '../Assets/amaka.png'
import image2 from '../Assets/debra.png'

const Speakers = () => {
  return (
    <div className='max-w-[1200px] mx-auto pt-[75px]'>
      <div className='flex justify-between items-center border-b border-solid border-[#BCD7FF] py-5'>
        <h1 className='text-[60px] font-[900] font-Sora'>Speakers</h1>
        <div className='flex items-center gap-2'>
          <span>View all speakers</span>
          <span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L11 11.5M11 11.5V4M11 11.5H3.5" stroke="#424245" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div className='flex gap-12 mt-[40px]  '>
        <div className='flex flex-col'>
          <h1 className=' text-[16px] font-[400] font-Sora'>Therapist share knowledge on building <br /> Friendships and and relationships with <br /> family.</h1>
          <div className='  self-stretch '>
            <div className='flex items-center justify-center w-[60px] h-[60px] border border-solid border-[#717172] rounded-full'>
              <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00003 17.67C7.81003 17.67 7.62003 17.6 7.47003 17.45L0.950029 10.93C-0.109971 9.87 -0.109971 8.13 0.950029 7.07L7.47003 0.550004C7.76003 0.260004 8.24003 0.260004 8.53003 0.550004C8.82003 0.840004 8.82003 1.32 8.53003 1.61L2.01003 8.13C1.53003 8.61 1.53003 9.39001 2.01003 9.87L8.53003 16.39C8.82003 16.68 8.82003 17.16 8.53003 17.45C8.38003 17.59 8.19003 17.67 8.00003 17.67Z" fill="#151517"/>
              </svg>
            </div>
      
          </div>
        </div>
        <div className=' flex items-center gap-4'>
          <div className="relative bg-[#66A3FF] h-[545px]  w-[420px]">
            <img src={image1} className="h-full" alt="" />
            <div className='absolute bottom-7 w-full px-5'>
              <h1 className=' text-white font-Sora font-[900] text-[32px] '>Amaka Igwe</h1>
              <div className='border-y flex py-1  justify-between items-center'>
                <span className="text-[16px] font-[500] text-white">Student ambassador</span>
                <span className="text-[16px] font-[500] text-white">LA,NG</span>
              </div>
            </div>
          </div>
          <div className="relative bg-[#66A3FF] h-[545px]  w-[420px]">
            <img src={image2} className="h-full" alt="" />
            <div className='absolute bottom-7 w-full px-5'>
              <h1 className='text-white font-Sora font-[900] text-[32px] '>Debra Rowland</h1>
              <div className='border-y flex py-1  justify-between items-center'>
                <span className="text-[16px] font-[500] text-white">Family therapist</span>
                <span className="text-[16px] font-[500] text-white">LA,NG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers

