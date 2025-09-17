"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Center from "../components/center";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);


  return (
    <div className="min-h-screen bg-zinc-900 text-white relative ">
     
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

  
      <div 
      ref={containerRef} className="flex w-[600vw] h-screen overflow-x-hidden overflow-y-hidden scrollbar-hide">
      
        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[url('/bgblack.jpg')] bg-cover bg-center">
          <Center />
        </section>

        {/* AboutSection */}
        <section className="panel w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-800">
          <h1 className="text-6xl font-bold">👋 About</h1>
        </section>

        {/* SkillsSection */}
        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-emerald-700">
          <h1 className="text-6xl font-bold mb-6">🛠 Skills</h1>
          <ul className="text-2xl space-y-4">
            <li>⚡ JavaScript / TypeScript</li>
            <li>⚡ React / Next.js</li>
            <li>⚡ Node.js / Express</li>
            <li>⚡ MongoDB / SQL</li>
            <li>⚡ Tailwind CSS / GSAP</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="panel w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-800">
          <h1 className="text-6xl font-bold">🚀 Projects</h1>
        </section>

        {/* Contact Section */}
        <section className="panel w-screen h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 to-red-700">
          <h1 className="text-6xl font-bold">📬 Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default Home;
