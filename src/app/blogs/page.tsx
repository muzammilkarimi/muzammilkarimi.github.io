"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar, FaClock, FaTag } from "react-icons/fa";

import { BLOG_DATA } from "../../lib/blog-data";

const Blogs: React.FC = () => {
  const featuredPost = BLOG_DATA.find(post => post.featured);
  const otherPosts = BLOG_DATA.filter(post => !post.featured);

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-blue-500 selection:text-white font-sans">
      <Navbar />
      
      <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs">The Journal</span>
          <h1 className="text-4xl md:text-7xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase mt-4 mb-6">
            Thoughts & <span className="text-neutral-400">Tales.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-medium">
             A collection of engineering insights, philosophical musings, and the occasional rant about intricate systems.
          </p>
        </motion.div>

        {/* Featured / Latest Post (Visual Highlight) */}
        {featuredPost && (
          <Link href={`/blogs/${featuredPost.slug}`}>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="w-full bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden mb-20 group cursor-pointer border border-neutral-800"
            >
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-colors duration-500" />
               
               <div className="relative z-10 flex flex-col items-start gap-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest">Featured</span>
                  <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tighter leading-tight max-w-3xl group-hover:text-blue-200 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed">
                     {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mt-4 text-xs font-bold uppercase tracking-widest text-neutral-500">
                     <div className="flex items-center gap-2">
                        <FaCalendar /> <span>{featuredPost.date}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <FaClock /> <span>{featuredPost.readTime}</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </Link>
        )}


        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           {otherPosts.map((post, idx) => (
             <Link key={post.id} href={`/blogs/${post.slug}`}>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all hover:shadow-xl dark:hover:shadow-blue-900/10 cursor-pointer flex flex-col justify-between h-full"
               >
                  <div>
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <FaArrowRight className="-rotate-45 text-neutral-300 group-hover:text-blue-500 group-hover:rotate-0 transition-all duration-300" />
                     </div>
                     
                     <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                     </h3>
                     <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                     </p>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                     <span>{post.date}</span>
                     <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                     <span>{post.readTime}</span>
                  </div>
               </motion.div>
             </Link>
           ))}
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
