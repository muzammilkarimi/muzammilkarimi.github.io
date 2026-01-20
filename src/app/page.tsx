"use client";
import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import BentoGrid from "../components/bento-grid";
import Footer from "../components/footer";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import { Meteors } from "../components/ui/meteors";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
        <BackgroundBeams />
      </div>

      <main className="relative z-10 flex flex-col items-center">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section - The "Wow" first impression */}
        <section className="w-full relative overflow-hidden">
          <Hero />
        </section>

        {/* AI Highlight Section - "AI Intelligence in Design" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex justify-center py-12"
        >
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter leading-tight">
              AI Powered <span className="text-blue-600">Design</span>
            </h2>
            <p className="mt-4 text-neutral-500 font-medium tracking-wide text-sm max-w-lg mx-auto">
              Explore my skill graph and projects through an intelligent lens
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Layout - Modern, Structured Content */}
        <section className="w-full max-w-7xl px-4 md:px-0 mb-20">
          <BentoGrid />
        </section>

        {/* Interactive Quote / Call to Action */}

        <section className="w-full py-32 flex flex-col items-center justify-center text-center relative overflow-hidden bg-white dark:bg-neutral-950">
           {/* Decorative horizontal lines */}
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
           <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl px-6 relative z-10"
           >
             <h3 className="text-4xl md:text-6xl font-serif italic text-neutral-800 dark:text-neutral-200 leading-tight">
               &ldquo;Guide us to the <span className="text-blue-600 dark:text-blue-500 decoration-blue-500/30 underline-offset-8">straight path</span>&rdquo;
             </h3>
             
             <div className="mt-8 flex items-center justify-center gap-4">
               <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
               <p className="text-neutral-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                 Al-Fatihah 6
               </p>
               <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
             </div>
           </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
