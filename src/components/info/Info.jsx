import React from 'react'
import info from '../../assets/info.png'
import safe from '../../assets/safe.svg'


const Info = () => {
  return (
    <section className='mt-[116px]'>
        <div className='container mx-auto'>
            <div className='bg-gradient-to-tr from-[#1A7C15] to-[#A1CE7D] flex items-center justify-center gap-[73px] p-[30px] rounded-2xl'>
                <div className='w-full'>
                    <img src={info} alt="info" />
                </div>

                <div className='w-full'>
                    <div className='mb-4'>
                        <img src={safe} alt="safe image" />
                    </div>
                    <h2 className='text-[32px] font-bold text-[#FAFAFA] mb-[42px]'>Rasmiy foydalanish - 1 yil. Biz xizmat va yuridik shaxslarga xizmat kursatamiz. Xizmatlar litsenziyalangan!!!</h2>
                    <button className='py-3 px-[30px] bg-[#FAFAFA] text-[20px] font-bold text-black rounded-[25px]'>Bog'lanish</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info