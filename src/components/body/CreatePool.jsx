import {FiArrowLeft} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"
import {useState} from "react"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import TokenCreateA from "./tokenCreate/TokenCreateA"
import beornirkswapabi from "./abi/BEONIRKSWAPPABI.json"
import tokenAbi from "./abi/ERC20ABI.json"
import Web3 from "web3"

const CreatePool = ({accounts, setAccounts, isConnected, web3Provider}) => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [tokenA, setTokenA] = useState("ETH")
    const [tokenB, setTokenB] = useState("USDT")
    const [balanceA, setBalanceA] = useState(0)
    const [balanceB, setBalanceB] = useState(0)

    // important factors

    const [initialA, setInitialA] = useState(0)
    const [initialB, setInitialB] = useState(0)
    const [tokenAddress1, setTokenAddress1] = useState("")
    const [tokenAddress2, setTokenAddress2] = useState("")
    const [loading, setIsLoading] = useState(false)

    const changeValA = (event) => {setInitialA(event.target.value)}
    const changeValB = (event) => {setInitialB(event.target.value)}

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
//========createPool==function====================
const createPoolFunction = async () => {
    setIsLoading(!loading)
    if (initialA === 0 || initialB === 0) {
        setIsLoading(false)
      alert("Values cannot be empty");
    } else {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum)
        const web3 = new Web3(web3Instance);
        const contractAddress = "0xd39558450E67404aD716F4c6AC901b9f345165e2";
        const contract = new web3.eth.Contract(beornirkswapabi, contractAddress);
  
        const tokenContractA = new web3.eth.Contract(tokenAbi, tokenAddress1);
        const tokenContractB = new web3.eth.Contract(tokenAbi, tokenAddress2);
  
        const amountA = (initialA * 1000000000000000000).toString()
        const amountB = (initialB * 1000000000000000000).toString()
  
        const approvedAmountA = await tokenContractA.methods.allowance(accounts[0], contractAddress).call();
        const approvedAmountB = await tokenContractB.methods.allowance(accounts[0], contractAddress).call();
  
        const isPool = await contract.methods.isPool(tokenAddress1,tokenAddress2).call()
        
        // Approve spender (contract) to spend the desired token amounts
        if (approvedAmountA > 0) {
         if(!isPool) {
            await contract.methods
            .createPool(tokenAddress1, tokenAddress2, amountA, amountB)
            .send({ from: accounts[0], gas: 5000000 }) // Use .send() to send the transaction
            .then((receipt) => {
              console.log(receipt); // Log the transaction receipt
              setIsLoading(false)
              setBalanceA(balanceA - initialA)
              setBalanceB(balanceB - initialB)
              setInitialA(0)
              setInitialB(0)
              alert("Pool created successfully");
            });
         }else{
            alert("pool already exists")
            setIsLoading(false)
         }
        } else {
          await tokenContractA.methods.approve(contractAddress, amountA).send({ from: accounts[0] });
          await tokenContractB.methods.approve(contractAddress, amountB).send({ from: accounts[0] });
          await contract.methods
          .createPool(tokenAddress1, tokenAddress2, amountA, amountB)
          .send({ from: accounts[0], gas: 1000000 }) // Use .send() to send the transaction
          .then((receipt) => {
            console.log(receipt); // Log the transaction receipt
            alert("Pool created successfully");
            setIsLoading(false)
          });
        }
      
      } catch (error) {
        console.error(error);
        setIsLoading(false)
        alert("Error creating pool");
        
      }
    }
  };
  

    return (
    <div className="flex justify-center">
        <div className="w-[24.5em]">
            {toggle1 ? 
            <TokenCreateA setTokenAddress1={setTokenAddress1} setToggle1={setToggle1} toggle1={toggle1} setBalanceA={setBalanceA} AorB={AorB} setTokenA={setTokenA} web3Provider={web3Provider} accounts={accounts}/> : <></>    
            }
            {toggle2 ? <TokenCreateA setTokenAddress2={setTokenAddress2} setToggle2={setToggle2} toggle2={toggle2} setBalanceB={setBalanceB} AorB={AorB} setTokenB={setTokenB} web3Provider={web3Provider} accounts={accounts}/> : <></>}

          <div className="border border-gray-600 mt-1 rounded-md p-5 ">
            <div className="flex justify-between border-b border-gray-600 pb-4">
              <FiArrowLeft className="w-6 h-6 text-gray-300"/>
              <hi className="text-2xl font-bold text-white">Add Liquidity</hi>
              <p className="text-green-400">clear All</p>
            </div>
            <div className="pt-5">
                <h1 className="text-white text-xl font-bold pt-5">Deposit Amounts</h1>
                <div className="w-[22em]">
                    <div className="bg-green-400 rounded-md p-3 mt-5 shadow">
                        <div className="flex">
                        <input type="number" min="0" max="1000000" className="outline-none bg-green-400 text-2xl w-[9em] font-bold" onChange={changeValA} value={initialA}/>
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
                            <input type="number" min="0" max="1000000" className="outline-none bg-green-400 text-2xl w-[9em] font-bold"  onChange={changeValB} value={initialB}/>
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
                {!loading ? <p onClick={createPoolFunction}>create pool</p> : <AiOutlineLoading3Quarters className="ml-[3em] animate-spin font-bold"/>}
                </button>
            </div>
          </div>
       </div>  
    </div>
    )
}
export default CreatePool