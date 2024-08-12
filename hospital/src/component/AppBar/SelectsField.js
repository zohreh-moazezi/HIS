import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Typography } from "@mui/material";
import dropdown from "../AppBar/vectors/dropdown.png";
import line from "../AppBar/vectors/Line.png";
import styled from "@emotion/styled";

const StyledSelectedOption = styled("div")(({ theme }) => ({
  marginTop: "10px",
}));

const SelectsField = ({
  label,
  options = [],
  selectedOptions = [],
  handleChange,
  sx = {},
}) => {
  return (
    <div>
      <FormControl
        fullWidth
        sx={{
          ...sx,

          bottom: 10,
          "& .MuiInput-underline:before": {
            borderBottom: "none", // Remove the underline/bottom border
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none", // Remove the underline/bottom border
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none", // Remove the underline/bottom border on hover
          },
        }}
      >
        <InputLabel id={`${label}-label`}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {label}
            <img
              alt={label}
              src={dropdown}
              style={{ width: 10, marginLeft: 5, marginRight: 20 }}
            />
            <img src={line} style={{ width: "1px" }} />
          </Box>
        </InputLabel>

        <Select
          labelId={`${label}-label`}
          id="demo-simple-select-standard"
          value={selectedOptions}
          onChange={handleChange}
          IconComponent={null}
          renderValue={(selected) => (
            <StyledSelectedOption>
              {Array.isArray(selected)
                ? selected.map((value) => (
                    <Typography key={value} variant="body2">
                      {value}
                    </Typography>
                  ))
                : null}
            </StyledSelectedOption>
          )}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectsField;
