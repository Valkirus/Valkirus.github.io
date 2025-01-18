import React, { Component } from "react";
import "./TranscriptAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import Transcript from "../../assets/images/transcript.png";

class transcriptAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          <Panel
            className="accord-panel"
            title="Hatyaiwittayalai"
            key="Hatyaiwittayalai"
            overrides={{
              Header: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                  border: `1px solid`,
                  borderRadius: `5px`,
                  borderColor: `${theme.headerColor}`,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                  color: `${theme.text}`,
                  ":hover": {
                    color: `${theme.secondaryText}`,
                  },
                }),
              },
              Content: {
                style: () => ({
                  backgroundColor: `${theme.body}`,
                }),
              },
            }}
          >
            <div className="transcript">
              <img src={Transcript} alt="transcript" />
            </div>
          </Panel>
        </Accordion>
      </div>
    );
  }
}

export default transcriptAccordion;
