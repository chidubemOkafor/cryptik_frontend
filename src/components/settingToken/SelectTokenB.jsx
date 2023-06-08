import React from "react";
import Web3 from "web3";
import erc20abi from "../body/abi/ERC20ABI.json";
import {tokens} from "./tokens/tokens"

const SelectTokenA = (props) => {

  const handleTokenSelect = async (tokenAddress) => {
    try {
      const web3 = new Web3(props.web3Provider);
      const tokenContract = new web3.eth.Contract(erc20abi, tokenAddress);
      const symbol = await tokenContract.methods.symbol().call();

      // Getting balance
      const tokenBalance = await tokenContract.methods
        .balanceOf(props.accounts[0])
        .call();
      const formatBalance = parseFloat(
        web3.utils.fromWei(tokenBalance, "ether")
      );
      // Setting tokens
        props.setBalanceB(formatBalance);
        props.setCoin2(symbol);
        props.setTokenAddress(tokenAddress);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const setEth = () => {
      props.setCoin2("ETH");
      props.setTokenAddress(null);
      props.setBalanceB(props.ethBalance);
   
  };

  return (
    <div className="flex justify-center rounded-full absolute pb-[20em]">
      <div className="bg-green-300 border-2 p-3">
        <h1 className="font-bold text-xl">Select a token</h1>
        <div className="mt-3">
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => setEth()}
          >
            <div className="bg-green-600 h-7 w-7 rounded-full" />ETH
          </div>
          {tokens.map((token, index) => (
            <div
              key={index}
              className="flex gap-3 cursor-pointer"
              onClick={() => handleTokenSelect(token.contractAddress)}
            >
              <div className="bg-green-600 h-7 w-7 rounded-full" />
              {token.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenA;
