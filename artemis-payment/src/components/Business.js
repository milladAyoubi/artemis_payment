import React from 'react';

import starIcon from '../assets/img/star-icon.svg'
import shieldIcon from '../assets/img/shield-icon.svg'
import sendIcon from '../assets/img/send-icon.svg'

const Calculate = () => {
  return (
  
  <section  className='section lg:pt-[160px]' id="features">
    <div className='container mx-auto'>
    <div className='flex flex-col items-center gap-x-10 lg:flex-row' >
     <div className='max-w-[500px]'>
            <h2 className='section-title'>Why you should choose Artemis Payment?</h2>
            <p className='section-subtitle'>Experience the next generation payment platform. 
            No financial borders, extra fees, and subpar benifets.
            </p>
            <button className='btn px-6'>Learn More</button>
      </div>


    <div className='mt-12 lg:mt-0' data-aos="fade-left" data-aos-delay="1000"data-aos-duration="1200">

      <div className='flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10'>
          <img src={starIcon} alt="" />
        </div>

        <div className=''>
          <h3 className='text-xl mb-1 font-semibold'>Stock Rewards</h3>
          <p className='text-white/60'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>


      <div className='flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10'>
          <img src={shieldIcon} alt="" />
        </div>

        <div>
          <h3 className='text-xl mb-1 font-semibold'>Military Grade Encryption </h3>
          <p className='text-white/60'>We take proactive steps make sure your information and transactions are secure.</p>
        </div>
      </div>


      <div className='flex gap-6 py-5 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-blue/10'>
          <img src={sendIcon} alt="" />
        </div>

        <div >
          <h3 className='text-xl mb-1 font-semibold'>Universal E-Transfer</h3>
          <p className='text-white/60'>A balance transfer credit card can save you a lot of money in interest charges.</p>
        </div>
      </div>


     


     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default Calculate;
