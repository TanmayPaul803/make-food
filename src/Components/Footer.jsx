import React from "react";
import { NavLink } from "react-router-dom";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import "../App.css";

//svg///
import personalInfo_svg from "../Assets/Svgs/undraw_message_sent_1030 .svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="SocialLinks">
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-facebook-f fa-2x"></i>

            <span>Facebook</span>
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-twitter fa-2x"></i>
            <span>Twitter</span>
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-linkedin-in fa-2x"></i>
            <span>Linkdin</span>
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-instagram fa-2x"></i>
            <span>Instagram</span>
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-youtube fa-2x"></i>
            <span>Youtube</span>
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-pinterest-p fa-2x"></i>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="top">
            <div className="div1">
              <div className="ftrLogo">
                <FastfoodRoundedIcon className="logo" />
                <h1>makeFood</h1>
              </div>

              <div className="FtrContainer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias explicabo consequuntur sed, delectus dolor nostrum
                  sunt ab. Officiis ipsam perspiciatis nihil nostrum ea, totam
                  error voluptates ipsa eligendi temporibus fuga? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Molestias
                  explicabo consequuntur sed, delectus dolor nostrum sunt ab.
                  Officiis ipsam perspiciatis nihil nostrum ea, totam error
                  voluptates ipsa eligendi temporibus fuga?
                </p>
              </div>
            </div>
            <div className="div2">
              <p className="newsletterTXT">Newsletter</p>
              <div className="newsLetterContainer">
                <p>
                  Sign up to get the latest news, blog, new recepies and more...
                </p>
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "You are successfully subscribed to our newsletter. "
                    );
                  }}
                >
                  <input type="text" placeholder="Email address" />
                  <input
                    type="submit"
                    value="Submit"
                    className="newsLetterSubmitButton"
                  />
                </form>

                <p>@ 2021 DevDocs project 11</p>
                <p>
                  Designed by Tanmay Paul, Powered by{" "}
                  <span>Spoonacular Api</span>
                </p>
              </div>
            </div>
            <div className="div3">
              <div className="ftrContactCont">
                <div className="div">
                  <div className="iconCont">
                    <i class="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <p>Mahanandapally, Jhaljhalia, Malda</p>
                </div>
                <div className="div">
                  <div className="iconCont">
                    <i class="fas fa-phone-alt fa-2x"></i>
                  </div>
                  <p>+912548635874</p>
                </div>
                <div className="div">
                  <div className="iconCont">
                    <i class="fas fa-envelope fa-2x"></i>
                  </div>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="FtrBtmCont">
              <div>
                <p>
                  © 2021 DevDocs project 11.Created by <span>Tanmay Paul</span>
                </p>
              </div>
              <div>
                <ul>
                  <NavLink to="/">
                    <li>Home</li>
                  </NavLink>
                  <NavLink to="/Recipes">
                    <li>Recipes</li>
                  </NavLink>
                  <li>About Me</li>
                  <li>Pages</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerSvg">
        <img src={personalInfo_svg} alt="" />
      </div>
      <div className="footerSvg2">
        <img src={personalInfo_svg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
