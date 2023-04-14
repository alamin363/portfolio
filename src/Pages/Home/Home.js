import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.css";
import * as THREE from "three";
import spaceImage from "../../images/space.jpg";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import TimeLine from "../../component/TimeLine/TimeLine";
import js from "../../images/javascript.png";
import rj from "../../images/react.jpg";
import mdb from "../../images/mongodb.jpg";
import njs from "../../images/node.png";
import exp from "../../images/express.png";
import mui from "../../images/mui.png";
import resume from "../../images/resume-icon-png-9.png";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import FaceBookCard from "../FaceBookCard/FaceBookCard";
import { border } from "@mui/system";
import { FaTruckLoading } from "react-icons/fa";

const Home = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    // window.addEventListener("mousemove", (e) => {
    //   if (e.clientX <= window.innerWidth / 2) {
    //     moon.rotation.x -= constSpeed;
    //     moon.rotation.y += constSpeed;
    //     venus.rotation.x -= constSpeed;
    //     venus.rotation.y += constSpeed;
    //   }

    //   if (e.clientX > window.innerWidth / 2) {
    //     moon.rotation.x -= constSpeed;
    //     moon.rotation.y -= constSpeed;
    //     venus.rotation.x -= constSpeed;
    //     venus.rotation.y -= constSpeed;
    //   }

    //   if (e.clientY > window.innerHeight / 2) {
    //     moon.rotation.x -= constSpeed;
    //     moon.rotation.y += constSpeed;
    //     venus.rotation.x -= constSpeed;
    //     venus.rotation.y += constSpeed;
    //   }

    //   if (e.clientY <= window.innerHeight / 2) {
    //     moon.rotation.x -= constSpeed;
    //     moon.rotation.y -= constSpeed;
    //     venus.rotation.x -= constSpeed;
    //     venus.rotation.y -= constSpeed;
    //   }
    // });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeSkillsBox");

      if (window.scrollY > 1400) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
      }
    });
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>A</p>
          <p>L</p>
          <p>A</p>
          <p>M</p>
          <p>I</p>
          <p>N</p>.<p>P</p>
          <p>K</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">REACT DEVELOPER</Typography>
          <Typography variant="h2">JAVASCRIPT DEVELOPER</Typography>
          <Typography variant="h2">MERN STACK DEVELOPER</Typography>
          <Typography variant="h2">LEARNER</Typography>
        </div>

        <Link to="/project">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1]} />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            display: `${display && "none"}`,

            border: "3px solid #000",
          }}
        >
          {/* <Button
            onClick={() => setDisplay(!display)}
            sx={{
              height: "50px",
              width: "20px",
              borderRadius: "50%",
              border: "3px solid #000",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            X
          </Button> */}
          {/* 
          <a href="https://drive.google.com/file/d/14KuhVW841e7fvZ54_uvQVAS1Z8ivBisK/view?usp=sharing">
            <img
              style={{ width: "50px", height: "50px" }}
              src={resume}
              alt=""
            />
            <Typography>My Resume</Typography>
          </a> */}
        </Box>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFace homeCubeSkillsFace1">
            <img src={js} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace2">
            <img src={rj} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace3">
            <img src={njs} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace4">
            <img src={mdb} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace5">
            <img src={exp} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace6">
            <img src={mui} alt="Face1" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeSkillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3"> BEST POSTS</Typography>

        <div className="homeFacebookWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BihZd2x8Qh8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <FaceBookCard
            image="https://media-exp1.licdn.com/dms/image/C5622AQE1hwFgcZ3JgQ/feedshare-shrink_800/0/1670289819085?e=1673481600&v=beta&t=wrmd6FGtfYh9fNql2D_1yG4vMUwCjE6ymCu6fOZUmm4"
            title="CHECK OUT NOW"
            url="https://www.linkedin.com/posts/programming-hero-community_webdevelopment-programming-programminghero-activity-7005703273600991232--Bt0?utm_source=share&utm_medium=member_desktop"
          />
         */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AZ0ja83nMVc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <FaceBookCard
            image="https://media-exp1.licdn.com/dms/image/C5622AQHvQdYStovaPA/feedshare-shrink_800/0/1667887051245?e=1673481600&v=beta&t=dt_xd9C6kBNmUcdPs-aHVSHtKwUAHK_U3U5O6ASaPRc"
            title="CHECK OUT NOW"
            url="https://www.linkedin.com/posts/programming-hero-community_webdevelopment-webprogramming-programminghero-activity-6995625337657192449-90yA?utm_source=share&utm_medium=member_desktop"
          />
          <FaceBookCard
            image="https://media-exp1.licdn.com/dms/image/C5622AQEddmh7NiJJLg/feedshare-shrink_800/0/1665947243660?e=1673481600&v=beta&t=yRAxJMF8wUqRKTXL6z5AMnxELkB2iXb8ndPR0CgaIdE"
            title="CHECK OUT NOW"
            url="https://www.linkedin.com/posts/programming-hero-community_programminghero-programming-development-activity-6987489190695370753-FovK?utm_source=share&utm_medium=member_desktop"
          /> */}
        </div>
      </div>
      <Typography variant="h3" style={{ color: "#fff" }}>
        Location
      </Typography>

      <div className="homeFacebookWrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29018.072814319585!2d88.9606757719888!3d24.61475316401468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc6dc2abc288cf%3A0x80a0d03035f140dc!2sAtrai%20Thana!5e0!3m2!1sen!2sbd!4v1681514699892!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link to="contact">
          <Typography variant="h3" style={{ color: "#fff" }}>
            Contact Me
          </Typography>
        </Link>
      </div>
      <Box
        sx={{
          background: "#fff",
        }}
      ></Box>
    </div>
  );
};

export default Home;
