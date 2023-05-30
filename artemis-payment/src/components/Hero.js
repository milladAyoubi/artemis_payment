import React from 'react';

import Image from '../assets/img/hero-img.png'

import {IoIosArrowDroprightCircle} from 'react-icons/io';




const Hero = () => {
  return (
  <section>
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        { }
        <div className="flex-1">
          <div className="bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]" data-aos="fade-down" data-aos-delay="200">
            <div className="flex items-center justify-between text-sm lg:text-base"> 
              <div className="bg-white text-darkblue rounded-full font-medium py-1 px-4">20 % Off</div>
              <div className="px-4">For New Users Who Sign Up!</div>
            </div>
          </div>
         <h1 className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6 "  data-aos="fade-right" data-aos-delay="100" >A <span className="text-gradient">Revolutionary</span> New Way To Invest In Your Future</h1>
         <p className="max-w-[440px] leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200" >Our team of experts the latest AI tools to identify the credit cards to fit your finacial needs.</p>
          <button className="btn gap-x-6 pl-6 text-sm lg:h16 lg:text-base" data-aos="fade-up" data-aos-delay="200">
            Get Started 
            <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl"/>
            </button>
        </div>
        { }
        <div className="flex-1">
          <img src={Image} alt=""  data-aos="fade-left" data-aos-delay="200"/>
        </div>
      </div>
    </div>
  </section>) ;
};

export default Hero;
