import React from 'react';
import { reviews } from '../data';

import quoteImg from '../assets/img/quote-img.png'

import {IoIosArrowForward} from 'react-icons/io'

const Trade = () => {
  return (
  
  <section className='section lg:pt-[60px]'>
  
    <div className='container mx-auto'>
      <h2 className='section-title text-center mb-16'>What people are saying about us</h2>
      <div className='flex flex-col gap-[45px] lg:flex-row' data-aos="fade-up" data-aos-delay="900"data-aos-duration="1200">
        {reviews.map((item, index)=> {

          const {image, name, position, description} = item;
          return (
          
          <div className='w-full rounded full py-12 px-6 shadow-primary cursor-pointer transition duration 300' key={index} >
            
          <div className='flex flex-col justify-center'>
           <div>
            <img src={quoteImg} alt="" />
           </div>
            <div className='my-12 h-[70px]'>
              
              <div>{description}</div>
            </div>

            <div className='flex flex-row gap-4'>
              <div>
                 <img src={image} alt="" />  
              </div>
              <div>
                <div>{name}</div>
                <div className='text-white/60'>{position}</div>
              </div>
            </div>

          </div>
        
          </div>
          
          );
        })}

      </div>

    </div>

  </section>
  );
};

export default Trade;
