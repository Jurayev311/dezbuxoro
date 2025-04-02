import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import klapalar from '../../assets/klapalar.svg';
import tarakan from '../../assets/tarakan.svg';
import burgalar from '../../assets/BURGALAR.svg';
import chayon from '../../assets/CHAYON.svg';
import kemiruvchi from '../../assets/KEMERUVCHILAR.svg';
import { useTranslation } from "react-i18next";

const services = [
    {
        title: "KLAPALAR",
        description:
            "Ular to‘shakda, yumshoq mebellar, taxtaposhsha ichida yashaydi. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi.",
        image: klapalar,
    },
    {
        title: "TARAKANLAR",
        description:
            "Ular po'tapoqemin olib yuradilar. Ular yashash joyida, taomlar orasida, hammomda yashaydi.",
        image: tarakan,
    },
    {
        title: "CHAYON",
        description:
            "Hasharotlar va araxnidlar bilan oziqlanadigan tishlari yashirolgan jonzotlar.",
        image: chayon,
    },
    {
        title: "KEMERVUCHILAR",
        description:
            "Eng keng tarqalgan kalamushlar va sichqonlar. Ular devor va ship orasidagi teshiklarda yashaydi.",
        image: kemiruvchi,
    },
    {
        title: "BURGALAR",
        description:
            "Ular uy xonalariga kirib, uy hayvonlarini tishlaydi va odamlarning qonini so'rib yashaydi.",
        image: burgalar,
    },
];

const Affair = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="overflow-hidden mt-[80px] md:mt-[120px] lg:mt-[159px] px-4 sm:px-6">
            <div className="container mx-auto">
                <h2
                    className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold text-gray-800 mb-[30px] sm:mb-[43px] text-center md:text-left"
                    data-aos="fade-up"
                >
                    {t("Xizmat turi")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#C4F7CB] p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                            data-aos="zoom-in"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                {t(service.title)}
                            </h3>
                            <p className="text-gray-600 mt-3 sm:mt-4 min-h-[60px] sm:min-h-[80px] text-sm sm:text-base">
                                {t(service.description)}
                            </p>
                            <div className="flex flex-row gap-6 sm:flex-row items-center sm:items-end sm:justify-between sm:gap-[30px] lg:gap-[65px] mt-4">
                                <button className='hover:opacity-65 rounded-[25px] w-full sm:w-[150px] lg:w-[190px] h-[40px] sm:h-[45px] lg:h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer text-sm sm:text-base mt-4 sm:mt-0'>
                                    <a href="#support">{t("Bog'lanish")}</a>
                                </button>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Affair;
