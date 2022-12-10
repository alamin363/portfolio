import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import spaceImage from "../../images/space.jpg";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import TimeLine from "../../component/TimeLine/TimeLine";
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
const Home = () => {
  // useEffect(() => {
  //   const textureLoader = new THREE.TextureLoader();

  //   const moonTexture = textureLoader.load(moonImage);
  //   const venusTexture = textureLoader.load(venusImage);
  //   const spaceTexture = textureLoader.load(spaceImage);

  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.set(4, 4, 8);

  //   const canvas = document.querySelector(".homeCanvas");
  //   const renderer = new THREE.WebGLRenderer({ canvas });

  //   const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
  //   const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
  //   const moon = new THREE.Mesh(moonGeometry, moonMaterial);

  //   const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
  //   const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
  //   const venus = new THREE.Mesh(venusGeometry, venusMaterial);
  //   venus.position.set(8, 5, 5);

  //   const pointLight = new THREE.PointLight(0xffffff, 1);
  //   const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

  //   pointLight.position.set(8, 5, 5);
  //   pointLight2.position.set(-8, -5, -5);

  //   scene.add(moon);
  //   scene.add(venus);
  //   scene.add(pointLight);
  //   scene.add(pointLight2);
  //   scene.background = spaceTexture;

  //   const constSpeed = 0.01;
  //   window.addEventListener("mousemove", (e) => {
  //     if (e.clientX <= window.innerWidth / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y += constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y += constSpeed;
  //     }

  //     if (e.clientX > window.innerWidth / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y -= constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y -= constSpeed;
  //     }

  //     if (e.clientY > window.innerHeight / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y += constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y += constSpeed;
  //     }

  //     if (e.clientY <= window.innerHeight / 2) {
  //       moon.rotation.x -= constSpeed;
  //       moon.rotation.y -= constSpeed;
  //       venus.rotation.x -= constSpeed;
  //       venus.rotation.y -= constSpeed;
  //     }
  //   });

  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     moon.rotation.y += 0.001;
  //     venus.rotation.y += 0.001;
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   return window.addEventListener("scroll", () => {
  //     camera.rotation.z = window.scrollY * 0.001;
  //     camera.rotation.y = window.scrollY * 0.003;

  //     // const skillsBox = document.getElementById("homeskillsBox");

  //     // if (window.scrollY > 1500) {
  //     //   skillsBox.style.animationName = "homeskillsBoxAnimationOn";
  //     // } else {
  //     //   skillsBox.style.animationName = "homeskillsBoxAnimationOff";
  //     // }
  //   });
  // }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFace homeCubeSkillsFace1">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/297571351_1465599280549806_7954690358560609047_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYbckJLCwHYAX96-z1k&_nc_ht=scontent.fdac22-1.fna&oh=00_AfC6r0EdidaUPA2JHWi4SkQotB3tktpH_m6uePznBpOC8A&oe=639946B0" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace2">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/297571351_1465599280549806_7954690358560609047_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYbckJLCwHYAX96-z1k&_nc_ht=scontent.fdac22-1.fna&oh=00_AfC6r0EdidaUPA2JHWi4SkQotB3tktpH_m6uePznBpOC8A&oe=639946B0" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace3">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/318554295_630692702075234_1071345026869804098_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=G01ivlFWbH0AX8_iybC&tn=r-vU8b7Tq8POV6tY&_nc_ht=scontent.fdac22-1.fna&oh=00_AfAYjUidvfQOM6VVc76Fdvou8KEXOOrub7NvFxnWXILvsw&oe=639A634E" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace4">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/297571351_1465599280549806_7954690358560609047_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYbckJLCwHYAX96-z1k&_nc_ht=scontent.fdac22-1.fna&oh=00_AfC6r0EdidaUPA2JHWi4SkQotB3tktpH_m6uePznBpOC8A&oe=639946B0" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace5">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/297571351_1465599280549806_7954690358560609047_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYbckJLCwHYAX96-z1k&_nc_ht=scontent.fdac22-1.fna&oh=00_AfC6r0EdidaUPA2JHWi4SkQotB3tktpH_m6uePznBpOC8A&oe=639946B0" alt="Face1" />
          </div>
          <div className="homeCubeSkillsFace homeCubeSkillsFace6">
            <img src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/297571351_1465599280549806_7954690358560609047_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYbckJLCwHYAX96-z1k&_nc_ht=scontent.fdac22-1.fna&oh=00_AfC6r0EdidaUPA2JHWi4SkQotB3tktpH_m6uePznBpOC8A&oe=639946B0" alt="Face1" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
        <SiCplusplus />
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
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">
          {/* {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
