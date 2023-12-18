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
      <div className="mainList_title_box">
        <h2 className="mainList_title">search our inventory</h2>
      </div>
      <div className="mainList_container_filter">
        <div className="mainList_container_filter_box">
          {/* Select Filter Title */}
          <div className="filter_box_title">Sort by Make</div>
          {/* Select Filter */}
          <select
            name="make"
            id=""
            className="filter_box_select"
            onChange={filterMake}
          >
            {/* Options from Select Filter */}
            <option value="all">all</option>
            {Array.from(brandsArr).map((item, index) => (
              <option key={index} value={item.make}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mainList_container_filter_box">
          {/* Select Filter Title */}
          <div className="filter_box_title">Sort by Price</div>
          {/* Select Filter */}
          <select
            name="make"
            id=""
            className="filter_box_select"
            onChange={filterMake}
          >
            {/* Options from Select Filter */}
            <option value="all">all</option>
            <option value="low">low to high</option>
            <option value="high">high to low</option>
          </select>
        </div>
      </div>
      {/* Rendering Data */}
      <div className="mainList_container_listings_wrapper">
        <div className="mainList_container_listings_container">
          {carData.map((item) => (
            <div className="mainList_card" key={item.id}>
              <div className="data_image_box">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="data_data_box">
                <li>
                  <p className="data_year_model">
                    {item.year} {item.make}
                  </p>
                  <p className="data_model">{item.model}</p>
                  <p className="data_trim">{item.trim}</p>
                  <p className="data_price">{item.price}</p>
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainList;
