import React from "react";
import { Box } from "@mui/material";

const BuildingDetails = () => {
  return (
    <div style={{ display: "flex", gap: "50px", backgroundColor: "#B2C6E347" }}>
      <Box>
        <p>تعداد ساختمان ها : ۲ عدد</p>
        <p>تعداد کل اتاق ها: ۱۸عدد</p>
        <p>تعداد کل تخت ها:۱۱۰عدد</p>
      </Box>
      <Box>
        <p>قابل رزرو : ۳۲ عدد</p>
        <p>غیرقابل رزرو : ۱۲ عدد</p>
        <p>پر : ۵۸ عدد</p>
      </Box>
    </div>
  );
};

export default BuildingDetails;
