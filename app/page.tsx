'use client'
import Logo from "./components/Logo";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({});
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
    },
    {
      id: 2,
      title: 'GROW',
      line: 'Marketing & Growth Strategy',
      description: 'Leverage branding, SEO, and user acquisition strategies to expand your reach and maximize engagement.'
    },
    {
      id: 3,
      title: 'CONNECT',
      line: 'Funding & Investor Network',
      description: 'Gain access to venture capitalists and investors to secure the financial boost your startup needs.'
    },
    {
      id: 4,
      title: 'PRODUCT DESIGN',
      line: 'User Experience & Interface Design',
      description: 'Create intuitive, engaging user experiences that enhance usability and increase conversion rates.'
    },
    {
      id: 5,
      title: 'TECH INNOVATION',
      line: 'Scalable Software Architecture',
      description: 'Develop robust, scalable systems to support your startup’s growth and evolving business needs.'
    },
    {
      id: 6,
      title: 'SMART SOLUTION',
      line: 'AI & Machine Learning Integration',
      description: 'Enhance decision-making and automate processes with AI-powered solutions tailored to your business.'
    },
  ]

  const faqs = [
    {
      title: 'What does an MVP include?',
      description: 'Our MVPs are designed to help you launch quickly and effectively. They include full-stack development services, starting from a custom design and front-end prototype to a fully functional, customer-ready product. We focus on building scalable, high-quality solutions tailored to your business goals. This ensures your product is ready to test in the market with core features while leaving room for future enhancements.'
    },
    {
      title: 'What are the intellectual property rights?',
      description: 'At Keizer, we believe in empowering our clients. All intellectual property created during the project, including designs, code, and documentation, will belong to you upon completion of the project and final payment. We provide all the necessary files and access to ensure you have full control over your product without any restrictions or hidden terms.'
    },
    {
      title: 'How do we communicate during the project?',
      description: 'We ensure seamless communication throughout the project to keep you informed and involved. Our process includes regular updates, milestone reviews, and dedicated points of contact for any queries or feedback. We typically use tools like email, video calls, and project management platforms to ensure transparency and timely updates. Your input is integral to achieving the best results, and we make collaboration a priority.'
    },
    {
      title: 'What if I need more features than the MVP includes?',
      description: 'We understand that businesses evolve and so do their needs. If you require more features beyond the MVP scope, we are happy to accommodate them. We work closely with you to plan and prioritize additional features, ensuring they align with your business objectives. This flexibility allows us to scale your product as your startup grows, without compromising on quality or timelines.'
    },
    {
      title: 'What if I’m not satisfied with the product?',
      description: 'Your satisfaction is our top priority. Throughout the development process, we incorporate your feedback and provide revisions to ensure the product meets your expectations. In the unlikely event that you’re not satisfied with the final delivery, we are open to discussing adjustments or providing partial refunds in accordance with our policy. Our goal is to deliver a product that truly adds value to your business.'
    },
  ]

  return (
    <>
      <nav className="w-full fixed top-0 z-[50] text-white bg-black/50 flex justify-between items-center transition-all duration-300 ease-in-out md:h-[100px] h-[80px] px-5 lg:px-10 backdrop-blur-lg md:backdrop-blur-md">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-1 cursor-pointer fade-in-blur-left-0">
            <Logo />
          </a>
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className={clsx(
            "flex items-center gap-10 lg:gap-[75px] fade-in-0 duration-1000 animate-in",
            isNavOpen ? "flex flex-col absolute top-[80px] left-0 w-full bg-black/90 p-5" : "hidden md:flex"
          )}>
            <ul className="mono flex flex-col md:flex-row gap-7 lg:gap-9 text-sm md:text-base">
              {navLinks.map(({ href, label, number }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative font-mono font-light tracking-tight whitespace-nowrap group"
                    onClick={() => setIsNavOpen(false)}
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
              onClick={() => setIsNavOpen(false)}
            >
              Let’s talk
            </a>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between pt-[100px] md:pt-[200px] pb-[50px] md:pb-[100px] px-4 md:px-10 lg:px-24 mx-auto max-w-[1536px] md:h-screen md:max-h-[800px] overflow-hidden"
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            className="flex flex-col items-center md:items-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] relative gotham"
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

          <p className="grotesk text-sm sm:text-base md:text-lg mt-4 max-w-md mx-auto md:mx-0">
            We are the trusted partner for startups and businesses, offering
            innovative solutions that turn your ideas into impactful realities
          </p>

          <button
            type="button"
            className="group relative mt-6 sm:mt-8 text-white grotesk font-medium px-6 py-2 sm:px-4 sm:py-2 md:text-lg text-sm translate-x-1"
          >
            <div className="absolute inset-0 -translate-x-1 translate-y-1 w-full h-full bg-white z-0" />
            <div className="absolute inset-0 bg-[#2d2dc3] z-10 transition-all group-active:-translate-x-1 group-active:y-1" />
            <a
              href="#contact"
              className="relative z-20 inline-block transition-all duration-300 group-active:-translate-x-1 group-active:y-1"
            >
              Request a Demo
            </a>
          </button>
        </div>

        <div className="relative mt-6 sm:mt-[50px] md:mt-0 flex-shrink-0 w-[320px] sm:w-[380px] md:w-[412px] aspect-square mx-auto">
          <Image
            src="/keizer-bg-blue.svg"
            alt="keizer-logo"
            fill
            className="absolute inset-0 z-30 object-cover"
          />
          <div className="absolute inset-0 z-10 translate-x-3 translate-y-3 bg-white" />
          <div className="absolute inset-0 z-0 translate-x-6 translate-y-6 bg-[#1e96fc]" />
        </div>
      </section>

      <section
        className="w-full bg-[#2D2DC3] text-white flex flex-col items-center md:items-start md:flex-row md:h-screen md:max-h-[32.3125rem] pt-[80px] md:pt-[100px] pb-[80px] md:pb-[100px] px-4 sm:px-6 md:px-[120px] mx-auto max-w-[1536px] overflow-hidden"
      >
        <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
          <p className="gotham text-lg sm:text-xl">Why</p>

          <div className="group relative gotham w-fit text-black grotesk mt-2 sm:mt-[0.5rem] text-4xl sm:text-5xl md:text-6xl font-bold translate-x-2 mx-auto md:mx-0">
            <div className="absolute inset-0 translate-x-2 translate-y-2 w-full h-full bg-[#1e96fc] z-0" />
            <div className="absolute inset-0 bg-white z-10 transition-all group-active:-translate-x-2 group-active:translate-y-2" />
            <p className="relative z-20 inline-block transition-all duration-300">Keizer?</p>
          </div>

          <p className="mt-6 sm:mt-[2rem] text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[800px] md:max-w-[896px] mx-auto md:mx-0">
            At Keizer-Works, we are dedicated to transforming visions into impactful
            solutions. Our mission is to empower startups and businesses with a
            combination of cutting-edge tools, innovative design, and strategic
            marketing. Whether you need a robust product, a scalable MVP, or the
            tools to grow, we are your trusted partner every step of the way
          </p>

          <button
            type="button"
            className="group relative mt-6 sm:mt-[2rem] w-fit text-white grotesk font-medium px-4 sm:px-[1rem] py-2 sm:py-[0.5rem] text-sm sm:text-base md:text-lg translate-x-1 mx-auto md:mx-0"
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

      <section id="ourprojects" className="bg-white text-black">
        <div className="p-6 sm:p-10 md:p-[100px] mx-auto max-w-[1536px]">
          <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-[200px]">
            <div className="gotham text-center md:text-left">
              <p className="text-sm sm:text-base">OUR PROJECTS</p>
              <h2 className="text-2xl sm:text-3xl md:text-[3.5rem] w-full sm:w-[480px] tracking-tight font-bold leading-[1.1]">
                We’re going to
                for the long run.
              </h2>
            </div>
            <p className="grotesk font-normal text-sm sm:text-base md:text-xl w-full sm:w-[480px] text-center md:text-left">
              Through innovative design and technology, we
              <span className="font-semibold">deliver exceptional
                solutions</span> tailored to <span className="font-bold">
                create impactful experiences</span> that last a lifetime.
            </p>
          </div>
          <div className="grid pt-6 sm:pt-10 md:pt-[60px] grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-[30px] py-2">
            {projects.map(({ href, title, category, src, colSpan }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative h-[220px] sm:h-[280px] md:h-[422px] overflow-hidden rounded-[5px] ${colSpan}`}
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
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-3 sm:p-5 md:p-[40px]">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-100">{title}</h3>
                  <p className="mt-1 sm:mt-[5px] text-xs sm:text-sm text-zinc-300">{category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="overflow-hidden relative bg-[#161616]">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:13px_13px]">
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-[16px] z-10 max-w-[1536px] mx-auto px-4 md:px-6 lg:px-[100px] py-10 md:py-[150px]">
          <div className="flex flex-col gap-2 w-full md:w-1/2 text-center md:text-left">
            <p className="font-bold text-sm sm:text-sm">KEIZER WORKS</p>
            <h2 className="text-2xl sm:text-3xl md:text-[50px] w-full sm:w-fit grotesk text-nowrap font-bold leading-tight">
              Empowering startups
              to connect with
              the right resources.
            </h2>
            <button
              type="submit"
              className="grotesk translate-x-1px group relative w-fit mt-6 sm:mt-8 bg-white text-black font-semibold px-4 sm:px-[1rem] py-1 sm:py-[0.5rem] text-sm sm:text-base md:text-lg mx-auto md:mx-auto md:mx-0">
              Contact Now
            </button>
            <div className="relative mt-10 sm:mt-[30px] w-max h-max w-full overflow-visible hidden md:block">
              <Image
                src="/decoration-text.svg"
                alt="Decoration"
                width={150}
                height={100}
                priority
                quality={100}
                className="scale-[2] sm:scale-[3] md:scale-[4.5] origin-top-left"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-x-10 sm:gap-y-[40px] md:gap-x-[48px] mt-6 md:mt-0">
            {
              services.map(item => (
                <div key={item.id} className="w-full sm:w-[280px] md:w-[288px] space-y-2">
                  <p className="font-medium text-xs sm:text-sm">{`${item.id}. ${item.title}`}</p>
                  <div className="h-[1px] bg-white/30" />
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">{item.line}</h3>
                  <p className="text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section >

      <section id="news" className="bg-white text-black">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:p-[100px] py-6 sm:p-py-[60px]">
          <header className="flex flex-col sm:flex-row items-center md:items-end justify-between gap-2">
            <div className="text-center md:text-left">
              <span className="text-sm sm:text-[15px] font-bold">NEWS</span>
              <h2 className="text-2xl sm:text-3xl md:text-[54px] font-semibold">News archive.</h2>
            </div>
            <Link
              href="#news"
              className="group hidden sm:flex items-center gap-2 sm:gap-[10px] mt-4 sm:mt-0"
            >
              Show all post
              <ArrowRight
                className="h-5 sm:h-[24px] w-5 sm:w-[24px] opacity-60 transition-all group-hover:translate-x-[1px] group-hover:opacity-100"
                strokeWidth={2}
                stroke="currentColor"
              />
            </Link>
          </header>
          <div className="text-center sm:text-left mt-4 sm:mt-6">Coming soon...</div>
          <Link
            href="#"
            className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-[10px] sm:hidden mt-4"
          >
            Show all post
            <ArrowRight
              className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-[2px] group-hover:opacity-100"
              strokeWidth={2}
              stroke="currentColor"
            />
          </Link>
        </div>
      </section>

      <section id="aboutus" className="bg-[#171717]">
        <div className="mx-auto max-w-[1536px] flex flex-col xl:flex-row gap-6 xl:gap-0 relative px-4 md:px-6 lg:px-[100px] py-6 md:py-[60px]">
          <header className="relative w-full xl:w-2/3 text-center xl:text-left">
            <span className="text-sm sm:text-[15px] uppercase">About us</span>
            <h2 className="relative z-50 font-bold capitalize text-2xl sm:text-4xl md:text-[70px] leading-tight sm:leading-[80px] pt-2 sm:pt-[10px]">
              <span className="relative gotham z-10">
                We save
                businesses
                from ineffective
                & ugly designs.
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
              className="absolute top-0 right-0 z-10 hidden aspect-square object-cover w-[650px] xl:block"
              alt="keizer-grid"
              width={650}
              height={650}
            />
          </header>
          <Image
            src="/keizer-bg-blue.svg"
            className="mt-6 sm:mt-[70px] block w-full xl:hidden"
            alt="keizer-grid"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="relative z-40 mt-6 sm:mt-[96px] text-sm sm:text-base md:text-xl w-full md:w-1/3 text-center xl:text-left">
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
        className="w-full bg-[#2D2DC3] text-white flex flex-col items-center md:items-start pt-[80px] md:pt-[100px] pb-[80px] md:pb-[100px] px-4 sm:px-6 md:px-[96px] mx-auto max-w-[1680px] overflow-hidden"
      >
        <div className="flex flex-col w-full max-w-[1280px] mx-auto">
          <p className="gotham text-xs sm:text-sm text-center md:text-left">COLLABORATION</p>

          <div className="group relative gotham w-fit text-black grotesk mt-4 sm:mt-[32px] text-4xl sm:text-5xl md:text-6xl font-bold translate-x-2 mx-auto md:mx-0">
            <div className="absolute inset-0 -translate-x-2 translate-y-2 w-full h-full bg-[#1e96fc] z-0" />
            <div className="absolute flex flex-col inset-0 bg-white z-10 transition-all group-active:-translate-x-2 group-active:translate-y-2" />
            <p className="relative z-20 inline-block mt-2 mx-2 transition-all duration-300">Have a Vision?</p>
            <p className="relative z-20 inline-block mb-2 mx-2 transition-all duration-300">Time to make it reality</p>
          </div>

          <div className="h-[1px] my-4 sm:my-[16px] bg-white w-full"></div>
          <p className="my-3 sm:my-[12px] text-sm sm:text-base text-center md:text-left">Get your MVP to market—fast. We help startups build, scale, and launch with the right strategy,
            resources, and execution.</p>

          <div className="w-full max-w-[800px] mx-auto">
            <div className="mb-4 sm:mb-6">
              <input type="text" placeholder="Enter your name" className="w-full py-4 sm:py-[20px] md:py-[30px] bg-transparent border-b border-white text-white text-sm sm:text-base focus:outline-none" name="name" defaultValue="" />
            </div>
            <div className="mb-4 sm:mb-6">
              <input type="text" placeholder="Enter your email" className="w-full py-4 sm:py-[20px] md:py-[30px] bg-transparent border-b border-white text-white text-sm sm:text-base focus:outline-none" name="email" defaultValue="" />
            </div>
            <div className="mb-4 sm:mb-6">
              <input type="text" placeholder="Enter your company name" className="w-full py-4 sm:py-[20px] md:py-[30px] bg-transparent border-b border-white text-white text-sm sm:text-base focus:outline-none" name="company" defaultValue="" />
            </div>
            <div className="mb-4 sm:mb-6">
              <input type="text" placeholder="Enter your project name" className="w-full py-4 sm:py-[20px] md:py-[30px] bg-transparent border-b border-white text-white text-sm sm:text-base focus:outline-none" name="project" defaultValue="" />
            </div>
          </div>

          <button
            type="button"
            className="group relative mt-6 sm:mt-[32px] w-fit text-white grotesk font-medium px-4 sm:px-[16px] py-2 sm:py-[8px] text-sm sm:text-base md:text-lg translate-x-1 mx-auto md:mx-0"
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

      <section className="w-full bg-black text-white flex flex-col items-center pt-[80px] md:pt-[100px] pb-[80px] md:pb-[100px] px-4 sm:px-6 md:px-[96px] mx-auto max-w-[1680px] overflow-hidden">
        <div className="flex flex-col w-full max-w-[1280px] mx-auto">
          <p className="text-sm sm:text-base text-center md:text-left">COLLABORATION</p>
          <h1 className="gotham text-4xl sm:text-5xl md:text-6xl text-center md:text-left">Frequently asked questions</h1>

          <div className="flex flex-col w-full mt-6 sm:mt-8 gap-3 sm:gap-4">
            {faqs.map((item, index) => (
              <div
                key={item.title}
                className="px-3 sm:px-4 py-4 sm:py-6 dropdown rounded-xl bg-[#151616] flex flex-col justify-center items-start"
              >
                <div className="flex w-full mx-2 text-xs sm:text-sm text-gray-300 justify-between items-center">
                  <p>{item.title}</p>
                  <p
                    className="mx-4 cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    {openIndexes[index] ? "Close" : "Open"}
                  </p>
                </div>
                {openIndexes[index] && (
                  <p className="text-xs sm:text-sm dropdown-menu mx-2 mt-3 sm:mt-4">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 sm:mt-[192px] mb-10 sm:mb-[96px] flex flex-col lg:flex-row justify-between items-center w-full gap-6">
            <p className="text-xl sm:text-2xl md:text-[24px] leading-tight font-bold text-center lg:text-left">Join our newsletter<br className="lg:block md:hidden block" />to stay up to date with us</p>
            <div className="h-10 sm:h-12 text-sm sm:text-base w-full sm:w-[448px] text-gray-300 px-3 sm:px-4 bg-[#161515] flex items-center justify-between rounded-md">
              <input
                type="email"
                defaultValue=""
                placeholder="Enter your email"
                className="bg-transparent outline-none placeholder-gray-500 flex-1 text-xs sm:text-sm"
              />
              <button className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="h-[1px] bg-white/30 w-full"></div>
        </div>
      </section>

      <footer id="footer" className="text-white bg-black">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-[100px] pb-10 sm:pb-[64px]">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <Image
                alt="keizer-brand-logo"
                loading="lazy"
                width={175}
                height={80}
                decoding="async"
                className="mx-auto lg:mx-0 md:translate-x-0 translate-x-[-15px]"
                src="/keizerlogo.svg"
              />
              <p className="max-w-[350px] text-neutral-400 mt-3 sm:mt-4 mx-auto lg:mx-0">
                Empowering Visionaries, Scaling Ambitions.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-0 lg:flex lg:space-x-10 xl:space-x-[64px] text-center lg:text-left">
              <div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 font-semibold">Navigate</h3>
                <ul className="space-y-2 sm:space-y-[10px]">
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#">Keizer</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#ourprojects">Project</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#services">Strategy</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#aboutus">About Us</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#news">News</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#contact">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 font-semibold">Socials</h3>
                <ul className="space-y-2 sm:space-y-[10px]">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-400 active:text-neutral-600 transition-colors"
                      href="https://github.com/keizerworks"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-400 active:text-neutral-600 transition-colors"
                      href="https://x.com/keizerHq"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-black bg-white text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-[100px] py-2 sm:py-4">
            <span className="font-medium text-sm sm:text-base">© 2025 keizerworks. All rights reserved.</span>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
              <li><a href="#">Terms Of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}