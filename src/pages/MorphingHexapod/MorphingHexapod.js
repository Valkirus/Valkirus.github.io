import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./MorphingHexapodModule.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-reveal";
import styled from "styled-components";
import PCBPic from "../../assets/images/3D-CroppedPCB.png";
import PCBSchematic from "../../assets/images/PCB-HEXAPOD.png";

const images = [
  require(`../../assets/images/solidworks-5.png`),
  require(`../../assets/images/solidworks-6.png`),
  require(`../../assets/images/solidworks-7.png`),
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

class MorphingHexapod extends Component {
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
                <div>
                  <h1
                    className="projects-heading-text"
                    style={{ color: theme.text }}
                  >
                    Morphing Hexapod
                  </h1>
                  <a
                    href={"https://github.com/Valkirus/Morphing-Robot"}
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
                    This is a WIP project. I plan to adapt this robot for my
                    forth year projects. It's still currently being worked on.
                    You can see my progress on the github page linked above.
                    Feel free to reach out in my{" "}
                    <a href="https://discord.gg/pNXExTsFps">Discord Server</a>
                  </p>
                  <br></br>
                  <h2 style={{ color: theme.text }}>Morphing Hexapod's PCB</h2>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    This PCB is designed to be used with a Teensy 4.1, it can
                    take up to 20A of raw battery power. I designed it in KiCad,
                    it has a built in IMU, 13x Serial Servo Ports compatible
                    with HiWonder servos (HTS-35H and HTD-45H).
                  </p>
                  <div className="project-image-div">
                    <img src={PCBPic} alt="PCB Picture"></img>
                    <img src={PCBSchematic} alt="PCB Picture"></img>
                  </div>
                  <br />
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

export default MorphingHexapod;
