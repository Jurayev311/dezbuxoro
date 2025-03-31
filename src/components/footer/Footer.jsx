import React from 'react'
import logo from '../../assets/logo.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import arrow from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t, i18n } = useTranslation();

  return (
    <footer className='mb-[166px]'>
        <div className='container mx-auto'>
            <hr />
            <div className='flex gap-[140px] mt-[72px]'>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div>
                <div className='flex items-center gap-[20px] cursor-pointer'>
                    <img src={location} alt="location" />
                    <h2>{t("O'zbekiston, Buxoro shaxri")}</h2>
                    <img src={arrow} alt="arrow image" />
                </div>
                <div className='flex items-center gap-[20px] mt-2 cursor-pointer'>
                    <img src={phone} alt="location" />
                    <h2>+998 94 033 72 12</h2>
                    <img src={arrow} alt="arrow image" />   
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer