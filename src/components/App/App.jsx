import React from "react";

// css
import "./App.css";
import "../../fonts/fonts.css";

// components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";

// images
import DoubleQuotes from "../../assets/double-quote.svg";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Logos />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={DoubleQuotes}
          alt="Double Quotes"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Features />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={DoubleQuotes}
          alt="Double Quotes"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Video />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={DoubleQuotes}
          alt="Double Quotes"
          className="testimonial__quotes"
        />
      </Testimonial>
      <Pricing />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={DoubleQuotes}
          alt="Double Quotes"
          className="testimonial__quotes"
        />
      </Testimonial>
      <FAQ>
        <Accordion />
      </FAQ>
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Sarah Johnson</p>
          <p className="text-reg testimonial__organization">
            TechSavvy Solutions
          </p>
        </div>
        <img
          src={DoubleQuotes}
          alt="Double Quotes"
          className="testimonial__quotes"
        />
      </Testimonial>
      <CTA />
      <Footer />
    </Page>
  );
};

export default App;
