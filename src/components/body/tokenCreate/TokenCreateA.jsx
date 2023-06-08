import React from 'react'
import { tokens } from '../../settingToken/tokens/tokens'
import web3  from "web3"

 const tokenCreateA = (props) => {
  const setETH = () =>{
    if(!props.AorB){
      props.setTokenA("ETH")
      props.setToggle1(!props.toggle1)
    }else{
      props.setTokenB("ETH")
      props.setToggle2(!props.toggle2)
    }
  }

  const setWEI = () => {
    if(!props.AorB){
    props.setTokenA("WETH")
    props.setToggle1(!props.toggle1)
    }else{
      props.setTokenB("WETH")
      props.setToggle2(!props.toggle2)
    }
  }

  const setUSDT = () => {
    if(!props.AorB){
      props.setTokenA("USDT")
      props.setToggle1(!props.toggle1)
    }else{
      props.setTokenB("USDT")
      props.setToggle2(!props.toggle2)
    }
  }

  return (
    
    <div>
        <div className='bg-black border border-white p-10 mt-[10em] ml-[1em] absolute text-white rounded-md'>
          <h1 className='mb-3'>SELECT A TOKEN</h1>
          <div className='' >
        <div className='flex bg-green-500 hover:bg-green-600 mb-5 justify-between items-center p-2 rounded-md w-[9em]'onClick={setETH}>
          <div className='bg-green-300 h-6 w-6 rounded-full'/>
          ETH
        </div>
        <div className='flex bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md mb-5' onClick={setWEI}>
          <div className='bg-green-300 h-6 w-6 rounded-full' />
          {tokens[0].name}
        </div>
        <div className='flex bg-green-500 hover:bg-green-600 justify-between items-center p-2 rounded-md w-[9em]' onClick={setUSDT}>
          <div className='bg-green-300 h-6 w-6 rounded-full' />
          {tokens[1].name}
        </div>
        </div>
      
      </div>
    </div>
  )
}
export default tokenCreateA
