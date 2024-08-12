import { Button } from "@mui/material";
import React from "react";

const SearchField = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#36459B",
          color: "white",
          width: "120px",
          height: "60px",
          borderRadius: "15px  0  0  15px",
        }}
      >
        جستجو
      </Button>
    </div>
  );
};

export default SearchField;
