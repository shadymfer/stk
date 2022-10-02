import React from 'react'
import { TbArrowBackUp } from 'react-icons/tb'

const TransferTool = () => {
  return (
    <div id='container' className='bg-slate-900 h-full rounded-md flex justify-between m-5 p-5'>
        <div id='counter'>
            <div className='ml-20 flex flex-col items-center'>
            <h2>X/100</h2>
            <p>NFTs Selected</p>
            </div>
        </div>

        <div id='transferTo' className='flex flex-col mr-5 gap-2'>
            <input type="text" class="rounded text-slate-800" />
            <button className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-gradient-to-r from-[#c31432] to-[#240b36] w-64 text-center h-12'> 
                  <TbArrowBackUp className='mr-2'> </TbArrowBackUp><p className=''>Transfer NFTs</p> 
            </button> 
        </div>
        
        

    </div>
  )
}

export default TransferTool