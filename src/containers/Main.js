import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
//projects
import Joycon from "../pages/Joycon/joycon";
import Hexapod from "../pages/Hexapod/Hexapod";
import LearningHexapod from "../pages/LearningHexapod/learningHexapod";

import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/test"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/hexapod"
            render={(props) => <Hexapod {...props} theme={this.props.theme} />}
          />
          <Route
            path="/learningHexapod"
            render={(props) => <LearningHexapod {...props} theme={this.props.theme} />}
          />
          <Route
            path="/joycon"
            render={(props) => <Joycon {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
