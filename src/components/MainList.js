import React, { useState } from "react";
import "./MainList.css";
import { data } from "../data/Data";

const MainList = () => {
  const [carData, setCarData] = useState(data);

  const newData = (make) => {
    setCarData(
      data.filter((item) => {
        return item.make === make;
      })
    );
  };

  // Uniquely Set/Sort Brand Data from Data
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
        <select
          name="make"
          id=""
          className="filter_box_make"
          onChange={filterMake}
        >
          <option value="all">all</option>
          {Array.from(brandsArr).map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="mainList_container_listings">
        {carData.map((item) => (
          <div className="mainList_box" key={item.id}>
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
