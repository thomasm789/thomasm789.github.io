import React, { Component } from "react";
import "./Recommendations.css";
import { Fade } from "react-reveal";
import { greeting, recommendations } from "../../portfolio";
import RecommendationCard from "../../components/recommendationCard/RecommendationCard";
import Button from "../../components/button/Button";

class Recommendations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="rec">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Recommendations
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {recommendations.recommendations.map((recommendation) => {
            return <RecommendationCard recommendation={recommendation} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Recommendations"}
          className="project-button"
          href="https://www.linkedin.com/in/tmason-developer/details/recommendations"
          newTab={true}
          theme={theme}
        />
      </div>
    );
  }
}

export default Recommendations;
