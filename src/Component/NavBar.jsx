import React, { useState } from "react";
import StarsIcon from "@mui/icons-material/Stars";
import Groups2Icon from "@mui/icons-material/Groups2";
import ShareIcon from "@mui/icons-material/Share";
import TodayIcon from "@mui/icons-material/Today";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(Box)({
  backgroundColor: "#555",
  height: "147vh",
  width: "110px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

const SelectedCircle = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 35px;
  height: 35px;
  background-color: red;
  border-radius: 50%;
  display: ${({ selected }) => (selected ? "block" : "none")};
`;

const Icon = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ selected }) => (selected ? "white" : "#fff")};
`;

const BoxOne = styled(Box)({
  paddingBottom: "95px",
});

const NavBar = () => {
  const [selectedIcon, setSelectedIcon] = useState("stars");

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <Component>
      <BoxOne>
        <IconWrapper
          onClick={() => handleIconClick("stars")}
          className={selectedIcon === "stars" ? "selected" : ""}
        >
          <Icon selected={selectedIcon === "stars"}>
            <StarsIcon />
          </Icon>
          <SelectedCircle selected={selectedIcon === "stars"} />
        </IconWrapper>
        <IconWrapper
          onClick={() => handleIconClick("share")}
          className={selectedIcon === "share" ? "selected" : ""}
        >
          <Icon selected={selectedIcon === "share"}>
            <ShareIcon />
          </Icon>
          <SelectedCircle selected={selectedIcon === "share"} />
        </IconWrapper>
        <IconWrapper
          onClick={() => handleIconClick("groups")}
          className={selectedIcon === "groups" ? "selected" : ""}
        >
          <Icon selected={selectedIcon === "groups"}>
            <Groups2Icon />
          </Icon>
          <SelectedCircle selected={selectedIcon === "groups"} />
        </IconWrapper>
        <IconWrapper
          onClick={() => handleIconClick("today")}
          className={selectedIcon === "today" ? "selected" : ""}
        >
          <Icon selected={selectedIcon === "today"}>
            <TodayIcon />
          </Icon>
          <SelectedCircle selected={selectedIcon === "today"} />
        </IconWrapper>
      </BoxOne>
    </Component>
  );
};

export default NavBar;
