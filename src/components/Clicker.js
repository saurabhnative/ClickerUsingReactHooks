import React, { useState } from "react";
export default function Cliker() {
  const [clickerValue, updateClickerValue] = useState(0);
  return (
    <div className="container">
      <div className="clickerParent border">
        <div className="clickerDisplay bg-light display-2 d-flex justify-content-center align-items-center">
          <span>{clickerValue}</span>
        </div>
        <div className="clickerButtonsPanel d-flex flex-row">
          <button
            className="btn btn-success w-100"
            onClick={() => updateClickerValue(clickerValue + 1)}
          >
            <i className="fa fa-plus fa-2x" />
          </button>
          <button
            className="btn btn-warning w-100"
            onClick={() => updateClickerValue(0)}
          >
            <i className="fa fa-refresh fa-2x" />
          </button>
          <button
            className="btn btn-danger w-100"
            onClick={() => updateClickerValue(clickerValue - 1)}
          >
            <i className="fa fa-minus fa-2x" />
          </button>
        </div>
      </div>
    </div>
  );
}
