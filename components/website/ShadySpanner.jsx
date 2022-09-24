import Image from 'next/image'
import React from 'react'
import meIMG from '../../public/assets/mefullg.png'
import solIMG from '../../public/assets/solanaLogo.png'
const ShadySpanner = () => {
  return (
    <div>
      <div className='h-[128px] md:h-[256px] bg-slate-900/50 grid grid-cols-4 gap-4 justify-center items-center mb-16 mt-16 md:mb-64 md:gap-32'>
       
        <div className='col-span-2 m-1 md:m-10 '>
            <Image  src={meIMG} ></Image>
          </div>
         
          <div className='col-span-2 m-5 md:m-10 '>
            <Image src={solIMG} ></Image>
          </div>
       
      </div>
    </div>
  )
}

export default ShadySpanner