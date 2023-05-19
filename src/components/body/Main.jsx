import React,{useEffect,useState} from "react";

import {FcSettings} from "react-icons/fc";

const Main = () => {

    const [priceA, setPriceA] = useState("")
    const [priceB, setPriceB] = useState("")
    const changeValA=(event)=> {setPriceA(event.target.value)}
    const changeValB=(event) => {setPriceB(event.target.value)}
    const [balanceA, setBalanceA] = useState("33")
    return ( 
        <div className="flex justify-center">
        <div className="border-2 border-black my-20 w-[25em] rounded-md py-1">
        <div className="flex justify-between px-5">

        <div className="">
            <span>
              Swap
            </span>
            <span className="pl-5">
              buy
            </span>
            </div>
            <FcSettings className="h-8 w-8"/>
        </div>

        <div className="flex justify-center flex-col">
            <form className="flex flex-col gap-1 p-2">
            <div className="p-2 border-2 border-black rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValA} value={priceA} className="outline-none h-10 text-3xl w-[10em]" type="number"  style={{ appearance: "textfield", MozAppearance: "textfield" }}/>
                <div className="">ETH</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="">{priceB * 2262}</div>
                <div>{balanceA}</div></div>
              
                </div>
                <div className="p-2 border-2 border-black rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValB} value={priceB} className="outline-none h-10 text-3xl w-[10em]" type="number"  style={{ appearance: "textfield", MozAppearance: "textfield" }}/>
                <div className="">ETH</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="">{priceB * 2262}</div>
                <div>{balanceA}</div></div>
                
                </div>
                <button className="font-bold border-2 border-black bold bg-green-300 w-auto text-2xl h-auto text-white rounded-md  px-20 py-3" type="submit">Connect Wallet</button>
            </form>
        </div>
    </div>
  </div>         
  )
}
export default Main;