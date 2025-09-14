'use client'
import Center from "../components/center";
const Home=()=>{
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
        <div>
            
        </div>
      </div>
        </>
    )
}
export default Home;
