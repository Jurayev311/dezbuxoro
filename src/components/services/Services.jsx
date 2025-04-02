import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section id='services' className='overflow-hidden mt-[80px] md:mt-[143px] px-4 sm:px-6'>
            <div className='container mx-auto'>
                <div data-aos='fade-up'>
                    <h2 className='text-[32px] sm:text-[42px] md:text-[52px] font-bold text-[#023106]'>{t("Xizmatlar")}</h2>
                    <p className='text-[16px] sm:text-[18px] font-normal text-[#666666] mt-3 sm:mt-4 mb-[30px] sm:mb-[40px]'>
                        {t("Biz sizga samarali va sifatli xizmat taqdim etamiz")}.
                    </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className='border border-[#0231025D] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 sm:p-6 rounded-lg shadow-md bg-white'
                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        >
                            <div className='w-full md:w-[30%] flex justify-center md:justify-evenly'>
                                <img
                                    src={service.image}
                                    alt='service'
                                    className='max-w-full h-auto rounded-lg max-h-[200px] md:max-h-none'
                                />
                            </div>

                            <div className='w-full md:w-[70%] mt-4 md:mt-0'>
                                <h2 className='text-[20px] sm:text-[24px] font-bold mb-2 sm:mb-4 text-[#033102]'>{t(service.title)}</h2>
                                <p className='text-[14px] sm:text-[16px] text-[#666666]'>{t(service.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
