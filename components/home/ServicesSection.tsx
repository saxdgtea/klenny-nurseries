// src/components/home/ServicesSection.tsx
"use client";

import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const services = [
  {
    title: "Landscape Design",
    description: "Crafted designs tailored to your garden and lifestyle.",
    icon: "🌿",
  },
  {
    title: "Plant Nursery",
    description: "Healthy, thriving plants straight from our greenhouse.",
    icon: "🌱",
  },
  {
    title: "Garden Maintenance",
    description: "We keep your green spaces blooming all year round.",
    icon: "🧑‍🌾",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Fade key={i} direction="up" delay={i * 100} triggerOnce cascade>
              <div className="bg-green-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1.5">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-800 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-red-800 transition"
                >
                  Read More
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};
