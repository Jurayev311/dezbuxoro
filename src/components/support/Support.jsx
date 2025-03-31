import React, { useState } from 'react';
import supportImage from '../../assets/support.png';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Support = () => {

  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false)

  const SendMessage = (e) => {
    setLoading(true)

    e.preventDefault()
    const token = '7723739609:AAGuNd7ZTYiNc0iH2Mxt0wUBp19CEFg8jbk'
    const chat_id = 5432334027
    const url = `https://api.telegram.org/bot${token}/SendMessage`

    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const message = `foydalanuvchi ismi: ${name}, \nTelefon raqami: ${phone}`

    axios({
      url: url,
      method: 'POST',
      data: {
        'chat_id': chat_id,
        'text': message,
      }
    }).then((res) => {
      document.getElementById('contact-form').reset()
      console.log(res)
    })
      .catch((error) => { console.log(error) })
      .finally(() => { setLoading(false) })
  }

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="bg-gradient-to-tr from-[#1A7C15] to-[#A1CE7D] flex items-center justify-center rounded-2xl mt-[150px] gap-[200px]">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
            <form onSubmit={SendMessage} id='contact-form' action="">
              <h2 className="text-3xl font-bold text-gray-800">{t("Ma'lumotingizni qoldiring")}</h2>

              <div className='mt-4'>
                <input
                  type="text"
                  id="name"
                  placeholder={t("Ismingiz")}
                  required
                  className="w-full px-4 py-3 bg-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className='mt-4 mb-5'>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+998-94-033-72-12"
                  required
                  className="w-full px-4 py-3 bg-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button loading={loading} type='submit' className='w-full rounded-[5px] h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer'>
                {loading ? t('Yuborilmoqda...') : t("Bog'lanish")}
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <img src={supportImage} alt="support image" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
