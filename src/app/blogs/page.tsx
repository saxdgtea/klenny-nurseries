// src/app/blogs/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { blogPosts } from "../../../lib/blogs";

const categories = ["All", "Landscaping", "Nurseries", "Advising"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <Fade delay={100} duration={250} triggerOnce>
      <div className="bg-green-50 min-h-screen">
        <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-green-800 text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🌿 Our Blog
          </motion.h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Stay informed with tips, updates, and expert advice from the
            FarmLife team.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.content}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm text-green-800">
                      <span className="italic">{blog.category}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike(blog.id);
                        }}
                        className="flex items-center gap-1 hover:text-red-600 transition"
                      >
                        <FaThumbsUp />
                        <span>{likes[blog.id] || 0}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Fade>
  );
}
