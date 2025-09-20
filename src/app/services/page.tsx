"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "landscaping",
    title: "Landscaping",
    image: "blog3.jpeg",
    description:
      "Transform your space with beautiful, functional landscapes designed for sustainability and beauty.",
  },
  {
    id: 2,
    slug: "nurseries",
    title: "Tree Nurseries",
    image: "blog1.jpeg",
    description:
      "We grow and supply healthy, climate-adapted tree seedlings perfect for your farm or yard.",
  },
  {
    id: 3,
    slug: "advising",
    title: "Agricultural Advising",
    image: "blog1.jpeg",
    description:
      "Get expert advice on farming practices, soil health, crop rotation, and agribusiness strategy.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-green-800 text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌱 Our Services
        </motion.h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          From seed to soil, FarmLife offers expert services to support your
          green journey.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
