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
const About: React.FC = () => {
  const copytoclipboard = () => {
    toast.success("Email Id copied!");
    navigator.clipboard.writeText("muzammil.a.karimi@gmail.com");
  };
  return (
    <main className="flex flex-col items-center gap-3 md:gap-0 bg-black m-4 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12">
      <Navbar />
      <div className=" md:mb-7 w-full h-screen bg-[#D9D9D9]  rounded-3xl flex gap-6 flex-col p-5 md:p-10">
        <div className=" w-full mt-12 md:mt-0 h-screen bg-[url('/about_bg.png')] bg-cover bg-no-repeat bg-center rounded-3xl"></div>
      </div>

      {/* aboutme */}
      <div className="bg-[#D9D9D9] md:p-10 p-7 rounded-3xl w-full flex flex-col gap-5 md:mb-7">
        <div className="bg-[#004E83] p-1 rounded-md w-28 text-center">
          About me
        </div>
        <p className="text-xl text-justify text-[color:var(--blue)]">
          Hello! I’m <strong> MUZAMMIL AHMAD KARIMI</strong>, a passionate
          Computer Science student with a penchant for problem-solving and
          innovation. My journey in the world of code began with simple “Hello,
          World!” programs, and since then, I’ve been on an exciting quest to
          explore algorithms, data structures, and software development. Whether
          it’s crafting elegant Python scripts or diving into the intricacies of
          web development, I thrive on turning ideas into functional, efficient
          solutions. When I’m not typing away at my keyboard, you’ll find me
          sipping coffee, debugging, and occasionally indulging in a good sci-fi
          movies. Welcome to my digital playground, where lines of code come to
          life! 🚀
        </p>
      </div>
      {/* education, exp and subjects*/}
      <div className="flex w-full gap-3 md:gap-7 flex-col md:flex-row md:mb-7">
        <div className="bg-[#D9D9D9] md:p-10 p-7 rounded-3xl w-full flex flex-col gap-5">
          <div className="bg-[#004E83] p-1 rounded-md w-28 text-center">
            Education
          </div>
          <div className="flex flex-col gap-9">
            {/* vels university */}
            <div className="flex w-full flex-col text-[color:var(--blue)]">
              <div className="flex justify-between w-full items-end md:gap-10">
                <h1 className="text-3xl md:text-4xl uppercase font-semibold">
                  Vels University
                </h1>
                <p>2021-2024</p>
              </div>
              <p className="font-semibold">Chennai, India</p>
              <p>
                Bachelor of Engineering in <strong>Computer Science</strong>
              </p>
            </div>
            {/* BTE */}
            <div className="flex w-full flex-col text-[color:var(--blue)]">
              <div className="flex justify-between w-full items-end md:gap-10">
                <h1 className="text-3xl md:text-4xl uppercase font-semibold">
                  BTE DELHI
                </h1>
                <p>2017-2020</p>
              </div>
              <p className="font-semibold">New Delhi, India</p>
              <p>
                Diploma Engineering in <strong>Computer Science</strong>
              </p>
            </div>

            {/* BSEB */}
            <div className="flex w-full flex-col text-[color:var(--blue)]">
              <div className="flex justify-between w-full items-end md:gap-10">
                <h1 className="text-3xl md:text-4xl uppercase font-semibold">
                  BSEB
                </h1>
                <p>2016-2017</p>
              </div>
              <p className="font-semibold">Bihar, India</p>
              <p>Matriculation</p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="bg-[#D9D9D9] md:p-10 p-7 rounded-3xl w-full flex flex-col gap-5">
          <div className="bg-[#004E83] p-1 rounded-md w-28 text-center">
            Experience
          </div>
          {/* Intern */}
          <div className="flex w-full flex-col text-[color:var(--blue)]">
            <div className="flex justify-between w-full items-end md:gap-10">
              <h1 className="text-3xl md:text-4xl uppercase font-semibold">
                Tech Explica
              </h1>
              <p>2020</p>
            </div>
            <p className="font-semibold">New Delhi, India</p>
            <p>Python With Machine Learning</p>
          </div>
          <div className="bg-[#004E83] p-1 rounded-md w-24 text-center">
            Subjects
          </div>
          <div className="flex w-full flex-col text-[color:var(--blue)]">
            <p>
              Data Structures <br /> Algorithm <br /> Theory of Computation{" "}
              <br /> Compiler Design <br />
              Computer Networks <br /> Operating System <br />
              Digital Logic <br /> Discrete Mathematics <br />C programming{" "}
              <br />
              Database management system <br /> Computer org & arch
            </p>
          </div>
        </div>
      </div>

      {/* cerfication */}
      <div className="bg-[#D9D9D9] md:p-10 p-7 rounded-3xl w-full flex flex-col gap-5 md:mb-7">
        <div className="bg-[#004E83] p-1 rounded-md w-28 text-center">
          Certification
        </div>
        <div className="flex w-full flex-col text-[color:var(--blue)] gap-7">
          {/* Coding contest */}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">
                Spring 2024 Battle of the Brains Coding Contest
              </h1>
              <p>2024</p>
            </div>
            <Link
              href="https://drive.google.com/file/d/1iPxzHkbYzF92EKykmd6F2KC__pRZyaIV/view?usp=sharing"
              target="_blank"
            >
              <p className="underline">University of Texas, Dallas</p>
            </Link>
          </div>
          {/* automation anywhere */}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">
                Automation Anywhere RPA Essentials for Students (Automation 360)
              </h1>
              <p>2022</p>
            </div>
            <Link
              href="https://certificates.automationanywhere.com/5d0c4ff3-529d-4d1e-8bac-284d9b933a02"
              target="_blank"
            >
              <p className="underline">Automation Anywhere</p>
            </Link>
          </div>
          {/* microsoft */}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">
                Microsoft Certified: Azure Data Fundamentals
              </h1>
              <p>2022</p>
            </div>
            <Link
              href="https://www.credly.com/badges/60697819-5da1-4135-9496-ac0299186bad/linked_in_profile"
              target="_blank"
            >
              <p className="underline">Microsoft</p>
            </Link>
          </div>
          {/* celonis */}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">
                Process Automation Bootcamp
              </h1>
              <p>2022</p>
            </div>
            <Link
              href="https://www.credly.com/badges/53cd4a20-d050-4fc8-9073-1b41d4a01de0/linked_in_profile"
              target="_blank"
            >
              <p className="underline">Celonis</p>
            </Link>
          </div>
          {/*Learnathon*/}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">LEARNATHON 2022</h1>
              <p>2022</p>
            </div>
            <Link
              href="https://drive.google.com/file/d/16BmovpCSwqP6jW1EMha6NFUpEHcw9vUc/view"
              target="_blank"
            >
              <p className="underline">ICT Academy</p>
            </Link>
          </div>
          {/* hackerrank pyhton*/}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">Python (Basic)</h1>
              <p>2022</p>
            </div>
            <Link
              href="https://www.hackerrank.com/certificates/31128d542756"
              target="_blank"
            >
              <p className="underline">Hackerrank</p>
            </Link>
          </div>
          {/* hackerrank problem solving */}
          <div>
            <div className="flex justify-between w-full items-end">
              <h1 className="uppercase font-semibold">
                Problem Solving (Basic)
              </h1>
              <p>2021</p>
            </div>
            <Link
              href="https://www.hackerrank.com/certificates/ffe35cd73917"
              target="_blank"
            >
              <p className="underline">Hackerrank</p>
            </Link>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div className="h-[40rem] w-full rounded-3xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
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
              <h1 className=" text-xs md:text-sm font-thin z-10 text-center">
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
        <div className="flex justify-between w-full font-thin text-thin absolute bottom-4 pl-10 pr-10 text-neutral-400">
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

export default About;
