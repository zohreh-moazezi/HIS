import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import floors from "../AppBar/vectors/hotel-building 1.png";

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "70%",
          bgcolor: "background.paper",
          direction: "ltr",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={floors} />
          <img src={floors} />
          <img src={floors} />
          <img src={floors} />
          <img src={floors} />
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab label="طبقه دوم بخش ارتوپدی" />
          <Tab label="طبقه دوم بخش کودکان" />
          <Tab label="طبقه اول بخش روماتولوژِی" />
          <Tab label="طبقه اول بخش ارتوپدی" />
          <Tab label="طبقه دوم بخش روماتولوژِی" />
        </Tabs>
      </Box>
    </Box>
  );
}
