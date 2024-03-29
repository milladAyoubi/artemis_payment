import React from 'react';
import Image from '../assets/img/why-img.png'

const Why = () => {
  return (
    <section  className='section lg:pt-[60px]'>

      <div className='container mx-auto'>

        <div className='flex flex-col items-center gap-x-8 lg:flex-row' >

          <div data-aos="fade-right" data-aos-delay="1000"data-aos-duration="1200" >
            <img src={Image} alt="" />
          </div>

          <div className='max-w-[540px]'>
            <h2 className='section-title'>Have control over your finances & invoicing</h2>
            <p className='section-subtitle'>Take control of your billing and transaction information in realtime
            with detailed charts.
            </p>
            <button className='btn px-6'>Learn More</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Why;
