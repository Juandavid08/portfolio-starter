import React from 'react';

import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='logo flex justify-between items-center'>
          <h1>JR<b className='punto'>.</b></h1>
          {/* <a  href='#'>
            <img src={Logo} alt='' />
          </a> */}
          <button className='btn btn-sm'>Contactame</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
