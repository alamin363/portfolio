import React from "react";
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
            projectImage="https://www.facebook.com/stories/525670679206832/?source=story_tray"
            projectTitle="Sampole Project"
            description="This is a sampole project lorem saklfjsdfnds fklsdfj"
            technologies="mongodb react reduxed bal bala"
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
