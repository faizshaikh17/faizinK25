'use client'
import Logo from "./components/Logo";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

const navLinks = [
  { href: "#ourprojects", label: "Our Projects", number: "01" },
  { href: "#services", label: "Services", number: "02" },
  { href: "#news", label: "News", number: "03" },
  { href: "#aboutus", label: "About Us", number: "04" },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full fixed top-0 z-[1000] text-white bg-black/50 flex justify-between items-center transition-all duration-300 ease-in-out md:h-[130px] h-[80px] px-5 lg:px-10 backdrop-blur-md md:backdrop-blur-none">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-1 cursor-pointer fade-in-blur-left-0">
            <Logo />
          </a>
          <div className="flex items-center gap-10 lg:gap-[75px] fade-in-0 duration-1000 animate-in">
            <ul className="hidden md:flex gap-7 lg:gap-9 text-sm md:text-base">
              {navLinks.map(({ href, label, number }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative font-mono font-light tracking-[-1%] whitespace-nowrap group"
                  >
                    <span className="absolute top-[-100%] right-0 text-[9px] opacity-70 group-hover:opacity-100 transition-all ease-in-out translate-y-2">
                      {number}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-white hover:bg-neutral-300 text-black text-base font-bold rounded w-[102px] h-[36px] flex items-center justify-center"
            >
              Let's talk
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
