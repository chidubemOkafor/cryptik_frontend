import React from "react";
import {AiOutlineWallet} from "react-icons/ai"
import {Link} from "react-router-dom"
import Pool from "../navbar/Pool"

const Navbar = () => {
    return(
    <div className="relative flex items-center justify-center bg-black gap-10 w-screen overflow-hidden pb-5">
      <div className="border border-gray-200 p-4 rounded-md font-bold mt-5">
        <nav className="flex gap-6 text-green-400 text-xl">
        <span className="cursor-pointer"><Link to="/">swap</Link></span>
        <span className="cursor-pointer"><Link to="Pool">pool</Link></span>
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