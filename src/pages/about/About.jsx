import React from "react";
import { Container } from "react-bootstrap";

import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import "./about.css";

import IMG1 from "../../assets/images/ffp-1.png";

const About = () => {
  return (
    <>
      <Container className="py-5">
        {/* <h1>Ini About</h1> */}
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <img className="img_profile " src={IMG1} alt="" />
          </div>

          <div className="col-md-6">
            <p className="about_text">
              As a freelance front-end developer, I have experience in creating
              responsive and visually appealing websites. My expertise includes
              HTML, CSS, JavaScript, and various front-end frameworks such as
              Bootstrap and React.
              <br />
              <br />I am skilled in developing landing pages, company profiles,
              and other types of websites that require a strong emphasis on user
              experience and aesthetics. I also have experience in optimizing
              website performance and ensuring cross-browser compatibility.
            </p>
            {/* <FaBootstrap/> */}
          </div>
        </div>
      </Container>

      <Container className="py-5">
        <h1 className="text-center pb-5">My Skills</h1>
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="row text-center">
              <div className="col-md-3 text-center m-1 box_shadow">
                <FaHtml5 className="icons" size="3em" />
                <h6>HTML</h6>
              </div>
              <div className="col-md-3 text-center m-1 box_shadow">
                <FaCss3Alt className="icons" size="3em" />
                <h6>CSS3</h6>
              </div>
              <div className="col-md-3 text-center m-1 box_shadow">
                <SiJavascript className="icons" size="3em" />
                <h6>JAVASCRIPT</h6>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 text-center m-1 box_shadow">
                <FaBootstrap className="icons" size="3em" />
                <h6>BOOTSTRAP 5</h6>
              </div>
              <div className="col-md-3 text-center m-1 box_shadow">
                <FaReact className="icons" size="3em" />
                <h6>REACT JS</h6>
              </div>
              <div className="col-md-3 text-center m-1 box_shadow">
                <TbBrandNextjs className="icons" size="3em" />
                <h6>NEXT JS</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KvR_efaSETA?start=61"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
