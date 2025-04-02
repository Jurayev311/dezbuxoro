import React, { useState, useEffect } from 'react';
import supportImage from '../../assets/support.png';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Support = () => {

  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false);

  const SendMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    const token = '7723739609:AAGuNd7ZTYiNc0iH2Mxt0wUBp19CEFg8jbk';
    const chat_id = 5432334027;
    const url = `https://api.telegram.org/bot${token}/SendMessage`;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = `foydalanuvchi ismi: ${name}, \nTelefon raqami: ${phone}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        'chat_id': chat_id,
        'text': message,
      }
    }).then((res) => {
      document.getElementById('contact-form').reset();
      console.log(res);
    })
      .catch((error) => { console.log(error); })
      .finally(() => { setLoading(false); })
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden py-8 md:py-10 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-tr from-[#1A7C15] to-[#A1CE7D] flex flex-col lg:flex-row items-center justify-between rounded-2xl mt-[80px] md:mt-[120px] lg:mt-[150px] gap-8 lg:gap-[50px] xl:gap-[200px] p-6 sm:p-8 lg:p-10"
          data-aos="fade-up">

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full lg:w-[400px] order-2 lg:order-1"
            data-aos="fade-right">
            <form onSubmit={SendMessage} id='contact-form'>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {t("Ma'lumotingizni qoldiring")}
              </h2>

              <div className='mt-4'>
                <input
                  type="text"
                  id="name"
                  placeholder={t("Ismingiz")}
                  required
                  className="w-full px-4 py-2 sm:py-3 bg-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <div className='mt-4 mb-5'>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+998-94-033-72-12"
                  required
                  className="w-full px-4 py-2 sm:py-3 bg-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                />
              </div>

              <button
                type='submit'
                className={`w-full rounded-[5px] h-[45px] sm:h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer transition-opacity hover:opacity-90 ${loading ? 'opacity-80' : ''}`}
                disabled={loading}
              >
                {loading ? t('Yuborilmoqda...') : t("Bog'lanish")}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex items-center justify-center order-1 lg:order-2"
            data-aos="fade-left">
            <img
              src={supportImage}
              alt="support image"
              className="max-w-full h-auto max-h-[300px] xl:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
