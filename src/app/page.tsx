"use client";
import Image from "next/image";
import "cal-sans";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Mail,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import {
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
  FaReact,
  FaArrowCircleRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import {
  SiCanva,
  SiAdobelightroom,
  SiSupabase,
  SiAdobepremierepro,
  SiPrisma,
  SiAuth0,
  SiVisualstudiocode,
} from "react-icons/si";
import {
  BiLogoCPlusPlus,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Widgets from "../components/widgets";

export default function Home() {
  // cpp c python html js css tailwindcss react js node js express js mongo db sql nextjs

  return (
    <div className="">
      <main className="flex flex-col items-center m-2 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12 mt-5">
        <Navbar />
        <div className="absolute z-10 invisible md:visible  top-10 left-6 flex justify-start">
          <Image
            className=""
            alt="MAK photo"
            src="/meem logo.png"
            width={50}
            height={50}
          />
        </div>
        <div className="z-0 w-full relative mt-10">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>

          <Hero />
        </div>

        {/* greeting section */}

        <div className=" w-full flex justify-center rounded-3xl items-center flex-col p-5 text-xl md:text-5xl  my-10 tracking-wide text-neutral-700">
          <h1>Guide us to the straight path</h1>
          <p className="text-sm font-medium font-sans">AL FATIHA 6</p>
        </div>

        {/* skills section */}

        <div className="w-full flex flex-col md:flex-row gap-7 rounded-3xl mb-7 font-sans">
          {/* left side  */}
          <div className=" bg-[#D9D9D9] p-5 rounded-3xl md:w-[100vw] border-2 border-neutral-500 ">
            {/* heading */}
            <div className="bg-neutral-700 p-1 rounded-md w-40 text-center text-white">
              Dev and language
            </div>
            {/* skills */}
            <div className="flex justify-between gap-2 md:gap-10 mt-5 flex-wrap md:mr-10 items-center">
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <TbBrandNextjs size={45} />
                <p className="font-bold">Nextjs</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center">
                <BiLogoCPlusPlus size={45} />
                <p className="font-bold">Cpp</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center">
                <FaPython size={45} />
                <p className="font-bold">Python</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center">
                <FaReact size={45} />
                <p className="font-bold">React</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <BiLogoTailwindCss size={45} />
                <p className="font-bold">Tailwind</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <BiLogoJavascript size={45} />
                <p className="font-bold">Javascript</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <BiLogoNodejs size={45} />
                <p className="font-bold">Node</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <BiLogoMongodb size={45} />
                <p className="font-bold">Mongodb</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <DiMysql size={45} />
                <p className="font-bold">Sql</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="bg-[#D9D9D9] w-full rounded-3xl p-5 text-white  border-2 border-neutral-500">
            <div className="bg-neutral-700 p-1 rounded-md w-20 text-center">
              Tools
            </div>
            {/* tools: git github vs code figma ms office canva automation anywhere */}
            <div className="flex justify-between gap-2 md:gap-10 mt-5 flex-wrap md:mr-8">
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <FaGitAlt size={45} />
                <p className="font-bold">Git</p>
              </div>

              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <FaGithub size={45} />
                <p className="font-bold">Github</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <FaFigma size={45} />
                <p className="font-bold">Figma</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiCanva size={45} />
                <p className="font-bold">Canva</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiVisualstudiocode size={45} />
                <p className="font-bold">VS code</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiAdobelightroom size={45} />
                <p className="font-bold">Lightroom</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiSupabase size={45} />
                <p className="font-bold">Supabase</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiAdobepremierepro size={45} />
                <p className="font-bold">PremierPro</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiPrisma size={45} />
                <p className="font-bold">Prisma</p>
              </div>
              <div className="text-neutral-600 flex flex-col items-center text-center ">
                <SiAuth0 size={45} />
                <p className="font-bold">Auth0</p>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        {/* project section */}

        {/* PROJECTS */}
        <div className="flex flex-col w-full gap-7 md:gap-10 font-sans">
          {/* velsecho */}
          <div className="w-full bg-[url('/velsecho.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-10 pt-6 border-2 border-black">
            {/* logo */}
            <div className="flex flex-col gap-3">
              <div className="rounded-full bg-white w-20 h-20 p-2">
                <Image
                  className="rounded-full "
                  alt="medman logo"
                  src="/velsecho_logo.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="bg-black p-1 text-white rounded-md w-24 font-semibold text-center">
                VelsEcho
              </div>
            </div>
            {/* project details */}
            <div className="w-min rounded-3xl flex gap-3 text-white flex-col bg-black p-4 border-2 border-neutral-200">
              <h2 className="text-4xl font-bold">
                Design & <br /> Development
              </h2>
              <p className="text-xl leading-relaxed">
                An AI chatbot for vels university trained on vels website using{" "}
                <span className="bg-neutral-600 px-1 rounded-md">Nextjs,</span>{" "}
                <span className="bg-neutral-600 px-1 rounded-md">
                  OpenAI gpt,
                </span>{" "}
                <span className="bg-neutral-600 px-1 rounded-md">LLM,</span>{" "}
                <span className="bg-neutral-600 px-1 rounded-md">
                  Embedding
                </span>{" "}
                &{" "}
                <span className="bg-neutral-600 px-1 rounded-md">
                  langchain{" "}
                </span>{" "}
                🚀
              </p>
            </div>
            {/* link */}
            <Link
              href="https://github.com/muzammilkarimi/velsecho"
              target="_blank"
              className="text-xl font-medium w-40"
            >
              <div className=" bg-white rounded-full  gap-5 h-14 flex justify-center items-center font-semibold border-2 border-black">
                Github
                <GitHub fontSize="large" className="" />
              </div>
            </Link>
          </div>
          {/* questionpapers */}
          <div className="w-full bg-[url('/qp.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-5 border-2 border-black">
            {/* logo */}
            <div>
              <Image
                className="rounded-full p-2"
                alt="Questionspaper logo"
                src="/qp_logo.png"
                width={120}
                height={120}
              />
              <div className="bg-[#FF914D] p-1 text-white rounded-md w-36 font-semibold  text-center">
                Questionspaper
              </div>
            </div>
            {/* project details */}
            <div className="w-min rounded-3xl text-white flex gap-3 flex-col bg-[#ff914d] p-4  border-2 border-neutral-200 ">
              <h2 className="text-4xl font-bold ">
                Design & <br /> Development
              </h2>
              <p className="text-xl leading-relaxed">
                full-stack application that combines the power of{" "}
                <span className="bg-neutral-700 px-1 rounded-md">Next.js,</span>{" "}
                <span className="bg-neutral-700 px-1 rounded-md">
                  Tailwind CSS,
                </span>{" "}
                <span className="bg-neutral-700 px-1 rounded-md">
                  Supabase,
                </span>{" "}
                <span className="bg-neutral-700 px-1 rounded-md">
                  NextAuth,
                </span>{" "}
                <span className="bg-neutral-700 px-1 rounded-md">
                  Prisma Client,
                </span>{" "}
                &{" "}
                <span className="bg-neutral-700 px-1 rounded-md">
                  PostgreSQL.
                </span>
                🚀
              </p>
            </div>
            {/* link */}
            <Link
              href="https://github.com/muzammilkarimi/questionpapers"
              target="_blank"
              className="text-xl font-medium w-40 "
            >
              <div className=" bg-white rounded-full w-40 gap-5 h-14 flex justify-center items-center font-semibold border-2 border-neutral-600">
                Github
                <FaGithub size={30} />
              </div>
            </Link>
          </div>

          {/* madman project */}
          <div className="w-full bg-[url('/medman.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-8 pt-4 border-2 border-black">
            {/* logo */}
            <div className="flex flex-col gap-3">
              <Image
                className="rounded-full p-2"
                alt="medman logo"
                src="/medman_logo.png"
                width={100}
                height={100}
              />
              <div className="bg-[#004E83] p-1 text-white rounded-md w-24 font-semibold pl-2 text-center">
                Med-Man
              </div>
            </div>
            {/* project details */}
            <div className="w-min rounded-3xl flex text-white gap-3 flex-col bg-[#004E83] p-4 border-2 border-neutral-200">
              <h2 className="text-4xl font-bold">
                Design & <br /> Development
              </h2>
              <p className="text-xl leading-relaxed">
                CURD application for medical store using{" "}
                <span className="bg-neutral-800 px-1 rounded-md">HTML,</span>{" "}
                <span className="bg-neutral-800 px-1 rounded-md">PHP,</span>{" "}
                <span className="bg-neutral-800 px-1 rounded-md">CSS,</span>{" "}
                <span className="bg-neutral-800 px-1 rounded-md">AJAX,</span>{" "}
                <span className="bg-neutral-800 px-1 rounded-md">
                  XAMMPP server
                </span>{" "}
                & <span className="bg-neutral-800 px-1 rounded-md">SQL.</span>
                🚀
              </p>
            </div>
            {/* link */}
            <Link
              href="https://github.com/muzammilkarimi/medicine-manager"
              target="_blank"
              className="text-xl font-medium w-40 "
            >
              <div className=" bg-white rounded-full w-40 gap-5 h-14 flex justify-center items-center font-semibold border-2 border-[#004E83] ">
                Github
                <GitHub fontSize="large" className="" />
              </div>
            </Link>
          </div>
        </div>

        {/* about me btn */}
        <div className="w-full flex justify-center gap-5 mt-10 ">
          <Link href="/about">
            <button className=" p-2 rounded-3xl w-40 font-semibold font-sans flex justify-center items-center gap-3 hover:gap-5 duration-300 border-2 border-black">
              ABOUT ME
              <FaLongArrowAltRight size={20} />
            </button>
          </Link>
        </div>

        {/* widgets */}
        <Widgets /> 
        {/* contact section */}

        <Footer />
      </main>
    </div>
  );
}

// cpp c python html js css tail windcss react js node js express js mongo db sql nextjs
// tools: git github vs code figma ms office canva automation anywhere
