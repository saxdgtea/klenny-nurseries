"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/feedback", label: "Feedback" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-green-700 text-lg text-white fixed top-0 left-0 w-full z-50 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold">
            🌿 FarmLife
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-lg">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch className="cursor-pointer hover:text-yellow-300" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-16 md:h-20" />

      {/* Mobile Dropdown - FIXED */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-green-800 px-4 pb-4 pt-2 space-y-2 z-[9999] md:hidden"
          >
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-yellow-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
