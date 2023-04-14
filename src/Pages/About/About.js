import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import "./About.css";
import Imageme from "../../images/Alamin.png"
const About = () => {
  
  // const { data, status, isLoading } = useQuery({
  //   queryKey: ["data"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/user").then((res) => res.json()),
  // });
  // console.log(data, "status", status);
  // if (isLoading) {
  //   return (
  //     <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>don't waste your life. Let_s Code Your Life</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={Imageme}
            alt="Profile"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Alamin pramanik  <FaCode />
          </Typography>

          <Typography>MERN Stack developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            I love Playing Code.
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am a MERN Stack developer. I am Study Electrical Engineering institute of information technology bogra(IITB).
            

          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
