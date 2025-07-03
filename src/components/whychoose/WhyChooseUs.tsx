import React from "react";
import { FaRupeeSign, FaRocket, FaLightbulb, FaThumbsUp } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  return (
    <section id="whyus" className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#233BA7]">Why Choose Us</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At NexifyDigital, we are committed to delivering value with creativity, speed, and trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Affordable Pricing */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4 text-[#233BA7] text-4xl">
              <FaRupeeSign />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600 text-sm">
              Get top-quality digital solutions without breaking the bank.
            </p>
          </div>

          {/* Quick Delivery */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4 text-[#233BA7] text-4xl">
              <FaRocket />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
            <p className="text-gray-600 text-sm">
              We respect your time and ensure fast, efficient project completion.
            </p>
          </div>

          {/* Creative Solutions */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4 text-[#233BA7] text-4xl">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
            <p className="text-gray-600 text-sm">
              Stand out with unique, innovative ideas crafted just for your brand.
            </p>
          </div>

          {/* Trusted by Businesses */}
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center hover:bg-green-50">
            <div className="flex justify-center mb-4 text-[#233BA7] text-4xl">
              <FaThumbsUp />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted by Businesses</h3>
            <p className="text-gray-600 text-sm">
              Our satisfied clients are a testimony to our quality and commitment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
