import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./accordion.css";
import Steps from "./Steps";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const AccordionData = [
    {
      id: "question_1",
      question: "Is it really for free?",
      answer:
        "We believe in embracing everyone, so the services are free of cost for lifetime if registered within offer time. (Free services include all necessary features for working of institute, add ons will be paid in future, Above mention features will be free for lifetime)",
    },
    {
      id: "question_2",
      question: "How to join institute as staff ?",
      answer: <Steps />,
    },
    {
      id: "question_3",
      question: "What is experience level of the professional?",
      answer:
        "They are highly skilled and particular about their professional. They have a minimum of 3 years of experience.",
    },
  ];

  return (
    <IconContext.Provider
      value={{ color: "var(--primary-color)", size: "25px" }}
    >
      <div className="AccordionSection">
        <div className="AccordionSection_header">
          <div className="title">Frequently Asked Questions</div>
        </div>

        <div className="Accordion_FAQs">
          {AccordionData.map((item, index) => (
            <div
              className="AccordionStyles_Wrap"
              onClick={() => toggle(index)}
              key={item.id}
            >
              <div className="AccordionStyles_Question">
                <div className="sub-title accordion_sub-title">
                  {item.question}
                </div>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </div>

              {clicked === index ? (
                <div className="AccordionStyles_Dropdown">
                  <div className="text accordion_answer">{item.answer}</div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
