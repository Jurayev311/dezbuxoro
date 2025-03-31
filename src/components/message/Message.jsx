import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";

const Message = () => {
  return (
    <div className='fixed bottom-5 right-5 z-[101]'>
      <div className='relative'>
        <span className='absolute inline-flex h-full w-full rounded-full bg-[#128F10] opacity-75 animate-ping'></span>
        
        <div className='relative bg-[#128F10] hover:bg-[#7A987A] text-white p-4 rounded-full shadow-lg transition-colors duration-300'>
         <a target='_blank' href="https://t.me/Shamsiddin_69_75"> <LiaTelegramPlane size={30} /></a>
        </div>
      </div>
    </div>
  )
}

export default Message
