import React, { Component } from "react";
import "./Skills.css";
import { about } from "../../portfolio";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

class AboutSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {about.data.map((about, i) => {
          return (
            <div key={i} className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {about.title}
                  </h1>
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {about.about.map((aboutSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {aboutSentence}
                        </p>
                      );
                    })}
                    <Button
                      text={"Read about me"}
                      className="project-button"
                      href={"/about"}
                      rel="noopener noreferrer"
                      theme={theme}
                    />
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="none"
                    src={require(`../../assets/images/${about.fileName}`)}
                  ></img>
                  {/*<GetSkillSvg fileName={skill.fileName} theme={theme} />*/}
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AboutSection;
