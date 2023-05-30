import React from "react";
import Web3 from "web3";
import erc20abi from "./abi/ERC20ABI.json"

const SelectToken = (prop) => {   
    const web3Testnet = new Web3("https://goerli.infura.io/v3/4eed25b0bc4342529e3e61363f2d8d1a")                          
    const tokens = [
        {
            name: "WETH",
          contractAddress: '0x16e6bb0317a1cA19fcFb259619198FB92C2c45d0', 
        },
        {
            name: "USDT",
          contractAddress: '0x341d2F1D61b51c9d16FADb07a7118732E57b738f',
        },
     
        // Add more tokens as needed
      ];
//weth = 0x16e6bb0317a1cA19fcFb259619198FB92C2c45d0
//usdt = 0x341d2F1D61b51c9d16FADb07a7118732E57b738f
      const handleTokenSelect = async(tokenAddress) => {
       try{
        const tokenContract = new web3Testnet.eth.Contract(erc20abi,tokenAddress)
        const symbol = await tokenContract.methods.symbol().call()

        //getting balance
          const tokenBalance = await tokenContract.methods
            .balanceOf(prop.accounts[0])
            .call();
            const formatBalance = parseFloat(web3Testnet.utils.fromWei(tokenBalance, "ether"))
        //setting tokens 
        prop.setBalanceA(formatBalance);
        prop.setCoin1(symbol)
        prop.setTokenAddress(tokenAddress)
       }catch(error){
        console.error("Error",error)
    }
    
      };
   
      const setEth = () => {
        prop.setCoin1("ETH")
        prop.setTokenAddress(null)
        prop.setBalanceA(prop.ethBalance)
      }

return (
   <div className="flex justify-center rounded-full absolute pl-[6em]">
    <div className="bg-green-300 border-2 p-3">
    <h1 className="font-bold text-xl">select a token</h1>
    <div className="mt-3">
    <div className="flex gap-3 cursor-pointer" onClick={()=> setEth()}><div className="bg-green-600 h-7 w-7 rounded-full "/>ETH</div>
   {tokens.map((token,index)=> (
   <div key={index} className="flex gap-3 cursor-pointer" onClick={()=> handleTokenSelect(token.contractAddress)}><div className="bg-green-600 h-7 w-7 rounded-full "/>{token.name}</div>
   )) }
    </div>
    
    </div>
   </div>
)
}
export default SelectToken;

///0x54BAE47798a01E6fd9bD7B3eE86172458cB9fF29 this the token addres deployed on ganache
