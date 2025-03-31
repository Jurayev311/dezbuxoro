import React from 'react';

const Faq = () => {
  const faqItems = [
    {
      question: "Zararkunandalarni yo'q qilish qanday amalga oshiriladi?",
      answer: "Maxsus devor-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiradi va qo'g'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliklarga, ko'zga ko'rinmas hasharotlar uchun potentsial 'yashirish joylari' ga kiradi."
    },
    {
      question: "Siz foydalanilgan dorilar xavfillimi?",
      answer: "Dorilar odamlar, uyvonlari va o'simliklar uchun xavfli emas. Ammo davolishdan keyingi xonani 40 daqiqada ventilyatsiya qilish kerak."
    },
    {
      question: "Menga uyimni davolashga tayyorlashning qandaydir usuli kerakmi?",
      answer: "Asosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsion qilishingiz kerak. Davolash vaqtida uyvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani ko'rishga xojat yo'q."
    }
  ];

  return (
    <section id='faq' className="mt-[136px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">FAQ</h2>
        
        <div className="mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b-1 border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 bg-white cursor-pointer list-none">
                  <span className="text-gray-700 text-[30px] font-normal">{item.question}</span>
                  <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;