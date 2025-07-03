import React from 'react';
import { FaCode, FaMobileAlt, FaBullhorn, FaVideo, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: "Website Development",
    description: "We create responsive, modern websites tailored to your business needs.",
    icon: <FaCode className="text-3xl text-green-500" />,
  },
  {
    title: "Mobile App Development",
    description: "High-performance iOS & Android apps with seamless design & functionality.",
    icon: <FaMobileAlt className="text-3xl text-green-500" />,
  },
   {
    title: "Software Development",
    description: "Custom software solutions to automate and grow your business efficiently.",
    icon: <FaLaptopCode className="text-3xl text-green-500" />,
  },
  {
    title: "Digital Marketing",
    description: "Boost your business online with strategic marketing and lead generation.",
    icon: <FaBullhorn className="text-3xl text-green-500" />,
  },
  {
    title: "Video Editing",
    description: "Creative video editing for your social media, ads, or brand promotions.",
    icon: <FaVideo className="text-3xl text-green-500" />,
  },
 
];

const ServicesSection: React.FC = () => {
  return (
    <section id='services' className="py-16 px-4 md:px-12 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10">Our Services</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      
      {/* Left 2 Cards */}
      <div className="flex flex-col gap-6">
        {services.slice(0, 2).map((service, index) => (
          <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Center Big Card */}
      <div className="h-full">
        <div className="border rounded-xl p-10 shadow hover:shadow-lg transition-all text-center hover:bg-green-50 h-full flex flex-col justify-center">
          <div className="flex justify-center mb-4">
            {services[2].icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
          <p className="text-gray-600 text-sm">{services[2].description}</p>
        </div>
      </div>

      {/* Right 2 Cards */}
      <div className="flex flex-col gap-6">
        {services.slice(3, 5).map((service, index) => (
          <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

  );
};

export default ServicesSection;
