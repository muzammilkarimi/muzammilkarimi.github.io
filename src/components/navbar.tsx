import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Navbar: React.FC = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blogs",
    },
    
  ];
  return (
    <nav className="flex justify-center z-10 font-sans">
      <div className="fixed top-8 w-80 h-12 rounded-3xl bg-white border-2 border-neutral-500 items-center text-center flex justify-center m-0 p-0">
        {links.map((navLink, index) => (
        <Link key={navLink.name} href={navLink.link}>
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-5 py-3 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span className="relative z-10">{navLink.name}</span>
          </div>
        </Link>
      ))}
      </div>
      {/* <Meteors number={20} /> */}
    </nav>
  );
};

export default Navbar;
