import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";


class Home extends Component {
  render() {
    const contentStyle = {
      position: "relative", // Position content on top of the blurred background
      zIndex: 1, // Ensure content is above the background
    };

    const skillsStyle = {
      marginTop: "800px", // Add space above the Skills section
    };

    return (
      <div>
        

        {/* Foreground Content */}
        <div style={contentStyle}>
          <Header theme={this.props.theme} />
          <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          
          <TopButton theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Home;
