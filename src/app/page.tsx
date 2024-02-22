"use client";
import Image from "next/image";
import { LinkedIn, GitHub, Instagram, Mail } from "@mui/icons-material";
import Link from "next/link";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
export default function Home() {
  // const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("apr 24, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copytoclipboard = () => {
    toast.success("Email Id copied!");
    navigator.clipboard.writeText("muzammil.a.karimi@gmail.com");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly  ">
      <div className="text-center flex w-72 justify-between font-bold">
        <div>
          <h2>{days}</h2>
          <p>Days</p>
        </div>
        <div>
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <div>
          <h2>{minutes}</h2>
          <p>Minutes</p>
        </div>
        <div>
          <h2>{seconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <Image
          src="./portfoliopic.jpg"
          alt="Muzammil Ahmad Karimi"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4 flex text-center ">
          Muzammil Ahmad Karimi
        </h1>
        <p className="text-lg text-gray-500 mt-2 flex text-center font-bold">
          Code in progress: A Computer Science student journey unfolding. Stay
          tuned!
        </p>
      </div>
      <div className=" flex flex-row justify-evenly w-80">
        <Link
          href="https://github.com/muzammilkarimi"
          target="_blank"
          className="text-xl  hover:text-gray-700 duration-300"
        >
          <GitHub fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/muzammilakarimi/"
          target="_blank"
          className="text-xl  hover:text-blue-700 duration-300 "
        >
          <LinkedIn fontSize="large" />
        </Link>
        <Link
          href="https://www.instagram.com/muzammilkarimiiiii/"
          target="_blank"
          className="text-xl  hover:text-pink-700 duration-300"
        >
          <Instagram fontSize="large" />
        </Link>

        <div
          onClick={copytoclipboard}
          className="text-xl p-0 cursor-pointer hover:text-green-700 duration-300"
        >
          <Mail fontSize="large" />
        </div>
        <Toaster />
      </div>
      <div className="font-semibold" >Made with ❤️ by MAK</div>
    </main>
  );
}
