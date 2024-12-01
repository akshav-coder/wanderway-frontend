import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import city1 from "../../assets/city1.jpeg";
import city2 from "../../assets/city2.jpeg";
import city3 from "../../assets/city3.jpeg";
import city4 from "../../assets/city4.jpeg";
import city5 from "../../assets/city5.jpeg";
import city6 from "../../assets/city6.jpeg";

const UniqueStayCards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const totalBoxes = 15;
  const boxesPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const boxWidth = isMobile ? 250 : isTablet ? 200 : 200;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - boxesPerView < 0 ? totalBoxes - boxesPerView : prev - boxesPerView
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + boxesPerView >= totalBoxes ? 0 : prev + boxesPerView
    );
  };

  const places = [
    { name: "Paris", image: city1 },
    { name: "New York", image: city2 },
    { name: "Tokyo", image: city3 },
    { name: "Sydney", image: city4 },
    { name: "London", image: city5 },
    { name: "Rome", image: city6 },
    { name: "Dubai", image: city1 },
    { name: "Bangkok", image: city2 },
    { name: "Barcelona", image: city3 },
    { name: "Istanbul", image: city4 },
  ];

  const visibleBoxes = Array.from({ length: totalBoxes }, (_, index) => {
    const place = places[index % places.length]; // Cycle through places
    return (
      <Card
        key={index}
        sx={{
          minWidth: `${boxWidth}px`,
          borderRadius: "8px",
          flexShrink: 0,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={place.image}
          alt={place.name}
        />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {place.name}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  const translateX = -(currentIndex * (boxWidth + 16)); // Box width + gap

  return (
    <Box
      sx={{ maxWidth: "800px", margin: "0 auto", p: 2, position: "relative" }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 700, my: 2, textAlign: "center" }}
      >
        Explore stays in trending destinations
      </Typography>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* Carousel Track */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(${translateX}px)`,
            gap: 2,
            p: 1,
          }}
        >
          {visibleBoxes}
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UniqueStayCards;
