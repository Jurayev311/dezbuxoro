import React from 'react';
import servicesImage from '../../assets/services.svg';
import servicesImage2 from '../../assets/services2.svg';
import servicesImage3 from '../../assets/services3.svg';
import { useTranslation } from 'react-i18next';

const servicesData = [
    {
        title: "Dezinfeksiya - zararli mikro organizmlarni yo'q qilish",
        description: "Dezinfeksiya tavsifi",
        image: servicesImage,
    },
    {
        title: "Fumigatsiya - zararkunandalarga qarshi kurash",
        description: "Fumigatsiya tavsifi",
        image: servicesImage2,
    },
    {
        title: "Dezinfeksiya - zararli mikro organizmlarni yo'q qilish",
        description: "Dezinfeksiya tavsifi 2",
        image: servicesImage3,
    },
];

const Services = () => {
    const { t } = useTranslation();

    return (
        <section id='services' className='mt-[143px]'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-[52px] font-bold text-[#023106]'>{t("Xizmatlar")}</h2>
                    <p className='text-[18px] font-normal text-[#666666] mt-4 mb-[40px]'>
                        {t("Biz sizga samarali va sifatli xizmat taqdim etamiz")}.
                    </p>
                </div>

                <div className="space-y-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className='border border-[#0231025D] flex items-center justify-between gap-8 p-6 rounded-lg shadow-md bg-white'>
                            <div className='w-[30%] flex justify-evenly'>
                                <img src={service.image} alt='service' className='max-w-full h-auto rounded-lg' />
                            </div>

                            <div className='w-[70%]'>
                                <h2 className='text-[24px] font-bold mb-4 text-[#033102]'>{t(service.title)}</h2>
                                <p className='text-[16px] text-[#666666]'>{t(service.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
