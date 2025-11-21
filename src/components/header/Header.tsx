import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import HeaderBtn from "../HeaderBtn";
import './header.css'
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Main Header */}
      <div className="bg-white px-4 py-3 w-full flex justify-between items-center fixed left-0 top-0 z-20 shadow">
        
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 h-14 mt-2 w-48">
          <a href="#home" className="flex items-center gap-2" aria-label="Nexify Digital Home">
            <img src="/imgs/logo.png" alt="Nexify Digital Logo" />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 text-[12px] md:text-[18px]" aria-label="Primary Navigation">
          <ul className="flex gap-7 text-black">
            <li className="nav-item"><a href="#home" className="hover:border-b-2 border-black">Home</a></li>
            <li className="nav-item"><a href="#work" className="hover:border-b-2 border-black">Our Work</a></li>
            <li className="nav-item"><a href="#services" className="hover:border-b-2 border-black">Services</a></li>
            
            <li className="nav-item"><a href="#whyus" className="hover:border-b-2 border-black">Why Choose Us</a></li>
            <li className="nav-item"><a href="#contact" className="hover:border-b-2 border-black">Contact Us</a></li>
          </ul>
        </nav>
        <div className="hidden sm:block">
          <a href="https://linktr.ee/nexifydigital">
            <HeaderBtn/>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-3xl text-[#3647AD]"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-3/4 max-w-xs bg-white text-black transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <h2 className="text-2xl font-bold text-[#3647AD]">NexifyDigital</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="text-black text-3xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Home</p>
              <FiArrowRight />
            </div>
          </a>

           <a href="#work" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Our Work</p>
              <FiArrowRight />
            </div>
           </a>
           <a href="#services" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Services</p>
              <FiArrowRight />
            </div>
          </a>
          

          <a href="#whyus" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Why Choose Us</p>
              <FiArrowRight />
            </div>
          </a>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <div className="flex justify-between items-center gap-6">
              <p>Contact Us</p>
              <FiArrowRight />
            </div>
          </a>
          <div className="block md:hidden">
            <a href="https://linktr.ee/nexifydigital">
              <HeaderBtn/>
            </a>
          </div>
        </nav>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
