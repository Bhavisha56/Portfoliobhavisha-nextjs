'use client'
const Home=()=>{
    return(
        <>
       <div className="h-screen bg-[url('/bgblack.jpg')] bg-cover bg-center">
        <div className="text-white h-20 w-full flex p-10 justify-between text-3xl ">
            <div className="">
               <h1 >BHAVISHA PORTFOLIO</h1>
            </div>
            <div >
                <ul className="flex gap-20">
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
      </div>
        </>
    )
}
export default Home;
