import React from 'react';
import {Link} from 'react-scroll'
import { navData } from '../data';

const Nav = () => {
  return (
    <nav className='flex items-center'>
        <ul className='flex gap-x-8'>
          {navData.map((item, index) => {
            return  (
            <li className='border-b-2 border-transparent hover:border-blue-400 transition-all duration-300'key={index}>
               <Link className='cursor-pointer' to={item.href} spy={true} smooth={true} offset={50} duration={1500}>{item.name}</Link>
            </li>

              );
          })}
        </ul>

    </nav>
  
    );
};

export default Nav;
