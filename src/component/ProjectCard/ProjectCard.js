import React from "react";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";
import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  
}) => {
  // const dispatch = useDispatch();

  // const deleteHandler = async (id) => {
  //   await dispatch(deleteProject(id));
  //   dispatch(getUser());
  // };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {/* {isAdmin && ( */}
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          // onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      {/* )} */}
    </>
  );
};
export default ProjectCard;