import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me </Typography>
        <Typography>
          Hey, My name is Al-amin Pramanik. I am a <b>'MERN-Stack'</b> Developer
          and a Student in{" "}
          <b>
            'Programming-Hero & institute of information technology bogra(IITB)'
          </b>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/alamin363" target="black">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/alaminislam365/" target="black">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/alaminpk2/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/devalaminpramanik/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
