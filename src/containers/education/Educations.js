import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import backgroundImage from "../../assets/images/transcript.png"; // Import the image

const backgroundStyle = {
  position: "static",
  height: "100vh", // Full viewport height
  width: "100%", // Full viewport width
  backgroundImage: `url(${backgroundImage})`, // Set the background image
  backgroundSize: "cover", // Ensure the image covers the container
  backgroundPosition: "top", // Center the image
  backgroundRepeat: "no-repeat", // Prevent repeating

  zIndex: -1, // Send it behind the content
};


class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Schools Attended
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
