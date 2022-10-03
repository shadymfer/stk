import React, { useEffect, useState } from 'react'
import { BiTransfer } from 'react-icons/bi'
import Cards from './Cards'


const TransferTool = ({nfts}) => {
    const [selected,setSelected] = useState(false)
   
  return (
    <div id='container' className=' bg-[#09101B] fixed  rounded-md flex flex-col p-8 mt-16 h-screen mx-40 shadow-slate-400 shadow-xl'>
        
        <div className='flex justify-between'>
            <div id='counter'>
                <div className='ml-10 flex flex-col items-center'>
                <h2>X/100</h2>
                <p>NFTs Selected</p>
                </div>
            </div>

            <div id='transferTo' className='flex flex-col mr-5 gap-2'>
                <input type="text" class="rounded text-slate-800" />
                <button className='text-white flex flex-row  justify-center items-center rounded-md uppercase bg-gradient-to-r from-[#c31432] to-[#240b36] w-64 text-center h-12'> 
                    <BiTransfer className='mr-2'> </BiTransfer><p className='font-bold'>Transfer NFTs</p> 
                </button> 
            </div>
            
        </div>

        <div id='nfts' className='text-white overflow-x-hidden bg-slate-900 shadow-xl rounded-xl mt-10'>
                <div className='lg:mx-10 mt-5  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-20 '>

                {nfts
                .filter(n => n.name.toLowerCase())
                .sort ((a, b) => {
                  if (a.name > b.name) return 1;
                  else if (a.name < b.name) return -1;
                  else return 0;
                })
                .map(n => (
               
                 <Cards 
                    key={Math.random()}
                    name={n.name} 
                    image={n.image} 
                    isSelected={selected}
                 >

                </Cards>
                ))}
                    
                
                </div>
        </div>
        
        
        

    </div>
  )
}

export default TransferTool