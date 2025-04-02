import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import service from '../../assets/service.svg'
import specialists from '../../assets/specialists.svg'
import time from '../../assets/time.svg'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out', 
            once: true, 
            anchorPlacement: 'top-bottom', 
        });
    }, []);

    return (
        <section id='about' className='overflow-hidden mt-[119px]'>
            <div className='container mx-auto px-4' data-aos="fade-up">
                <div>
                    <h2 className='text-2xl font-bold text-[#023107] mb-[41px] md:text-left'>
                        {t("Biz xaqimizda")}
                    </h2>
                    <div className='border border-[#CCCCCC]'></div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[63px] mt-[49px]'>
                    <div 
                        className='md:text-left md:border-0 border border-[#CCCCCC] p-4 rounded-lg' 
                        data-aos="flip-left"
                    >
                        <div className='flex justify-start'>
                            <img src={service} alt='service' className='w-[60px] md:w-auto' />
                        </div>
                        <h2 className='mt-[29px] text-[20px] md:text-[25px] font-bold text-[#081B02] mb-[25px]'>
                            {t("Tezda Xizmat Ko'rsatish")}
                        </h2>
                        <p className='text-[14px] md:text-[16px] font-light text-[#678372]'>
                            {t("ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSILINCH BO'lsa, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BO'LIB KOLADI")}.
                        </p>
                    </div>

                    <div 
                        className='md:text-left md:border-0 border border-[#CCCCCC] p-4 rounded-lg' 
                        data-aos="flip-up"
                    >
                        <div className='flex justify-start'>
                            <img src={specialists} alt='specialists' className='w-[60px] md:w-auto' />
                        </div>
                        <h2 className='mt-[29px] text-[20px] md:text-[25px] font-bold text-[#081B02] mb-[25px]'>
                            {t("Yetuk mutaxasislarimiz")}
                        </h2>
                        <p className='text-[14px] md:text-[16px] font-light text-[#678372]'>
                            {t("BIZNING HODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI: HISOB-KITOBLAR, XONANI TAYYoRLash, QAYTA ISHLASH, YAKUNIY TOZALASH, VENTILYATSIYA VA NAZORAT TEKSHIRUVI")}.
                        </p>
                    </div>

                    <div 
                        className='md:text-left md:border-0 border border-[#CCCCCC] p-4 rounded-lg' 
                        data-aos="flip-right"
                    >
                        <div className='flex justify-start'>
                            <img src={time} alt='time' className='w-[60px] md:w-auto' />
                        </div>
                        <h2 className='mt-[29px] text-[20px] md:text-[25px] font-bold text-[#081B02] mb-[25px]'>
                            {t("Tezda Xizmat Ko'rsatish")}
                        </h2>
                        <p className='text-[14px] md:text-[16px] font-light text-[#678372]'>
                            {t("SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TALANG VA BIZGA MUROJAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ")}.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
