import React from "react";
import BuildingDetails from "./BuildingDetails";

const BuildingList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "50px",
        margin: "auto",
      }}
    >
      <header>
        <h4>لیست ساختمان های بیمارستان امام</h4>
      </header>
      <BuildingDetails />
    </div>
  );
};

export default BuildingList;
