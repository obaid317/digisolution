import React from 'react'
import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import Chatbot from 'react-simple-chatbot'
import './HeroSection.css';
function Home() {
  
  return (
    <div className='hero-container' id='home'>
     <img src='images/abcd.png' className='aaaa'/>

       
 {/* <div className='a'  >
   
 <ThemeProvider theme={theme}>
    <Chatbot  steps={[
    {
      id: '1',
      message: 'Wellcome to Digisol,How may i assist you',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'For any queries go to our contact page',
      end: true,
    },
  ]} headerTitle="Hi, there" opened={tfValues} toggleFloating={true} style={{height:"59vh",width:"45vh"}} contentStyle={{height: '45vh',}} floatingStyle ={{height: '18vh'}} footerStyle={{height: '8vh'}}/>
  </ThemeProvider>
 <div className='abcdefgh' >
 <img onClick={chatbot_close} src='images/chat-ico.svg' className='moving-image'/>
 </div>
</div>
  */}
        
    </div>
  )
}

export default Home