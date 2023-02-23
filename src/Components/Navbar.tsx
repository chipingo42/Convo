import React from 'react'



const Navbar = () => {
  return (
    <nav className='w-screen h-36 border-b border-solid border-[#C8C8C8] fixed top-0 bg-white z-20'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex mt-[60px] gap-4 items-center'>
            <span>
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.3333 0.833252H3.66665C2.78259 0.833252 1.93474 1.18444 1.30962 1.80956C0.684502 2.43468 0.333313 3.28253 0.333313 4.16659V34.1666L6.99998 27.4999H30.3333C31.2174 27.4999 32.0652 27.1487 32.6903 26.5236C33.3155 25.8985 33.6666 25.0506 33.6666 24.1666V4.16659C33.6666 3.28253 33.3155 2.43468 32.6903 1.80956C32.0652 1.18444 31.2174 0.833252 30.3333 0.833252Z" fill="#1070FF"/>
              </svg>
            </span>
            <h1 className='font-Sora font-[600] text-[20px]'>Convo</h1>
          </div>
          <ul className='flex items-center gap-14 mt-[64px] '>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Solutions</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Pricing</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Company</li>
            <li className=' font-Sora font-[600] text-[20px] text-[#717172z]'>Help</li>
          </ul>
          <div className='flex items-center space-x-8 mt-[64px] '>
            <button className='text-[20px] text-[#717172] font-Sora '>Log in</button>
            <button className='px-5 py-3 rounded-sm text-white bg-[#1070FF]'>Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar