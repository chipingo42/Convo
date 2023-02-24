import React from 'react'
import image  from '../Assets/Rectangle 2.png'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto md:mx-5 overflow-hidden sm:mx-3'>
      <div className='flex flex-col justify-center items-center pt-[225px] md:pt-[170px] sm:pt-[136px]'>
        <h1 className='text-[#151517] font-Sora font-[900] text-[60px] sm:text-[36px]'>Webinars</h1>
        <p className='text-[16px] font-Sora font-[600] leading-[22px] text-[#151517] sm:text-[10px] sm:pl-4'>In our free time, we some times hold webinars with professionals centered around healing, friendships and <br  /> family. Our users come to quality of the friendships in their lives. From learning how to find friends and ...</p>
      </div>
      <div className='pt-[122px] relative sm:pt-[65px]'>
        <svg className='absolute right-0 top-16' width="116" height="107" viewBox="0 0 116 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.3625 64.5187C35.0494 64.1581 34.755 63.9086 34.4754 63.611C29.8278 58.899 24.6963 54.7271 19.7062 50.4397C14.4217 45.9031 9.12237 41.4148 4.16541 36.5021C3.14793 35.5009 2.1602 34.403 1.23577 33.2715C0.840681 32.8323 0.538621 32.2629 0.348311 31.6747C0.0199215 30.6734 0.529709 29.8768 1.6173 29.7872C2.22439 29.7089 2.83528 29.7907 3.43133 29.9209C8.03565 30.8058 12.64 31.6909 17.263 32.6876C22.8696 33.9336 28.4613 35.2278 34.0716 36.6339C39.4398 37.9654 44.7596 39.2822 49.9493 41.1945C50.0462 41.2243 50.1915 41.2689 50.4001 41.28C50.7425 40.8556 51.0849 40.4312 51.3789 39.9918C57.2663 31.5257 63.5934 23.3536 70.1329 15.3526C73.6055 11.1233 77.2421 7.0501 80.8303 2.96208C81.3923 2.34031 82.0028 1.73342 82.6469 1.18981C83.0713 0.843542 83.5479 0.6722 84.0845 0.995962C84.6062 1.3681 84.6661 1.86316 84.5025 2.39551C84.0974 3.54219 83.6917 4.68866 83.1898 5.80561C80.9356 10.7272 78.5845 15.619 76.3304 20.5406C74.1505 25.2202 71.9558 29.9482 69.8244 34.6427C68.515 37.5241 67.2541 40.4205 65.9448 43.302C65.2455 44.8879 65.2009 45.0331 66.8029 45.6842C70.1858 47.0944 73.6176 48.5195 77.1083 49.7509C85.0286 52.6081 93.0085 55.2718 100.929 58.1293C104.938 59.5728 108.839 61.1949 112.818 62.7352C113.53 63.007 114.197 63.4237 114.785 63.9225C115.881 64.8417 115.736 66.1743 114.403 66.7181C113.499 67.0757 112.463 67.34 111.454 67.3478C108.429 67.5306 105.386 67.6021 102.358 67.625C93.4483 67.6417 84.5683 66.8729 75.7287 65.7988C74.6034 65.665 73.464 65.5797 72.3239 65.4942C71.9065 65.4719 71.5381 65.4646 71.1058 65.4907C69.1056 65.6176 68.6706 66.1725 68.9878 68.0707C69.0857 68.7894 69.2942 69.489 69.4403 70.2225C71.1056 77.5668 73.4384 84.639 75.9787 91.7223C76.7848 93.9297 77.5911 96.1365 78.2851 98.363C78.7326 99.6654 79.0687 100.987 79.3418 102.342C79.5058 103.187 79.5102 104.036 79.3693 104.84C79.1166 106.351 77.8698 107.133 76.4312 106.638C75.6567 106.4 74.9261 106.017 74.289 105.503C73.2756 104.662 72.2911 103.724 71.3705 102.753C64.9601 96.0162 59.3203 88.6693 54.6555 80.5625C53.7343 78.9029 52.7501 77.2759 51.7657 75.6496C51.4972 75.1437 51.1506 74.7192 50.8187 74.2466C50.3044 73.5054 49.6264 73.297 48.7996 73.5727C48.4978 73.6924 48.1628 73.7477 47.861 73.8675C36.0563 78.1316 23.9752 81.5701 11.9652 85.2949C10.5648 85.7123 9.19812 86.1927 7.79779 86.6101C7.33614 86.7328 6.8742 86.8561 6.39391 86.8667C5.89839 86.9269 5.42906 86.7293 5.16054 86.2233C4.94041 85.7322 4.97745 85.2666 5.36829 84.857C5.96392 84.2986 6.51107 83.7253 7.14028 83.23C10.5283 80.8284 13.8195 78.397 17.2748 76.1215C21.6607 73.2323 26.099 70.5175 30.5037 67.7396C31.766 66.909 33.028 66.0792 34.2418 65.2338C34.6403 65.1445 34.9531 64.8164 35.3625 64.5187Z" fill="#3B89FF"/>
        </svg>
        <img src={image} alt="/" className='sm:w-screen' />
        <div className='flex  gap-20 pt-[24px] sm:block'>
          <h1 className='text-[#151517] font-Sora font-[900] text-[48px] leading-[65px] sm:text-[32px] sm:leading-[43.2px]'>Strengthening Relationships</h1>
          <div className=''>
            <div className='flex items-center gap-5 sm:justify-between sm:pt-[24px]'>
              <span className='text-[20px] font-Sora font-[500] text-[#151517] sm:text-[16px]  '>Nov 27 2022</span>
              <span className='text-[20px] font-Sora font-[500] text-[#151517] sm:text-[16px] '>5:30 PM</span>
            </div>
            <div>
              <p className='text-[16px] font-[400] font-Sora pt-[14px] sm:pt-[14px] md:text-[14px]  md:min-h-[90px] '>This three part series will focus on strengthening your relationship with your partner. Topics will include managing stress, respite and taking time off to reconnect, and working together as a team</p>
              <button className='px-5 py-3 bg-[#1070FF] font-[400] font-Sora rounded-sm text-white text-[20px] mt-[22px] sm:text-[16px] sm:px-4 sm:py-2'>Get Ticket</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero