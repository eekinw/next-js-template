'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import headerLogo from '../public/favicon.png';
import hamburger from '../public/hamburger.svg';
import RightMenuNavbar from './RightMenuNavbar';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (!isNavbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  return (
    <div className="flex justify-between">
      <div className=" cursor-pointer">
        <Image src={headerLogo} width={50} alt="Picture of the author" />
      </div>
      <div className="sm:block md:hidden cursor-pointer">
        <Image src={hamburger} width={50} height={30} alt="Hamburger menu" onClick={toggleNavbar} />
      </div>
      <div className="hidden md:flex space-x-4">
        <ul className="flex text-white">
          <Link href="#about" className="p-2 cursor-pointer hover:text-gold transition transform">
            <span className="text-gold">01. </span>About
          </Link>
          <Link
            href="#experience"
            className="p-2 cursor-pointer hover:text-gold transition transform"
          >
            <span className="text-gold">02. </span> Experience
          </Link>
          <Link
            href="#projects"
            className="p-2 cursor-pointer hover:text-gold transition transform"
          >
            <span className="text-gold">03. </span> Side Projects
          </Link>
          <Link href="#contact" className="p-2 cursor-pointer hover:text-gold transition transform">
            <span className="text-gold">04. </span> Contact
          </Link>
        </ul>
      </div>
      {isNavbarOpen && <RightMenuNavbar onClose={toggleNavbar} />}
    </div>
  );
};

export default Header;
