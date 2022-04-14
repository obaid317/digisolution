import React from 'react';
import img1 from "./images/scope.png"
import img2 from "./images/tooth.png"
import {motion} from 'framer-motion'; 
import "../Components/About.css"
function About() {
    const bounceTransition = {
        y: {
          duration: 3.4,
          yoyo: Infinity,
          ease: "easeOut"
        },
        backgroundColor: {
          duration: 0,
          yoyo: Infinity,
          ease: "easeOut",
          repeatDelay:34.8
        }
      };
  return (
    <div className='about-cont' id='services'>
     <div className='bkgrnd-image-one'>
<motion.img src={img1} height={216} width={230}  transition={bounceTransition}
        animate={{
          y: ["-50%", "150%"],
         
        }} />
     </div>   
   
     <div className='about-info'>
    
<p className='main-head'>Our Featured  <span className='span-head'>Services</span> </p> 
<div className='ftwo'>
<div className='ao'>
<div className='card-comp-up'>
  <p className='card-head'>Dental Solutions</p>

</div>
<div className='card-comp-down'>
<p className='ptext'>Carestream R4, One system that 
masterfully accommodates the need of 
both general dentists and orthodontists 
and features the.</p>
<div onClick={() => window.open("https://www.carestreamdental.com/en-gb/csd-products/practice-management-software/cs-r4/")} className='more-info'> <p className='abcde'>more info...</p> </div>
</div> 
</div>
<div className='ao'>
<div className='card-comp-up'>
  <p className='card-head'>Consultation for Nabidh Integration</p>

</div>
<div className='card-comp-down' >
<p className='ptext'>A healthcare platform to securely exchange trusted healthcare information across public and private facilities in Dubai.</p>
<div className='more-info' onClick={() => window.open("https://www.carestreamdental.com/en-gb/csd-products/practice-management-software/cs-r4/")} > <p className='abcde' >more info...</p> </div>
</div>
</div>

</div>
<div className='ftwo'>
<div className='ao'>
<div className='card-comp-up'>
  <p className='card-head'>Healthcare IT Services</p>

</div>
<div className='card-comp-down'>
<p className='ptext'>If you’re keen to have state-of-the- art technology for your healthcare facility, DigiSol is the perfect avenue for you to do business.</p>
<div className='more-info' > <p className='abcde'>more info...</p> </div>
</div>
</div>
<div className='ao'>
<div className='card-comp-up'>
  <p className='card-head'>iCare EMR</p>

</div>
<div className='card-comp-down'>
<p  className='ptext'>A healthcare platform to securely exchange trusted healthcare information across public and private facilities in Dubai.</p>
<div className='more-info'> <p onClick={() => window.open("https://digitalicare.com/")} className='abcde' >more info...</p> </div>
</div>
</div>

</div>
<div className='ftwos'>
<div className='aos'>
<div className='card-comp-ups'>
  <p className='card-head'>Consultation for Malafi Integration</p>

</div>
<div className='card-comp-downs'>
<p className='ptext'>A healthcare platform to securely exchange trusted healthcare information across public and private facilities in Abu-Dhabi.</p>
<div className='more-info' onClick={() => window.open("https://malaffi.ae/connected-emrs")} > <p className='abcde' >more info...</p> </div>
</div>
</div>
 
</div>
     </div>   
      
     <div className='bkgrnd-image-two'>
     <motion.img src={img2} height={190} width={195} transition={bounceTransition}
       animate={{
        y: ["300%", "0%"],
       
      }} />


</div>        
        
        
        
        
        </div>
  )
}
 

export default About