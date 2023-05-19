import React from "react";
const hover = ""
const Navbar = () => {
    return(
         <div className=" flex items-center justify-center bg-black gap-10 w-screen overflow-y-hidden pb-5">
    <div className="bg-green-400 p-4 rounded-full font-bold mt-5">
      <nav className="flex gap-6 text-xl">
        <span className={hover}>swap</span>
        <span>pool</span>
        <span>about</span>
      </nav>
    </div>
    
    <button className="text-green-400 pt-5 font-bold">Connect</button>
  </div>)
 
    }; 

export default Navbar;