import React, { useState } from "react";
import "./Accordion.css";
import AccordionItem from "../AccordionItem/AccordionItem";
import { faqItems } from "../../utils/constants";

const Accordion = () => {
  const [openQuestion, setOpenQuestion] = useState(-1);
  return (
    <div className="accordion">
      {faqItems.map((item) => {
        return (
          <AccordionItem
            item={item}
            key={item.id}
            setOpenQuestion={setOpenQuestion}
            openQuestion={openQuestion}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
