import React from "react";
// Styles
import "./Skills.css";
// Multi Carousel Component
import "react-multi-carousel/lib/styles.css";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Background Image
import colorSharp from "../assets/image/color-sharp.png";
import { technologies } from "../constants";

function Skills() {
  // Carousel Responsive Settings
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // Return JSX
  return (
    // React Fragment
    <>
      {/* Skils Section */}
      <section id="skills" className="skills">
        {/* Bootstrap Grid System */}
        {/* Container */}
        <Container>
          {/* Row */}
          <Row>
            {/* Col */}
            <Col>
              {/* Skills Box */}
              <div className="skills-box">
                {/* Skills Title */}
                <h2>Skills</h2>
                {/* Skills Description */}
                <p>
                  <ul className="skill-list">
                    <li><strong>Frontend Development:&nbsp;</strong> Proficient in React.js for building dynamic and responsive user interfaces.</li>

                    <li><strong>Backend Development:&nbsp;</strong> Skilled in Ruby on Rails and Python for creating robust and scalable server-side applications.</li>

                    <li><strong>Cloud Platforms:&nbsp;</strong> Hands-on experience with AWS and Azure for deploying and managing cloud-based solutions.</li>

                    <li><strong>DevOps:&nbsp;</strong> Proficient in Kubernetes for container orchestration and CI/CD pipelines for automated deployments.</li>

                    <li><strong>Problem Solving:&nbsp;</strong> Strong ability to troubleshoot and optimize applications for performance and scalability.</li>
                  </ul>
                </p>

                <div class='image-grid'>
                  {technologies.map((technology) => (
                    <div className="image-container">
                      <img src={technology.icon} alt="Image 1" />
                    </div>
                  ))}
                </div>

                {/* Skills Carousel */}
              </div>
            </Col>
          </Row>
        </Container>
        {/* Background Image */}
        <img src={colorSharp} className="background-image-left" />
      </section>
    </>
  );
}

export default Skills;
