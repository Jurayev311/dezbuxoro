import React from 'react'
import service from '../../assets/service.svg'
import specialists from '../../assets/specialists.svg'
import time from '../../assets/time.svg'

const About = () => {
    return (
        <section id='about' className='mt-[119px]'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-2xl font-bold text-[#023107] mb-[41px]'>Biz xaqimizda</h2>
                    <div className='border border-[#CCCCCC]'></div>
                </div>

                <div className='flex items-center justify-center gap-[63px] mt-[49px]'>
                    <div>
                        <div>
                            <img src={service} alt='service' />
                        </div>
                        <h2 className='mt-[29px] text-[25px] font-bold text-[#081B02] mb-[25px]'>Tezda Xizmat Ko'rsatish</h2>
                        <p className='text-[16px] font-light text-[#678372]'>ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSILINCH BO'lsa, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BO'LIB KOLADI.</p>
                    </div>
                    <div>
                        <div>
                            <img src={specialists} alt='specialists' />
                        </div>
                        <h2 className='mt-[29px] text-[25px] font-bold text-[#081B02] mb-[25px]'>Yetuk mutaxasislarimiz</h2>
                        <p className='text-[16px] font-light text-[#678372]'>BIZNING HODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI: HISOB-KITOBLAR, XONANI TAYYoRLash, QAYTA ISHLASH, YAKUNIY TOZALASH, VENTILYATSIYA VA NAZORAT TEKSHIRUVI.</p>
                    </div>
                    <div>
                        <div>
                            <img src={time} alt='time' />
                        </div>
                        <h2 className='mt-[29px] text-[25px] font-bold text-[#081B02] mb-[25px]'>Tezda Xizmat Ko'rsatish</h2>
                        <p className='text-[16px] font-light text-[#678372]'>SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TALANG VA BIZGA MUROJAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About