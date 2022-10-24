import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill, BsFillCircleFill } from 'react-icons/bs'

const Cards = ({name, image, unselect,select,selected}, isSelected) => {

   

  
 
  return (
    <div className='rounded-xl bg-card-blue w-[230px] h-max md:mb-0 shadow-xl  flex flex-col justify-center items-center  text-center p-4 
    group hover:bg-sky-900
    '>
         <div className={ (selected ? 'hidden':'place-self-end mb-2') }>
            <BsFillCircleFill />
          </div>
          <div className={ (selected ? 'place-self-end mb-2 ':'hidden') }>
            <BsFillCheckCircleFill className='fill-green-500' />
          </div>

        <button className='bg-transparent block relative rounded-md overflow-hidden mb-6' onClick={() => {
        if (selected) {
          unselect()
        } else {
          select()
        }
      }}>  
           
            <Image src={image} height={200} width={200} className='rounded-xl group-hover:scale-[110%] ' alt='nft'></Image>
            <div className="absolute w-full h-full flex justify-center items-center hover:bg-cyan opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-700"> 
            
            </div>
        <p className='text-sm font-semibold my-4 text-white group-hover:text-sky-500 transition ease-in-out delay-10'>{name || 'No Name Available'}</p>
    

       <div className={
          (selected ? 'bg-red-700' : 'hidden')
       }>
        <p>NFT Selected</p>
        </div> 
        </button>
    </div>
  )
}

export default Cards