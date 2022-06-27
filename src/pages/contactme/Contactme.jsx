import { BsLinkedin, BsGithub } from "react-icons/bs";
import NeonHeader from "../../components/neonHeader/NeonHeader";
import SendMessage from "../../components/SendMessage/SendMessage";
import "./contactme.css";

const Contactme = () => {
  return (
    <div id="contact-section">
      <NeonHeader />
      <div id="contact-message">
        <h2>Drop me a message</h2>
        <SendMessage />
        <div className="secondary-contact">
          {/* <p>Feel free to drop me a message</p> */}

          <p className="secondary-contact-title">
            Reach me at <span className="highlight">btrearty@gmail.com</span>
          </p>
          <div className="secondary-contact-icons">
            <span>
              <a
                href="https://www.linkedin.com/in/barry-trearty"
                target="_blank"
                id="linkedin"
              >
                <BsLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/barrytrearty"
                target="_blank"
                id="github"
              >
                <BsGithub />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
