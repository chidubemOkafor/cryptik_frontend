import React from "react";
import {AiOutlineWallet} from "react-icons/ai"
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
    <div>
   
    </div>
    <div className="flex text-white items-center pt-5 gap-2">
    <button className="text-green-400  font-bold">Connect</button>
      <AiOutlineWallet className="w-6 h-6"/>
      
    </div>
    
  </div>)
 
    }; 

export default Navbar;