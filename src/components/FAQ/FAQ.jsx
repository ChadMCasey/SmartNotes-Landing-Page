import React from "react";
import "./FAQ.css";

const FAQ = ({ children }) => {
  return (
    <section className="faq">
      <div className="faq__heading-section">
        <h2 className="h2 faq__heading">Frequently Asked Questions</h2>
        <p className="text-reg faq__description">
          We've compiled a list of the most frequently asked questions about
          SmartNotes to help you get the information you need. If you have any
          other questions, feel free to reach out to our support team.
        </p>
      </div>
      {children}
    </section>
  );
};

export default FAQ;
