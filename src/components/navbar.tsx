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
    <nav className="flex justify-center z-50 font-sans">
      <div className="fixed top-6 w-fit h-12 px-6 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-neutral-200 dark:border-white/10 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        {links.map((navLink, index) => (
        <Link key={navLink.name} href={navLink.link}>
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors hover:text-black dark:hover:text-white"
          >
            <span className="relative z-10">{navLink.name}</span>
            {hoveredIndex === index && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        </Link>
      ))}
      </div>
      {/* <Meteors number={20} /> */}
    </nav>
  );
};

export default Navbar;
