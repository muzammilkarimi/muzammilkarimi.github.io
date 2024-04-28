"use client";
import Image from "next/image";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Mail,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import {
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip } from "@nextui-org/tooltip";
import {
  SiCanva,
  SiAdobelightroom,
  SiSupabase,
  SiAdobepremierepro,
  SiPrisma,
  SiAuth0,
} from "react-icons/si";
import {
  BiLogoCPlusPlus,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import Navbar from "../components/navbar";
import { BackgroundBeams } from "../components/ui/background-beams";
export default function Home() {
  // cpp c python html js css tailwindcss react js node js express js mongo db sql nextjs
  const copytoclipboard = () => {
    toast.success("Email Id copied!");
    navigator.clipboard.writeText("muzammil.a.karimi@gmail.com");
  };

  return (
    <main className="flex flex-col items-center bg-black m-2 md:m-7 mr:4 ml:4 md:mr-12 md:ml-12 mt-5">
      <Navbar />

      <div className="bg-[#D9D9D9] w-full flex justify-center rounded-3xl items-center flex-col gap-8 p-2 pt-32 mb-7 md:mb-10 overflow-hidden">
        <div className="rounded-full bg-white items-center ">
          <Image
            className="rounded-full p-2"
            alt="MAK photo"
            src="/facecrop.jpg"
            width={200}
            height={200}
          />
        </div>
        <div className="gap-3 flex flex-col ">
          <p className="uppercase text-[color:var(--blue)]">
            <span className="wave text-5xl">👋🏽 </span> Hello I&apos;M
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-center uppercase text-[color:var(--blue)]">
            Muzammil Ahmad Karimi
          </h1>
          <p className="text-center text-sm md:text-md text-[color:var(--blue)] uppercase font-light ">
            Aspiring <strong>Computer Science</strong> student |
            {" gate cs'24 qualified "}
            <span className="word"></span>
          </p>
        </div>
        <div className="flex gap-8 justify-center items-center mb-5">
          <div className="bg-white rounded-full bg-opacity-30 w-48 gap-5 h-14 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            Get Resume
            <DownloadForOfflineIcon fontSize="large" />
          </div>
          <div className="flex gap-5">
            {/* <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] hidden md:visible">
              <GitHub fontSize="large" />
            </div> */}
            <Link
              href="https://www.linkedin.com/in/muzammilakarimi/"
              target="_blank"
              className="text-xl  hover:text-blue-700 duration-300 "
            >
              <div className="bg-white rounded-full bg-opacity-30 w-14 h-14 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                <LinkedIn fontSize="large" />
              </div>
            </Link>
          </div>
        </div>
        {/* <Meteors number={20} /> */}
        <div className="flex gap-1 flex-col mb-1">
          <div className="w-2 h-8 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* greeting section */}

      <div className="bg-[#D9D9D9] text-[color:var(--blue)] w-full flex justify-center rounded-3xl items-center flex-col p-5 text-xl md:text-5xl font-sans">
        <h1>GUIDE US TO THE STRAIGHT PATH</h1>
        <p className="text-sm font-thin">AL FATIHA 6</p>
      </div>

      {/* skills section */}
      <div className="invisible md:visible md:text-9xl font-extrabold flex justify-start w-full font-sans mb-5 ">
        <h1 className="">SKILLS</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-7 rounded-3xl">
        {/* left side  */}
        <div className=" bg-[#D9D9D9] p-5 rounded-3xl md:w-[100vw] ">
          {/* heading */}
          <div className="bg-[#004E83] p-1 rounded-md w-40 text-center">
            Dev and language
          </div>
          {/* skills */}
          <div className="flex justify-between gap-2 md:gap-3 mt-5 flex-wrap md:mr-8">
            <Tooltip
              showArrow={true}
              content="C++"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <BiLogoCPlusPlus size={70} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="html"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaHtml5 size={55} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="css"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaCss3 size={50} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="python"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaPython size={60} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="node js"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaNodeJs size={60} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="tailwindcss"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <BiLogoTailwindCss size={70} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="javascript"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <BiLogoJavascript size={70} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="mongodb"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <BiLogoMongodb size={70} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="mysql"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <DiMysql size={70} />
              </div>
            </Tooltip>
            <Tooltip
              showArrow={true}
              content="nextjs"
              placement="bottom"
              color="success"
            >
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <TbBrandNextjs size={70} />
              </div>
            </Tooltip>
          </div>
        </div>
        {/* right side */}
        <div className="bg-[#D9D9D9] w-full rounded-3xl p-5 ">
          <div className="bg-[#004E83] p-1 rounded-md w-20 text-center">
            Tools
          </div>
          {/* tools: git github vs code figma ms office canva automation anywhere */}
          <div className="flex justify-between gap-2 md:gap-3 mt-5 flex-wrap md:mr-8">
            <Tooltip content={"Git"} placement="bottom" color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaGitAlt size={65} />
              </div>
            </Tooltip>
            <Tooltip content={"GitHub"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaGithub size={60} />
              </div>
            </Tooltip>
            <Tooltip content={"Figma"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <FaFigma size={60} />
              </div>
            </Tooltip>
            <Tooltip content={"canva"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiCanva size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"Vscode"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <TbBrandVscode size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"Lightroom"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiAdobelightroom size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"Supabase"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiSupabase size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"premierpro"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiAdobepremierepro size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"Prisma"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiPrisma size={55} />
              </div>
            </Tooltip>
            <Tooltip content={"auth"} color="success">
              <div className="bg-white rounded-full bg-opacity-30 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center text-[color:var(--blue)] shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] ">
                <SiAuth0 size={55} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////// */}
      {/* project section */}
      <div className="invisible md:visible md:text-9xl font-extrabold flex justify-end w-full font-sans mb-5">
        <h1 className="">PROJECTS</h1>
      </div>
      {/* PROJECTS */}
      <div className="flex flex-col w-full gap-7 md:gap-10">
        {/* questionpapers */}

        <div className="w-full bg-[url('/qp.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-5">
          {/* logo */}
          <div>
            <Image
              className="rounded-full p-2"
              alt="Questionspaper logo"
              src="/qp_logo.png"
              width={120}
              height={120}
            />
            <div className="bg-[#FF914D] p-1 rounded-md w-36 font-semibold  text-center">
              Questionspaper
            </div>
          </div>
          {/* project details */}
          <div className="w-min rounded-3xl flex gap-3 flex-col bg-[#ff914d] p-4 ">
            <h2 className="text-4xl font-bold">
              Design & <br /> Development
            </h2>
            <p className="text-xl text-justify">
              full-stack application that combines the power of Next.js,
              Tailwind CSS, Supabase, NextAuth, Prisma Client, and PostgreSQL.
              🚀
            </p>
          </div>
          {/* link */}
          <Link
            href="https://github.com/muzammilkarimi/questionpapers"
            target="_blank"
            className="text-xl font-medium "
          >
            <div className=" bg-white rounded-full bg-opacity-30 w-48 gap-5 h-14 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-white font-semibold">
              Github Link
              <GitHub fontSize="large" />
            </div>
          </Link>
        </div>

        {/* madman project */}
        <div className="w-full bg-[url('/medman.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-8 pt-4">
          {/* logo */}
          <div className="flex flex-col gap-3">
            <Image
              className="rounded-full p-2"
              alt="medman logo"
              src="/medman_logo.png"
              width={100}
              height={100}
            />
            <div className="bg-[#004E83] p-1 rounded-md w-36 font-semibold pl-2 text-start">
              Med-Man
            </div>
          </div>
          {/* project details */}
          <div className="w-min rounded-3xl flex gap-3 flex-col bg-[#004E83] p-4 ">
            <h2 className="text-4xl font-bold">
              Design & <br /> Development
            </h2>
            <p className="text-xl text-justify">
              CURD application for medical store using HTML, PHP, CSS, AJAX,
              XAMMPP server and SQL.🚀
            </p>
          </div>
          {/* link */}
          <Link
            href="https://github.com/muzammilkarimi/medicine-manager"
            target="_blank"
            className="text-xl font-medium "
          >
            <div className=" bg-white rounded-full bg-opacity-30 w-48 gap-5 h-14 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-white ">
              Github Link
              <GitHub fontSize="large" className="" />
            </div>
          </Link>
        </div>

        {/* velsecho */}
        <div className="w-full bg-[url('/velsecho.png')] h-screen bg-cover bg-no-repeat bg-center rounded-3xl flex gap-6 flex-col pl-4 md:pl-8 md:pt-10 pt-6">
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
            <div className="bg-black p-1 rounded-md w-36 font-semibold pl-2 text-start">
              VelsEcho
            </div>
          </div>
          {/* project details */}
          <div className="w-min rounded-3xl flex gap-3 flex-col bg-black p-4 ">
            <h2 className="text-4xl font-bold">
              Design & <br /> Development
            </h2>
            <p className="text-xl text-justify">
              An AI chatbot for vels university trained on vels website using
              Nextjs, OpenAI gpt, LLM, Embedding and langchain, 🚀
            </p>
          </div>
          {/* link */}
          <Link
            href="https://github.com/muzammilkarimi/velsecho"
            target="_blank"
            className="text-xl font-medium "
          >
            <div className=" bg-white rounded-full bg-opacity-30 w-48 gap-5 h-14 flex justify-center items-center shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-black ">
              Github Link
              <GitHub fontSize="large" className="" />
            </div>
          </Link>
        </div>
      </div>

      {/* contact section */}
      <div className="h-[40rem] mt-7 md:mt-10 w-full rounded-3xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
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
              <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold mb-2">
                Want to connect?
              </h1>
              <h1 className=" text-xs md:text-sm font-thin z-10 text-center">
                I’m a computer science student who enjoys creating, exploring,
                and improving.
              </h1>
            </div>
          </div>
          <div className="flex gap-7 justify-center relative z-10 flex-wrap">
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
}

// cpp c python html js css tail windcss react js node js express js mongo db sql nextjs
// tools: git github vs code figma ms office canva automation anywhere
