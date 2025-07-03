import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import SocialMediaIcons from './SocialMediaLinks';

const Contactus: React.FC = () => {
  return (
    <section id='contact'>
      <div className="min-h-[50vh] w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 space-y-10">
      
      {/* Main Title & Description */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-black">Let's Connect with NexifyDigital</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Whether you want to discuss a project, need support, or simply want to say hello — feel free to reach out anytime!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        {/* Contact Icons with Animation */}
        <div className="bg-[#233BA7] rounded-2xl p-8 sm:p-10 w-full md:w-1/2 flex flex-col items-center justify-center gap-8 shadow-lg">
          
          <p className="text-sm text-gray-300 tracking-widest">EMAIL, CALL OR WHATSAPP</p>
          
          <div className="flex justify-center items-center gap-10 text-4xl sm:text-5xl">
            
            {/* Email */}
            <a
              href="mailto:nexifydigital78@gmail.com"
              aria-label="Email"
              className="transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:text-[#FFD700]"
            >
              <FaEnvelope />
            </a>

            {/* Call */}
            <a
              href="tel:+916376228917"
              aria-label="Call"
              className="transition-transform duration-300 ease-in-out hover:scale-125 hover:-rotate-12 hover:text-[#00FFFF]"
            >
              <FaPhoneAlt />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916376228917"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-6 hover:text-[#25D366]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-[#233BA7] rounded-2xl py-10 px-6 w-full md:w-1/2 flex flex-col justify-center items-center text-center shadow-lg">
          <p className="text-xs text-gray-300 mb-6 tracking-widest">FIND ME</p>
          <SocialMediaIcons />
        </div>

      </div>
    </div>
    </section>
  );
};

export default Contactus;

