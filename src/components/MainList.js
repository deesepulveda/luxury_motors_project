import React from "react";
import "./MainList.css";
// import Card from "./Card";
import { data } from "../data/Data";

const MainList = () => {
  return (
    <div className="mainList_container_main">
      <div className="mainList_container_listings">
        {data.map((data) => (
          <div className="mainList_box">
            <li key={data.id}>
              <p>{data.year}</p>
              <p>{data.make}</p>
              <p>{data.model}</p>
              <p>{data.trim}</p>
              <p>{data.price}</p>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainList;
