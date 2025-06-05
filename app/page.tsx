'use client'
import Logo from "./components/Logo";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";



export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navLinks = [
    { href: "#ourprojects", label: "Our Projects", number: "01" },
    { href: "#services", label: "Services", number: "02" },
    { href: "#news", label: "News", number: "03" },
    { href: "#aboutus", label: "About Us", number: "04" },
  ];

  
  return (
    <>
      <nav className="w-full fixed top-0 z-[1000] text-white bg-black/50 flex justify-between items-center transition-all duration-300 ease-in-out md:h-[130px] h-[80px] px-5 lg:px-10 backdrop-blur-md md:backdrop-blur-none">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-1 cursor-pointer fade-in-blur-left-0">
            <Logo />
          </a>
          <div className="flex items-center gap-10 lg:gap-[75px] fade-in-0 duration-1000 animate-in">
            <ul className="hidden mono md:flex gap-7 lg:gap-9 text-sm md:text-base">
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
              Let’s talk
            </a>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="w-full bg-black text-white flex flex-col md:flex-row items-start md:h-screen md:max-h-[800px] md:pt-[200px] pt-[100px] pb-[100px] md:px-24 px-4 mx-auto md:max-w-[1536px] overflow-hidden"
      >
        <div className="w-full relative gotham">
          <h1
            className="flex flex-col items-start text-5xl md:text-6xl lg:text-8xl leading-[100%] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="flex items-start gap-6">
              <span className="tracking-tight">Your</span>
              <span className="relative">
                <span className="tracking-tight">Vision</span>
                <span className="relative block h-2 w-full overflow-hidden">
                  <span
                    className={clsx(
                      'absolute bottom-0 left-0 h-2 bg-[#ff66ff] transition-all duration-300 ease-in',
                      !isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                    )}
                  />
                </span>
              </span>
            </span>
            <span className="flex items-start gap-6">
              <span className="tracking-tight">Our</span>
              <span className="relative">
                <span className="tracking-tight">Mission</span>
                <span className="relative block h-2 w-full overflow-hidden">
                  <span
                    className={clsx(
                      'absolute bottom-0 left-0 h-2 bg-[#ff66ff] transition-all duration-300 ease-in',
                      isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                    )}
                  />
                </span>
              </span>
            </span>
          </h1>

          <p className="grotesk  text-sm md:text-lg mt-4">
            We are the trusted partner for startups and businesses, offering
            <br className="hidden md:inline-block" />
            innovative solutions that turn your ideas into impactful realities
          </p>

          <button
            type="button"
            className="group relative mt-8 text-white grotesk font-medium px-4 py-2 md:text-lg translate-x-1"
          >
            <div className="absolute inset-0 -translate-x-1 translate-y-1 w-full h-full bg-white z-0" />
            <div className="absolute inset-0 bg-[#2d2dc3] z-10 transition-all group-active:-translate-x-1 group-active:translate-y-1" />
            <a
              href="#contact"
              className="relative z-20 inline-block transition-all duration-300 group-active:-translate-x-1 group-active:translate-y-1"
            >
              Request a Demo
            </a>
          </button>
        </div>


        <div className="relative mt-[50px] flex-shrink-0 w-[380px] md:w-[412px] aspect-square mx-auto md:ml-0">
          <Image
            src="/keizer-bg-blue.svg"
            alt="keizer-logo"
            fill
            className="absolute inset-0 z-30 object-cover"
          />
          <div className="absolute inset-0 z-10 -translate-x-3 translate-y-3 bg-white" />
          <div className="absolute inset-0 z-0 -translate-x-6 translate-y-6 bg-[#1e96fc]" />
        </div>
      </section>

      <section
        className="w-full bg-[#2D2DC3] text-white flex flex-col md:flex-row items-start md:h-screen md:max-h-[32.3125rem] pt-[6.25rem] pb-[6.25rem] md:px-[6rem] px-[1rem] mx-auto md:max-w-[96rem] overflow-hidden"
      >
        <div className="flex flex-col">
          <p className="gotham text-xl">Why</p>

          <div className="group relative gotham w-fit text-black grotesk mt-[0.5rem] md:text-6xl font-bold translate-x-1">
            <div className="absolute inset-0 translate-x-2 translate-y-2 w-full h-full bg-[#1e96fc] z-0" />
            <div className="absolute inset-0 bg-white z-10 transition-all group-active:-translate-x-1 group-active:translate-y-1" />
            <p className="relative z-20 inline-block transition-all duration-300">Keizer?</p>
          </div>

          <p className="mt-[2rem] text-xl w-[56rem]">
            At Keizer-Works, we are dedicated to transforming visions into impactful
            solutions. Our mission is to empower startups and businesses with a
            combination of cutting-edge tools, innovative design, and strategic
            marketing. Whether you need a robust product, a scalable MVP, or the
            tools to grow, we are your trusted partner every step of the way
          </p>

          <button
            type="button"
            className="group relative mt-[2rem] w-fit text-white grotesk font-medium px-[1rem] py-[0.5rem] md:text-lg translate-x-1"
          >
            <div className="absolute inset-0 -translate-x-1 translate-y-1 w-full h-full bg-white z-0" />
            <div className="absolute inset-0 bg-black z-10 transition-all group-active:-translate-x-1 group-active:translate-y-1" />
            <a
              href="#services"
              className="relative z-20 inline-block transition-all duration-300 group-active:-translate-x-1 group-active:translate-y-1"
            >
              Explore more
            </a>
          </button>
        </div>
      </section>




    </>
  );
}
