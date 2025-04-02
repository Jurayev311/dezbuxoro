import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import hero from '../../assets/hero.png'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <section id='main' className='mt-[80px] md:mt-[120px] lg:mt-[174px] px-4 sm:px-6 overflow-hidden'>
      <div className='container mx-auto'>
        <div 
          className='flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[78px]'
          data-aos="fade-up"
        >
          <div 
            className='w-full lg:w-[50%] order-2 lg:order-1 text-center lg:text-left'
            data-aos="fade-right"
          >
            <h2 className='text-3xl sm:text-4xl md:text-[50px] font-medium mb-6 md:mb-[50px] text-[#44A842] leading-tight'>
              {t("Buxoro Dezinfektsiya xizmati")}
            </h2>
            <p className='mb-6 md:mb-[39px] font-sans w-full md:w-[390px] text-base sm:text-lg md:text-[19px] font-normal mx-auto lg:mx-0'>
              {t("Biz Buxoroda 10 yildan beri professional dezinfeksiya ishlarini olib boramiz, shuning uchun birinchi marta zararkunandalardan qanday qutilishni bilamiz")}.
            </p>
            <button 
              className='hover:opacity-65 rounded-[25px] w-[160px] sm:w-[190px] h-[45px] sm:h-[49px] bg-[#128F10] text-white font-bold cursor-pointer transition-opacity duration-300'
              data-aos="zoom-in"
            >
              <a href="#faq">{t("Bog'lanish")}</a>
            </button>
          </div>

          <div 
            className='w-full lg:w-[50%] order-1 lg:order-2 mb-8 lg:mb-0'
            data-aos="fade-left"
          >
            <img 
              src={hero} 
              alt="info image" 
              className='w-full max-w-[500px] lg:max-w-none mx-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
