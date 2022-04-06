import React from 'react'  
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "../Components/Contact.css"
 
function Contactus() {
    const initialValues = { username: "", email: "", phone: "",category:"",message:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [status, setStatus] = useState('');
    const [errorsValoues,Seterrorsvalues] = useState("");
  
    const handleSubmit = (e) => {
      
      e.preventDefault();
      if(formValues.email.length==0||formValues.message.length==0||formValues.phone.length==0||formValues.username==0||formValues.category.length==0){
        Seterrorsvalues("Kindly Provide all required information to proceed");
      }else{

        Seterrorsvalues("Send Successfully");
        emailjs.send('service_p27yoqt', 'template_2b5pjx6', formValues, 'DhD2CTpjCOotUS97g')
        .then(response => {
          console.log('SUCCESS!', response);
          setFormValues({
            username: "", email: "", phone: "",category:"",message:"" 
          });
          setStatus('SUCCESS');
          Seterrorsvalues("Send Successfully");
        }, error => {
          console.log('FAILED...', error);
        });
      }
       
    
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      console.log(name,value);
    };
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "";
      }
      if (!values.email) {
        errors.email = "";
      } else if (!regex.test(values.email)) {
        errors.email = "";
      }
      if (!values.password) {
        errors.password = "";
      } else if (values.password.length < 4) {
        errors.password = "";
      } else if (values.password.length > 10) {
        errors.password = "";
      }
      return errors;
    };
  return (
    <div className='contact-main' id='contact'>
        <div className='contact-cont-one'>
<p className='contact-one-head'>Contact <span className='us'>Us</span></p>
<div className='contact-details'>
<img src='images/mail.svg' height={"20px"}/>
<p className='contact-details-text'>info@digisolteam.com</p>
</div>
<div className='contact-details'>
<img src='images/Phone.svg' height={"29px"} style={{"padding-top":"7px"}}/>
<p className='contact-details-text'>+971 42 231 307<br/> +971 56 408 4463</p>
</div>
<div className='contact-details'>
<img src='images/whatsapp.svg' height={"29px"}/>
<p className='contact-details-text'>info@digisolteam.com</p>
</div>

        </div>

        <div className='contact-inquiry-cont'>
        <div className="form-container">
    

    <form onSubmit={handleSubmit}>
      <p  className='contact-one-heads' ><span className='us'>For</span> Inquiries</p >
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
         
          <input className='input-decoration-inquiry-form'
            type="text"
            name="username"
            placeholder="Full Name"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div className="field">
          
          <input  className='input-decoration-inquiry-form'
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="field">
        
          <input  className='input-decoration-inquiry-form'
            type="Text"
            name="phone"
            placeholder="Phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="field">
        
          <input  className='input-decoration-inquiry-form'
            type="Text"
            name="category"
            placeholder="Category"
            value={formValues.category}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="field">
        
          <textarea style={{"columns":"8","rows":"5","height":"150px","resize":"none"}} className='input-decoration-inquiry-form'
            type="Text"
            name="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
      
        <button className="bttn-submit">Submit</button>
      <p className='show-error'>{errorsValoues}</p>
      </div>
    </form>
  </div>
        </div>
    </div>
  )
}

export default Contactus