import { Typography } from "@mui/material";
import React from "react";
import "./FaceBookCard.css";
const FaceBookCard = ({
  image,
  title,
  url = "https://www.facebook.com/alaminislam365/",
}) => {
  return (
    <div className="FacebookCard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography textAlign="center">{title}</Typography>
      </a>
    </div>
  );
};

export default FaceBookCard;
