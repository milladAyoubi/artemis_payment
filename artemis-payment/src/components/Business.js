import React from 'react';

import starIcon from '../assets/img/star-icon.svg'

const Calculate = () => {
  return (
  
  <section className='mt-24'>
    <div className='container mx-auto'>
    <div className='flex flex-col items-center gap-x-10 lg:flex-row' >
     <div className='max-w-[500px]'>
            <h2 className='section-title'>Why you should choose Artemis Payment?</h2>
            <p className='section-subtitle'>Experience the next generation cryptocurrency platform. 
            No financial borders, extra fees, and fake reviews.
            </p>
            <button className='btn px-6'>Learn More</button>
      </div>


    <div>

      <div className='flex gap-4 py-6 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-white/10'>
          <img src={starIcon} alt="" />
        </div>

        <div className=''>
          <h3>Stock Rewards</h3>
          <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>


      <div className='flex gap-4 py-6 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-white/10'>
          <img src={starIcon} alt="" />
        </div>

        <div >
          <h3>Stock Rewards</h3>
          <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>


      <div className='flex gap-4 py-6 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-white/10'>
          <img src={starIcon} alt="" />
        </div>

        <div >
          <h3>Stock Rewards</h3>
          <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>


     


     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default Calculate;
