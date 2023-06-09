import React from 'react';
import { tokens } from '../../settingToken/tokens/tokens';
import Web3 from 'web3';
import erc20abi from '../abi/ERC20ABI.json';

const TokenCreateA = (props) => {
  const getAndSetToken = async (tokenAddress, balance, tokenLocation) => {
    try {
      const web3 = new Web3(props.web3Provider);
      const tokenContract = new web3.eth.Contract(erc20abi, tokenAddress);
      const symbol = await tokenContract.methods.symbol().call();
      const tokenBalance = await tokenContract.methods
      .balanceOf(props.accounts[0])
      .call();
    const formatBalance = parseFloat(
      web3.utils.fromWei(tokenBalance, "ether")
    );
      balance(formatBalance);
      tokenLocation(tokenAddress);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const setWEI = () => {
    if (!props.AorB) {
      getAndSetToken(
        tokens[0].contractAddress,
        props.setBalanceA,
        props.setTokenAddress1
      );
      props.setTokenA('WETH');
      props.setToggle1(!props.toggle1);
    } else {
      getAndSetToken(
        tokens[0].contractAddress,
        props.setBalanceB,
        props.setTokenAddress2
      );
      props.setTokenB('WETH');
      props.setToggle2(!props.toggle2);
    }
  };

  const setUSDT = () => {
    if (!props.AorB) {
      getAndSetToken(
        tokens[1].contractAddress,
        props.setBalanceA,
        props.setTokenAddress1
      );
      props.setTokenA('USDT');
      props.setToggle1(!props.toggle1);
    } else {
      getAndSetToken(
        tokens[1].contractAddress,
        props.setBalanceB,
        props.setTokenAddress2
      );
      props.setTokenB('USDT');
      props.setToggle2(!props.toggle2);
    }
  };

  const setSOLE = () => {
    if (!props.AorB) {
      getAndSetToken(
        tokens[2].contractAddress,
        props.setBalanceA,
        props.setTokenAddress1
      );
      props.setTokenA('SOLE');
      props.setToggle1(!props.toggle1);
    } else {
      getAndSetToken(
        tokens[2].contractAddress,
        props.setBalanceB,
        props.setTokenAddress2
      );
      props.setTokenB('SOLE');
      props.setToggle2(!props.toggle2);
    }
  };

  const setLINK = () => {
    if (!props.AorB) {
      getAndSetToken(
        tokens[3].contractAddress,
        props.setBalanceA,
        props.setTokenAddress1
      );
      props.setTokenA('LINK');
      props.setToggle1(!props.toggle1);
    } else {
      getAndSetToken(
        tokens[3].contractAddress,
        props.setBalanceB,
        props.setTokenAddress2
      );
      props.setTokenB('LINK');
      props.setToggle2(!props.toggle2);
    }
  };

  return (
    <div>
      <div className="bg-black border border-white p-10 mt-[10em] ml-[1em] absolute text-white rounded-md">
        <h1 className="mb-3">SELECT A TOKEN</h1>
        <div className="">
          <div className="flex bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md mb-2" onClick={setWEI}>
            <div className="bg-green-300 h-6 w-6 rounded-full" />
            {tokens[0].name}
          </div>
          <div className="flex mb-2 bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md w-[9em]" onClick={setUSDT}>
            <div className="bg-green-300 h-6 w-6 rounded-full" />
            {tokens[1].name}
          </div>
          <div className="flex mb-2 bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md w-[9em]" onClick={setSOLE}>
            <div className="bg-green-300 h-6 w-6 rounded-full" />
            {tokens[2].name}
          </div>
          <div className="flex mb-2 bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md w-[9em]" onClick={setLINK}>
            <div className="bg-green-300 h-6 w-6 rounded-full" />
            {tokens[3].name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCreateA;
