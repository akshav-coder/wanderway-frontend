import { Box, Typography } from "@mui/material";
import React from "react";

const HomeSearch: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          background:
            "url(https://travopo.com/wp-content/uploads/2023/12/Travopo-header-image.jpg) center center / cover no-repeat",
          textAlign: "center",
        }}
      >
        {/* Overlay box */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Content on top of the overlay */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            py: 4,
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
            Your Ultimate Guide to Stress-Free
          </Typography>
          <Typography variant="h4">Travel Planning</Typography>
          <input
            type="text"
            id="fname"
            name="fname"
            style={{ marginTop: "20px", padding: "10px", borderRadius: "4px" }} // Simple input styling
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSearch;
