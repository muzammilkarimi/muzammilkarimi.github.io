"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import "cal-sans";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Mail,
  YouTube,
} from "@mui/icons-material";
import { BackgroundBeams } from "../components/ui/background-beams";
import { IN } from "country-flag-icons/react/3x2";
const Footer: React.FC = () => {
  const copytoclipboard = () => {
    toast.success("Email Id copied!");
    navigator.clipboard.writeText("muzammil.a.karimi@gmail.com");
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-10 font-sans">
      <div className="rounded-[2.5rem] bg-neutral-900 border border-neutral-800 p-10 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
         
         {/* Background Subtle Glow */}
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />

         <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-neutral-800 shadow-2xl">
               <Image src="/facecrop.jpg" alt="MAK" width={100} height={100} className="object-cover" />
            </div>
            
            <div className="space-y-4">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                  Let’s build something <span className="text-blue-500">intelligent.</span>
               </h2>
               <p className="text-neutral-400 max-w-md mx-auto text-sm md:text-base">
                  Always open to discussing AI, System Design, or just geek out over the latest in tech.
               </p>
            </div>

            <div className="flex gap-4 items-center mt-4">
               <div onClick={copytoclipboard} className="p-4 bg-white/5 rounded-full text-white cursor-pointer hover:bg-blue-600 transition-colors">
                  <Mail fontSize="small" />
               </div>
               <Link href="https://www.linkedin.com/in/makarimi01/" target="_blank" className="p-4 bg-white/5 rounded-full text-white hover:bg-blue-600 transition-colors">
                  <LinkedIn fontSize="small" />
               </Link>
               <Link href="https://github.com/muzammilkarimi" target="_blank" className="p-4 bg-white/5 rounded-full text-white hover:bg-neutral-700 transition-colors">
                  <GitHub fontSize="small" />
               </Link>
               <Link href="https://instagram.com/muzammil_karimi" target="_blank" className="p-4 bg-white/5 rounded-full text-white hover:bg-pink-600 transition-colors">
                  <Instagram fontSize="small" />
               </Link>
            </div>
            <Toaster position="bottom-center" />
         </div>

         <div className="absolute bottom-6 flex items-center gap-2 text-neutral-600 text-xs font-mono uppercase tracking-widest">
            <span>Designed in</span>
            <IN className="w-4 h-3 opacity-50" />
            <span>by MAK</span>
         </div>
         
      </div>
    </div>
  );
};

export default Footer;
