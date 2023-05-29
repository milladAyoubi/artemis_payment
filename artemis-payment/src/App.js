import React from 'react';

import {useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import Hero from './components/Hero';
const App = () => {


  // eslint-disable-next-line no-undef
  useEffect(()=> {
    Aos.init({
      duration: 2500, 
      delay: 400,
    })
  })

  return (
  
  <div className="overflow-hidden">
      <Hero />
  </div>
  
  
  );
};

export default App;
