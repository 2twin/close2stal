import React from "react";
import apple from "../assets/img/icon-apple.svg";
import audiomack from "../assets/img/icon-audiomack.svg";
import facebook from "../assets/img/icon-facebook.svg";
import instagram from "../assets/img/icon-instagram.svg";
import soundcloud from "../assets/img/icon-soundcloud.svg";
import spotify from "../assets/img/icon-spotify.svg";
import twitter from "../assets/img/icon-twitter.svg";
import youtube from "../assets/img/icon-youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__upper">
            <div className="footer__socials">
              <a href="#">
                <img src={apple} alt="" />
              </a>
              <a href="#">
                <img src={audiomack} alt="" />
              </a>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={soundcloud} alt="" />
              </a>
              <a href="#">
                <img src={spotify} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
            </div>
            <form action="" className="footer__feedback">
              <span className="feedback-title">
                Sign up for STAL's exclusive news
              </span>
              <div className="feedback-form">
                <input
                  type="text"
                  required
                  inputMode="email"
                  placeholder="EMAIL"
                />
                <button>Join</button>
              </div>
            </form>
          </div>
          <div className="footer__bottom">
            <a className="footer__logo" href="#">
              <img src="./assets/img/grayscale-logo.svg" alt="" />
            </a>
            <div className="footer__policy">
              <a href="#">Privacy policy</a>
              <a href="#">Terms of use</a>
              <a href="#">Ad choices</a>
              <a href="#">Cookies policy</a>
            </div>
            <span className="copyright">Close2STAL ©2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
