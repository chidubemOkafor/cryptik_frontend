import {FiArrowLeft} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"
import {useState} from "react"
import TokenCreateA from "./tokenCreate/TokenCreateA"

const CreatePool = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [tokenA, setTokenA] = useState("ETH")
    const [tokenB, setTokenB] = useState("USDT")
    const [balanceA, setBalanceA] = useState(0)
    const [balanceB, setBalanceB] = useState(0)
    const [AorB, setAorB] = useState(false)
    const handleToggle1 = () => {
        setAorB(false)
        setToggle1(!toggle1)
        setToggle2(false)
    }
    const handleToggle2 = () => {
        setAorB(true)
        setToggle2(!toggle2)
        setToggle1(false)
    }
    return (
    <div className="flex justify-center">
        <div className="w-[24.5em]">
            {toggle1 ? 
            <TokenCreateA setToggle1={setToggle1} toggle1={toggle1} setBalanceA={setBalanceA} AorB={AorB} setTokenA={setTokenA}/> : <></>    
            }
            {toggle2 ? <TokenCreateA setToggle2={setToggle2} toggle2={toggle2} setBalanceB={setBalanceB} AorB={AorB} setTokenB={setTokenB} /> : <></>}

          <div className="border border-gray-600 mt-1 rounded-md p-5 ">
            <div className="flex justify-between border-b border-gray-600 pb-4">
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
                    <div className="flex bg-green-500 hover:bg-green-600 rounded-full p-2 w-[8em]" onClick={() => handleToggle1()}>
                       <div className="h-7 w-7 rounded-full bg-green-300"/>
                       <p className="pl-3 text-black font-bold">{tokenA}</p> 
                       <BiChevronDown className="h-6 w-6"/>
                    </div>
                    </div>
                    <div className=" flex justify-between">
                        <p>{}</p>
                        <p>balance: {balanceA}</p>
                    </div>
                    </div>
                    <div className="bg-green-400 rounded-md mt-5 p-3 gap-2 shadow">
                        <div className="flex">   
                            <input type="number" min="0" max="1000000" className="outline-none bg-green-400 text-2xl w-[9em] font-bold" />
                    <div className="flex bg-green-500 hover:bg-green-600 rounded-full p-2 w-[8em]" onClick={() => handleToggle2()}>
                        <div className="h-7 w-7 rounded-full bg-green-300"/>
                        <p className="pl-3  font-bold">{tokenB}</p> 
                        <BiChevronDown className="h-6 w-6"/>
                    </div>
                    </div>
                     
                    <div className="flex justify-between">
                         <p>{}</p>
                        <p>balance: {balanceB}</p>
                    </div>
                    </div>
                    
                </div>
                <button className="w-[14.7em] mt-5 font-bold border border-black bold bg-gradient-to-r from-black via-gray-900 to-green-500 text-2xl h-auto text-green-300 rounded-md  px-[3.9em] py-5 mb-2">
                create pool
                </button>
            </div>
          </div>
       </div>  
    </div>
    )
}
export default CreatePool