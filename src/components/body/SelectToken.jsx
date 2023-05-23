import React from "react";

const SelectToken = ({setToken}) => {
    const style = "bg-green-400 p-2 rounded-full flex gap-2 font-bold cursor-pointer"
   

return (
   <div className="flex justify absolute">
    <div className="bg-green-300 border-2 p-2">
    <h1>select a token</h1>
    <div className={style} onClick={setToken()}><div className="bg-green-600 h-7 w-7 rounded-full "/>ETH</div>
    <div className={style} onClick={setToken()}><div className="bg-green-600 h-7 w-7 rounded-full "/>WETH</div>
    </div>
   </div>
)
}
export default SelectToken;

///0x54BAE47798a01E6fd9bD7B3eE86172458cB9fF29 this the token addres deployed on ganache
