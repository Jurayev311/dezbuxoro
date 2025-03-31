import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <section id='hero' className='mt-[174px]'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center gap-[78px]'>
          <div className='w-[50%]'>
            <h2 className='text-[50px] font-medium mb-[50px] text-[#44A842] leading-16'>Buxoro Dezinfektsiya xizmati</h2>
            <p className='mb-[39px] font-sans w-[390px] text-[19px] font-normal'>Biz Buxoroda 10 yildan beri professional dezinfeksiya ishlarini olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday qutilishni bilamiz.</p>
            <button className='hover:opacity-65 rounded-[25px] w-[190px] h-[49px] bg-[#128F10] text-white font-bold cursor-pointer'>Bog'lanish</button>
          </div>

          <div className='w-[50%]'>
            <img src={hero} alt="info image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero