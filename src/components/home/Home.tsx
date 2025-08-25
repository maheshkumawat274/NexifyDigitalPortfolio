import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-[950px] pt-50 md:pt-0 md:h-screen  flex items-center justify-center overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        
        {/* Pink Shape Bottom Left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-40 blur-3xl"></div>
        
        {/* Green Shape Bottom Right */}
        <div className="absolute bottom-36 left-1/3 w-72 h-72 bg-[#233BA7] rounded-full opacity-40 blur-3xl"></div>
        
        {/* Blue Shape Top Left */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300 rounded-full opacity-40 blur-3xl"></div>

        {/* Decorative Arrow Icon Center */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-5xl rotate-45">
          ➤
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <p className="text-green-500 font-medium text-lg">👋 Hey There!</p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            We Build, <br /> We Deliver, <br /> We Impress!
          </h1>

          <p className="text-gray-700 ">
            We are a team of digital experts helping businesses grow with websites, apps, and creative solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
            <a 
            href="https://wa.me/916376228917"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button
              className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
            >
              <span
                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
              >
                <span
                  className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                ></span>
              </span>
              <span
                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
              >
                <span
                  className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                ></span>
              </span>
              <span
                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
              ></span>
              <span
                className="cursor-pointer relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >Get Started</span
              >
            </button>

            </a>
            <a 
            href="https://www.instagram.com/nexifydigital.in/reels/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="px-6 py-3 cursor-pointer border border-gray-400 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              ▶ Show Reel
            </button>
            </a>
          </div>
        </motion.div>

        {/* Right Image - Floating Above Footer */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center mt-10 md:mt-42"
        >
          <img
            src="/imgs/mahesh.png"
            alt="NexifyDigital Team"
            className="w-72 md:w-96 object-contain relative z-10"
          />

          {/* Green Background Shape Behind Image */}
          <div className="absolute bottom-42 left-1/2 w-80 h-80 bg-[#233BA7] rounded-full opacity-50 blur-2xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
