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
  return (
    <main className="flex flex-col items-center gap-3 md:gap-0 m-2 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12">
      <Navbar />

      <div className="mt-20 px-2 md:px-72  text-left flex justify-start flex-col w-full gap-7">
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-700 text-4xl md:text-6xl">Blog</h1>
          <p className="font-sans text-justify text-xs md:text-sm text-neutral-600">
            It will be more like a tale or story than a blog. I will write about
            GATE, web dev, design, filmmaking, philosophy, poetry, and more.
            Stay tuned for upcoming posts, Inshallah.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-neutral-700 text-2xl md:text-3xl">
            Upcoming Posts
          </h1>
          <div className="font-sans font-medium h-20 bg-gray-100 border-2 border-neutral-300 items-center text-left px-4 flex justify-start rounded-xl text-sm md:text-md">
            Why every engineer must have to write gate exam.
          </div>
          <div className="font-sans font-medium h-20 bg-gray-100 border-2 border-neutral-300 items-center text-left px-4 flex justify-start rounded-xl text-sm md:text-md">
            The most important things to do during a computer science and
            engineering degree.
          </div>
          <div className="font-sans font-medium h-20 bg-gray-100 border-2 border-neutral-300 items-center text-left px-4 flex justify-start rounded-xl text-sm md:text-md">
            Pros and cons of following a step-by-step or a roadmap of any
            programming language or any technology.
          </div>
          <div className="font-sans font-medium h-20 bg-gray-100 border-2 border-neutral-300 items-center text-left px-4 flex justify-start rounded-xl text-sm md:text-md">
            Why getting errors is beneficial for newbie programmers.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
