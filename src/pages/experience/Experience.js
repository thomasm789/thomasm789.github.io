import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import Certifications from "../../containers/certifications/Certifications";
import "./Experience.css";
import { communities_conferences, experience, skills, work_experiences, technologies } from "../../portfolio.js";
import Recommendations from "../../containers/recommendations/Recommendations";
import { certifications } from "../../portfolio";
import { recommendations } from "../../portfolio";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import EducationImg from "../education/EducationImg";
import Educations from "../../containers/education/Educations";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience" style={{ float: "left"}}>
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assets/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>

          <div className="experience-section" style={{ float: "left", width: "50%", padding: "0px", margin: "0px auto"}}>
          <Educations
            sections={work_experiences.work_experiences}
            theme={this.props.theme}
          />
          </div>
          <div className="experience-section" style={{ float: "left", width: "50%", padding: "0px", margin: "0px auto"}}>


          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Languages & Scripting
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.languages} />
            </div>
          </div>

          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Frameworks & Libraries
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.frameworks} />
            </div>
          </div>


          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Cloud Platforms & Infrastructure
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.hostingPlatforms} />
            </div>
          </div>
          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Databases
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.databases} />
            </div>
          </div>
          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              DevOps, CI/CD & Observability
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.devops_cicd_observability} />
            </div>
          </div>
          {/*<div className="certs-body-div">*/}
          {/*  <h3 style={{ width: "100%", textAlign: "center" }}>*/}
          {/*    Software & System Design*/}
          {/*  </h3>*/}
          {/*  <div style={{ width: "100%" }}>*/}
          {/*      <SoftwareSkill logos={technologies.} />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Tools & Platforms
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.tools} />
            </div>
          </div>

          {/*<div className="certs-body-div">*/}
          {/*  <h3 style={{ width: "100%", textAlign: "center" }}>*/}
          {/*    Testing & Quality*/}
          {/*  </h3>*/}
          {/*  <div style={{ width: "100%" }}>*/}
          {/*      <SoftwareSkill logos={technologies.languages} />*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Analytics & Data Engineering
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.analytics_and_data} />
            </div>
          </div>

          <div className="certs-body-div" style={{ width: "100%", padding: "0px", margin: "0px auto"}}>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              Machine Learning
            </h3>
            <div style={{ width: "100%" }}>
                <SoftwareSkill logos={technologies.machine_learning} />
            </div>
          </div>

          </div>

        </div>

        {/*<ExperienceAccordion sections={experience["sections"]} theme={theme} />*/}
        {/*{certifications.certifications.length > 0 ? (*/}
        {/*    <Certifications theme={this.props.theme} />*/}
        {/*  ) : null}*/}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
