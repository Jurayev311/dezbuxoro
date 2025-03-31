import React from 'react';
import supportImage from '../../assets/support.png';

const Support = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="bg-gradient-to-tr from-[#1A7C15] to-[#A1CE7D] flex items-center justify-center rounded-2xl mt-[150px] gap-[200px]">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
            <form action="">
              <h2 className="text-3xl font-bold text-gray-800">Ma'lumotingizni qoldiring</h2>

              <div className='mt-4'>
                <input
                  type="text"
                  id="name"
                  placeholder="Ismingiz"
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
                  pattern="^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$"
                  required
                  className="w-full px-4 py-3 bg-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button className='w-full rounded-[5px] h-[49px] bg-gradient-to-t from-[#1A7C15] to-[#A1CE7D] text-white font-bold cursor-pointer'>
            Bog'lanish
          </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img src={supportImage} alt="support image" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
