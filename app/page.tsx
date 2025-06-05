'use client'
import Logo from "./components/Logo";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'


export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navLinks = [
    { href: "#ourprojects", label: "Our Projects", number: "01" },
    { href: "#services", label: "Services", number: "02" },
    { href: "#news", label: "News", number: "03" },
    { href: "#aboutus", label: "About Us", number: "04" },
  ];

  const projects = [
    {
      href: 'https://invoicen.keizerworks.com/',
      title: 'Invoicen',
      category: 'SAAS',
      src: '/project-1.webp',
      colSpan: 'md:col-span-2 md:row-span-2',
    },
    {
      href: 'https://github.com/keizerworks/keizer-auth',
      title: 'Keizer Auth',
      category: 'SAAS',
      src: '/project-2.webp',
      colSpan: 'md:col-span-1 md:row-span-2',
    },
    {
      href: 'https://youtu.be/idODK_SqBSg',
      title: 'Uni DAO',
      category: 'Metaverse, DAO',
      src: '/project-3.webp',
      colSpan: 'md:col-span-1 md:row-span-1',
    },
    {
      href: 'http://knight-fall.vercel.app/',
      title: 'Knight Fall',
      category: 'Gaming, Blockchain',
      src: '/project-4.webp',
      colSpan: 'md:col-span-2 md:row-span-1',
    },
  ]

  const services = [
    {
      id: 1,
      title: 'BUILD',
      line: 'End-to-End Application Development',
      description: 'From concept to launch, we build high-quality full-stack applications tailored to your startup’s needs.'
    }, {
      id: 2,
      title: 'GROW',
      line: 'Marketing & Growth Strategy',
      description: 'Leverage branding, SEO, and user acquisition strategies to expand your reach and maximize engagement.'
    }, {
      id: 3,
      title: 'CONNECT',
      line: 'Funding & Investor Network',
      description: 'Gain access to venture capitalists and investors to secure the financial boost your startup needs.'
    }, {
      id: 4,
      title: 'PRODUCT DESIGN',
      line: 'User Experience & Interface Design',
      description: 'Create intuitive, engaging user experiences that enhance usability and increase conversion rates.'
    }, {
      id: 5,
      title: 'TECH INNOVATION',
      line: 'Scalable Software Architecture',
      description: 'Develop robust, scalable systems to support your startup’s growth and evolving business needs.'
    }, {
      id: 6,
      title: 'SMART SOLUTION',
      line: 'AI & Machine Learning Integration',
      description: 'Enhance decision-making and automate processes with AI-powered solutions tailored to your business.'
    },

  ]

  return (
    <>
      <nav className="w-full fixed top-0 z-[50] text-white bg-black/50 flex justify-between items-center transition-all duration-300 ease-in-out md:h-[130px] h-[80px] px-5 lg:px-10 backdrop-blur-lg md:backdrop-blur-md">
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

          <div className="group relative gotham w-fit text-black grotesk mt-[0.5rem] md:text-6xl font-bold translate-x-2">
            <div className="absolute inset-0 translate-x-2 translate-y-2 w-full h-full bg-[#1e96fc] z-0" />
            <div className="absolute inset-0 bg-white z-10 transition-all group-active:-translate-x-2 group-active:translate-y-2" />
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

      <section className="bg-white text-black">
        <div className="md:p-[6.25rem] px-[1.5rem] py-[3.75rem] mx-auto max-w-[96rem]">
          <div className="flex items-center justify-start gap-[13rem]">
            <div className="gotham">
              <p>OUR CLIENTS</p>
              <h2 className="md:text-[3.375rem] w-[30rem] tracking-tigh text-[2rem] font-bold leading-[100%]">
                We’re going to
                <br className="hidden md:inline-block" />
                be partners
                <br className="hidden md:inline-block" />
                for the long run.
              </h2>
            </div>
            <p className="grotesk font-normal w-[30rem] text-xl">
              Through innovative design and technology, we
              <br className="hidden md:inline-block" />
              <span className="font-semibold">deliver exceptional
                solutions</span> tailored to <span className="font-bold">
                <br className="hidden md:inline-block" />
                create impactful experiences</span> that last a lifetime.
            </p>
          </div>
          <div className="grid pt-[3.75rem] grid-cols-1 md:grid-cols-3 gap-[1.875rem] py-[0.5rem]">
            {projects.map(({ href, title, category, src, colSpan }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative h-[13.75rem] overflow-hidden rounded-[0.3125rem] sm:h-[17.5rem] md:h-[26.375rem] ${colSpan}`}
              >
                <Image
                  alt={title}
                  loading="lazy"
                  width={400}
                  height={400}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ color: 'transparent' }}
                  src={src}
                />
                <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-[1.25rem] md:p-[2.5rem]">
                  <h3 className="text-xl font-medium text-zinc-100 md:text-2xl">{title}</h3>
                  <p className="mt-[0.3125rem] text-sm text-zinc-300">{category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="overflow-hidden h-auto relative bg-[#161619]">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:0.8125rem_0.8125rem]">
        </div>

        <div className="relative flex justify-between gap-[11rem] z-10 max-w-[96rem] mx-auto md:px-[6.25rem] px-[1.5rem] md:py-[9.375rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <p className="font-bold">KEIZER WORKS</p>
            <h2 className="md:text-[3.125rem] w-fit grotesk text-nowrap text-[2rem] font-bold leading-tight">
              Empowering startups
              <br className="hidden md:inline-block" />
              to build, grow,
              <br className="hidden md:inline-block" />
              and connect with
              <br className="hidden md:inline-block" />
              the right resources.
            </h2>
            <button className="grotesk translate-x-1 group relative w-fit mt-8 bg-white text-black font-semibold px-[1rem] text-lg py-[0.5rem]">Contact Now</button>
            <div className="relative mt-[6rem] w-max h-max overflow-visible">
              <Image
                src="/decoration-text.svg"
                alt="Decoration"
                width={100}
                height={100}
                priority
                quality={100}
                className="scale-[8] origin-top-left"
              />
            </div>
          </div>

          <div className="flex gap-x-[3rem] gap-y-[4rem] flex-wrap">
            {
              services.map(item => (
                <div key={item.id} className="w-[18rem] space-y-4">
                  <p className="font-medium text-sm">{`${item.id} ${item.title}`}</p>
                  <div className="h-[0.0625rem] bg-white/30" />
                  <h3 className="font-bold text-2xl">{item.line}</h3>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section id="news" className="bg-white text-black">
        <div className="mx-auto max-w-[96rem] px-[1.5rem] py-[3.75rem] md:p-[6.25rem]">
          <header className="flex items-end justify-between">
            <div>
              <span className="text-[0.9375rem] font-bold">NEWS</span>
              <h2 className="text-[2rem] font-semibold md:text-[3.375rem]">News archive.</h2>
            </div>
            <Link
              href="#news"
              className="group hidden items-center gap-[0.625rem] md:flex"
            >
              Show all post
              <ArrowRight
                className="h-[1.5rem] w-[1.5rem] opacity-60 transition-all group-hover:translate-x-[0.0625rem] group-hover:opacity-100"
                strokeWidth={2}
                stroke="currentColor"
              />
            </Link>
          </header>
          <div>Coming soon...</div>
          <Link
            href="#"
            className="group flex items-center justify-center gap-[0.625rem] md:hidden"
          >
            Show all post
            <ArrowRight
              className="h-[1.5rem] w-[1.5rem] opacity-0 transition-all group-hover:translate-x-[0.125rem] group-hover:opacity-100"
              strokeWidth={2}
              stroke="currentColor"
            />
          </Link>
        </div>
      </section>

      <section id="aboutus" className="bg-[#17171A]">
        <div className="mx-auto max-w-[96rem] flex flex-col xl:gap-0 relative px-[1.5rem] py-[3.75rem] md:p-[6.25rem]">
          <header className="relative w-full">
            <span className="text-[0.9375rem] uppercase">About us</span>
            <h2 className="relative z-50 font-bold capitalize text-[2.8125rem] leading-[3.125rem] md:text-[4.375rem] md:leading-[5rem] lg:text-[6rem] lg:leading-[6.25rem] sm:pt-0 pt-[0.625rem]">
              <span className="relative gotham z-10">
                We save <br />
                businesses <br />
                from ineffective <br /> & ugly designs.
              </span>
              <Image
                src="/paint-brush.svg"
                className="absolute bottom-0 z-0 w-[80%] translate-y-[40%] xl:w-auto"
                alt="paint-decoration"
                width={0}
                height={0}
                sizes="100vw"
              />
            </h2>
            <Image
              src="/keizer-bg-blue.svg"
              className="absolute top-0 right-0 z-10 hidden aspect-square object-cover w-[40.625rem] xl:block"
              alt="keizer-grid"
              width={650}
              height={650}
            />
          </header>
          <Image
            src="/keizer-bg-blue.svg"
            className="mt-[4.375rem] block w-full xl:hidden"
            alt="keizer-grid"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="relative z-40 mt-[6rem] text-[1rem] md:w-1/3 md:text-[1.25rem]">
            <p>
              We help your startup grow by leveraging smart marketing strategies
              designed to reach the right audience and scale effectively. From
              branding to performance marketing, we ensure that your product gains
              the visibility and traction it deserves.
            </p>
          </div>
        </div>
      </section>


      <section
        className="w-full bg-[#2D2DC3] text-white flex flex-col md:flex-row items-start pt-[6.25rem] pb-[6.25rem] md:p-[6rem] px-[1rem] mx-auto md:max-w-[105rem] overflow-hidden"
      >
        <div className="flex flex-col w-full">
          <p className="gotham text-xs">COLLABORATION</p>

          <div className="group relative gotham w-fit text-black grotesk mt-[2rem] md:text-6xl font-bold translate-x-2">
            <div className="absolute inset-0 -translate-x-2 translate-y-2 w-full h-full bg-[#1e96fc] z-0" />
            <div className="absolute flex flex-col inset-0 bg-white z-10 transition-all group-active:-translate-x-2 group-active:translate-y-2" />
            <p className="relative z-20 inline-block mt-2 mx-2 transition-all duration-300">Have a Vision?</p>
            <br className="hidden md:inline-block" />
            <p className="relative z-20 inline-block transition-all mb-2 mx-2 duration-300">Time to make it reality</p>
          </div>

          <br className="hidden md:inline-block" />

          <div className="h-[0.01rem] my-[1rem] bg-white w-full"></div>
          <p className="my-[0.75rem]">Get your MVP to market—fast. We help startups build, scale, and launch with the right strategy,
            <br className="hidden md:inline-block" />
            resources, and execution.</p>

          <form className="">
            <div className="mb-6">
              <input type="text" placeholder="Enter your name" className="w-full md:py-[30px] py-[20px] bg-transparent border-b border-white text-white focus:outline-none" name="name" defaultValue="" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Enter your email" className="w-full md:py-[30px] py-[20px] bg-transparent border-b border-white text-white focus:outline-none" name="email" defaultValue="" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Enter your company name" className="w-full md:py-[30px] py-[20px] bg-transparent border-b border-white text-white focus:outline-none" name="company" defaultValue="" />
            </div>
            <div className="mb-6">
              <input type="text" placeholder="Enter your project name" className="w-full md:py-[30px] py-[20px] bg-transparent border-b border-white text-white focus:outline-none" name="project" defaultValue="" />
            </div>
          </form>


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
              <p className="flex gap-1 text-gray-400 justify-between items-center">Send <ArrowRight size={20} /> </p>

            </a>
          </button>
        </div>
      </section>


    </>
  );
}
