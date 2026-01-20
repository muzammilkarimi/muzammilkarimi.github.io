
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from "react-icons/fa";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { BlogPost } from "../../../lib/blog-data";

interface BlogClientProps {
  post: BlogPost;
}

const BlogClient: React.FC<BlogClientProps> = ({ post }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Link */}
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Journal
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-4 items-center mb-6 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
              <span className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <div className="flex items-center gap-2">
                <FaCalendar /> <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock /> <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none hover:prose-a:text-blue-500 transition-colors">
             {post.content}
          </div>

        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogClient;
