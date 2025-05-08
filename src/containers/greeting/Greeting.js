import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
 <img
  src={require('../../assets/images/tom.86a9b637.jpg')}
  alt=""
  style={{ maxWidth: "110px", borderRadius: "50%", objectFit: "cover", float: "left", marginRight: "10px" }}
/>
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
              <div className="portfolio-repo-btn-div">
              {/*  <Button*/}
              {/*    text="⭐ See my CV"*/}
              {/*    newTab={true}*/}
              {/*    href={greeting.resumeLink}*/}
              {/*    theme={theme}*/}
              {/*    className="portfolio-repo-btn"*/}
              {/*  />*/}
                <Button text="Message Me" theme={theme} className="portfolio-repo-btn" target="_blank" href="https://www.linkedin.com/messaging/thread/new/?recipient=tmason-developer" />
              </div>

              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div> */}
            </div>
            <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, fontStyle: "italic" }}
              >
                My CV is available upon request.
              </p>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
