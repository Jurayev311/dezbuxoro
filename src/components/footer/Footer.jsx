import React from 'react'
import logo from '../../assets/logo.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import arrow from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <footer className='mb-20 md:mb-[100px] lg:mb-[166px] px-4 sm:px-6'>
            <div className='container mx-auto'>
                <hr className='border-gray-200' />
                <div className='flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-[140px] mt-8 md:mt-12 lg:mt-[72px]'>
                    <div className='flex justify-center md:justify-start'>
                        <img 
                            src={logo} 
                            alt="logo" 
                            className='w-[120px] sm:w-[150px] md:w-auto h-auto' 
                        />
                    </div>
    
                    <div className='space-y-3 sm:space-y-4'>
                        <div className='flex items-center gap-3 sm:gap-4 md:gap-[20px] cursor-pointer hover:text-green-600 transition-colors'>
                            <img 
                                src={location} 
                                alt="location" 
                                className='w-5 h-5 sm:w-6 sm:h-6' 
                            />
                            <h2 className='text-sm sm:text-base md:text-lg'>{t("O'zbekiston, Buxoro shaxri")}</h2>
                            <img 
                                src={arrow} 
                                alt="arrow icon" 
                                className='w-4 h-4 sm:w-5 sm:h-5 ml-auto md:ml-0' 
                            />
                        </div>
                        <div className='flex items-center gap-3 sm:gap-4 md:gap-[20px] cursor-pointer hover:text-green-600 transition-colors'>
                            <img 
                                src={phone} 
                                alt="phone icon" 
                                className='w-5 h-5 sm:w-6 sm:h-6' 
                            />
                            <h2 className='text-sm sm:text-base md:text-lg'>+998 94 033 72 12</h2>
                            <img 
                                src={arrow} 
                                alt="arrow icon" 
                                className='w-4 h-4 sm:w-5 sm:h-5 ml-auto md:ml-0' 
                            />   
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer