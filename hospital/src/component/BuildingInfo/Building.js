import React from "react";
import hospital from "../AppBar/vectors/hospital-buildings 1.png";
import ScrollableTabsButtonVisible from "../BuildingInfo/FloorNavigation";

const Building = () => {
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img src={hospital} />
      </div>
      <div>
        <h4 style={{ textAlign: "center" }}>ساختمان امید</h4>
      </div>
      <ScrollableTabsButtonVisible />
    </div>
  );
};

export default Building;
