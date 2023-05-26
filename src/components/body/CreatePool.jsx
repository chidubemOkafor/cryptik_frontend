import {FiArrowLeft} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"

const CreatePool = () => {
    return (
    <div className="flex justify-center bg-gradient-to-r from-black via-gray-900 to-green-500 h-screen w-screen ">
        <div className="w-[48em]">
          <div className="border border-gray-600 mt-10 rounded-md p-5">
            <div className="flex justify-between border-b border-gray-600  pb-5">
              <FiArrowLeft className="w-6 h-6 text-gray-300"/>
              <hi className="text-2xl font-bold text-white">Add Liquidity</hi>
              <p className="text-green-400">clear All</p>
            </div>
            <div className="pt-5"> {/*left*/}
                <h1 className="text-white text-xl font-bold">Select Pair</h1>
                <div className="flex pt-5 gap-5">
                <span className="flex bg-green-600 rounded-full p-2 w-[10em]">
                    <div className="h-7 w-7 rounded-full bg-green-100"/>
                    <p className="pl-3 text-white font-bold">ETH</p> 
                </span>
                <span className="flex bg-green-600 rounded-full p-2 w-[10em]">
                    <div className="h-7 w-7 rounded-full bg-green-100 gap-2"/>
                    <p className="pl-3 text-white font-bold">WETH</p>
                </span>
                </div>
                <h1 className="text-white text-xl font-bold pt-5">Deposit Amounts</h1>
                <div className="w-[22em]">
                    <div className="bg-green-400 rounded-md p-3 mt-5 shadow">
                        <div className="flex">
                        <input type="number" min="0" max="1000000" className="outline-none bg-green-400 text-2xl w-[9em] font-bold" />
                    <div className="flex bg-green-500 hover:bg-green-600 rounded-full p-2 w-[10em]">
                       <div className="h-7 w-7 rounded-full bg-green-300"/>
                       <p className="pl-3 text-black font-bold">ETH</p> 
                       <BiChevronDown className="h-6 w-6"/>
                    </div>
                    </div>
                    <div className=" flex justify-between">
                        <p>{}</p>
                        <p>balance: {}</p>
                    </div>
                    </div>
                    <div className="bg-green-400 rounded-md mt-5 p-3 gap-2 shadow">
                        <div className="flex">   
                            <input type="number" min="0" max="1000000" className="outline-none bg-green-400 text-2xl w-[9em] font-bold" />
                    <div className="flex bg-green-500 hover:bg-green-600 rounded-full p-2 w-[10em]">
                        <div className="h-7 w-7 rounded-full bg-green-300"/>
                        <p className="pl-3  font-bold">ETH</p> 
                        <BiChevronDown className="h-6 w-6"/>
                    </div>
                    </div>
                     
                    <div className="flex justify-between">
                         <p>{}</p>
                        <p>balance: {}</p>
                    </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>  
    </div>
    )
}
export default CreatePool