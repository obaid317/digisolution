import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/home";
import chicon from './Components/images/cross-ico.svg'
import hicon from './Components/images/chat-ico.svg'
 import About from "./Components/About";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import Chatbot from 'react-simple-chatbot'
function App() {
  const [tfValues, settfValues] = useState(false);
 function chatbot_close(){
    settfValues(!tfValues);
  }
  const theme = {
    
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FF7B00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#FF7B00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
    
    <div className="App">
  <Navbar/>
  <div className={tfValues?'a': 'b'}  >
    
   
     
   <div className={tfValues?'abcdefgh': 'bac'}>
   <ThemeProvider theme={theme}>
      <Chatbot  steps={[
      {
        id: '1',
        message: 'Welcome to Digisol, How may i assist you',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Sorry, We are currently off, contact us through e-mail',
        end: true,
      },
    ]} headerTitle="Hi there!" opened={tfValues} toggleFloating={true} style={{height:"59vh",width:"38vh"}} contentStyle={{height: '41vh',opacity:"1"}} floatingStyle ={{height: '18vh'}} footerStyle={{height: '8vh'}}/>
    </ThemeProvider>

   <img onClick={chatbot_close} src={tfValues?chicon:hicon} className={tfValues?'moving-images':'moving-image'}/>
   </div>
  </div>
<Home/>  
<Services/> 
 <About/>
 <Clients/>
 <Contactus/>
 <Footer/>

    </div>
  );
}

export default App;
