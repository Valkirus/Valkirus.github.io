import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import TranscriptAccordion from "../../containers/transcriptAccordion/TranscriptAccordion";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px"></Fade>
          <Educations theme={this.props.theme} />
        </div>
        <Fade bottom duration={2000} distance="40px">
          <div className="basic-transcript">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              Transcript
            </h1>
            <TranscriptAccordion theme={theme} />
          </div>
        </Fade>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
