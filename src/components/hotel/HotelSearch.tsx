// Import Statements
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

const CustomTextField: React.FC<React.ComponentProps<typeof TextField>> = (
  props
) => (
  <TextField
    {...props}
    size="small"
    variant="standard"
    sx={{
      "& .MuiInput-underline:before": { borderBottom: "none" },
      "& .MuiInput-underline:after": { borderBottom: "none" },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      width: "100%",
    }}
  />
);

// Form Field Component
interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, children }) => (
  <Box sx={{ textAlign: "left", minWidth: 150 }}>
    <Typography sx={{ color: "black", fontSize: "14px" }}>{label}</Typography>
    {children}
  </Box>
);

const HotelSearch: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Dayjs | null>(dayjs());
  const [checkOut, setCheckOut] = useState<Dayjs | null>(dayjs().add(1, "day"));
  const [guests, setGuests] = useState("");

  // Theme and Responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handler for Search Button (Example)
  const handleSearch = () => {
    console.log({ destination, checkIn, checkOut, guests });
  };

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
        {/* Overlay */}
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

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            py: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? "auto" : "300px",
            px: isMobile ? 2 : 0,
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 2 : 3}
            sx={{
              px: 5,
              py: 2,
              backgroundColor: "white",
              borderRadius: 50,
              width: isMobile ? "100%" : "fit-content",
              maxWidth: isMobile ? "600px" : "none",
            }}
            alignItems="center"
          >
            {/* Where to */}
            <FormField label="Where to">
              <CustomTextField
                placeholder="Search destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="Search destination"
              />
            </FormField>

            {!isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "40px", alignSelf: "center" }}
              />
            )}

            {/* Check In */}
            <FormField label="Check in">
              <DatePicker
                slots={{
                  textField: (params) => (
                    <TextField
                      {...params}
                      size="small"
                      variant="standard"
                      placeholder="Add Dates"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          {
                            borderBottom: "none",
                          },
                      }}
                    />
                  ),
                }}
                defaultValue={moment("2022-04-17")}
              />
            </FormField>

            {!isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "40px", alignSelf: "center" }}
              />
            )}

            {/* Check Out */}
            <FormField label="Check out">
              <DatePicker
                slots={{
                  textField: (params) => (
                    <TextField
                      {...params}
                      size="small"
                      variant="standard"
                      placeholder="Add Dates"
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          {
                            borderBottom: "none",
                          },
                      }}
                    />
                  ),
                }}
                defaultValue={moment("2022-04-17")}
              />
            </FormField>

            {!isMobile && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: "40px", alignSelf: "center" }}
              />
            )}

            {/* Who */}
            <FormField label="Who">
              <CustomTextField
                placeholder="Add Guest"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                aria-label="Add Guest"
              />
            </FormField>

            {/* Search Button */}
            <Button
              endIcon={<Search />}
              size="medium"
              variant="contained"
              sx={{ borderRadius: 50, minWidth: 100 }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelSearch;
