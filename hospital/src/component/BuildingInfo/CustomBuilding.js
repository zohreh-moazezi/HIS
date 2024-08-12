import React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import BuildingList from "./BuildingList";
import Building from "./Building";
const CustomBuilding = () => {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "90%",
        margin: "auto",
        borderRadius: "15px",
        marginTop: "50px",
      }}
    >
      <h2
        style={{
          marginRight: "30px",
          paddingTop: "50px",
          marginBottom: "40px",
        }}
      >
        لیست تخت های مجتمع بیمارستانی امام خمینی
      </h2>
      <Root>
        <Divider textAlign="left" sx={{ width: "90%", margin: "auto" }}>
          <h2 style={{ color: "#424242" }}>بیمارستان امام</h2>
        </Divider>
      </Root>
      <BuildingList />
      <Building />
    </div>
  );
};

export default CustomBuilding;
