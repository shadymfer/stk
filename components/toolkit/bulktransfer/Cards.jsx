import Image from 'next/image'
import React from 'react'

const Cards = ({name, image}) => {
    console.log(name)
    console.log('name', name)
  return (
    <div className='border border-red-800 rounded-xl w-[230px] h-[300px] flex flex-col justify-center items-center p-2'>
        <Image src={image} height={200} width={200}></Image>
        <h3>{name}</h3>
        <p>NFTs Selected</p>
    </div>
  )
}

export default Cards