import React, { useState } from 'react'
import "../Components/Clients.css" 
import {motion} from 'framer-motion'; 


function Clients() {
  const [isHover,setIshover]=useState(false);
  function handlehovering(e){
    
    setIshover(true);
    console.log(isHover);
  
  }
  function handleleavehovering(e){
    setIshover(false);
    console.log(isHover);
  
  }
    const bounceTransition = {
        y: {
          duration:18.4,
          yoyo: Infinity,
          ease: "easeOut"
        },
        backgroundColor: {
          duration: 0,
          yoyo: Infinity,
          ease: "easeOut",
          repeatDelay: 18.8
        }
      };

      
  return (
    <div className='client-cont' id='client'>
        <div className='bg-imag'>
<motion.img src='images/mobile.png'  className='img-wh'  transition={bounceTransition}
        animate={{
          y: ["300%", "0%"],
         
        }} />

    
     </div>
     <div className='about-client'>
    
    <p className='client-head-start'>Our   &nbsp;<span className='span-head'>Clients</span></p> 
     <div className='img-container'>
<img  className='img-client' src='client-logo/1.png' /> 
<img className='img-client' src='client-logo/2.png'/>
<img className='img-client' src='client-logo/3.png'/>
<img className='img-client' src='client-logo/4.png'/>
<img className='img-client' src='client-logo/5.jpg'/>
<img className='img-client' src='client-logo/6.png'/>
<img className='img-client' src='client-logo/7.png'/>
<img className='img-client' src='client-logo/8.png'/>
<img className='img-client' src='client-logo/9.png'/>
<img className='img-client' src='client-logo/picturelogo.png'/>
<img className='img-client' src='client-logo/11.webp'/>
<img className='img-client' src='client-logo/12.png'/>
<img className='img-client' src='client-logo/13.jpeg'/>
<img className='img-client' src='client-logo/14.jpg'/>
<img className='img-client' src='client-logo/15.png'/>
<img className='img-client' src='client-logo/16.jpeg'/>
<img className='img-client' src='client-logo/17.png'/>
<img className='img-client' src='client-logo/18.png'/>
<img className='img-client' src='client-logo/19.png'/>
     </div>
         </div>   
        
         <div className='bg-imag-two'>
         <motion.img src='images/computer.png' className='img-hw' transition={bounceTransition}
           animate={{
            y: ["0%", "280%"],
           
          }} />
    
    
    </div>      
            
            
     </div>
  )
}

export default Clients