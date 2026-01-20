"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";
import { Button } from "./ui/moving-border";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Email,
} from "@mui/icons-material";

const Hero: React.FC = () => {
  const [typewriterText] = useTypewriter({
    words: [
      "MTech @ IIT Patna",
      "Computer Science student",
      "GATE CS'24 qualified",
      "Web Developer",
      "AI Enthusiast",
      "UI/UX Designer",
      "Graphic Designer",
      "Story teller",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <HeroHighlight containerClassName="h-[40rem] flex items-center justify-center bg-white dark:bg-black group">
      <div className="relative z-20 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 text-center">
        
        {/* Subtle Background Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-blue-500/20 transition-colors duration-1000" />

        {/* Profile Image - Clean & Floating */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8 relative"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-neutral-100 dark:border-neutral-800 shadow-xl ring-4 ring-white/50 dark:ring-neutral-900/50">
            <Image 
              src="/facecrop.jpg" 
              alt="Muzammil Ahmad Karimi" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Typography - Modern & Sleek */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-2">
             <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
               Hi, I'm
             </h2>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-800 dark:text-white tracking-tighter mix-blend-multiply dark:mix-blend-normal">
               Muzammil <span className="text-neutral-400 dark:text-neutral-600">Karimi</span>
             </h1>
          </div>
          
          {/* Typewriter - Monospaced & Tech-focused */}
          <div className="h-6 md:h-8 flex items-center justify-center">
            <span className="text-sm md:text-lg font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              {typewriterText}
              <Cursor cursorColor="#3B82F6" />
            </span>
          </div>
        </motion.div>

        {/* Minimalist Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 mt-10"
        >
           <Link href="https://drive.google.com/file/d/1y6rJjJQioGgQGyVH49h8yPgUoiaNfU-9/view?usp=sharing" target="_blank">
            <button className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
               Resume <IoDocumentText />
            </button>
           </Link>

           <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
              <Link href="https://github.com/muzammilkarimi" target="_blank" className="p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                 <GitHub fontSize="small" />
              </Link>
              <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700" />
              <Link href="https://www.linkedin.com/in/makarimi01/" target="_blank" className="p-2 text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500 transition-colors">
                 <LinkedIn fontSize="small" />
              </Link>
              <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700" />
              <Link href="https://instagram.com/muzammil_karimi" target="_blank" className="p-2 text-neutral-600 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-500 transition-colors">
                 <Instagram fontSize="small" />
              </Link>
              <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700" />
              <Link href="mailto:muzammil.a.karimi@gmail.com" className="p-2 text-neutral-600 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400 transition-colors">
                 <Email fontSize="small" />
              </Link>
           </div>
        </motion.div>

      </div>
    </HeroHighlight>
  );
};
export default Hero;
