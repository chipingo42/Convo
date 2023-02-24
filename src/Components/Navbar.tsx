import React from 'react'



const Navbar = () => {
  return (
    <nav className='w-screen h-36 border-b border-solid border-[#C8C8C8] fixed top-0 bg-white z-20 md:h-20 sm:h-14'>
      <div className='max-w-[1200px] mx-auto md:mx-5 sm:mx-3'>
        <div className='flex justify-between items-center'>
          <div className='flex mt-[60px] gap-4 items-center md:mt-[25px] md:gap-2 sm:mt-[20px] sm:gap-3'>
            <span>
              <svg className='w-[34px] h-[35px] sm:w-[16px] sm:h-[16px]'  viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.3333 0.833252H3.66665C2.78259 0.833252 1.93474 1.18444 1.30962 1.80956C0.684502 2.43468 0.333313 3.28253 0.333313 4.16659V34.1666L6.99998 27.4999H30.3333C31.2174 27.4999 32.0652 27.1487 32.6903 26.5236C33.3155 25.8985 33.6666 25.0506 33.6666 24.1666V4.16659C33.6666 3.28253 33.3155 2.43468 32.6903 1.80956C32.0652 1.18444 31.2174 0.833252 30.3333 0.833252Z" fill="#1070FF"/>
              </svg>
            </span>
            <h1 className='font-Sora font-[600] text-[20px] sm:text-[16px]'>Convo</h1>
          </div>
          <ul className='flex items-center gap-14 mt-[64px] lg:gap-6  md:hidden '>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Solutions</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Pricing</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Company</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Help</li>
          </ul>
          <div className='flex items-center space-x-8 mt-[64px] md:space-x-3 md:hidden '>
            <button className='text-[20px] text-[#717172] font-Sora '>Log in</button>
            <button className='px-5 py-3 rounded-sm text-white font-Sora text-[20px] bg-[#1070FF]'>Sign up</button>
          </div>
          <span className='mt-[64px] hidden md:mt-[25px] cursor-pointer md:flex sm:mt-[20px]'>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H0.75C0.335786 12 0 11.6642 0 11.25Z" fill="#060606"/>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar