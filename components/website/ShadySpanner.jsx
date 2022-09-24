import Image from 'next/image'
import React from 'react'
import meIMG from '../../public/assets/mefullg.png'
import solIMG from '../../public/assets/solanaLogo.png'
const ShadySpanner = () => {
  return (
    <div>
      <div className='h-[128px] bg-slate-900/50 grid grid-cols-2 gap-5 items-center mb-16 mt-8 p-10 sm:p-32 sm:mb-64 sm:mt-64 md:gap-32'>
        <Image className='' src={meIMG} ></Image>
        <Image className='' src={solIMG} ></Image>
      </div>
    </div>
  )
}

export default ShadySpanner