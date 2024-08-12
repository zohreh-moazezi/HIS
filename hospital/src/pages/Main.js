import React from "react";
import BreadCrumb from "../component/BreadCrumb/BreadCrumb";
import Header from "../component/Header/Header";
import CustomAppBar from "../component/AppBar/CustomAppBar";
import { Box } from "@mui/material";
import CustomBuilding from "../component/BuildingInfo/CustomBuilding";

const Main = () => {
  return (
    <div>
      <Box
        width="1440px"
        height="3475px"
        gap="0px"
        opacity="0"
        border="1px solid #000000"
        position="absolute"
        margin="auto"
        left="0"
        right="0"
        backgroundColor="#B2C6E347"
      >
        <BreadCrumb />
        <Header />
        <CustomAppBar />
        <CustomBuilding />
      </Box>
    </div>
  );
};

export default Main;
