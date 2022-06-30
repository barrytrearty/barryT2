import Project1 from "../../data/barryt/milford.PNG";
import Project2 from "../../data/barryt/odeals.PNG";
import Project3 from "../../data/barryt/dartsAppImg.PNG";
import Project4 from "../../data/barryt/endOfDayApp.PNG";
import "./projects.css";

const Projects = () => {
  return (
    <div id="project-section">
      <h2>Projects</h2>
      <div id="project-wrapper">
        {/* <div className="box">
            <div className="imgBx">
              <a href="https://mdrc.vercel.app/" target="_blank">
                <img src={Project1} alt="" />
              </a>
            </div>
            <div className="content">
              <h3>Milford Resource Centre</h3>

              <div className="content-links">
                <a href="https://mdrc.vercel.app/" target="_blank">
                  <span>Live site</span>
                </a>
                <a href="https://github.com/barrytrearty/MDRC" target="_blank">
                  <span>Source code</span>
                </a>
              </div>

            </div>
          </div> */}
        <div className="project-wrapper-row">
          <div className="box">
            <div className="imgBx">
              <img src={Project2} alt="" />
            </div>
            <div className="content">
              <a href="https://clubstub-fe.vercel.app/home" target="_blank">
                {" "}
                <h3>O'Deals GAA Tickets</h3>{" "}
              </a>

              <div className="content-links">
                <a href="https://clubstub-fe.vercel.app/home" target="_blank">
                  <span>Live site</span>
                </a>
                <a
                  href="https://github.com/barrytrearty/clubstub-fe"
                  target="_blank"
                >
                  <span>Source code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBx">
              <img src={Project3} alt="" />
            </div>
            <div className="content">
              <a href="https://darts-calculator.vercel.app" target="_blank">
                <h3>Darts Score Browser App</h3>{" "}
              </a>

              <div className="content-links">
                <a href="https://darts-calculator.vercel.app" target="_blank">
                  <span>Live site</span>
                </a>
                <a
                  href="https://github.com/barrytrearty/DartsCalculator"
                  target="_blank"
                >
                  <span>Source code</span>
                </a>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBx">
              <img src={Project4} alt="" />
            </div>
            <div className="content">
              <a href="https://end-of-day-ts.vercel.app//" target="_blank">
                {" "}
                <h3>End of Day Browser App</h3>
              </a>

              <div className="content-links">
                <a href="https://end-of-day-ts.vercel.app//" target="_blank">
                  <span>Live site</span>
                </a>
                <a
                  href="https://github.com/barrytrearty/EndOfDay-TS"
                  target="_blank"
                >
                  <span>Source code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
