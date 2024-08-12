import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          height: "38px",
          top: "55px",
          marginRight: "80px",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h3">
          <h3>تخصیص تخت</h3>
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
