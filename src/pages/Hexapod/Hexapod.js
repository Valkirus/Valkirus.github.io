import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./HexapodModule.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-reveal";
import Video from "../../assets/vids/controls_tests-hexapod.webm";
import Video2 from "../../assets/vids/real_test.webm";
import Video3 from "../../assets/vids/hexapod-show.webm";
import styled from "styled-components";

const images = [
  require(`../../assets/images/hexapod.png`),
  require(`../../assets/images/hexapod-pic1.png`),
  require(`../../assets/images/hexapod-pic2.png`),
  require(`../../assets/images/hexapod-pic4.jpg`),
  require(`../../assets/images/hexapod-pic5.jpg`),
  require(`../../assets/images/hexapod-pic6.jpg`),
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

class Hexapod extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="project-main">
        <Header theme={this.props.theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
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
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Hexapod for exploration
                </h1>
                <a
                  href={"https://github.com/Valkirus/spider-robot"}
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
                  This project was inspired by the{" "}
                  <a href="https://www.youtube.com/watch?v=sXzpYgzsNIU">
                    {" "}
                    MYP Chipo
                  </a>
                  . It was made as a learning project, To use skills I've
                  gathered from making other smaller projects. This project
                  ideally combines all of those skills (CAD Design, Electronics,
                  Circuit Design, Software) into one nice project. <br></br> The
                  fun part about it was the software bit, I spent a lot of time
                  fine tuning the IK algorithm and gait generation to have a
                  smooth walk cycle.
                </p>
                <div className="video-container">
                  <video controls src={Video} />
                </div>
                <div className="video-container">
                  <video controls src={Video2} />
                </div>
                <div className="video-container">
                  <video controls src={Video3} />
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

export default Hexapod;
