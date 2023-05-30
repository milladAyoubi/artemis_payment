import React from 'react';
import Image from '../assets/img/why-img.png'

const Why = () => {
  return (
    <section>

      <div className='container mx-auto'>

        <div className='flex'>

          <div>
            <img src={Image} alt="" />
          </div>

          <div>
            <h2 className='section-title'>Why you should choose Artemis?</h2>
            <p className='section-subtitle'>Experience the next generaton 
              cryptocurrencyt platform. No finanacial borders
            </p>
            <button className='btn'>Learn More</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Why;
