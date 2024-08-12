import React, { useState } from "react";
import SelectsField from "./SelectsField";
import { Box } from "@mui/material";
import FilterField from "./FilterField";
import SearchField from "./SearchField";

const CustomAppBar = () => {
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [selectedOptions5, setSelectedOptions5] = useState([]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions1(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions2(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions3(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions4(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions5(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "15px",
        width: "90%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SelectsField
          label="مجتمع بیمارستانی امام خمینی"
          options={["option1", "option2", "option3"]}
          selectedOptions={selectedOptions1}
          handleChange={handleChange1}
          sx={{ width: "290px" }}
          labelSx={{ paddingleft: "100px" }}
        />
        <SelectsField
          label="همه ساختمان ها "
          options={["option1", "option2", "option3"]}
          selectedOptions={selectedOptions2}
          handleChange={handleChange2}
          sx={{ width: "220px" }}
        />
        <SelectsField
          label="تخت قابل رزرو"
          options={["option1", "option2", "option3"]}
          selectedOptions={selectedOptions3}
          handleChange={handleChange3}
          sx={{ width: "200px" }}
        />
        <SelectsField
          label="انتخاب نوع تخت"
          options={["option1", "option2", "option3"]}
          selectedOptions={selectedOptions4}
          handleChange={handleChange4}
          sx={{ width: "200px" }}
        />
        <SelectsField
          label="مرد"
          options={["زن", "مرد"]}
          selectedOptions={selectedOptions5}
          handleChange={handleChange5}
          sx={{ width: "150px" }}
        />
      </Box>
      <FilterField />
      <SearchField />
    </div>
  );
};

export default CustomAppBar;
