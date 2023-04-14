import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";

import { FaRegSmileWink } from "react-icons/fa";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import DoctorPortal from "../../images/doctore-po.png"
import Dashboard from "../../images/dashboard.png"
import Agrohub from "../../images/agrohub.png"
import Server from "../../images/mern-server.png"
import Home_cooke from "../../images/home cooke.png"
import Phonehunter from "../../images/phonehunter.png"
import Course from "../../images/mern-server.png"

const Project = ({ projects = [1, 2, 3] }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
       Some Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
      <ProjectCard
          id=""
          key=""
          url="https://dashboard-siteusers.netlify.app"
          projectImage={Dashboard}
          projectTitle="MERN Dashboard"
          description="Create a Mern Stack project dashboard. this dashboard show all the data about user product seller. dashboard user show user Location how many user currently active, every month sells total month sells total weekly sells show total transactions. seller see your categories product show history control. show geography map to show how many country user show this map"
          technologies="Frontend: React.js, redux, emotion nivo ETC.
          BAckend: Node.js with Express.js framework, MongoDB for database management, helmet, mongoose, morgan body-parser"
        />
        <ProjectCard
          id=""
          key=""
          url="https://doctore-portal.netlify.app/"
          projectImage={DoctorPortal}
          projectTitle="Doctors portal"
          description="Doctor portal website Doctor appointment can be taken on website like a medical center, the movement of sick people will be very convenient and the cost will be very less. There are many more facilities and rules future in this website which will make it easier and get rid of the hassle of visiting the hospital"
          technologies="Frontend: React.js, firebase, emotion nivo ETC.
          Backend: Node.js with Express.js framework, MongoDB, .env ETC"
        />

  
        <ProjectCard
          id=""
          key=""
          url="https://agrohubb2b.netlify.app/"
          projectImage={Agrohub}
          projectTitle="AgroHub (B2B Website)"
          description=" Businessmen will be able to register and login into the website. The website will store the user's personal information and order history. Farmers and local suppliers can list their products on the website, including details such as price, quantity, and product images. Businessmen can browse through these listings and filter them by category, location, and other parameters. The website will allow businessmen to search for products using keywords, and apply advanced filters to narrow down their search results. Businessmen will be able to place orders directly on the website, and make payments using a secure payment gateway. chat and Messaging all client chats: The website will have a messaging system that allows businessmen and farmers/suppliers to communicate with each other, discuss product details, and negotiate prices ETC."
          technologies="Frontend: React.js, Redux for state management, Tailwind CSS for styling.
          Node.js with Express.js framework, MongoDB for database management"
        />
        <ProjectCard
          id=""
          key=""
          url="https://github.com/alamin363/ecommerce-website/tree/main/backend"
          projectImage={Server}
          projectTitle="MERN Server"
          description="Create a Mern Stack Backend using mongoose. create user authentication useing mongoose schema, create product schema included all the future what a product needs. create error Handler to handel error create a tryCatch middleware to catch ane error ore success"
          technologies="Node.js with Express.js framework, MongoDB for database management, helmet, mongoose, morgan, body-parser, validator, nodemailer, jsonwebtoken, cookie-parser, bcrypt."
        />
        <ProjectCard
          id=""
          key=""
          url="https://doctore-portal.netlify.app/"
          projectImage={Home_cooke}
          projectTitle="Home Cooking"
          description="This is a Cooking website . a person sell cooking product and sell this product . this website targeted a single parson she sell cooking in home flavor . this is happiness"
          technologies="React js, Node js, Express js, MongoDB, Firebase Authorization, Tailwind
          CSS, flow bite (tailwind library) etc."
        />
        {/* ))} */}
        <ProjectCard
          id=""
          key=""
          url="https://phone-hunters.web.app/category/sumsung"
          projectImage={Phonehunter}
          projectTitle="Phone Hunter"
          description="This Website sells all kinds of used phones like Samsung Vivo oppo apple Nokia ETC. this website Other services including secondhand phones will be phones will be provided from this site"
          technologies="React js, Node js, Express js, MongoDB, Firebase, Tailwind Css ETC."
        />
        <ProjectCard
          id=""
          key=""
          url="https://programmers-web.web.app/"
          projectImage={Course}
          projectTitle="Courses"
          description="This website has various courses like javascript, java, react js, etc. user can see course details only if he is logged in.It is related to various tasks including reviewing new courses on this website. "
          technologies="React js, Node js, Express js, MongoDB, Firebase Authorization, base css."
        />
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Project;
