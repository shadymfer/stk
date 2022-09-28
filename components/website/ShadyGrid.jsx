import Image from 'next/image'
import React from 'react'

import shady1 from '../../public/assets/grid/0.png'
import shady2 from '../../public/assets/grid/1.png'
import shady3 from '../../public/assets/grid/2.png'
import shady4 from '../../public/assets/grid/3.png'
import shady5 from '../../public/assets/grid/4.png'
import shady6 from '../../public/assets/grid/5.png'
import shady7 from '../../public/assets/grid/6.png'
import shady8 from '../../public/assets/grid/7.png'

const ShadyGrid = () => {
  return (<>
    <div className='mt-20 text-white'>
      <h1 className='p-5 text-center'>Meet The Shadies</h1>
      <p className=' p-5 text-center'>
        The Shady Class (Hikage No Kurasu) Web3 Chibis in the Solana network. 
        3,330 chibified avatars ready to take on the metaverse and save the decentralization movement.<br></br> Launchpad. Web3 tools and more..
      </p>
    </div>
    <div className=' mr-[100px] ml-[100px] grid grid-cols-1 sm:grid-cols-8 grid-rows-2  sm:row-span-1 md:p-32 items-center justify-center '>
      
      <div className='col-span-2  '> 
        <Image  src={shady1} ></Image>
      </div>
      <div className='col-span-2'> 
        <Image  src={shady2} ></Image> 
      </div>
      <div className='col-span-2'> 
        <Image  src={shady3} ></Image>
      </div>
      <div className='col-span-2'> 
        <Image  src={shady4} ></Image>
      </div>
      <div className='col-span-2'> 
        <Image  src={shady5} ></Image> 
      </div>
      <div className='col-span-2'> 
        <Image  src={shady6} ></Image> 
      </div>
      <div className='col-span-2'> 
        <Image  src={shady7} ></Image> 
      </div>
      <div className='col-span-2'> 
        <Image  src={shady8} ></Image> 
      </div>
    </div>
    </>
  )
}

export default ShadyGrid