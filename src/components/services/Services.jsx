import React from 'react';
import servicesImage from '../../assets/services.svg';
import servicesImage2 from '../../assets/services2.svg';
import servicesImage3 from '../../assets/services3.svg';

const servicesData = [
    {
        title: "Dezinfeksiya - zararli mikro organizmlarni yo'q qilish",
        description:
            "Har qanday dezinfektsiyaning asosiy vazifalari infektsiyalar va kasalliklarga olib kelishi mumkin bo'lgan xavfli mikroorganizmlarni yo'q qilishdir. Dezinfeksiya choralari bu yerni mogor, virus, chiriyotgan va mikroblardan tozalaydi.",
        image: servicesImage,
    },
    {
        title: "Fumigatsiya - zararkunandalarga qarshi kurash",
        description:
            "Fumigatsiya – bu maxsus kimyoviy vositalar yordamida zararkunandalarni yo‘q qilish usuli. U oziq-ovqat omborlari, sanoat binolari va boshqa joylarda qo‘llaniladi.",
        image: servicesImage2,
    },
    {
        title: "Dezinfeksiya - zararli mikro organizmlarni yo'q qilish",
        description:
            "Dezinfeksiya choralari orqali yerni mogor, virus, chiriyotgan va mikroblardan tozalash mumkin. Sog‘lom muhit yaratish uchun bu juda muhim jarayondir.",
        image: servicesImage3,
    },
];

const Services = () => {
    return (
        <section id='services' className='mt-[143px]'>
            <div className='container mx-auto'>
                <div>
                    <h2 className='text-[52px] font-bold text-[#023106]'>Xizmatlar</h2>
                    <p className='text-[18px] font-normal text-[#666666] mt-4 mb-[40px]'>
                        Biz sizga samarali va sifatli xizmat taqdim etamiz.
                    </p>
                </div>

                <div className="space-y-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className='border border-[#0231025D] flex items-center justify-between gap-8 p-6 rounded-lg shadow-md bg-white'>
                            <div className='w-[30%] flex justify-evenly'>
                                <img src={service.image} alt='service' className='max-w-full h-auto rounded-lg' />
                            </div>

                            <div className='w-[70%]'>
                                <h2 className='text-[24px] font-bold mb-4 text-[#033102]'>{service.title}</h2>
                                <p className='text-[16px] text-[#666666]'>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
