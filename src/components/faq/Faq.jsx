import React from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();

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
    <section id='faq' className="mt-20 md:mt-28 lg:mt-[136px] px-5 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center md:text-left">
          {t("faq_title")}
        </h2>
        
        <div className="mx-auto w-full space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 rounded-lg overflow-hidden transition-all hover:bg-gray-50/50"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer list-none">
                  <span className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-medium pr-4">
                    {t(item.questionKey)}
                  </span>
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-2">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
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