import React from "react";
import "./steps.css";

const Steps = () => {
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

  return (
    <div class="timeline">
      <div class="steps__outer">
        {instituteAsStaff.map((item, index) => (
          <div key={item.id} class="steps__card">
            <div class="steps__info">
              <div className="text steps__text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
