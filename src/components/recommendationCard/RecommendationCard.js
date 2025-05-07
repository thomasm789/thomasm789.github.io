import React, { Component } from "react";
import "./RecommendationCard.css";
import { Fade } from "react-reveal";

class RecommendationCard extends Component {
  render() {
    const { recommendation, theme } = this.props;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="recommendation-card">
          <div className="rec-header-horizontal">
            <img
              className="rec-avatar"
              src={require(`../../assets/images/${recommendation.avatar_path}`)}
              alt={recommendation.name}
            />
            <div className="rec-info">
              <h3 className="rec-name" style={{ color: theme.text }}>
                {recommendation.name}
              </h3>
              <h4 className="rec-role" style={{ color: theme.secondaryText }}>
                {recommendation.role} @ {recommendation.company}
              </h4>
            </div>
          </div>
          <div className="rec-body">
            <p className="rec-quote" style={{ color: theme.text }}>
              “{recommendation.quote}”
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default RecommendationCard;
