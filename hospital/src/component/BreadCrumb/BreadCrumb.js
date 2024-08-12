import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadCrumb = () => {
  return (
    <div role="presentation">
      <Box
        sx={{
          marginTop: "22px",
          marginRight: "80px",
          height: "25px",
          top: "22px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#636366",
              lineHeight: "25px",
            }}
            underline="hover"
            color="inherit"
            href="/"
          >
            خانه
          </Link>
          <Link
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#636366",
              lineHeight: "25px",
            }}
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            مدیریت
          </Link>
          <Link
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#636366",
              lineHeight: "25px",
            }}
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            تخت
          </Link>
        </Breadcrumbs>
      </Box>
    </div>
  );
};

export default BreadCrumb;
