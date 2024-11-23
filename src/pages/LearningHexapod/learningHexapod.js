import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./learningHexapodModule.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-reveal";
import styled from "styled-components";

const images = [
  require(`../../assets/images/LearningHexapod.png`),
  require(`../../assets/images/learningHexapod-pic1.png`),
  require(`../../assets/images/learnHexapod-pic3.png`),
  require(`../../assets/images/FK.png`),
  require(`../../assets/images/IK.png`),
];

const IconWrapper = styled.span`
  i {
    background-color: ${({ theme }) => theme.text};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

class learningHexapod extends Component {
  render() {
    const theme = this.props.theme;
    return (
        <div className="project-main">
        <Header theme={this.props.theme} />
        <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
              <div className="logo">
              <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                interval={3000}
                dynamicHeight={true}
                useKeyboardArrows={true}
                >
                  {images.map((src, index) => (
                  <div key={index}>
                    <img src={src} alt={`Slide ${index}`} />
                  </div>
                  ))}
                </Carousel>
                </div>
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Hexapod for exploration
                </h1>
                <a
                  href={"https://github.com/Valkirus/RC-Receiver"}
                  className={`icon-button`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWrapper>
                    <i className={`fab ${"fa-github"}`}></i>
                  </IconWrapper>
                </a>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
              This project's design was inspired by the <a href="https://www.instructables.com/Afordable-PS2-Controlled-Arduino-Nano-18-DOF-Hexap/"> PS2  Arduino Nano Power Hexapod</a>. It was made as a learning project, 
              This hexapod aims to write code with is resourceful enough to be ran on an arduino (NodeMCU V3 ESP8266). 
              <br></br> The software and the algorithm was based on my Hexapod for exploration project. The calculations are the same but made to be ran on an arduino based microcontroller.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default learningHexapod;
