import React from 'react'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'

const Header = () => {
  return (
    <header className='shadow-md fixed top-0 left-0 w-full z-[100] bg-white'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between h-[116px]'>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className='flex items-center gap-[29px] text-[#00000098] text-xl'>
            <li className='hidden lg:block'><a href="#hero"><span>Asosiy</span></a></li>
            <li className='hidden lg:block'><a href="#about"><span>Biz xaqimizda</span></a></li>
            <li className='hidden lg:block'><a href="#services"><span>Xizmatlar</span></a></li>
            <li className='hidden lg:block'><a href="#faq"><span>FAQ</span></a></li>

            <div className='flex items-center gap-[15px] text-xl cursor-pointer'>
            <select className='border-2 rounded-[10px] w-[119px] h-[38px]' name="" id="">
              <option value="">Uzbek</option>
              <option value="">Русский</option>
              <option value="">English</option>
            </select>

            <button className='hover:opacity-65 hidden lg:block rounded-[25px] w-[190px] h-[49px] bg-gradient-to-t from-[#5F8054] to-[#128F10] text-white font-bold cursor-pointer'>Bog'lanish</button>
            <button className='block lg:hidden'><img src={menu} alt="menu" /></button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header