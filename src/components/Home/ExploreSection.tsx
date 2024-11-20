import { Box, Typography, Grid2 } from "@mui/material";
import React from "react";
import CityInfoCards from "../common/CityInfoCards";
import city1 from "../../assets/city1.jpeg";
import city2 from "../../assets/city2.jpeg";
import city3 from "../../assets/city3.jpeg";
import city4 from "../../assets/city4.jpeg";
import city5 from "../../assets/city5.jpeg";
import city6 from "../../assets/city6.jpeg";

const popularCities = [
  {
    cityName: "Goa",
    cardImage: city1,
    topic: "25 of the Most Unique Things to Do in Goa to Local Experts",
    cityDescription:
      "Explore Goa with certainty when you trust your travel plans to Tripster - your professional guide. With an impressive legacy of curated travel experiences tailored to your interests, we boast unrivaled expertise on the ins and outs of Beantown.",
    authorName: "Gillian Morris",
    liked: 120,
    views: 340,
  },
  {
    cityName: "Chennai",
    cardImage: city2,
    topic: "What to See in Seoul. A Saber Viajando",
    cityDescription:
      "Seoul is the capital of South Korea. It was the capital of several Korean states including Baekje, Joseon, the Korean Empire, Goryeo. Seoul's history dates back to 18 BC with the people of Baekje.",
    authorName: "Author 2",
    liked: 98,
    views: 270,
  },
  {
    cityName: "City 3",
    cardImage: city3,
    topic: "8 of the Best Things to Do in Polignano a Mare",
    cityDescription:
      "Polignano a Mare is an unexpected gem that took me by surprise. From its famous cliffside beach to the charming old town, this coastal village offers everything I love about Puglia without feeling overrun by tourists",
    authorName: "Author 2",
    liked: 98,
    views: 270,
  },
  {
    cityName: "City 2",
    cardImage: city4,
    topic: "New York City - What’s Good",
    cityDescription:
      "I've been asked MANY times for NYC recs, so this is my attempt to get them all in one place, in a way that makes it easy for folks to see where and what the places are. ",
    authorName: "Author 2",
    liked: 98,
    views: 270,
  },
  {
    cityName: "City 2",
    cardImage: city5,
    topic: "Neighbourhood Guide: Bukit Batok",
    cityDescription:
      "Bukit Batok is a neighbourhood home to some of Singapore's most well-preserved forests. Beyond these forests are also a rich WWII history and some of the best food in the western part of Singapore.",
    authorName: "Author 2",
    liked: 98,
    views: 270,
  },
  {
    cityName: "City 2",
    cardImage: city6,
    topic: "Things to do in Bari, Puglia, off the beaten path in Italy",
    cityDescription:
      "From wandering the vibrant streets of Bari Vecchia to discovering hidden gems liked Orecchiette Street and savoring delicious street food, this guide will show you the best.",
    authorName: "Author 2",
    liked: 98,
    views: 270,
  },

  // Add other city details here
];

const ExploreSection: React.FC = () => {
  return (
    <>
      <Typography sx={{ fontSize: "36px", fontWeight: 700, my: 2 }}>
        Explore
      </Typography>
      <Typography sx={{ fontSize: "24px", fontWeight: 700, my: 1 }}>
        Popular destinations
      </Typography>
      <Box sx={{ p: 2, px: 5 }}>
        <Grid2
          container
          spacing={1.5}
          sx={{
            alignItems: "flex-start",
          }}
        >
          {popularCities.map((item, index) => (
            <Grid2 key={index} size={3}>
              <CityInfoCards datas={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default ExploreSection;
