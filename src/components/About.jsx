import React from 'react';
import './About.css';
import img1 from '../assets/image/github1.png';
import { Col, Container, Row } from 'react-bootstrap';
import colorSharp from '../assets/image/color-sharp2.png';
import colorSharp1 from '../assets/image/color-sharp.png';

const resumeLink = 'https://drive.google.com/file/d/1kPFTcYickIecPjbjBO4gTTE6GEtLx4pR/view?usp=sharing';

const SocialLinks = () => (
  <div className='social-links'>
    <a href='https://github.com/Aliasger786' target='_blank' rel='noopener noreferrer'>
      <img src={img1} className='icon' alt='GitHub' />
    </a>
  </div>
);

const About = () => {
  const handleResumeRedirect = () => {
    window.open(resumeLink, '_blank');
  };

  return (
    <section className='about' id='about'>
      <Container className='align-items-center'>
        <h2 className='heading-title'>About Me</h2>
        <Row>
          <Col xs={12} className='text-col'>
            <div className='about-text'>
              <p>
                🚀<span className='highlight'> Full-Stack Developer</span> with 4+ years of experience in building dynamic and scalable
                web applications using <span className='highlight'>Ruby on Rails</span>, <span className='highlight'>React.js</span>.
                Proficient in API development, database management (<span className='db'>MySQL</span>, <span className='db'>PostgreSQL</span>),
                and cloud services like <span className='cloud'>AWS</span>.<br/><br/>💡 Passionate about writing clean, test-driven code and
                optimizing performance. Skilled in DevOps tools like <span className='devops'>Docker</span> and <span className='devops'>Kubernetes</span>,
                ensuring seamless deployment. Committed to delivering innovative solutions that enhance user experience
                and business efficiency.
              </p>
              <p>
                📌 With a strong foundation in <span className='highlight'>Object-Oriented Programming</span> and <span className='highlight'>MVC architecture</span>,
                I excel at developing maintainable and high-performance applications. My expertise in <span className='method'>Agile Methodologies</span>
                &nbsp;and collaborative teamwork enables me to adapt to evolving project requirements and drive successful product development.
              </p>
            </div>
            <button onClick={handleResumeRedirect} className='space-btn'>
              View Resume
            </button>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-right' alt='' />
      <img src={colorSharp1} className='background-image-left' alt='' />
    </section>
  );
};

export default About;
