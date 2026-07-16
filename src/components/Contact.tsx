import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:surajpattewar95@gmail.com" data-cursor="disable">
                surajpattewar95@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor of Engineering in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/suraj-pattewar"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Suraj Pattewar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
