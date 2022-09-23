import Image from 'next/image'
import React from 'react'
import MainBG from '../public/assets/main.jpg'


const Main = () => {
  return (  
  <>
  
    <div className=''>
        <div id='main' className=''>
         <Image
            className='absolute z-1'
            alt="Keyskd with Nintendo Switch"
            src={MainBG}
            layout="responsive"
            
            quality={100}>
        </Image>
       
      
        
        </div>    
    </div>
  </>
  )
}

export default Main