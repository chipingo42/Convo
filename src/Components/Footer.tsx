import React from 'react'

const Footer = () => {
  return (
    <div className='h-[475px] bg-[#1070FF] w-screen text-white'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center gap-4 pt-[46px]'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.3333 0.333374H3.66665C2.78259 0.333374 1.93474 0.684563 1.30962 1.30968C0.684502 1.93481 0.333313 2.78265 0.333313 3.66671V33.6667L6.99998 27H30.3333C31.2174 27 32.0652 26.6488 32.6903 26.0237C33.3155 25.3986 33.6666 24.5508 33.6666 23.6667V3.66671C33.6666 2.78265 33.3155 1.93481 32.6903 1.30968C32.0652 0.684563 31.2174 0.333374 30.3333 0.333374Z" fill="white"/>
          </svg>
          <h1 className='font-Sora font-[600] text-[20px] '>Convo</h1>
        </div>
        <div className='flex justify-between mt-[46px]'>
          <div>
            <h1 className='text-[24px] font-[500] font-Sora '>Company</h1>
            <ul className='flex flex-col gap-5 pt-[29px]'>
              <li className='font-[500] text-[20px] font-Sora'>About Us</li>
              <li className='font-[500] text-[20px] font-Sora'>Careers</li>
              <li className='font-[500] text-[20px] font-Sora'>Partner with Us</li>
            </ul>
          </div>
          <div>
            <h1 className='text-[24px] font-[500] font-Sora '>Learn</h1>
            <ul className='flex flex-col gap-5 pt-[29px]'>
              <li className='font-[500] text-[20px] font-Sora'>How it works</li>
              <li className='font-[500] text-[20px] font-Sora'>Webinars</li>
              <li className='font-[500] text-[20px] font-Sora'>Blogs</li>
            </ul>
          </div>
          <div>
            <h1 className='text-[24px] font-[500] font-Sora '>Legal</h1>
            <ul className='flex flex-col gap-5 pt-[29px]'>
              <li className='font-[500] text-[20px] font-Sora'>Privacy Policy</li>
              <li className='font-[500] text-[20px] font-Sora'>Terms & Conditions</li>
              <li className='font-[500] text-[20px] font-Sora'>Security</li>
              <li className='font-[500] text-[20px] font-Sora'>Cookies Setting</li>
            </ul>
          </div>
          <div>
            <h1 className='text-[24px] font-[500] font-Sora '>Help</h1>
            <ul className='flex flex-col gap-5 pt-[29px]'>
              <li className='font-[500] text-[20px] font-Sora'>FAQs</li>
              <li className='font-[500] text-[20px] font-Sora'>Customer support</li>
              <li className='font-[500] text-[20px] font-Sora'>Help Center </li>
            </ul>
          </div>
          <div>
            <h1 className='text-[24px] font-[500] font-Sora '>Socials</h1>
            <ul className='flex flex-col gap-5 pt-[29px]'>
              <li className='font-[500] text-[20px] font-Sora'>Twitter</li>
              <li className='font-[500] text-[20px] font-Sora'>Facebook </li>
              <li className='font-[500] text-[20px] font-Sora'>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;