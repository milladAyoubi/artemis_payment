import React from 'react';

import { HiChartBar, HiUser,HiGlobe } from 'react-icons/hi'

import airbnbLogo from '../assets/img/airbnb-logo.png';
import binanceLogo from '../assets/img/binance-logo.png';
import coinbaseLogo from '../assets/img/coinbase-logo.png';
import dropboxLogo from '../assets/img/dropbox-logo.png';


const Stats = () => {
  return (
    <section className='pt-24' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1200" >
      <div className='container mx-auto'>

        <div className='flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between'>
          
            <div className='flex items-center gap-x-6'>
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiChartBar className='gradient'/>
              </div>

              <div>
                <div className='text-lg font-bold lg:text-[30px] lg:mb-2 '>$242B</div>
                <div className='text-gray-400 text-gradient'>Digital Currency Exchanged</div>
              </div>
            </div>
       

   
            <div className='flex items-center gap-x-6'>
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiUser className='gradient'/>
              </div>

              <div>
              <div className='text-lg font-bold lg:text-[30px] lg:mb-2 '>$328M</div>
                <div className='text-gray-400 text-gradient'>Trusted Accounts Registerd</div>
              </div>
            </div>
      

      
            <div className='flex items-center gap-x-6'>
              <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
                <HiGlobe className='gradient'/>
              </div>

              <div>
              <div className='text-lg font-bold lg:text-[30px] lg:mb-2 '>190+</div>
                <div className='text-gray-400 text-gradient'>Countries Supported Today</div>
              </div>
            </div>
  
        </div>

        <div className='flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between mt-12'>
          
          <div>
            <img src={airbnbLogo} alt="" className='h-12'/>
          </div>

          <div>
            <img src={binanceLogo} alt="" className='h-9'/>
          </div>

          <div>
            <img src={coinbaseLogo} alt="" className='h-9'/>
          </div>


          <div>
            <img src={dropboxLogo} alt="" className='h-9'/>
          </div>

          

      </div>
      </div>
    </section>
    
  );
};

export default Stats;
