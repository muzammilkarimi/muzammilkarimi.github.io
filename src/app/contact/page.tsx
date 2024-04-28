"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/navbar";
import { BackgroundBeams } from "../../components/ui/background-beams";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Mail,
  YouTube,
} from "@mui/icons-material";
const Contact: React.FC = () => {
  const copytoclipboard = () => {
    toast.success("Email Id copied!");
    navigator.clipboard.writeText("muzammil.a.karimi@gmail.com");
  };
  return (
    <main className="flex flex-col items-center bg-black m-4 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12">
      <Navbar />
      {/* contact section */}
      <div className="h-[40rem] w-full rounded-3xl bg-[#D9D9D9] relative flex flex-col items-center justify-center antialiased">
        <div className=" mx-auto p-4 gap-10 flex flex-col">
          <div className="flex flex-col justify-center items-center gap-10 ">
            <div className="rounded-full flex justify-center bg-gradient-to-b from-neutral-200 to-neutral-600 w-32 md:w-40 relative z-10 items-center ">
              <Image
                className="rounded-full p-2"
                alt="MAK photo"
                src="/facecrop.jpg"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-2">
                Want to connect?
              </h1>
              <h1 className=" text-xs md:text-sm font-thin z-10 text-center text-black">
                I’m a computer science student who enjoys creating, exploring,
                and improving.
              </h1>
            </div>
          </div>
          <div className="flex gap-7 justify-center relative z-10">
            <div
              className="bg-white rounded-full bg-opacity-30 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] cursor-pointer hover:text-green-700 duration-300 "
              onClick={copytoclipboard}
            >
              <Mail fontSize="large" />
            </div>
            <Toaster />
            <Link
              href="https://www.linkedin.com/in/muzammilakarimi/"
              target="_blank"
              className="text-xl  hover:text-blue-700 duration-300 "
            >
              <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <LinkedIn fontSize="large" />
              </div>
            </Link>
            <Link
              href="https://github.com/muzammilkarimi"
              target="_blank"
              className="text-xl  hover:text-gray-700 duration-300"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <GitHub fontSize="large" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/muzammilkarimiiiii/"
              target="_blank"
              className="text-xl  hover:text-pink-700 duration-300"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <Instagram fontSize="large" />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@MuzammilAhmadKarimi"
              target="_blank"
              className="text-xl  hover:text-red-700 duration-300"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 md:w-16 md:h-16 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <YouTube fontSize="large" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-full font-thin text-thin absolute bottom-4 pl-10 pr-10 text-black">
          <h1>
            <strong>@INDIA</strong>
          </h1>
          <h1>
            Made with ❤️ by <strong>MAK</strong>
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
};

export default Contact;
