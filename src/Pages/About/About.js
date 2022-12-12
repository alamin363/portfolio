import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import "./About.css";

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
        <Typography>don't waste your life</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/116880935_978696885906717_469516581805171883_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=2i8FWRm9NoAAX8hwrWY&_nc_ht=scontent.fdac22-1.fna&oh=00_AfBYwTD7YNvOVLh5Vr-peNYfhbIExBeWJpP10Kz1j0p_lg&oe=63BC45C8"
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
