import { ReactNavbar } from "overlay-navbar";
import React from "react";
import logo from "../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <ReactNavbar
        navColor1="white"
        navColor2="hsl(219,  48%, 8%)"
        burgerColor="hsl(250, 100%, 75%)"
        burgerColorHover="hsl(250, 100%, 75%)"
        logo={logo}
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Project"
        link4Text="Content"
        link1Url="/"
        link2Url="/about"
        link3Url="/project"
        link4Url="/content"
        link1ColorHover="white"
        link1Color="hsl(250, 100%, 75%)"
        link1Size="1.5rem"
        link1Padding="3vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor="hsl(250, 100%, 75%)"
        profileIconColorHover="white"
      />
    </div>
  );
};

export default Navbar;
