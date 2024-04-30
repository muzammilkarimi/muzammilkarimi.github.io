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
    <main className="flex flex-col items-center gap-3 md:gap-0 m-2 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12">
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
              <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800  text-center font-bold mb-2">
                Want to connect?
              </h1>
              <h1 className=" text-xs md:text-sm font-thin z-10 text-center text-black font-sans">
                I’m a computer science student who enjoys creating, exploring,
                and improving.
              </h1>
            </div>
          </div>
          <div className="flex gap-4 justify-center relative z-10 flex-wrap">
          <div
                className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center  cursor-pointer hover:text-green-700 duration-300 text-neutral-700 "
                onClick={copytoclipboard}
              >
                <Mail fontSize="large" />
              </div>
              <Toaster />
              <Link
                href="https://www.linkedin.com/in/muzammilakarimi/"
                target="_blank"
                className="text-xl  hover:text-blue-700 duration-300 text-neutral-700"
              >
                <div className="bg-white rounded-full  w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                  <LinkedIn fontSize="large" />
                </div>
              </Link>
              <Link
                href="https://github.com/muzammilkarimi"
                target="_blank"
                className="text-xl  hover:text-gray-700 duration-300 text-neutral-700"
              >
                <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center ">
                  <GitHub fontSize="large" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/muzammilkarimiiiii/"
                target="_blank"
                className="text-xl  hover:text-pink-700 duration-300 text-neutral-700"
              >
                <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center ">
                  <Instagram fontSize="large" />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@MuzammilAhmadKarimi"
                target="_blank"
                className="text-xl  hover:text-red-700 duration-300 text-neutral-700"
              >
                <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center ">
                  <YouTube fontSize="large" />
                </div>
              </Link>
          </div>
        </div>
        <div className="flex justify-between w-full font-thin text-thin absolute bottom-4 pl-10 pr-10 text-black font-sans">
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
