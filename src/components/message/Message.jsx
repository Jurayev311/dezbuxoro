import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";

const Message = () => {
  return (
    <div className='fixed bottom-5 right-5 z-[101] sm:bottom-4 sm:right-4 md:bottom-6 md:right-6'>
      <div className='relative'>
        <span className='absolute inline-flex h-full w-full rounded-full bg-[#128F10] opacity-75 animate-ping'></span>
        
        <div className='relative bg-[#128F10] hover:bg-[#7A987A] text-white p-3 sm:p-2 md:p-4 rounded-full shadow-lg transition-colors duration-300'>
          <a target='_blank' href="https://t.me/Shamsiddin_69_75">
            <LiaTelegramPlane size={24} className="sm:size-[20px] md:size-[30px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Message
