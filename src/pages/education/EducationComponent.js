import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { communities_conferences, competitiveSites, experience, work_experiences } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import CommunityImg from "../../containers/communities/CommunityImg";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <CommunityImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Communities
                </h1>
                <h3 className="experience-header-detail-text subTitle" style={{ color: theme.text, fontWeight: 'normal' }}>
                  I’m passionate about connecting with others in engineering and tech leadership. I regularly take part in communities like EngineeringX and Python London, PHP London and DevOps Dining and attend conferences such as LeadDev, CTO Craft, DevOps Live, TechShow, AWS Summit, and WebSummit. These spaces keep me sharp, challenge my thinking, and offer a chance to share what I’ve learned while learning from others. Whether it’s through a good conversation, a tough question, or a new perspective, I value the community side of engineering just as much as the technical work.
                </h3>
                {/*<CompetitiveSites logos={competitiveSites.competitiveSites} />*/}
              </div>
            </div>
          </Fade>
          <Educations sections={communities_conferences.communities_conferences} theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
