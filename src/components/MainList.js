import React, { useState } from "react";
import "./MainList.css";
import { data } from "../data/Data";

const MainList = () => {
  const [carData, setCarData] = useState(data);

  // Uniquely Set/Sort Make For Select Options

  const brandsArr = new Set(
    data
      .map((item) => {
        return item.make;
      })
      .sort()
  );

  // Filter Data

  const filterMake = (e) => {
    const curVal = e.currentTarget.value;

    curVal !== "all"
      ? setCarData(
          data.filter((item) => {
            return item.make === curVal;
          })
        )
      : setCarData(data);
  };

  return (
    <div className="mainList_container_main">
      <div className="mainList_container_filter">
        {/* Select Filter */}
        <select
          name="make"
          id=""
          className="filter_box_make"
          onChange={filterMake}
        >
          {/* Options from Select Filter */}
          <option value="all">all</option>
          {Array.from(brandsArr).map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      {/* Rendering Data */}
      <div className="mainList_container_listings_wrapper">
        {carData.map((item) => (
          <div className="mainList_card" key={item.id}>
            <li>
              <p className="item_year_model">
                {item.year} {item.make}
              </p>
              <p className="item_model">{item.model}</p>
              <p className="item_trim">{item.trim}</p>
              <p className="item_price">{item.price}</p>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainList;
