import React from "react";
import HotelSearch from "../components/hotel/HotelSearch";
import UniqueStayCards from "../components/hotel/UniqueStayCards";
import { Box } from "@mui/material";

const HotelBooking: React.FC = () => {
  return (
    <div>
      <HotelSearch />
      <Box sx={{ mx: 5 }}>
        <UniqueStayCards />
      </Box>
    </div>
  );
};

export default HotelBooking;
