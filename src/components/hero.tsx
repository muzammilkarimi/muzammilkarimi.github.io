"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";
import { Button } from "./ui/moving-border";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Mail,
  YouTube,
} from "@mui/icons-material";

const Hero: React.FC = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-neutral-700 dark:text-white leading-relaxed lg:leading-snug mx-auto "
      >
        <div className="w-full flex justify-center rounded-3xl items-center flex-col gap-8 p-2 pt-32 mb-7 md:mb-10 relative">
          <div className="rounded-full bg-neutral-200 items-center ">
            <Image
              className="rounded-full p-2"
              alt="MAK photo"
              src="/facecrop.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="gap-3 flex flex-col ">
            <p className="text-[color:var(--blue)] font-sans">
              <span className="wave text-3xl">👋🏽 </span> Hello I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-[color:var(--blue)] tracking-wide">
              Muzammil Ahmad Karimi
            </h1>
            <Highlight className="text-black p-2">
              <p className="text-center text-xs md:text-lg text-[color:var(--blue)] uppercase font-light font-sans ">
                Aspiring <strong>Computer Science</strong> student |
                <span className="font-bold"> gate cs&apos;24 qualified</span>
              </p>
            </Highlight>
          </div>
          <div className="flex gap-5 justify-center items-center mb-5">
            <Button
              borderRadius="1.75rem"
              className="bg-neutral-100 flex justify-center gap-5 font-sans text-black border-neutral-200 hover:border-black border-2 duration-300"
            >
              <h1 className="text-base">Resume</h1>
              <IoDocumentText size={30} />
            </Button>
            <div className="">
              <Link
                href="https://www.linkedin.com/in/muzammilakarimi/"
                target="_blank"
                className="text-xl  hover:text-blue-700 duration-300 "
              >
                <div className="text-black">
                  <LinkedIn fontSize="large" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <Highlight className="text-black dark:text-white">
          Muzammil Ahmad Karimi
        </Highlight> */}
      </motion.h1>
    </HeroHighlight>
  );
};
export default Hero;
