import React from "react";
import facebook from "assets/style/images/icon_facebook.png";
import instagram from "assets/style/images/icon_instagram.png";
import twitter from "assets/style/images/icon_twitter.png";
import mail from "assets/style/images/icon_mail.png";
import twitch from "assets/style/images/icon_twitch.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    // Start Footer
    <footer>
      <div class="hero-footer">
        <div class="footer-addres">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div class="footer-menu">
          <Link to="#">Our Services</Link>
          <Link to="#">Why Us</Link>
          <Link to="#">Testimonial</Link>
          <Link to="#">FAQ</Link>
        </div>
        <div class="footer-social">
          <p>Connect with us</p>
          <Link to="#">
            <img src={facebook} />
          </Link>
          <Link to="#">
            <img src={instagram} />
          </Link>
          <Link to="#">
            <img src={twitter} />
          </Link>
          <Link to="#">
            <img src={mail} />
          </Link>
          <Link to="#">
            <img src={twitch} />
          </Link>
        </div>
        <div class="copyright-footer">
          <p>Copyright Binar 2022</p>
          <img src="./assets/Rectangle 74.png" alt="" />
        </div>
      </div>
    </footer>
    //  End Footer
  );
};

export default Footer;
