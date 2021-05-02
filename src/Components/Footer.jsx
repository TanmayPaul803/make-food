import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="SocialLinks">
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-facebook-f fa-2x"></i>Facebook
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-twitter fa-2x"></i>
            Twitter
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-linkedin-in fa-2x"></i>
            Linkdin
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-instagram fa-2x"></i>
            Instagram
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-youtube fa-2x"></i>
            Youtube
          </div>
        </div>
        <div className="link">
          <div className="linkitem">
            <i class="fab fa-pinterest-p fa-2x"></i>
            Pinterest
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="top">
            <div className="div1">
              <h1>Website</h1>
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
            <div className="div3"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
