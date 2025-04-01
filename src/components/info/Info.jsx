import React from 'react'
import info from '../../assets/info.png'
import safe from '../../assets/safe.svg'
import { useTranslation } from 'react-i18next';


const Info = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='mt-[60px] md:mt-[80px] lg:mt-[116px] px-4 sm:px-6'>
            <div className='container mx-auto'>
                <div className='bg-gradient-to-tr from-[#1A7C15] to-[#A1CE7D] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-[73px] p-5 sm:p-[30px] rounded-2xl'>
                    <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                        <img 
                            src={info} 
                            alt="info" 
                            className='w-full h-auto object-contain max-h-[300px] lg:max-h-none'
                        />
                    </div>

                    <div className='w-full lg:w-1/2 order-1 lg:order-2'>
                        <div className='mb-4 max-w-[80px] sm:max-w-[100px]'>
                            <img 
                                src={safe} 
                                alt="safe image" 
                                className='w-full h-auto'
                            />
                        </div>
                        <h2 className='text-[20px] sm:text-[26px] lg:text-[32px] font-bold text-[#FAFAFA] mb-6 lg:mb-[42px]'>
                            {t("Rasmiy foydalanish - 1 yil. Biz xizmat va yuridik shaxslarga xizmat kursatamiz. Xizmatlar litsenziyalangan")}!!!
                        </h2>
                        <button className='py-2 sm:py-3 px-6 sm:px-[30px] bg-[#FAFAFA] text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-black rounded-[25px] hover:bg-opacity-90 transition-all duration-300'>
                            {t("Bog'lanish")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info