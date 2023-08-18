import * as React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import DatePicker from "@mui/x-date-pickers-pro";

const Component = styled(Box)({
  width: "1240px",
  height: "143vh",
  marginRight: "110px",
  backgroundColor: "#1b1b1b",
  padding: "12px",
});

const TopBox = styled(Box)({
  display: "flex",
});

const SearchBox = styled(Box)({
  width: "55%",
  margin: "0px 20px 0px 25px",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",

  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },

  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Hello = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  fontStyle: "normal",
  margin: "10px 20px 0px 25px",
});

const SecondBox = styled(Box)({
  display: "flex",
  color: "white",
  margin: "30px 20px 0px 25px",
});

const ExploreButton = styled(Button)({
  background: "red",
  borderRadius: "25px",
  padding: "0px 25px 0px 25px",
  fontSize: "15px",
  fontWeight: "bold",
  width: "150px",
  margin: "10px 0px 10px 120px",
});

const MyTaskBox = styled(Box)({
  margin: "30px 20px",
});
const Text = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  fontStyle: "normal",
  color: "white",
});

const CardBox = styled(Card)({
  margin: "20px 0px",
  width: "55%",
  height: "270px",
  backgroundColor: "#555",
  borderRadius: "15px",
});

const Hero = () => {
  return (
    <Component>
      <TopBox>
        <SearchBox>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search stars, planets, and astronomical events"
              inputProps={{ "aria-label": "search" }}
              style={{
                color: "#FFF",
              }}
            />
          </Search>
        </SearchBox>
        <Box
          sx={{ flexGrow: 0 }}
          style={{
            marginLeft: "25%",
          }}
        >
          <Avatar alt="logo" src="#" />
        </Box>
        <Hello>Hello</Hello>
      </TopBox>
      <Box>
        <SecondBox>
          <Box>
            <Typography
              style={{
                fontSize: "35px",
              }}
            >
              Good morning,stargazer
            </Typography>
            <Typography>
              Open the panel and explore the wonders of the universe
            </Typography>
          </Box>
          <ExploreButton variant="contained">+Explore</ExploreButton>
        </SecondBox>
        <Box>
          <MyTaskBox>
            <Text>My Tasks</Text>
            <CardBox>Hey</CardBox>
          </MyTaskBox>

          <MyTaskBox>
            <Text>Total observation hours</Text>
            <CardBox>Hey</CardBox>
          </MyTaskBox>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "white",
        }}
      >
        <LocalizationProvider dateAdapter={DatePicker}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
    </Component>
  );
};

export default Hero;
