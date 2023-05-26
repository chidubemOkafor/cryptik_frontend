import React from "react";
import {Link} from "react-router-dom"

import {MdPool} from "react-icons/md"

const Pool = () => {
 return (
    <div className="flex justify-center bg-gradient-to-r from-black via-gray-900 to-green-500 h-screen w-screen ">
    <div className="w-[48em] overflow-hidden">
        <div className="flex gap-10 justify-between pt-10">
            <h1 className="text-white text-4xl font-bold">Pools</h1>
            <span className="bg-green-500 text-white font-bold py-2 hover:bg-green-600 cursor-pointer px-4 rounded-full"><Link to="/CreatePool">+ New Position</Link></span>
        </div>
        <div className="bg-transparent backdrop-blur-md border border-white mt-5 rounded-md flex justify-center items-center">
        <div className="w-[25em] text-white flex justify-center flex-col items-center my-14">
            <MdPool className="w-16 h-16"/>
        <p className="">
            Your active liquidity positions will appear here.
        </p>
        </div>
        
        </div>
    </div>

    
    </div>
 )
}

export default Pool