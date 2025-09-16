'use client'
import { gsap } from "gsap";
// import {rocket} from "../public/rocket.png";
import Center from "../components/center";
import { useEffect } from "react";
const Home=()=>{
      
  const launch=()=>{
    gsap.to(".circle", {
      duration: 1,
      delay: 1,
      y: -900,
      // rotation: 360,
      scale: 0,
      // repeat: -1,
      // yoyo: true,
      ease: "linear",
      stagger: 1,
    });
  }
  
    return(
        <>
       <div className="h-screen bg-[url('/bgblack.jpg')] bg-cover bg-center">
        <div className="text-white h-20 w-full flex p-10 justify-between text-3xl cursor-pointer">
            <div className="">
               <h1 className="text-xl">BHAVISHA PORTFOLIO</h1>
            </div>
            <div >
                <ul className="flex gap-20">
                    <li className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">About</li>
                    <li className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">Project</li>
                    <li className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">Contact</li>
                </ul>
            </div>
        </div>
        <div>
            <Center/>
        </div>
        {/* gsap.to(".box", {duration: 2, x:300, rotation:360, scale:0.5}); */}
        <div onClick={launch} className="circle   bg-[url('/rocket.png')] bg-cover bg-center active:scale-95 cursor-pointer  bg-white w-20 h-20 absolute bottom-0 m-10 rounded-full">
            
        </div>
      </div>
        </>
    )
}
export default Home;
