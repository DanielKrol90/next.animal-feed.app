import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { IoMdPhonePortrait } from "react-icons/io";

import { images } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__widgets-container">
        <div className="footer__widgets-item-wrapper">
          <h3 className="footer__widgets-title">Kontakt</h3>
          <div className="footer__widgets-item-list">
            <p className="footer__widgets-text">Innowacyjne Technologie Paszowe</p>
            <p className="footer__widgets-text">ul. Batorego 15 </p>
            <p className="footer__widgets-text">Wieliczka, 32-300 </p>
            <p className="footer__widgets-text"><IoMdPhonePortrait size={25}/> +48 725 113 505</p>
          </div>
        </div>
        <div className="footer__widgets-item-wrapper">
          <h3 className="footer__widgets-title">Godziny Otwarcia</h3>
          <div className="footer__widgets-item-list">
            <p className="footer__widgets-text">Poniedziałek - Piątek</p>
            <p className="footer__widgets-text">8:00 - 16:00</p>
            <p className="footer__widgets-text">Sobota</p>
            <p className="footer__widgets-text">7:00 - 13:00</p>
          </div>
        </div>

      </div>
      <div className="footer__items-container">
        <div className="footer__items-wrapper">
          <div className="footer__items-icons">
            <a
              target="_blank"
              title="E-mail"
              href="mailto:pasze.wieliczka@gmail.com"
              rel="noopener"
            >
              <AiOutlineMail
                size={25}
                color="white"
              />
            </a>
            <a
              target="_blank"
              title="Facebook"
              href="https://www.facebook.com/itp.wieliczka"
              rel="noopener"
            >
              <AiFillFacebook
                size={25}
                color="white"
              />
            </a>
          </div>
          <div className="footer__logo">
            <Image
              className="nav__img-items"
              src={images.Logo2}
              alt="logo"
                priority
            />
          </div>
        </div>
        <div className="footer__copyrights">
          <p>Wszelkie Prawa Zastrzeżone &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
