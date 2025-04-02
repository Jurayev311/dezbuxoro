import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const language = localStorage.getItem('i18nextLng');

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='shadow-md fixed top-0 left-0 w-full z-[100] bg-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        <nav className='flex items-center justify-between h-[70px] md:h-[90px] lg:h-[116px]'>
          <div>
            <img 
              src={logo} 
              alt="logo" 
              className='h-14 md:h-10 lg:h-auto' 
            />
          </div>
          

          <div className='flex items-center gap-4 sm:gap-[15px]'>
          <ul className='hidden lg:flex items-center gap-[29px] text-[#00000098] text-lg xl:text-xl'>
            <li><a href="#main" className='hover:text-[#128F10] transition-colors'>{t("Asosiy")}</a></li>
            <li><a href="#about" className='hover:text-[#128F10] transition-colors'>{t('Biz xaqimizda')}</a></li>
            <li><a href="#services" className='hover:text-[#128F10] transition-colors'>{t("Xizmatlar")}</a></li>
            <li><a href="#faq" className='hover:text-[#128F10] transition-colors'>{t("FAQ")}</a></li>
          </ul>
            <select 
              onChange={handleChange} 
              className='border-2 rounded-[10px] w-[100px] sm:w-[119px] h-[34px] sm:h-[38px] text-sm sm:text-base'
              name="Lng" 
              value={language}
            >
              <option value="uz">Uzbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>

            <button className='hidden lg:block hover:opacity-80 rounded-[25px] w-[160px] xl:w-[190px] h-[45px] xl:h-[49px] bg-gradient-to-t from-[#5F8054] to-[#128F10] text-white font-bold cursor-pointer transition-opacity'>
              {t("Bog'lanish")}
            </button>
            
            <button 
              className='lg:hidden p-1 focus:outline-none'
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <img 
                src={isMobileMenuOpen ? close : menu} 
                alt="menu" 
                className='w-6 h-6' 
              />
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className='lg:hidden bg-white py-4 px-6 shadow-lg'>
            <ul className='flex flex-col gap-4 text-[#00000098] text-lg'>
              <li>
                <a 
                  href="#main" 
                  className='block py-2 hover:text-[#128F10] transition-colors'
                  onClick={toggleMobileMenu}
                >
                  {t("Asosiy")}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className='block py-2 hover:text-[#128F10] transition-colors'
                  onClick={toggleMobileMenu}
                >
                  {t('Biz xaqimizda')}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className='block py-2 hover:text-[#128F10] transition-colors'
                  onClick={toggleMobileMenu}
                >
                  {t("Xizmatlar")}
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className='block py-2 hover:text-[#128F10] transition-colors'
                  onClick={toggleMobileMenu}
                >
                  {t("FAQ")}
                </a>
              </li>
              <li className='mt-4'>
                <button className='w-full hover:opacity-80 rounded-[25px] h-[45px] bg-gradient-to-t from-[#5F8054] to-[#128F10] text-white font-bold cursor-pointer transition-opacity'>
                  {t("Bog'lanish")}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;