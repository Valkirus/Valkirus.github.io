import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./joyconModule.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-reveal";
import Video from "../../assets/vids/joycon-test.mp4";
import styled from "styled-components";

const images = [
  require(`../../assets/images/JoyCon.png`),
  require(`../../assets/images/joycond-pic3.png`),
  require(`../../assets/images/joycond-pic2.png`),
  require(`../../assets/images/Schematic.png`),
  require(`../../assets/images/PCB.png`)
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

class joycon extends Component {
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
                  RC Transmitter & Receiver
                </h1>
                <a
                  href={"https://github.com/Valkirus/RC-Transmitter"}
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
                This project was inspired by the <a href="https://www.youtube.com/watch?v=-BDCmwNssiw&t=125s"> How To Mechatronics's RC Transmitter</a>. It was made as a tool to learn and adapt to other projects, to use skills I've gathered from making other smaller projects.
                 This project ideally combines all of those skills (CAD Design, Electronics, Circuit Design, Software) into one nice project. <br></br> The fun part, making the menu and navigation of the menu.

                <br></br>

                The github respiratory can be founded here <a href="https://github.com/Valkirus/RC-Transmitter"> RC Transmitter</a>.
                </p>
                <div className="video-container">
                <video controls src={Video} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default joycon;
