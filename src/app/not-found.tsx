import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black font-sans">
      <div className="text-center px-4">
        <h1 className="text-6xl font-black text-neutral-900 dark:text-white mb-4">404</h1>
        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
          The reality you are looking for does not exist in this quantum state.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm hover:opacity-80 transition-opacity"
        >
           Return to Base
        </Link>
      </div>
    </div>
  );
}
