import React,{useEffect,useState} from "react";
import {BsArrowDownSquareFill} from "react-icons/bs"
import {FiSettings} from "react-icons/fi";
import SelectToken from "./SelectToken";
// import tokenImage from ".././images/images.png"
import Web3 from "web3"

const Main = () => {
    // toggle 
    const [openSettings, setOpenSettings] = useState(false);
    const [selToken, setSelToken] = useState(false);
    const openToken = () =>  setSelToken(!selToken)
    const [tokenAddress, setTokenAddress] = useState(null)
    
    // state hooks
    const [priceA, setPriceA] = useState("")
    const [priceB, setPriceB] = useState("")
    const changeValA=(event)=> {setPriceA(event.target.value)}
    const changeValB=(event) => {setPriceB(event.target.value)}
    const [balanceA, setBalanceA] = useState("")
    const [ethBalance, setEthBalance] = useState('')
    const [balanceB, setBalanceB] = useState("")

    // for connecting to wallet
    const [accounts, setAccounts] = useState([])
    const [coin1, setCoin1] =useState("ETH")
    const [coin2, setCoin2] = useState("WETH")
 
    const [web3, setWeb3] = useState(null)
  
    
    const isConnected = Boolean(accounts[0])
    const web3Testnet = new Web3("https://goerli.infura.io/v3/4eed25b0bc4342529e3e61363f2d8d1a") 

    // functions
    //for setting the token


    const toggleSettings = () =>  setOpenSettings(!openSettings)


    const connectToMetamask = async () => {
    if(typeof(Window.ethereum) != undefined) {
        try{
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            const accounts = await web3Instance.eth.getAccounts();
            setAccounts(accounts);
            const balance = await web3Testnet.eth.getBalance(accounts[0])
            //convert balance to eth
            const balanceInEth = parseFloat(web3Testnet.utils.fromWei(balance, "ether"))
            setBalanceA(balanceInEth.toFixed(6))
            setEthBalance(balanceInEth.toFixed(6))
            

             // Get token balance
          
        }
        catch(err) {
          console.log(err)
        }
      }
    }
   

    return ( 
       
        <div className="flex justify-center bg-gradient-to-r from-black via-gray-900 to-green-500 h-auto">
        <div className=" bg-green-400 border border-gray-400 my-20 w-[25em] rounded-md py-1 mb-40">
        <div className="flex justify-between h-auto p-5">
      {selToken ? <SelectToken ethBalance={ethBalance} accounts={accounts} setBalanceA={setBalanceA} setTokenAddress={setTokenAddress} setCoin1={setCoin1} className="justify-center flex"/> : <></>}

        <div className="font-bold">
            <span>
              Swap
            </span>
            <span className="pl-5 font-bold">
              Buy
            </span>
            </div>
            <FiSettings onClick={toggleSettings} className="h-6 w-6 cursor-pointer"/>
        </div>

    {openSettings ? 
    <div className="bg-white absolute w-[20em] rounded-md py-6 px-6 border-2 border-black">  
    <div className="flex justify-between">
    <span className="font-bold text-xl">theme</span>
    <input type="radio"/>
  </div>
  <div className="flex justify-between">
    <span className="font-bold text-xl">transaction deadline</span>
    <span>40m</span>
    </div>
  </div>: <></>}
        <div className="flex justify-center flex-col">
        <div className="flex flex-col gap-1 p-2 justify-center items-center">
            <div className="p-2 hover:border-2 border border-green-300 bg-green-300 rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValA} value={priceA} className="outline-none bg-green-300 h-10 text-3xl w-[8.2em] appearance-none" type="number" min="0" max="100000" style={{ appearance: "textfield", MozAppearance: "textfield" }}/>
                <div className="bg-green-400 p-2 rounded-full flex gap-2 font-bold cursor-pointer" onClick={openToken}><div className="bg-green-600 h-7 w-7 rounded-full "/>{coin1}</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="font-bold">{priceB * 2262}</div>
                <div>Balance: {balanceA}</div>
            </div>
              
            </div>
                <BsArrowDownSquareFill className="mb-[3.8em] h-8 w-8 border-2 absolute border-green-400 rounded-md hover:text-gray-800 bg-green-300"/>
            <div className="p-2 hover:border-2 border border-green-300 border-2 border-black bg-green-300 rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValB} value={priceB} className="outline-none bg-green-300 h-10 text-3xl w-[8.2em] appearance-none" type="number" min="0" max="100000" style={{ "-moz-appearance": "textfield", "-webkit-appearance": "textfield" }}/>
                    <div className="bg-green-400 p-2 rounded-full flex gap-2 font-bold cursor-pointer" onClick={openToken}><div className="bg-green-600 h-7 w-7 rounded-full"/>{coin2}</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="font-bold">{priceB * 2262}</div>
                <div>Balance: {balanceB}</div>
            </div>
                
            </div>
                <button className="font-bold border border-black bold bg-gradient-to-r from-black via-gray-900 to-green-500 text-2xl h-auto text-green-300 rounded-md  px-[3.9em] py-3" onClick={connectToMetamask}>
                {isConnected ? <p>swap</p> : <p>Connect Wallet</p>}
                </button>
        </div>
        </div>
    </div>
  </div>         
  )
}
export default Main;