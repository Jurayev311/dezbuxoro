import React from 'react';
import Infomessage from '../../assets/Infomessage.jpg';
import { useTranslation } from 'react-i18next';

const InfoMessage = () => {

  const { t, i18n } = useTranslation();

  return (
    <section className='relative mt-[100px] md:px-0'>
      <div className='container mx-auto relative'>
        <div className='relative flex items-center justify-center'>
          <div className='absolute inset-0 w-full h-full bg-gradient-to-l from-[#4DB24090] to-[#215F1300] mix-blend-multiply z-40 rounded-2xl'></div>
          <img src={Infomessage} alt='Infomessage' className='relative z-20 rounded-2xl w-full h-auto object-cover' />
        </div>

        <div className='relative md:absolute md:top-1/2 md:right-10 md:translate-y-[-50%] flex flex-col items-start justify-center max-w-[500px] p-6 py-8 md:py-10 bg-transparent z-50 md:text-left'>
          <h2 className='text-[#033102] text-[28px] md:text-[40px] font-bold w-full mb-4 md:mb-5 md:text-white leading-snug'>
            {t("Klapa va zararli hashorot endi yo'q deb hisoblang")} !!!
          </h2>
          <p className='text-[#033102] w-full mb-8 md:mb-12 text-base md:text-lg md:text-white leading-relaxed'>
            {t("Bizning ko'p yillardan beri o'z faoliyatini olib borayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun")}
          </p>
          <button className='hover:opacity-75 rounded-[25px] w-full md:w-[190px] h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer transition-opacity duration-300'>
            {t("Bog'lanish")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoMessage;
