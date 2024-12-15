import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./MorphingHexapodModule.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-reveal";
import styled from "styled-components";

const images = [
  require(`../../assets/images/morph1.png`),
  require(`../../assets/images/morph2.png`),
  require(`../../assets/images/morph3.png`),
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
                  This is a WIP project. I plan to adapt this robot for my forth
                  year projects. It's still currently being worked on. You can
                  see my progress on the github page linked above. Feel free to
                  reach out in my{" "}
                  <a href="https://discord.gg/pNXExTsFps">Discord Server</a>
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

export default MorphingHexapod;
