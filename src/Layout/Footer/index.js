import React from "react";
import SocialIcons from "./SocialIcons";
import Contactus from "./FooterContactus";
import Aboutus from "./FooterAboutus";
import AboutOurCompany from "./FooterAboutOurCompany";
import OtherLinks from "./FooterOtherLinks";

const Footer = ()=>{
    return(
      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Join our mailing list to receive the news &amp; latest trends</h4>
              </div>
            </div>
           <NewsQuotes />
          </div>
          <div className="row">
            <Contactus />
            <Aboutus />
            <OtherLinks />
            <AboutOurCompany />
            <SocialIcons />
            <div className="col-lg-12">
                <div className="copyright-text">
                  <p>Copyright © 2023 Centrum Lux Decoders Company. All Rights Reserved.</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;


const NewsQuotes = ()=>{
  return(
    <div className="col-lg-6 offset-lg-3">
    <form id="search" action="#" method="GET">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <fieldset>
            <input type="address" name="address" className="email" placeholder="Email Address..." autoComplete="on" required="" />
          </fieldset>
        </div>
        <div className="col-lg-6 col-sm-6">
          <fieldset>
            <button type="submit" className="main-button">Subscribe Now <i className="fa fa-angle-right"></i></button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
  )
}