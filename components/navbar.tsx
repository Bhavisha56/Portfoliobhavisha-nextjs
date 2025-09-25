export default function navbar() {
    return(
        <>
        <div className="text-white h-20 w-full flex p-10 fixed top-0 z-50 justify-between text-3xl cursor-pointer">
            <div className="">
               <h1 className="text-xl">BHAVISHA PORTFOLIO</h1>
            </div>
            <div >
                <ul className="flex gap-20">
                  <li> <a href="#about" className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">About</a></li>
                    <li><a href="#project" className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">Project</a></li>
                   <li> <a href="#contact"  className="hover:text-lime-400 active:translate-y-0.5 transition-transform ">Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}