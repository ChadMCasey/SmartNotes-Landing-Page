import React from "react";
import "./AccordionItem.css";
import arrow from "../../assets/colored-arrow.svg";
import arrowRight from "../../assets/colored-arrow-right.svg";

const AccordionItem = ({ item, setOpenQuestion, openQuestion }) => {
  const { question, answerHeading, answer, id } = item;

  const open = openQuestion === id;

  const handleQuestionClick = (id) => {
    openQuestion === id ? setOpenQuestion(-1) : setOpenQuestion(id);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-item__bar"
        onClick={() => handleQuestionClick(id)}
      >
        <p className="text-med accordion-item__question">{question}</p>
        <img
          src={arrow}
          alt="arrow"
          className="accordion-item__icon accordion-icon"
        />
      </button>
      <div className={`accordion-item__answer ${open ? "visible" : ""}`}>
        <div className="accordion-item__heading-container">
          <p className="text-med accordion-item__answer-heading">
            {answerHeading}
          </p>
          <img
            src={arrowRight}
            alt="arrow"
            className="accordion-item__answer-icon accordion-icon"
          />
        </div>
        <p className="text-reg accordion-item__answer-description">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
