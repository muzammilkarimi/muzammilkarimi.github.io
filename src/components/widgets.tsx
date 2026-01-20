"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaLocationArrow } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

const Widgets: React.FC = () => {
  return (
    <>
      <main>
        <div className="flex gap-4 flex-wrap justify-center mt-8 px-2">
          {/* logo widget */}
          <div className="w-[46%] md:w-64 h-40 md:h-64 bg-neutral-300 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <div className="relative w-full h-full flex flex-col justify-between">
              <Image
                className="object-contain"
                alt="logo"
                src="/meem logo.png"
                fill
                sizes="(max-width: 768px) 100px, 180px"
              />
            </div>
            <h1 className="text-sm md:text-3xl font-bold mt-2">The LOGO</h1>
          </div>
          {/* spotify widget */}
          <div className="w-[46%] md:w-64 h-40 md:h-64 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <div className="flex justify-between">
              <IoPlayCircleOutline className="text-white text-3xl md:text-5xl" />
              <FaSpotify className="text-green-500 text-3xl md:text-6xl" />
            </div>
            <div className="">
              <h1 className="text-green-600 text-sm md:text-3xl font-bold">Spotify</h1>
              <h1 className="text-white text-xs md:text-xl font-sans">
                Not Playing
              </h1>
            </div>
          </div>
          {/* weather widget */}
          <div className="w-[46%] md:w-64 h-40 md:h-64 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <div className="flex text-center items-center gap-1 md:gap-2">
              <FaLocationArrow className="text-orange-300 text-lg md:text-3xl" />
              <span className="text-white font-sans text-[10px] md:text-md">Patna, Bihar</span>
            </div>
            <div className="">
              <h1 className="text-sm md:text-3xl text-orange-300 font-bold">Weather</h1>
              <h1 className="text-white text-xs md:text-xl font-sans">
                Not found
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Widgets;
