"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Center from "../components/center";
import Cardskill from "../components/cardskill";
import Footer from "../components/footer"
import ProjectCard from "../components/project"
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

    // Stagger animation for aboutlines
   
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative ">
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

      <div
        ref={containerRef}
        className="flex w-[600vw] h-screen overflow-x-hidden overflow-y-hidden scrollbar-hide"
      >
        <section className="panel w-screen h-screen flex flex-col items-center justify-center bg-[url('/ai.jpg')] bg-cover bg-center">
          <Center />
        </section>

        {/* AboutSection */}
        <section className="panel  bg-[url('/Gemini.png')] bg-opacity--20  bg-cover bg-center w-screen h-screen flex items-center justify-center ">
          <div className="text-2xl text-center text-white  font-mono  w-96 relative  right-52 h-56 font-bold">
            <p className="aboutlines ">I am a MERN Stack Developer and a B.Tech student in Electronics and
            Communication Engineering at NSUT (2021–2025). I have hands-on
            experience in building full-stack applications using React, Node.js,
            Express, and MongoDB. I enjoy solving problems, designing scalable
            applications, and exploring the intersection of software.</p>
            <div className="flex justify-center mt-4 gap-4 ">
            <button className="bg-lime-400 active:bg-lime-300 cursor-pointer transition-all ease-in-out  text-black p-2 rounded-3xl">Resume</button>
            <button className="hover:bg-zinc-900 active:bg-zinc-800 transition-all ease-in-out delay-50 duration-300 cursor-pointer p-2 rounded-2xl text-white ">Github</button>
            </div>
          </div>
          <div className=" bg-cover bg-center mt-40 border-4 border-lime-400 rounded-2xl shadow-lg shadow-black">
            <img className=" w-56 " src="/profo.png" alt="" />
          </div>
        </section>

        {/* SkillsSection */}
        <section className="panel bg-[url('/Gemini.png')] w-screen h-screen flex flex-col items-center justify-center ">
         <div className="">
          <Cardskill/>

         </div>
        </section>

        {/* Projects Section */}
        <section className="panel bg-[url('/Gemini.png')] bg-opacity--20  bg-cover bg-center w-screen h-screen flex items-center justify-center ">
          <div className="grid grid-cols-4">

          <ProjectCard/>
          </div>
        </section>

        {/* Contact Section */}
        <section className="panel w-screen h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 to-red-700">
          <h1 className="text-6xl font-bold">📬 Contact</h1>
        </section>
      </div>
      <div className=" left-0 w-full z-50 bg-transparent">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
