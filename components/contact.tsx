// import { useState } from "react"
  import { ToastContainer, toast } from 'react-toastify';

// useState
export default function contact(){

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);

          formData.append("access_key", "f5b93ac3-ef38-43e3-aece-e9d45a056e75");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              (event.target as HTMLFormElement).reset();
          }
        toast('Message Send', {
       position: "bottom-center",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
   });
        }
        
    return(
        <>
        {/* <ToastContainer> */}
        <div className="bg-black w-96 h-96 rounded-2xl ">
          <h1 className="text-center p-2 text-3xl">Contact Me</h1>
          <div className="text-center m-10 text-xl">
            <form onSubmit={handleSubmit}>
            <input required className="m-3 bg-white text-black rounded-xl p-2" type="name" name="name" placeholder="name" id="" />
            <input required className="m-3 bg-white text-black rounded-xl p-2" type="email" name="email" placeholder="email" />
            <textarea required className="m-3 w-72 bg-white text-black rounded-xl p-2 resize-none " name="message" placeholder="Enter Your Message" id=""></textarea>
            <button   type="submit" className="hover:bg-lime-500 bg-lime-400 w-32 h-8 rounded-2xl">Submit</button>
         </form>
          </div>
        </div>
        <ToastContainer/>
        </>
    )
}