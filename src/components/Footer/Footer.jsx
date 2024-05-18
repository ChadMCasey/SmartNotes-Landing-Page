import React from "react";
import "./Footer.css";
import icon from "../../assets/logo.svg";
import arrow from "../../assets/colored-arrow.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content-left">
          <div className="footer__company-container">
            <img className="footer__logo" src={icon} alt="icon" />
            <h2 className="footer__company">SmartNotes</h2>
          </div>
          <div className="footer__input-container">
            <input
              className="footer__input"
              placeholder="Enter email"
              type="text"
            />
            <img className="footer__input-icon" src={arrow} alt="arrow icon" />
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Product</p>
            <a className="text-small footer__link" href="#">
              About
            </a>
            <a className="text-small footer__link" href="#">
              Features
            </a>
            <a className="text-small footer__link" href="#">
              Pricing
            </a>
            <a className="text-small footer__link" href="#">
              Integrations
            </a>
            <a className="text-small footer__link" href="#">
              FAQs
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Company</p>

            <a className="text-small footer__link" href="#">
              Out Story
            </a>
            <a className="text-small footer__link" href="#">
              Team
            </a>
            <a className="text-small footer__link" href="#">
              Careers
            </a>
            <a className="text-small footer__link" href="#">
              Press
            </a>
            <a className="text-small footer__link" href="#">
              Contact Us
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Resources</p>

            <a className="text-small footer__link" href="#">
              Blog
            </a>
            <a className="text-small footer__link" href="#">
              Webinars
            </a>
            <a className="text-small footer__link" href="#">
              Case Studies
            </a>
            <a className="text-small footer__link" href="#">
              Templates
            </a>
            <a className="text-small footer__link" href="#">
              Help Center
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Legal</p>

            <a className="text-small footer__link" href="#">
              Terms of Service
            </a>
            <a className="text-small footer__link" href="#">
              Privacy Policy
            </a>
            <a className="text-small footer__link" href="#">
              Cookie Policy
            </a>
            <a className="text-small footer__link" href="#">
              Acceptable Use
            </a>
            <a className="text-small footer__link" href="#">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <p className="text-small footer__copywright">
          @2024 SmartNotesI. All Rights Reserved.{" "}
          <a
            href="https://x.com/iamhervewabo"
            className="underline"
            target="_blank"
          >
            @iamhervewabo
          </a>
        </p>
        <div className="footer__external-links">
          <button className="footer__external-link facebook"></button>
          <button className="footer__external-link linkedin"></button>
          <button className="footer__external-link twitter"></button>
          <button className="footer__external-link youtube"></button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
