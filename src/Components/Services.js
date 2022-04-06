import React from 'react'
import {motion} from 'framer-motion'; 
import "./Services.css";
function Services() {
  let urll="https://nabidh.ae/#/comm/landing";
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
          repeatDelay: 3.8
        }
      };
  return (
    <div className='serv-main' id='about'>
 <div className='bkgrnd-img-one'>
<motion.img src='images/internet.png' height={216} width={196}  transition={bounceTransition}
        animate={{
          y: ["50%", "-50%"],
         
        }} />
     </div>   
     <div className='space-between-o'>a</div>
     <div className='main-services-container'>
<div className='services-content'>
 <p className='service-heading'>DigiSol <br></br> <span className='head-end'>Solution Digitized</span> </p>
 <p className='services-text'>Digisol Ltd is a Middle East-based healthcare IT company that offers state-of-the-art digital solutions to clinics and hospitals.
Our facilities include an easy-to-use Clinical Management System, Specialized Healthcare Dentistry Solutions, Specialized IT Solutions, <a href={urll} style={{"text-decoration": "none"}} className='hyprlnk'>DHA NABIDH,</a> <a style={{"text-decoration": "none"}} className='hyprlnk' href={"https://malaffi.ae/"}>HAAD MALAFI Integration,</a> and more to ease patient care. We strive to ensure that your healthcare organization is operationally efficient as possible.</p>
    </div>
    <div className='space-between'>a</div>
    <div className='services-image'>
       <div className='image-text'>
         <p className='img-par'> <span className='twelve' >12</span> <br/> Years of Delivering Healthcare IT Solutions in the Middle East</p>
         </div>
    </div>
     </div>

    </div>
  )
}

export default Services