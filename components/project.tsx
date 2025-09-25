"use client"

// import { useEffect } from "react"
// import gsap from "gsap"

const projects = [
  {
    img: "/ecomm.png",
    title: "Buy It",
    desc: "An eCommerce platform built with MERN stack.",
  },
  {
    img: "/blogger.png",
    title: "Blogger",
    desc: "A blogging platform to share your thoughts.",
  },
  {
    img: "/hotel.png",
    title: "Hotel World",
    desc: "Hotel booking system with user-friendly design.",
  },
  {
    img: "/chess.png",
    title: "Chess",
    desc: "A multiplayer chess game built using HTML,Css,Js.",
  },
]

export default function ProjectCard() {
//   useEffect(() => {
//     gsap.fromTo(
//       ".pcard",
//       { y: 80, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "power3.out",
//       }
//     )
//   }, [])

  return (
    <div className="w-full px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="pcard group bg-zinc-900 rounded-2xl shadow-xl border border-zinc-700 overflow-hidden hover:shadow-lime-400/40 transition-all duration-500"
        >
          <div className="relative">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-sm text-gray-200">{proj.desc}</p>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors duration-300">
              {proj.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}
