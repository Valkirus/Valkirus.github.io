import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
      <Button
          text={"View all my projects"}
          className="project-button"
          href={"/projects"}
          rel="noopener noreferrer"
          theme={theme}
          />
    </div>
  );
}
