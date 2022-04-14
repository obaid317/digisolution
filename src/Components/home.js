import React from 'react'
 
import './HeroSection.css';
function Home() {
  
  return (
    <div className='hero-container' id='home'>
    
    <div className='text-home-cont-three'>
<p className='text-home-three'>Have you ever heard about <span className='span-home'>Nabidh</span>?</p>

        </div>
        <div className='text-home-cont-one'>
<p className='text-home-one'> Have You filled <span className='span-home'>Nabidh Survey</span>?</p>

        </div>
        <div className='text-home-cont-two'>
<p className='text-home-two'> Is your EMR <span className='span-home'>Nabidh compliant</span>?</p>

        </div>
       
        <div className='text-home-cont-four'>
<p className='text-home-four'>Do you want to know about <span className='span-home'>Onboarding process</span>?</p>

        </div>
        <div className='lost-cont'>
<p className='lost-text'> Lost <span className='span-home'>?</span></p>
<div>
  <p className='lost-here'>We are here to <span className='span-a'>assist</span> you on any question related to <span className='span-a'>Nabidh</span>.</p>
</div>
        </div>
 
    </div>
  )
}

export default Home