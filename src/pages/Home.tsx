import { Box } from "@mui/material";
import React from "react";
import HomeSearch from "../components/Home/HomeSearch";
import ExploreSection from "../components/Home/ExploreSection";

const Home: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <HomeSearch />
      <ExploreSection />
    </Box>
  );
};

export default Home;
