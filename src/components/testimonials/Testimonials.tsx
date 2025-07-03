import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Mr. Arjun Verma',
    role: 'Founder, TrendyCart',
    feedback: 'NexifyDigital has built a remarkable eCommerce platform for us. The design, speed, and user experience are truly commendable. Our online sales and customer satisfaction have increased significantly.',
    image: '/imgs/profile1.jpeg',
  },
  {
    name: 'Mr. Ravi Mehra',
    role: 'Managing Director, Mehra Enterprises',
    feedback: 'The business website developed by NexifyDigital has helped us establish a solid digital presence. Their professionalism, timely delivery, and attention to detail are highly appreciated.',
    image: '/imgs/profile2.jpg',
  },
  {
    name: 'Mr. Karan Malhotra',
    role: 'CEO, QuickServe App',
    feedback: 'Our mobile application developed by NexifyDigital is exceptional. It is fast, secure, and user-friendly. Their team’s expertise in app development is evident in the final product.',
    image: '/imgs/profile3.jpg',
  },
  {
    name: 'Mr. Sandeep Yadav',
    role: 'Marketing Head, BrightFuture Solutions',
    feedback: 'We partnered with NexifyDigital for digital marketing services, and the results are fantastic. Our website traffic and lead generation have shown remarkable improvement within a short period.',
    image: '/imgs/profile5.jpg',
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Operations Manager, SmartERP Solutions',
    feedback: 'The software solution provided by NexifyDigital has streamlined our operations and improved efficiency. Their team is highly professional, and the after-sale support is excellent.',
    image: '/imgs/profile4.jpg',
  }
]


const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section  className="bg-[#111111] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text */}
        <div>
          <div className='bg-white w-28 rounded-xl px-3'>
            <h4 className="text-[#233BA7] font-semibold mb-2">Testimonials</h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Clients Awesome - 
          </h2>
          <div>
            <h2 className="bg-white text-4xl w-68 text-[#233BA7] rounded-3xl px-6 font-bold py-1">Testimonials</h2>
          </div>

          <div className="bg-[#1e1e1e] inline-flex items-center gap-4 py-4 px-6 rounded-lg mt-6">
            <p className="text-4xl font-bold">4.8</p>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-400">20+ Clients Rating.</p>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div className="relative h-60 md:h-64 flex justify-center items-center">
          
          {/* Stacked Cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full max-w-md p-6 bg-[#1e1e1e] border border-white rounded-xl shadow transition-transform duration-700 ${
                index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{testimonial.feedback}</p>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-1 flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === current ? 'bg-white' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
