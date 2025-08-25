import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#233BA7] text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About NexifyDigital */}
        <div>
          <h3 className="text-xl font-semibold mb-4">NexifyDigital</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            NexifyDigital is your trusted partner for website development, app solutions, and digital growth. 
            We help businesses stand out online with creative and affordable solutions.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Website Development
              </a>
            </li>
            <li>
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Digital Marketing
              </a>
            </li>
            <li>
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Video Editing
              </a>
            </li>
            <li>
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Software Development
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91-6376228917
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> nexifydigital78@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe /> 
              <a 
                href="https://nexifydigital.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                www.nexifydigital.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} NexifyDigital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
