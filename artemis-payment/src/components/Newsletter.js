import React from 'react';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
  <section>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row items-center
     justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1200">  
      <div className='flex-1 w-full'>
      <h3 className='h3 mb-4'>Join Us Today</h3>
      <p className='max-w-[348px] mb-8'>
       With Artemis you are investing in the best possbile financial future. 
       </p>
  </div>
  <NewsletterForm/>
    </div>
  </div>
</section>

);
};

export default Newsletter;
