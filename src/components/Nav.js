import React, { useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-white/50'>
          {[
            { id: 'home', icon: <BiHomeAlt /> },
            { id: 'about', icon: <BiUser /> },
            { id: 'services', icon: <BsClipboardData /> },
            { id: 'work', icon: <BsBriefcase /> },
            { id: 'contact', icon: <BsChatSquareText /> },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive(item.id)}
              onClick={() => handleSetActive(item.id)}
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-all duration-300 ${
                activeLink === item.id ? 'text-white scale-125' : ''
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
