import styled from "@emotion/styled";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Hero from "./Hero";

const Component = styled(Box)({
  height: "100vh",

  display: "flex",
});

const Header = () => {
  return (
    <>
      <Component>
        <Box>
          <NavBar />
        </Box>
        <Box>
          <Hero />
        </Box>
      </Component>
    </>
  );
};

export default Header;
