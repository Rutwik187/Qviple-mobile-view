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

  const instituteAsStaff = [
    {
      id: "step1",
      text: "Go to Qviple.com",
    },
    {
      id: "step2",
      text: "Create new account / log in to your account(If already have an account)",
    },
    {
      id: "step3",
      text: "Search your institute",
    },
    {
      id: "step4",
      text: "View Institute Profile",
    },
    {
      id: "step5",
      text: "Click on Join/Apply button",
    },
    {
      id: "step6",
      text: "Click on Join (For existing members)",
    },
    {
      id: "step7",
      text: "Click on join as staff",
    },
    {
      id: "step8",
      text: "Enter institute code provided by institutes",
    },
    {
      id: "step9",
      text: "Fill joining form",
    },
    {
      id: "step10",
      text: "Wait for approval from institute (See status in Members Tab next to Home)",
    },
  ];
  const instituteAsStudent = [
    {
      id: "step1",
      text: "Go to Qviple.com",
    },
    {
      id: "step2",
      text: "Create new account / log in to your account(If already have an account)",
    },
    {
      id: "step3",
      text: "Search your institute",
    },
    {
      id: "step4",
      text: "View Institute Profile",
    },
    {
      id: "step5",
      text: "Click on Join/Apply button",
    },
    {
      id: "step6",
      text: "Click on Join (For existing members)",
    },
    {
      id: "step7",
      text: "Click on join as student",
    },
    {
      id: "step8",
      text: "Enter class code provided by institutes",
    },
    {
      id: "step9",
      text: "Fill joining form",
    },
    {
      id: "step10",
      text: "Wait for approval from institute (See status in Members Tab next to Home)",
    },
  ];
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
      answer: <Steps details={instituteAsStaff} />,
    },
    {
      id: "question_3",
      question: "How to join institute as student ?",
      answer: <Steps details={instituteAsStudent} />,
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
