import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    const contentStyle = {
      position: "relative", // Position content on top of the blurred background
      zIndex: 1, // Ensure content is above the background
    };

    return (
      <div>
        {/* Foreground Content */}
        <div style={contentStyle}>
          <Header theme={theme} />
          <Greeting theme={theme} />
          <Skills theme={theme} />
          <TopButton theme={theme} />
        </div>
      </div>
    );
  }
}

export default Home;
