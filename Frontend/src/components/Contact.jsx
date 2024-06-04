import React from 'react';
import './Contact.css'; 
import pdf from "../assets/pdf/resume.pdf"

const Contact = () => {
    console.log(pdf);
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="left">
            <h2 className="subtitle">Contact Me</h2>
            <p><i className="fa-solid fa-paper-plane"></i>piyushjha150403@gmail.com</p>
            <p><i className="fa-sharp fa-solid fa-phone"></i>8766302073</p>
            <div className="social-icons">
              <a href=""><i className="fa-brands fa-square-facebook"></i></a>
              <a href="https://www.linkedin.com/in/piyush-jha-0a3729233/"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/piyush_jha15/"><i className="fa-brands fa-square-instagram"></i></a>
              <a href=""><i className="fa-brands fa-square-twitter"></i></a>
            </div>
            <a href={pdf} download className="btn btnl">Download CV</a>
          </div>
          <div className="right">
            <form>
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="text" name="email" placeholder="Enter your email" required />
              <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
              <button type="submit" className="btn btnl">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
