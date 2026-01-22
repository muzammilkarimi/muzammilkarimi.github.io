"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  FaGraduationCap,
  FaTrophy,
  FaLightbulb,
  FaExternalLinkAlt,
  FaCertificate, 
  FaUniversity
} from "react-icons/fa";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 overflow-x-hidden selection:bg-blue-500 selection:text-white font-sans">
      <Navbar />
      
      <main className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs">The Profile</span>
          <h1 className="text-4xl md:text-7xl font-black text-neutral-900 dark:text-white tracking-tighter uppercase mt-4 mb-6">
            Architecting <span className="text-neutral-400">Intelligence.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-medium">
             I am <strong className="text-neutral-900 dark:text-white">Muzammil Ahmad Karimi</strong>, an M.Tech scholar at <span className="text-blue-600">IIT Patna</span> bridging the gap between advanced mathematical theory and practical AI deployment.
          </p>
        </motion.div>

        {/* Hero Image / Banner */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="w-full h-[400px] rounded-[2.5rem] overflow-hidden relative mb-20 group"
        >
           <div className="absolute inset-0 bg-neutral-900" />
           {/* Abstract Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-neutral-900/80 to-transparent z-10" />
           
           {/* Placeholder for specific imagery if needed, keeping it abstract for now */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
           </div>

           <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
              <div className="flex items-center gap-3 mb-2">
                 <div className="h-0.5 w-12 bg-blue-500" />
                 <span className="text-white/60 uppercase tracking-widest text-xs font-bold">Current Focus</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase italic">
                 Retrieval Augmented <br/> Generation
              </h2>
           </div>
        </motion.div>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           
           {/* Education Column */}
           <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                 <FaUniversity className="text-blue-500 text-xl" />
                 <h3 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Education</h3>
              </div>

              <div className="space-y-6">
                 {[
                    { title: "M.Tech in Math & Computing", inst: "IIT Patna", year: "2024 - 2026", score: "" },
                    { title: "B.E. Computer Science", inst: "Vels University", year: "2021 - 2024", score: "" },
                    { title: "Diploma in CSE", inst: "BTE Delhi", year: "2017 - 2020", score: "" },
                 ].map((edu, i) => (
                   <div key={i} className="group border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 py-2 hover:border-blue-500 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="text-lg font-bold text-neutral-900 dark:text-white leading-none group-hover:text-blue-600 transition-colors">{edu.inst}</h4>
                         <span className="text-xs font-mono text-neutral-500">{edu.year}</span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-1">{edu.title}</p>
                      {edu.score && <span className="text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-neutral-500">{edu.score}</span>}
                   </div>
                 ))}
              </div>
           </div>

           {/* Achievements Column */}
           <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                 <FaTrophy className="text-orange-500 text-xl" />
                 <h3 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Honors</h3>
              </div>

               <div className="grid grid-cols-1 gap-4">
                  <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex items-center justify-between group hover:border-orange-500/50 transition-colors">
                     <div>
                        <h4 className="font-black text-neutral-900 dark:text-white uppercase tracking-tight text-lg">GATE CS 2024</h4>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">95th Percentile</p>
                     </div>
                     <span className="text-2xl">🏆</span>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                     <div>
                        <h4 className="font-black text-neutral-900 dark:text-white uppercase tracking-tight text-lg">LeetCode 600+</h4>
                        <Link href="https://leetcode.com/u/mkarimi/" target="_blank" className="flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-widest mt-1 hover:underline">
                           mkarimi <FaExternalLinkAlt size={8} />
                        </Link>
                     </div>
                     <span className="text-2xl">💻</span>
                  </div>

                  <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl flex items-center justify-between group">
                     <div>
                        <h4 className="font-black text-neutral-900 dark:text-white uppercase tracking-tight text-lg">AIR 43</h4>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">MANUU Polytechnic 2017</p>
                     </div>
                     <span className="text-2xl">🏅</span>
                  </div>
               </div>
           </div>
        </div>

        {/* Core Coursework Section */}
        <div className="mb-20">
             <div className="flex items-center gap-3 mb-6">
                 <FaLightbulb className="text-yellow-500 text-xl" />
                 <h3 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Core Coursework</h3>
             </div>
             <div className="flex flex-wrap gap-3">
                {["Large Language Models (LLMs)", "Deep Learning", "Advanced Algorithms", "Pattern Recognition", "Database Systems (DBMS)", "Operating Systems", "Probability & Stats", "Prompt Engineering", "System Design"].map((subject, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 shadow-sm">
                        {subject}
                    </span>
                ))}
             </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-8">
               <FaCertificate className="text-emerald-500 text-xl" />
               <h3 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Certifications</h3>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                  { title: "Azure Data", org: "Microsoft" },
                  { title: "RPA Essentials", org: "Automation Anywhere" },
                  { title: "Process Automation", org: "Celonis" },
                  { title: "Python Basic", org: "HackerRank" },
              ].map((cert, i) => (
                 <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 rounded-xl hover:shadow-lg transition-shadow">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">{cert.org}</p>
                    <h5 className="font-bold text-neutral-800 dark:text-neutral-200 leading-tight">{cert.title}</h5>
                 </div>
              ))}
           </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default About;
