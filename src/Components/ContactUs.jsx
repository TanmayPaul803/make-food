import React from "react";
import "../App.css";
import contactusHeroImg from "../Contactus.jpg";
import Footer from "./Footer";
const ContactUs = () => {
  return (
    <div className="contactUS">
      <div className="CntUSimgWrapper">
        <img src={contactusHeroImg} alt="" srcset="" />
        <div className="ContactUsHeroTxt">
          <h1>Contact US</h1>
        </div>
      </div>
      <div className="ContactDetails">
        <div className="contactForm">
          <div className="formDiv">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submitted");
              }}
            >
              <div className="nameCont">
                <div className="fname">
                  <label htmlFor="">
                    First Name <span>*</span>
                  </label>
                  <input type="text" />
                </div>
                <div className="lname">
                  <label htmlFor="">
                    Last Name <span>*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <label htmlFor="">
                  Email <span>*</span>
                </label>
                <input type="email" name="" id="" />
              </div>
              <div>
                <label htmlFor="">
                  Message <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">
                  Additional Details <span>*</span>
                </label>

                <textarea></textarea>
              </div>
              <input
                type="submit"
                value="Send message"
                className="inputSubmit"
              />
            </form>
          </div>
        </div>
        <div className="contactText">
          <div className="Continfo">
            <h1>How can we help you?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              corporis sapiente veniam consequuntur! Est officiis sunt molestias
              sint illum veniam provident id! Accusantium illum temporibus, ea
              expedita vel earum facere.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
