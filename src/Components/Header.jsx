import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <div>
      <header className="mx-auto">
        {/* Main Navigation */}
        <div className="bg-blue-500 p-7 px-10">
          <nav className="flex justify-between items-center" aria-label="Main Navigation">
            {/* Logo */}
            <div className="text-white">
              <h1 className="font-bold text-3xl">Developer</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"  // Hamburger icon URL
                alt="Menu Icon"
                width={25}
                height={25}
              />
            </button>

            {/* Navigation Links */}
            <ul className="hidden sm:flex gap-8 text-lg md:text-2xl z-20">
              <Link to ={'/'} className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Home</Link>
              <li className="relative cursor-pointer" onClick={toggleAboutDropdown}>
                <div className="flex items-center hover:scale-110 transition-transform hover:text-white">
                  About Us
                  <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {isAboutDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md p-2">
                    <li className="hover:bg-gray-200 p-2">Our Story</li>
                    <li className="hover:bg-gray-200 p-2">Team</li>
                    <li className="hover:bg-gray-200 p-2">Careers</li>
                    <li className='hover:bg-gray-200 p-2'>
                    <Link to={'About'} >About</Link>
                    </li>
                    
                  </ul>
                )}
              </li>
              <li className="relative cursor-pointer" onClick={toggleDropdown}>
                <div className="flex items-center hover:scale-110 transition-transform hover:text-white">
                  Author's Desk
                  <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md p-2">
                    <li className="hover:bg-gray-200 p-2">Blog</li>
                    <li className="hover:bg-gray-200 p-2">Books</li>
                    <li className="hover:bg-gray-200 p-2">Interviews</li>
                  </ul>
                )}
              </li>
              <Link to={'Contact_us'} className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Contact Us</Link>
            </ul>

            {/* Mobile Navigation */}
            <ul
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } sm:hidden absolute left-0 right-0 top-15 bg-amber-200 p-3 text-lg md:text-2xl rounded-md`}
            >
              <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Home</li>
              <li className="relative cursor-pointer" onClick={toggleAboutDropdown}>
                <div className="flex items-center hover:scale-110 transition-transform hover:text-white">
                  About Us
                  <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {isAboutDropdownOpen && (
                  <ul className="mt-2 bg-white text-black shadow-md rounded-md p-2">
                    <li className="hover:bg-gray-200 p-2">Our Story</li>
                    <li className="hover:bg-gray-200 p-2">Team</li>
                    <li className="hover:bg-gray-200 p-2">Careers</li>
                    <li className='hover:bg-gray-200 p-2'>
                    <Link to={'About'} >About</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative cursor-pointer" onClick={toggleDropdown}>
                <div className="flex items-center hover:scale-110 transition-transform hover:text-white">
                  Author's Desk
                  <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {isDropdownOpen && (
                  <ul className="mt-2 bg-white text-black shadow-md rounded-md p-2">
                    <li className="hover:bg-gray-200 p-2">Blog</li>
                    <li className="hover:bg-gray-200 p-2">Books</li>
                    <li className="hover:bg-gray-200 p-2">Interviews</li>
                  </ul>
                )}
              </li>
              <Link to={'Contact_us'} className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Contact Us</Link>

            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
