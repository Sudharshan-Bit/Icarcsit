import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot,faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header className="mx-auto ">
      {/* Info Bar */}
      {/* <div className=" p-3">
        <ul className="flex justify-between">


          <li className="hover:cursor-pointer text-lg md:text-3xl"><FontAwesomeIcon icon={faLocationDot} flip style={{color: "#ed3535",}} className="text-red-500"/> Vellore</li>
          <li className="hover:cursor-pointer text-lg md:text-3xl"><FontAwesomeIcon icon={faPhone} style={{color: "#FFD43B",}}/> 123456789</li>
          <li className="hover:cursor-pointer text-lg md:text-3xl"><FontAwesomeIcon icon={faEnvelope} style={{color: "#63E6BE",}}/> Bit@gmail.com</li>
        </ul>
      </div> */}

      {/* Main Navigation */}
      <div className="bg-blue-400 p-7 px-10">
        <nav className="flex justify-between items-center" aria-label="Main Navigation">
          {/* Logo */}
          <div>
            <h1 className="font-bold md:text-3xl">Developer</h1>
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
              width={15}
              height={15}
            />
          </button>

          {/* Navigation Links */}
          <ul className={`hidden sm:flex gap-8 text-lg md:text-2xl`}>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Home</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">About Us</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Author's Desk</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Contact Us</li>
          </ul>

          {/* Mobile Navigation */}
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:hidden absolute left-0 right-0 top-15 bg-amber-200 p-3 text-lg md:text-2xl rounded-md`}
          >
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Home</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">About Us</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Author's Desk</li>
            <li className="hover:scale-110 transition-transform cursor-pointer hover:text-white">Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
}

