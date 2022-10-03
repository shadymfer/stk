import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Cards = ({name, image}, isSelected) => {

    const [selected,setSelected] = useState(false)

  
 
  return (
    <div className='rounded-xl bg-card-blue w-[230px] h-max md:mb-0 shadow-xl  flex flex-col justify-center items-center  text-center p-2 
    group hover:bg-sky-900
    '>
        
        <button className='bg-transparent block relative rounded-md overflow-hidden mb-6 '> 
            <Image src={image} height={200} width={200} className='rounded-xl group-hover:scale-[110%] ' alt='nft'></Image>
            <div class="absolute w-full h-full flex justify-center items-center hover:bg-cyan opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-700"> 
            </div>
        <p className='text-sm font-semibold my-4 text-white group-hover:text-sky-500 transition ease-in-out delay-10'>{name}</p>
    

       <div className={isSelected ? 'hidden': ''}>
        <p>NFTs Selected</p>
        </div> 
        </button>
    </div>
  )
}

export default Cards