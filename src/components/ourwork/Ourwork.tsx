import React, { useRef } from "react";

interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "General Medical Supplies (NZ)",
    category: "Medical / E-commerce",
    description: "Online store for medical & surgical equipment, tailored specialist products.",
    image: "/imgs/medical.jpg",
    link: "https://generalmedicalsupplies.co.nz/"
  },
  {
    name: "Active IT Zone Shop CMS",
    category: "E-commerce CMS",
    description: "Powerful PWA e-commerce CMS with dynamic offers & one-page checkout.",
    image: "/imgs/eco-cms.jpg",
    link: "https://shop.activeitzone.com/"
  },
  {
    name: "Portronics India",
    category: "Electronics E-commerce",
    description: "India’s portable gadgets brand—headphones, speakers, power banks—10M+ products sold.",
    image: "/imgs/elctronics.jpg",
    link: "https://ptronics.in/"
  },
  {
    name: "Yoori by Spagreen",
    category: "E-commerce (Multi-vendor)",
    description: "Modern multi-vendor platform with sleek design & responsive layout.",
    image: "/imgs/multivendor.jpg",
    link: "https://yoori.spagreen.net/"
  },
  {
    name: "Nest Botble Theme",
    category: "E-commerce Template",
    description: "Clean and modern e-commerce theme demo built with Botble CMS.",
    image: "/imgs/botble.jpg",
    link: "https://nest.botble.com/"
  },
  {
    name: "Srijana Global",
    category: "Business Website",
    description: "Professional business website for Srijana Global, showcasing services & expertise.",
    image: "/imgs/business.jpg",
    link: "https://srijanaglobal.in/"
  },
  {
    name: "GeniusCart - Genius Ocean",
    category: "E-commerce Platform",
    description: "Product marketplace built with GeniusCart for seamless online shopping.",
    image: "/imgs/shopping.jpg",
    link: "https://product.geniusocean.com/geniuscarttt/"
  },
  {
    name: "Quomodo Shop Us",
    category: "E-commerce (React)",
    description: "React-based e-commerce storefront for modern online shopping experience.",
    image: "/imgs/shopping1.jpg",
    link: "https://shopus-quomodo.vercel.app/"
  },
  {
    name: "EshopWeb Store",
    category: "E-commerce Template",
    description: "Minimal, clean UI e-commerce store template with responsive design.",
    image: "/imgs/brands.jpg",
    link: "https://eshopweb.store/"
  }
];

const Ourwork: React.FC = () => {
 const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const container = containerRefs.current[index];
    const image = imageRefs.current[index];

    if (container && image) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.opacity = "1";
    }
  };

  const handleMouseLeave = (index: number) => {
    const image = imageRefs.current[index];
    if (image) {
      image.style.opacity = "0";
    }
  };
  return(

  
  <section id="work" className="py-16 px-4 ">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4d2c91]">Our Work</h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        From business websites to complex e-commerce platforms, here’s a glimpse of what we’ve delivered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i}
          ref={(el) => {
                containerRefs.current[i] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}

           className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
             <img
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                src={p.image}
                alt=""
                className="h-24 w-24 rounded-full absolute pointer-events-none opacity-0 transition-all duration-200 z-50"
                style={{ transform: "translate(-50%, -50%)" }}
              />
               {/* Static image */}
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{p.category}</p>
              <p className="text-gray-600 mb-4">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4d2c91] font-medium hover:underline"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);}

export default Ourwork;
