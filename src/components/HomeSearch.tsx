import { Box, Typography } from "@mui/material";
import React from "react";

const HomeSearch: React.FC = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f3f4f5", textAlign: "center" }}>
        <Typography>Your Ultimate Guide to Stress-Free</Typography>
        <Typography>Travel Planning</Typography>
        <input type="text" id="fname" name="fname" />
      </Box>
    </Box>
  );
};

export default HomeSearch;
