import React, { useState } from 'react';

import {useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import NavMobile from './components/NavMobile';
import Business from './components/Business';
import Trade from './components/Trade';
import Stats from './components/Stats';


const App = () => {

  const [navMobile, setNavMobile] = useState(false);
  // eslint-disable-next-line no-undef
  useEffect(()=> {
    Aos.init({
      duration: 2500, 
      delay: 400,
    })
  })

  return (
  
  <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile}/>

      <Hero />
  
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <Stats/>
      <Business/>
      <Why/>

      <Trade/>

  </div>
  
  
  );
};

export default App;
