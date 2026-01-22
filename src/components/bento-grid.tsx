"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GitHub, 
  LinkedIn, 
  Instagram, 
  Mail, 
} from "@mui/icons-material";
import { 
  FaReact, 
  FaPython, 
  FaDatabase, 
  FaArrowRight,
  FaBrain,
  FaCode,
  FaGlobe,
  FaTerminal,
  FaGraduationCap,
  FaPills
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSupabase, SiPytorch, SiFastapi, SiCplusplus } from "react-icons/si";

const BentoGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[auto] md:auto-rows-[180px] font-sans mb-32">
      
      {/* 1. Bio / Identity (2x2) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-neutral-100 dark:bg-neutral-900 rounded-[2rem] p-8 border border-neutral-200 dark:border-neutral-800 relative overflow-hidden flex flex-col justify-between group min-h-[300px]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-0 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
             <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-widest">
               Identity
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[0.9]">
            ENGINEER <br />
            <span className="text-neutral-400">COMP & MATH</span>
          </h2>
        </div>

        <div className="relative z-10 mt-8 md:mt-0">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium max-w-sm leading-relaxed mb-6">
            M.Tech scholar at <strong className="text-neutral-900 dark:text-white">IIT Patna</strong>. Compressing the gap between research and production with intelligent systems.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-500 transition-colors uppercase tracking-wide">
            Read Full Bio <FaArrowRight />
          </Link>
        </div>
      </motion.div>

      {/* 2. Featured Project: Knowledge Retrieval (2x2) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-black rounded-[2rem] overflow-hidden relative border border-neutral-800 group min-h-[320px]"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        
        {/* Abstract visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
        
        <div className="absolute top-6 right-6 z-20 flex gap-3">
           <Link href="https://github.com/muzammilkarimi/Rag_ai_assistant" target="_blank" className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all">
              <GitHub fontSize="small" />
           </Link>
           <Link href="https://minirag01-sfkpmbeusijvsjcvoebkig.streamlit.app/" target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <FaGlobe />
           </Link>
        </div>

        <div className="absolute bottom-0 left-0 p-8 z-20">
          <span className="text-blue-500 text-[10px] font-mono uppercase tracking-widest mb-2 block">
            RAG Pipeline
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter mb-2">
            Neuro Search
          </h3>
          <p className="text-neutral-400 text-sm font-medium max-w-xs">
            Semantic search engine ensuring zero-hallucination responses using LangChain & FAISS.
          </p>
        </div>
      </motion.div>

      {/* 3. Tech Stack: Minimalist Grid (2x2) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-white dark:bg-neutral-900 rounded-[2rem] p-8 border border-neutral-200 dark:border-neutral-800 flex flex-col relative overflow-hidden min-h-[300px]"
      >
         <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Tech <span className="text-neutral-400">Stack</span>
            </h3>
            <FaTerminal className="text-neutral-300 dark:text-neutral-700 text-2xl" />
         </div>

         <div className="grid grid-cols-4 gap-4 flex-1 content-center">
            {[
               { icon: <FaPython />, label: "Python" },
               { icon: <SiPytorch />, label: "PyTorch" },
               { icon: <TbBrandNextjs />, label: "Next.js" },
               { icon: <FaReact />, label: "React" },
               { icon: <SiFastapi />, label: "FastAPI" },
               { icon: <FaDatabase />, label: "SQL" },
               { icon: <SiSupabase />, label: "Supabase" },
               { icon: <SiCplusplus />, label: "C++" },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors group/icon">
                 <span className="text-2xl text-neutral-400 group-hover/icon:text-blue-600 transition-colors">{tech.icon}</span>
                 <span className="text-[10px] uppercase font-bold text-neutral-400 group-hover/icon:text-neutral-600 dark:group-hover/icon:text-neutral-300 hidden md:block">{tech.label}</span>
              </div>
            ))}
         </div>
      </motion.div>

      {/* 4. LeetCode Stats (1x1) */}
      <motion.div 
         whileHover={{ y: -4 }}
         onClick={() => window.open("https://leetcode.com/u/mkarimi/", "_blank")}
         className="col-span-1 row-span-1 bg-neutral-900 text-white rounded-[2rem] p-6 flex flex-col justify-between border border-neutral-800 cursor-pointer group hover:border-neutral-700 transition-colors min-h-[160px]"
      >
         <div className="flex justify-between items-start">
            <span className="text-xs font-mono text-neutral-500">LeetCode</span>
            <FaCode className="text-neutral-600 group-hover:text-white transition-colors" />
         </div>
         <div>
            <div className="text-4xl font-bold tracking-tighter">600+</div>
            <div className="text-xs text-neutral-500 mt-1 font-medium">Problems Solved</div>
         </div>
      </motion.div>

      {/* 5. GATE Score (1x1) */}
      <motion.div 
         whileHover={{ y: -4 }}
         className="col-span-1 row-span-1 bg-blue-600 text-white rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl shadow-blue-900/20 min-h-[160px]"
      >
         <div className="flex justify-between items-start">
            <span className="text-xs font-mono text-blue-200">GATE &apos;24</span>
            <FaBrain className="text-blue-300" />
         </div>
         <div>
            <div className="text-4xl font-bold tracking-tighter">95th</div>
            <div className="text-xs text-blue-200 mt-1 font-medium">Percentile (CS)</div>
         </div>
      </motion.div>

      {/* 6. VelsEcho AI (2x1 wide) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="col-span-1 md:col-span-2 row-span-1 bg-orange-50 dark:bg-neutral-900/50 rounded-[2rem] p-6 flex items-center justify-between border border-orange-100 dark:border-neutral-800 group overflow-hidden relative min-h-[160px]"
      >
         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-orange-500" />
               <span className="text-xs font-bold uppercase text-orange-600 dark:text-orange-400">University AI</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">VelsEcho Bot</h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-[200px]">Campus assistant powered by fine-tuned LLMs.</p>
         </div>
         <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-orange-100 dark:from-orange-900/20 to-transparent" />
         <Link href="https://github.com/muzammilkarimi/velsecho" target="_blank" className="relative z-10 p-4 bg-white dark:bg-black rounded-full shadow-sm hover:scale-110 transition-transform">
             <GitHub fontSize="small" className="text-neutral-900 dark:text-white" />
         </Link>
      </motion.div>

      {/* 7. QuestionPaperz Live (2x1 wide) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="col-span-1 md:col-span-2 row-span-1 bg-neutral-900 rounded-[2rem] p-8 flex items-center justify-between border border-neutral-800 relative group overflow-hidden min-h-[160px]"
      >
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
         <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 rounded-md mb-3 backdrop-blur-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
               <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Platform</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">QuestionPaperz</h3>
         </div>

         <div className="relative z-10 flex gap-3">
             <Link href="https://github.com/muzammilkarimi/questionpapers" target="_blank" className="p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
                 <GitHub fontSize="small" />
             </Link>
             <Link href="http://35.93.181.161.nip.io/" target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
                 <FaGlobe fontSize="small" />
             </Link>
         </div>
      </motion.div>

      {/* 8. Extra Projects (Small Cards) */}
      <motion.div whileHover={{ y: -4 }} className="col-span-1 row-span-1 bg-emerald-50 dark:bg-neutral-900/50 rounded-[2rem] p-6 border border-emerald-100 dark:border-neutral-800 flex flex-col justify-center items-center text-center group min-h-[160px]">
          <FaPills className="text-3xl text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-neutral-900 dark:text-white">MedMan</h4>
          <Link href="https://github.com/muzammilkarimi/medicine-manager" className="text-[10px] font-bold uppercase text-emerald-600 mt-2 hover:underline">View Project</Link>
      </motion.div>

      <motion.div whileHover={{ y: -4 }} className="col-span-1 row-span-1 bg-blue-50 dark:bg-neutral-900/50 rounded-[2rem] p-6 border border-blue-100 dark:border-neutral-800 flex flex-col justify-center items-center text-center group min-h-[160px]">
          <FaGraduationCap className="text-3xl text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-neutral-900 dark:text-white">EduLMS</h4>
          <Link href="https://github.com/rajpatel2619/frontend_peerprogrammers" className="text-[10px] font-bold uppercase text-blue-600 mt-2 hover:underline">View Project</Link>
      </motion.div>

    </div>
  );
};

export default BentoGrid;
