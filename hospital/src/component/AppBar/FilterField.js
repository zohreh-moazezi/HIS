import React from "react";
import { Button, Box } from "@mui/material";
import filter from "../AppBar/vectors/filter.png";

const FilterField = () => {
  return (
    <div>
      <Box sx={{ alignItems: "center", justifyContent: "center" }}>
        <img src={filter} />
        <Button sx={{ color: "#36459B", width: "100px", height: "60px" }}>
          فیلتر
        </Button>
      </Box>
    </div>
  );
};

export default FilterField;
