import { FavoriteBorder, VisibilityOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type CityInfoCardProps = {
  datas: {
    cityName: string;
    cardImage: string;
    topic: string;
    cityDescription: string;
    authorName: string;
    liked: number;
    views: number;
  };
};

const CityInfoCards: React.FC<CityInfoCardProps> = ({ datas }) => {
  const { cityName, cardImage, topic, cityDescription, liked } = datas;

  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={cardImage}
          height={170}
          alt={cityName || "City"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            noWrap
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {topic || "Unknown City"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              textAlign: "left",
            }}
          >
            {cityDescription || "Description not available"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Box display={"flex"} alignItems={"center"}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24, mr: 1 }}
          />
          <Typography>Tuyet</Typography>
        </Box>
        <Box>
          <Button startIcon={<FavoriteBorder />} size="small">
            {liked}
          </Button>
          <Button startIcon={<VisibilityOutlined />} size="small">
            {liked}
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CityInfoCards;
