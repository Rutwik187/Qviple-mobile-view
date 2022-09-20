import React from "react";
import "./steps.css";

const Steps = (props) => {
  return (
    <div class="timeline">
      <div class="steps__outer">
        {props.details.map((item, index) => (
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
