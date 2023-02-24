import React from 'react'

const Footer = () => {
  return (
    <div className='h-[475px] bg-[#1070FF] w-screen text-white overflow-hidden md:px-5 sm:px-3 sm:h-full'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center space-x-2  pt-[46px]'>
          <svg className='w-[34px] h-[35px] sm:w-[16px] sm:h-[16px]' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.3333 0.333374H3.66665C2.78259 0.333374 1.93474 0.684563 1.30962 1.30968C0.684502 1.93481 0.333313 2.78265 0.333313 3.66671V33.6667L6.99998 27H30.3333C31.2174 27 32.0652 26.6488 32.6903 26.0237C33.3155 25.3986 33.6666 24.5508 33.6666 23.6667V3.66671C33.6666 2.78265 33.3155 1.93481 32.6903 1.30968C32.0652 0.684563 31.2174 0.333374 30.3333 0.333374Z" fill="white"/>
          </svg>
          <h1 className='font-Sora font-[600] text-[20px] sm:text-[16px] '>Convo</h1>
        </div>
        <div className='flex justify-between  mt-[46px] sm:block sm:space-y-4 sm:mt-[26px] sm:pb-12'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[24px] font-[700] font-Sora  sm:text-[16px] '>Company</h1>
            <ul className='flex flex-col space-y-7  md:space-y-2 sm:mt-2 '>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>About Us</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Careers</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Partner with Us</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Contact Us</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[24px] font-[700] font-Sora sm:text-[16px] '>Learn</h1>
            <ul className='flex flex-col space-y-7  md:space-y-2 sm:mt-2 '>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>How it works</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Webinars</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Blogs</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[24px] font-[700] font-Sora sm:text-[16px] '>Legal</h1>
            <ul className='flex flex-col space-y-7  md:space-y-2 sm:mt-2 '>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Privacy Policy</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Terms & Conditions</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Security</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Cookies Setting</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[24px] font-[700] font-Sora sm:text-[16px] '>Help</h1>
            <ul className='flex flex-col space-y-7  md:space-y-2 sm:mt-2 '>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>FAQs</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Customer support</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Help Center </li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[24px] font-[700] font-Sora sm:text-[16px] '>Socials</h1>
            <ul className='flex flex-col space-y-7  md:space-y-2 sm:mt-2 '>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Twitter</li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Facebook </li>
              <li className='font-[500] text-[20px] font-Sora sm:text-[16px]'>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;