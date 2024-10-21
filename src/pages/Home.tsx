import { Box } from "@mui/material";
import React from "react";
import HomeSearch from "../components/HomeSearch";

const Home: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <HomeSearch />
    </Box>
  );
};

export default Home;
