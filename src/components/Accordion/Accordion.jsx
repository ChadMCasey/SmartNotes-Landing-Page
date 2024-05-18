import React, { useState } from "react";
import { faqItems } from "../../utils/constants";
import "./Accordion.css";
import AccordionItem from "../AccordionItem/AccordionItem";

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
