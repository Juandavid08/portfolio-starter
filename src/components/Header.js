import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-[#1C1F26]/60 z-50 shadow-md'>
      <div className='container mx-auto py-4'>
        <div className='logo flex justify-between items-center'>
          <h1 className='text-white'>JR<b className='punto'>.</b></h1>
          <button className='btn btn-sm'>
            <Link 
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true} 
            >
              Contactame
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
