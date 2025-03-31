import React from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {

  const { t, i18n } = useTranslation();

  const faqItems = [
    {
      questionKey: "faq_question_1",
      answerKey: "faq_answer_1"
    },
    {
      questionKey: "faq_question_2",
      answerKey: "faq_answer_2"
    },
    {
      questionKey: "faq_question_3",
      answerKey: "faq_answer_3"
    }
  ];

  return (
    <section id='faq' className="mt-[136px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">{t("faq_title")}</h2>
        
        <div className="mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b-1 border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 bg-white cursor-pointer list-none">
                  <span className="text-gray-700 text-[30px] font-normal">
                    {t(item.questionKey)} 
                  </span>
                  <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-600">
                    {t(item.answerKey)}
                  </p>
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
