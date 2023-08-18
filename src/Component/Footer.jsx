import { Box, Button, Typography } from "@mui/material";
import solar from "../images/solar.jpg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Component = styled(Box)({
  height: "90vh",
  display: "flex",
  marginTop: "286px",
  borderTop: "5px solid #9999",
});

const ImageBox = styled(Box)({
  width: "50%",
  backgroundImage: `url(${solar})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  paddingTop: "60px",
});

const FormBox = styled(Box)({
  width: "50%",
  background: "#1b1b1b",
  paddingLeft: "100px",
});

const Heading = styled(Typography)({
  color: "red",
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  color: "red",
  fontSize: "13px",
  fontWeight: "300",
  textAlign: "center",
  marginTop: "10px",
});

const LogHeading = styled(Typography)({
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
});

const LogSubHeading = styled(Typography)({
  color: "white",
  fontSize: "13px",
  fontWeight: "300",
  margin: "10px",
});

const FormHeading = styled(Typography)({
  color: "white",
  fontSize: "25px",
  fontWeight: "bold",
  margin: "5px 10px 0px 0px",
  fontStyle: "oblique",
  textAlign: "end",
});
const FormSubHeading = styled(Typography)({
  color: "white",
  fontSize: "13px",
  fontWeight: "30px",
  textAlign: "end",
  margin: "0px 10px 5px 0px",
});

const SearchBox = styled(Box)({
  width: "auto",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",

  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },

  width: "70%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "150%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const InputBox = styled(Box)({
  padding: "80px",
});

const LogButton = styled(Button)({
  background: "#FFF",
  color: "black",
  width: "320px",
  borderRadius: "20px",
  marginTop: "25px",
});

const Footer = () => {
  return (
    <Component>
      <ImageBox>
        <Heading>
          Discover the wonders of
          <br />
          the universe
        </Heading>
        <SubHeading>All the information you need at your fingertips</SubHeading>
      </ImageBox>
      <FormBox>
        <FormHeading>SkyGaze</FormHeading>
        <FormSubHeading>Explore the</FormSubHeading>
        <InputBox>
          <LogHeading>Log in</LogHeading>
          <LogSubHeading>Search for Celestial bodies</LogSubHeading>
          <SearchBox>
            <Search>
              <StyledInputBase
                placeholder="Enter stars, planets name"
                inputProps={{ "aria-label": "search" }}
                style={{
                  color: "#FFF",
                }}
              />
            </Search>
          </SearchBox>
          <LogSubHeading>Password</LogSubHeading>
          <SearchBox>
            <Search>
              <StyledInputBase
                placeholder="********"
                inputProps={{ "aria-label": "search" }}
                style={{
                  color: "#FFF",
                }}
              />
            </Search>
          </SearchBox>

          <LogButton variant="contained">Log in</LogButton>
          <LogSubHeading>Forgot your password?</LogSubHeading>
        </InputBox>
      </FormBox>
    </Component>
  );
};

export default Footer;
