import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
  return (
    <footer >
      <div className="footer_wrapper">
        <div className="footer_left">
          <img src="/logo.svg" alt="" />
          <p className="footer_text">
            Har xil turdagi kundalik ehtiyojlar va  sevimli mashg'ulotlarni
            ta'minlaydigan  bozor.
          </p>
        </div>
        <div className="footer_right">
          <div className="about">
            <h3 className="about_title">Biz haqimizda</h3>
            <div className="footer_link">
              <Link className="about_link">Biz haqimizda</Link>
              <Link className="about_link">Ko'p so'raladigan savollar</Link>
              <Link className="about_link">Ommaviy oferta</Link>
            </div>
          </div>
          <div className="contact">
            <h3 className="about_title">Biz bilan aloqa</h3>
            <div className="footer_link">
              <div className="icons_wrapper">
                <FiPhoneCall className="icons" />
                <Link className="about_link">+998 99 842 79 79</Link>
              </div>
              <div className="icons_wrapper">
                <FaInstagram className="icons" />
                <Link className="about_link">Karvo_uz</Link>
              </div>{" "}
              <div className="icons_wrapper">
                <FaTelegramPlane className="icons" />
                <Link className="about_link">Karvo_uz</Link>
              </div>
              <div className="icons_wrapper">
                <SlLocationPin className="icons" />
                <Link className="about_link">Toshkent, Chilonzor, Muqimiy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
