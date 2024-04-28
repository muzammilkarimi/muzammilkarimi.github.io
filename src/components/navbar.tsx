import React from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center z-10">
      <div className="fixed top-8 w-80 h-12 rounded-3xl bg-white bg-opacity-30 shadow-[inset_0px_4px_4px_0px_#0003] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] items-center text-center flex justify-center m-0 p-0">
        <ul className="flex justify-evenly text-center text-[color:var(--blue)] w-80 ">
          <Link href="/">
            <li className="cursor-pointer hover:bg-[#00000024] rounded-xl px-2 p-1 duration-300">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:bg-[#00000024] rounded-xl px-2 p-1 duration-300">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:bg-[#00000024] rounded-xl px-2 p-1 duration-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      {/* <Meteors number={20} /> */}
    </nav>
  );
};

export default Navbar;
