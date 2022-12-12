import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";

import { FaRegSmileWink } from "react-icons/fa";
import  ProjectCard  from "../../component/ProjectCard/ProjectCard";




const Project = ({ projects = [1,2,3] }) => {


  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id=""
            key=""
            url="https://github.com/alamin363/portfolio"
            projectImage="https://react-photo-view.vercel.app/_next/static/media/1.c788857d.jpg"
            projectTitle="Home Cooking"
            description="This is a Cooking website . a person sell cooking product and sell this product . this website targeted a single parson she sell cooking in home flaver . this is happiness"
            technologies="mongodb react firebase github etc."
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Project;
