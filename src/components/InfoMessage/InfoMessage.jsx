import React from 'react';
import Infomessage from '../../assets/Infomessage.jpg';

const InfoMessage = () => {
  return (
    <section className='relative mt-[116px]'>
      <div className='container mx-auto relative'>
        <div className='relative flex items-center justify-center'>
          <div className='absolute inset-0 w-full h-full bg-gradient-to-l from-[#4DB24090] to-[#215F1300] mix-blend-multiply z-40 rounded-2xl'></div>
          <img src={Infomessage} alt='Infomessage' className='relative z-20 rounded-2xl w-full h-auto' />
        </div>

        <div className='relative md:absolute md:top-1/2 md:right-10 md:translate-y-[-50%] flex flex-col items-start justify-center max-w-[500px] px-6 py-10 bg-transparent z-50'>
          <h2 className='text-[#FAFAFA] text-[40px] font-bold w-full mb-5'>
            Klapa va zararli hashorot endi yo'q deb hisoblang !!!
          </h2>
          <p className='text-white w-full mb-12'>
            Bizning ko'p yillardan beri o'z faoliyatini olib borayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun
          </p>
          <button className='hover:opacity-65 rounded-[25px] w-[190px] h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer'>
            Bog'lanish
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoMessage;