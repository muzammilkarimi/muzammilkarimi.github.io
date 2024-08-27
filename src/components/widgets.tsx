"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaLocationArrow } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
const Widgets: React.FC = () => {
  return (
    <>
      <main>
        <div className="flex gap-5 flex-wrap justify-center mt-8">
          {/* logo widget */}
          <div className="w-32 md:w-64 h-32 md:h-64 bg-neutral-300 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <Image
              className=""
              alt="logo"
              src="/meem logo.png"
              width={180}
              height={180}
            />
            <h1 className="text-md md:text-4xl md:mb-2">The LOGO</h1>
          </div>
          {/* spotify widget */}
          <div className="w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <div className="flex justify-between">
              <IoPlayCircleOutline className="text-white text-2xl md:text-5xl" />
              <FaSpotify className="text-green-500 text-3xl md:text-6xl" />
            </div>
            <div className="">
              <h1 className="text-green-600 md:text-3xl">Spotify</h1>
              <h1 className="text-white text-md md:text-xl font-sans">
                Not Playing
              </h1>
            </div>
          </div>
          {/* weather widget */}
          <div className="w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-500 to-blue-300 rounded-3xl flex flex-col p-4 justify-between shadow-lg border-neutral-700 border-2">
            <div className="flex text-center items-center gap-2">
              <FaLocationArrow className="text-orange-300 text-2xl md:text-3xl md:mt-1 md:ml-2" />
              <span className="text-white font-sans text-xs md:text-md">Patna, Bihar</span>
            </div>
            <div className="">
              <h1 className=" md:text-3xl text-orange-300">Weather</h1>
              <h1 className="text-white text-md md:text-xl font-sans">
                Not found
              </h1>
            </div>
          </div>

          {/* charging widget
          <div className="w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl flex flex-col p-4 justify-between shadow-lg">
            <div>
              <p id="time">
                
              </p>
            </div>s
          </div> */}
        </div>
      </main>
    </>
  );
};
export default Widgets;
