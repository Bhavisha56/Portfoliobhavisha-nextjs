"use client"
import { useEffect } from "react";
import gsap from "gsap";

export default function CardSkill() {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        rotate: 360,
        duration: 3,
        stagger: 0.2,   // animate one after another
        ease: "bounce.out",
        repeat: -1, // repeat indefinitely
      }
    );
  }, []);

  const skills = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-6 ml-20 text-black">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="card bg-white w-24 h-28 rounded-xl shadow-md flex flex-col items-center justify-center p-2"
        >
          <img src={skill.src} alt={skill.name} className="w-12 h-12" />
          <p className="text-xs font-semibold mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
