import React from "react";
// Styles
import "./About.css";
// Project Image
import img1 from "../assets/image/github1.png";
import img2 from "../assets/image/linkedin.svg";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/image/photo.jpeg";
import colorSharp from "../assets/image/color-sharp2.png";
import colorSharp1 from "../assets/image/color-sharp.png";

// Your Google Drive resume link
const resumeLink = 'https://drive.google.com/file/d/1kPFTcYickIecPjbjBO4gTTE6GEtLx4pR/view?usp=sharing';

function About() {

  // Redirect to the Google Drive link for the resume
  const handleResumeRedirect = () => {
    window.open(resumeLink, '_blank'); // Redirect to the Google Drive link
  };

  return (
    <section className="about" id="about">
      <Container className="align-items-center">
        <h2 className="heading-title">About Me</h2>
        <Row>
          <Col>
            <img src={headerImg} alt="herosection" className="about-hero-image" />
          </Col>
          <Col xs={12} md={6} xl={7} className="text-col">
            <div className="about-text">
              <p>
                <span className="highlight">Full-Stack Developer</span> with 4+ years of experience in building dynamic and scalable
                web applications using <span className="highlight">Ruby on Rails</span>, <span className="highlight">React.js</span> and <span className="highlight"></span>.
                Proficient in API development, database management (<span className="db">MySQL</span>, <span className="db">PostgreSQL</span>),
                and cloud services like <span className="cloud">AWS</span>. Passionate about writing clean, test-driven code and
                optimizing performance. Skilled in DevOps tools like <span className="devops">Docker</span> and <span className="devops">Kubernetes</span>,
                ensuring seamless deployment. Committed to delivering innovative solutions that enhance user experience
                and business efficiency.
              </p>
              <p>
                With a strong foundation in <span className="highlight">Object-Oriented Programming</span> and <span className="highlight">MVC architecture</span>,
                I excel at developing maintainable and high-performance applications. My expertise in <span className="method">agile methodologies</span>
                &nbsp;and collaborative teamwork enables me to adapt to evolving project requirements and drive successful product development.
              </p>
            </div>
            {/* Button to redirect to the Google Drive resume link */}
            <button
              onClick={handleResumeRedirect}
              className="space-btn"
            >
              View Resume
            </button>
            <div className="social-links">
              <a href='https://www.linkedin.com/in/ali-asger-kanchwala-1476661ab/' target="_blank" rel="noopener noreferrer">
                <img src={img2} className="icon" />
              </a>
              <a href="https://github.com/Aliasger786" target="_blank" rel="noopener noreferrer">
                <img src={img1} className="icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-right" alt="" />
      <img src={colorSharp1} className="background-image-left" alt="" />
    </section>
  );
}

export default About;
