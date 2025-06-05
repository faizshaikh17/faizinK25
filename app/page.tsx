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

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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

      <section id="ourprojects" className="bg-white text-black">
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

      <section className="w-full bg-black text-white flex flex-col md:flex-row items-start pt-[6.25rem] pb-[6.25rem] md:p-[6rem] px-[1rem] mx-auto md:max-w-[105rem] overflow-hidden">
        <div className="flex flex-col w-full">
          <p className="">COLLABORATION</p>
          <h1 className="gotham text-5xl">Frequently asked questions</h1>

          <div className="flex flex-col w-full mt-8 gap-4">
            {faqs.map((item, index) => (
              <div
                key={item.title}
                className="px-4 py-6 dropdown rounded-xl bg-[#151616] flex flex-col justify-center items-start"
              >
                <div className="flex w-full mx-2 text-sm text-gray-300 justify-between items-center">
                  <p>{item.title}</p>
                  <p
                    className="mx-4 cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    {openIndexes[index] ? "Close" : "Open"}
                  </p>
                </div>
                {openIndexes[index] && (
                  <p className="text-sm  dropdown-menu mx-2 mt-4">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-[12rem] mb-[6rem] flex justify-between items-center w-full">
            <p className="text-[24px] leading-[100%] font-bold">Join our newsletter<br className="lg:block md:hidden block" />to stay up to date with us</p>
            <div className="h-12 text-base w-[28rem] text-gray-300 px-4 bg-[#161515] flex items-center justify-between rounded-md">
              <input
                type="email"
                defaultValue=""
                placeholder="Enter your email"
                className="bg-transparent outline-none placeholder-gray-500 flex-1"
              />
              <button className="ml-4 text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="h-[0.01rem] bg-white/30 w-full"></div>
        </div>
      </section>

      <footer id="footer" className="text-white">
        <div className="max-w-[96rem] mx-auto md:px-[6.25rem] px-[1.5rem] pb-[4rem]">
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
            <div>
              <Image
                alt="keizer-brand-logo"
                loading="lazy"
                width={175}
                height={80}
                decoding="async"
                className="md:translate-x-0 translate-x-[-0.94rem]"
                src="/keizerlogo.svg"
              />
              <p className="max-w-[21.88rem] text-neutral-400 mt-4">
                Empowering Visionaries, Scaling Ambitions.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-[4rem]">
              <div>
                <h3 className="text-[1.25rem] mb-3 font-semibold">Navigate</h3>
                <ul className="md:space-y-[0.63rem] space-y-[0.75rem]">
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#">Keizer</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#ourprojects">Project</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#services">Strategy</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#aboutus">About Us</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#news">News</a></li>
                  <li><a className="hover:text-neutral-400 active:text-neutral-600 transition-colors" href="#contact">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[1.25rem] mb-3 font-semibold">Socials</h3>
                <ul className="space-y-[0.63rem]">
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
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 w-full max-w-[96rem] mx-auto md:px-[6.25rem] px-[1.5rem] py-2">
            <span className="font-medium">© 2025 keizerworks. All rights reserved.</span>
            <ul className="flex gap-6 text-sm font-medium">
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