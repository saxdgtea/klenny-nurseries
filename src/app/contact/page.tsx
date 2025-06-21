"use client";

import { useState } from "react";

import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service or API endpoint
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <main className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-green-800 text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📬 Contact Us
        </motion.h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Fill out the form below and we'll get back
          to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
