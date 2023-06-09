import React,{useEffect,useState} from "react";
import {BsArrowDownSquareFill} from "react-icons/bs"
import {FiSettings} from "react-icons/fi";
import SelectTokenA from "../settingToken/SelectTokenA";
import SelectTokenB from "../settingToken/SelectTokenB"
// import tokenImage from ".././images/images.png"
import Web3 from "web3"
import { tokens } from "../settingToken/tokens/tokens";
import erc20abi from "./abi/ERC20ABI.json"
import beornirkswapabi from "./abi/BEONIRKSWAPPABI.json"


const Main = ({accounts,setAccounts, isConnected, web3Provider}) => {
    // toggle 
    const [openSettings, setOpenSettings] = useState(false);

    // this part selects the tokens for the first and second input
    const [selectFirstToken, setSelectFirstToken] = useState(false);
    const [selectSecondToken, setSelectSecondToken] = useState(false)
    const openTokenB = () => setSelectSecondToken(!selectSecondToken)
    const openTokenA = () =>  setSelectFirstToken(!selectFirstToken)

    // this handles selecting the token to toggle

    const [tokenAddress, setTokenAddress] = useState(null)
    
    // state hooks
    const [priceA, setPriceA] = useState("")
    const [priceB, setPriceB] = useState()
    const [balanceA, setBalanceA] = useState()
    const [ethBalance, setEthBalance] = useState('')
    const [balanceB, setBalanceB] = useState("")
    
    const changeValA=(event)=> {setPriceA(event.target.value)}
    const changeValB=(event) => {setPriceB(event.target.value)}
    
    // for connecting to wallet
    const [coin1, setCoin1] = useState("ETH")
    const [coin2, setCoin2] = useState("WETH")
 
    const [web3, setWeb3] = useState(null)
  
    
    isConnected = Boolean(accounts[0])
    const web3Testnet = new Web3(web3Provider) 

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
            // set for B
            const tokenContract = new web3Testnet.eth.Contract(erc20abi, "0x341d2F1D61b51c9d16FADb07a7118732E57b738f");
            // Getting balance
              const tokenBalance = await tokenContract.methods
              .balanceOf(accounts[0])
              .call();
              const formatBalance = parseFloat(
              web3.utils.fromWei(tokenBalance, "ether")
              );
              setBalanceB(formatBalance)
            // Get token balance
        }
     
        catch(err) {
          console.log(err)
        }
      }
    }
   

    return ( 
       
        <div className="flex justify-center">
        <div className="border border-gray-400 my-20 w-[25em] rounded-md">
        <div className="flex justify-between h-auto p-5 pb-2">
      {selectFirstToken ? <SelectTokenA  ethBalance={ethBalance} accounts={accounts} setBalanceA={setBalanceA} setTokenAddress={setTokenAddress} setCoin1={setCoin1} web3Provider={web3Provider}/> : <></>}
      {selectSecondToken ? <SelectTokenB  ethBalance={ethBalance} accounts={accounts} setBalanceB={setBalanceB} setTokenAddress={setTokenAddress} setCoin2={setCoin2} web3Provider={web3Provider}/> : <></>}
        <div className="font-bold text-white">
            <span>
              Swap
            </span>
            <span className="pl-5 font-bold">
              Buy
            </span>
            </div>
            <FiSettings onClick={toggleSettings} className="h-6 w-6 cursor-pointer text-white"/>
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
            <div className="p-2 border border-green-300 bg-green-300 rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValA} value={priceA} className="outline-none bg-green-300 h-10 text-3xl w-[7.3em] appearance-none" type="number" min="0" max="100000" style={{ appearance: "textfield", MozAppearance: "textfield" }}/>
                <div className="bg-green-400 p-2 rounded-full flex gap-2 font-bold cursor-pointer w-[6.7em]" onClick={openTokenA}><div className="bg-green-600 h-7 w-7 rounded-full "/>{coin1}</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="font-bold">{priceB}</div>
                <div>Balance: {balanceA}</div>
            </div>
              
            </div>
                <BsArrowDownSquareFill className="mb-[5.4em] h-8 w-8 border-2 absolute border-green-400 rounded-md hover:text-gray-800 bg-green-300"/>
            <div className="p-2 border border-green-300 border-2 border-black bg-green-300 rounded-md h-20">
                    <div className="flex justify-between items-center px-2">
                    <input onChange={changeValB} value={priceB} className="outline-none bg-green-300 h-10 text-3xl w-[7.2em] appearance-none" type="number" min="0" max="100000" style={{ "-moz-appearance": "textfield", "-webkit-appearance": "textfield" }}/>
                    <div className="bg-green-400 p-2 rounded-full flex gap-2 font-bold cursor-pointer w-[6.7em]" onClick={openTokenB}><div className="bg-green-600 h-7 w-7 rounded-full"/>{coin2}</div>
                    </div>
                    <div className="flex justify-between px-2"><div className="font-bold">{priceB}</div>
                <div>Balance: {balanceB}</div>
            </div>
                
            </div>
                <button className="font-bold border border-black bold bg-gradient-to-r from-black via-gray-900 to-green-500 text-2xl h-auto text-green-300 rounded-md  px-[3.9em] py-5 mb-2" >
                {isConnected ? <p className="w-[7.1em]">swap</p> : <p onClick={connectToMetamask}>Connect Wallet</p>}
                </button>
            </div>
        </div>
    </div>
  </div>         
  )
}
export default Main;