import "./aboutme.css";
import cocktail from "../../data/barryt/cocktail.png";
import btImg1 from "../../data/barryt/bitmo.png";
import { useRef, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";

const AboutMe = () => {
  const aboutCardRef = useRef();

  const toggleOpen = () => {
    aboutCardRef.current.classList.toggle("clicked");
  };

  return (
    <div id="aboutme-section">
      <div id="aboutCardHolder">
        <div id="aboutCardGrad">
          <div id="aboutCard" ref={aboutCardRef} onClick={toggleOpen}>
            <div className="aboutImgBox">
              <div className="menu-title">
                ABOUT <br />
                <AiOutlineMinus />
                ME
                <AiOutlineMinus />
              </div>
              <img src={btImg1} alt="" id="emoji-pic" />
              <img src={cocktail} alt="" id="menu-pic" />
            </div>
            <div className="aboutDetails">
              <div className="aboutContent">
                <h3>Barry T</h3>
                <p>-Graduate of Epicode.</p>
                <p>-Former English tutor and bartender.</p>
                <p>-Designer and Fullstack developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
