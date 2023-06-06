import React from 'react';



import crypto from '../assets/img/crypto.png'

const Crypto = () => {
  return (
  
  <section  className='section lg:pt-[160px]'>
    <div className='container mx-auto'>
    <div className='flex flex-col items-center gap-x-10 lg:flex-row' >
     <div className='lg:max-w-[700px]'>
            <h2 className='section-title'>Artemis Can Help You Get Started In Crypto Investing</h2>
            <p className='section-subtitle'>Trade crypto securely and invest in the high growth cryptocurrencies for Fintech portfolios. 
            </p>
            <button className='btn px-6'>Learn More</button>
      </div>


    <div  data-aos="fade-left" data-aos-delay="1000"data-aos-duration="1200">

      <img src={crypto} alt="" className='lg:min-w-[610px] lg:relative '/>

     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default Crypto;
