import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import backgroundImage from "../../assets/images/test.png"; // Import the image

export default function Greeting(props) {
  const theme = props.theme;

  const backgroundStyle = {
    position: "static",
    height: "70vh", // Full viewport height
    width: "100%", // Full viewport width
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: "cover", // Ensure the image covers the container
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent repeating
    filter: "blur(1px)", // Apply blur only to the background
    zIndex: -1, // Send it behind the content
  };

  return (
    
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        {/* Background */}
        
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div style={backgroundStyle}></div>
        </div>
      </div>
    </Fade>
  );
}
