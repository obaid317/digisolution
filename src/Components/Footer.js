import React from 'react'
import "../Components/Footer.css"
function Footer() {
  return (
    <div className='footer-main' id='footer'>
        <div className='ab-ab'>
        <div className="footer-first-container">
           
           <div className='eval'>
            <p className='heading-cont-one'>Head Office</p>
            <p className='body-cont-one'>Business Center – Ground Floor Accelerator Building Masdar City, Abu Dhabi, UAE</p>
            <p className='heading-cont-one'>Corporate Office 1206, </p>
            <p className='body-cont-one'>Burj Al Noor II, Al Nahda 2, DXB, United Arab Emirates</p>
      
            </div>
<div className='hallo'>
        <div className='footer-right-cont'>
<p className='heading-footer-social'>Social Connects</p>
<img src='images/hand-footer-ico.svg' height={"25px"} style={{"padding-left":"10px","padding-bottom":"3px"}} />
        </div>
        

<div className='social-media-logo'>
<img  src='images/facebook-ico.svg' height={"20px"} className="alaal" onClick={() => window.open("https://www.facebook.com/Digisol.Solution.Digitized")}  />
<img  src='images/insta.png' height={"20px"} className="alaal"  onClick={() => window.open("https://www.instagram.com/digisolsolution")} />
<img  src='images/linkedin-ico.svg' height={"20px"} className="alaal" onClick={() => window.open("https://www.linkedin.com/company/digisol-ltd/")}  /> 
<img  src='images/twitter-ico.svg' height={"20px"} className="alaal" onClick={() => window.open("https://twitter.com/AMBERJO12297880")}   />
<img  src='images/youtube.png' height={"20px"} className="alaal" onClick={() => window.open("https://www.youtube.com/channel/UCeDcSk9gagBwNtz8AR0jHwA")}   />

</div>
</div>

        </div>
        <div className='endfooter'>
            <hr/>
<div className='end-footer-real'>
<img className='logo-footer' src='images/horizontal-logo-white.png' />
<p className='abcd'>© 2022 DigiSol Ltd. All Rights Reserved</p>
</div>
        </div>
        </div>
    </div>
  )
}

export default Footer