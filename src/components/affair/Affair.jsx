import React from "react";
import klapalar from '../../assets/klapalar.svg'
import tarakan from '../../assets/tarakan.svg'
import burgalar from '../../assets/BURGALAR.svg'
import chayon from '../../assets/CHAYON.svg'
import kemiruvchi from '../../assets/KEMERUVCHILAR.svg'


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
    return (
        <section className="mt-[159px]">
            <div className="container mx-auto px-6">
                <h2 className="text-[52px] font-bold text-gray-800 mb-[43px]">Xizmat turi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#C4F7CB] p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mt-[16px] min-h-[80px]">{service.description}</p>
                            <div className="flex flex-row-reverse gap-[65px]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[150px] h-[150px] rounded-full mx-auto mb-4"
                                />
                                <button className='mt-[95px] hover:opacity-65 rounded-[25px] w-[190px] h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer'>
                                    Bog'lanish
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Affair;
