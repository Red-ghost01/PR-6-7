import React, { useState } from 'react';
import { Link } from 'react-scroll';

const tabs = [
  { name: 'Home', to: 'home' },
  { name: 'About Us', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Our Team', to: 'team' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 w-full flex items-end justify-between bg-[#0A0D13] opacity-80 py-2 
     md:h-[89px] text-white">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <a href="#" className="text-lg font-bold">CISC</a>
        <div className="md:hidden">
          {/* Hamburger icon */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-4  ${isOpen ? "absolute w-full top-12 left-0 bg-[#0A0D13] md:static md:bg-transparent" : "hidden"} bg-[#0A0D13] md:bg-transparent`}>
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link 
                to={tab.to} 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70}  
                className="link block px-4 py-2 xl:text-[18px] text-white hover:text-[#F49F0A] md:inline"
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;