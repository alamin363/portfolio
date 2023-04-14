import React from "react";
import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
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
      <a className="projectCard" href={url} target="black">
        <div>
          <PhotoProvider>
            <PhotoView src={projectImage}>
              <img
                style={{ width: "300px" }}
                className="img"
                src={projectImage}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>

          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {/* {isAdmin && ( 
       <Button
        style={{ color: "rgba(40,40,40,0.7)" }}   onClick={() => deleteHandler(id)} 
      {/* > */}
      {/* <Delete />
      </Button> 
       )} */}
    </>
  );
};
export default ProjectCard;
