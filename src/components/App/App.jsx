import React from "react";

// css
import "./App.css";

// components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <Page>
      <Header>
        <Hero />
      </Header>
      <Testimonial />
      <Features />
      <Testimonial />
      <Video />
      <Testimonial />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Testimonial />
      <CTA />
      <Footer />
    </Page>
  );
};

export default App;
