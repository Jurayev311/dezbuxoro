import React from 'react'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import { useTranslation } from 'react-i18next';

const Header = () => {

  const { t, i18n } = useTranslation();

  const language = localStorage.getItem('i18nextLng')

  const handleChange = (e) => {
    const selectedLanguage = e.target.value
    i18n.changeLanguage(selectedLanguage)
  }

  return (
    <header className='shadow-md fixed top-0 left-0 w-full z-[100] bg-white'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between h-[116px]'>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className='flex items-center gap-[29px] text-[#00000098] text-xl'>
            <li className='hidden lg:block'><a href="#main"><span>{t("Asosiy")}</span></a></li>
            <li className='hidden lg:block'><a href="#about"><span>{t('Biz xaqimizda')}</span></a></li>
            <li className='hidden lg:block'><a href="#services"><span>{t("Xizmatlar")}</span></a></li>
            <li className='hidden lg:block'><a href="#faq"><span>{t("FAQ")}</span></a></li>

            <div className='flex items-center gap-[15px] text-xl cursor-pointer'>
            <select onChange={handleChange} className='border-2 rounded-[10px] w-[119px] h-[38px]' name="Lng" value={language}>
              <option value="uz">Uzbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>

            <button className='hover:opacity-65 hidden lg:block rounded-[25px] w-[190px] h-[49px] bg-gradient-to-t from-[#5F8054] to-[#128F10] text-white font-bold cursor-pointer'>{t("Bog'lanish")}</button>
            <button className='block lg:hidden'><img src={menu} alt="menu" /></button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header