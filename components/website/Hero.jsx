import React from 'react'
import Image from 'next/image'

import VesselImg from '../../public/assets/vessel.gif'
import Texts from '../../public/assets/txt.png'
import Footer from './Footer'
const Hero = () => {
  return (<>
    <div className='w-full h-screen  flex items-center mb-44  '>
      <div className='max-w-[1240px] m-auto px-2 py-10  w-full  '>
        <div className='grid lg:grid-cols-5 gap-5 mt-20  '> 
          {/*left*/}
          <div className='col-span-3 lg:col-span-2 w-full h-full p-4   '>
            <div className=' flex flex-col justify-center text-center lg:text-left   lg:p-4 h-full text-white'>
              <h1 className='font-bold text-5xl  md:text-[4rem] tracking-wide'>TSC 2nd Gen!</h1>
              <p className='py-4 text-3xl text-white'>VesseLs will evolve into Shadies!</p>
              <a href="https://magiceden.io/marketplace/vessels" className='text-lg  text-white' >
                  <p className='text-white font-bold '>This is the 2nd Gen collection for The Shady Class NFT Project</p>
                  <p className='text-white mt-4'>Buy VesseLs on MagicEden You will need 2500 $CRIM tokens to evolve your VesseLs into 
                  Shadies</p>
                  <p className='text-white '></p>
                  <button className=' w-[100%] md:items-center text-xl p-4 text-gray-100 mt-4 '>Buy Vessels On MagicEden</button> 
              </a>
              
            </div>
          </div>
          {/*right*/}
          <div className='col-span-3 w-full'>
              <div className='  rounded-2xl border-8 border-double  shadow-white/50 shadow-2xl '>
              <Image className='' layout='responsive' alt='/' src={VesselImg} height={0} width={0}/> 
              
              
            </div> 
          </div> 
        </div> 
      </div>
      
    </div>
    
    </>
  )
}

export default Hero