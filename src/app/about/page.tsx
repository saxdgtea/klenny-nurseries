"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-green-50 min-h-screen">
      <main className="pt-24 pb-20 px-4 max-w-5xl mx-auto text-gray-700">
        <motion.h1
          className="text-4xl font-bold text-green-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌿 About FarmLife
        </motion.h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            FarmLife was founded with a simple mission — to reconnect people
            with nature through sustainable farming, expert landscaping, and
            quality nursery services. What started as a small local initiative
            has grown into a trusted name across the region.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            What We Do
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>🌱 Landscape design and maintenance</li>
            <li>🌳 Tree nurseries with healthy seedlings</li>
            <li>🧠 Agricultural advising for farms and gardens</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            To promote green, sustainable environments by empowering communities
            through expert guidance, quality plant materials, and eco-conscious
            services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Sylvia", "Juma", "Nancy"].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-200" />
                <h3 className="text-green-900 font-semibold">{name}</h3>
                <p className="text-sm text-gray-600">Team Member</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
