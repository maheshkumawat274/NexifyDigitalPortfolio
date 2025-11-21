import React, { useEffect, useState } from "react";
import config from "../../../config";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const Ourwork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const loadProjects = async () => {
    try {
      const res = await fetch(`${config.API_BASE_URL}/projects/list.php`);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Ensure URLs are correct
  const makeValidUrl = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <section id="work" className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4d2c91]">
          Our Work
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          From business websites to complex e-commerce platforms, here’s a
          glimpse of what we’ve delivered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={`${config.API_BASE_URL}/${p.image}`}
                alt={p.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{p.category}</p>
                <p className="text-gray-600 mb-4">{p.description}</p>

                <a
                  href={makeValidUrl(p.link)}
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
  );
};

export default Ourwork;
