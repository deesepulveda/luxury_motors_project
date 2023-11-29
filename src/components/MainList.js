import React from "react";
import "./MainList.css";
import Card from "./Card";

const MainList = () => {
  return (
    <div className="mainList_container_main">
      <h1>Main List</h1>
      <div className="mainList_container_listings">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MainList;
