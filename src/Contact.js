import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact(){

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Setting up submission handler to let user know their email has been sent
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); 
    }

    // Creating connection to EmailJs
    // Code from their documentation
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_iw2pvda', 'template_ittrgwc', form.current, 'i9ICfmr5nt-GgMJfR')
        .then((result) => {
            console.log(result.text);
            setIsSubmitted(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-div">
            <div className="contact-form">
                {isSubmitted  ? (
                        <h2>Your email has been sent. Thank you!</h2>
                    ) : (
                        <form ref={form} onSubmit={sendEmail}>
                        <label>Your Name</label>
                        <input className="text-input" type="text" name="user_name" />
                        <label>Your Email</label>
                        <input className="text-input" type="email" name="user_email" />
                        <label>Message</label>
                        <textarea className="text-input" name="message" />
                        <input className="button-1" type="submit" value="Send" />
                    </form>
                    )}
            </div>
            <div className="contact-pars">
                <h3 id="contact" className="contact-title">Feel Free to Reach Out</h3>
                <p className="contact-p">
                    If you or your company are looking for a dedicated and passionate software
                    developer, I feel as though I would be an axcellent candidate. Feel free to 
                    reach me by email or phone number provided below. Thank you for taking the time 
                    to look through my portfolio and I hope to hear from you in the future!
                </p>
            </div>
        </div>
    );
}