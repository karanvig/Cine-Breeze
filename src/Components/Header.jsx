/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-[#FFFFFF] z-50 p-1 flex justify-center"> {/* Fixed position and other styles */}
      <img src={Logo} alt="Not found" className="h-32 w-28" />
    </div>
  );
}

export default Header;
