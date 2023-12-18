import React, { useState } from "react";
import "./Featured.css";

const Featured = () => {
  const [newColor, setNewColor] = useState(true);

  const changeHandler = () => {
    setNewColor(false);
  };

  return (
    <div className="featured_wrapper">
      <div className="featured_container">
        <div
          className="featured_card"
          style={{ backgroundColor: newColor ? "green" : "blue" }}
        >
          Card One
        </div>
        <div className="featured_card">Card Second</div>
        <div className="featured_card">Card Third</div>
      </div>
      <button className="slideBtn" onClick={changeHandler}>
        Change
      </button>
    </div>
  );
};

export default Featured;
