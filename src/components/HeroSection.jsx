import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import headerImg from '../assets/image/heroimg.png';
import './HeroSection.css';

function HeroSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const toRotate = ['Full Stack Developer', 'Ruby on Rails Developer with React JS', 'AWS & Python Enthusiast'];
  const [Text, setText] = useState('');
  const [Delta, setDelta] = useState(50 - Math.random() * 50);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, Delta);
    return () => clearInterval(ticker);
  }, [Text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, Text.length - 1)
      : fullText.substring(0, Text.length + 1);
    setText(updatedText);
    if (deleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === '') {
      setDeleting(false);
      setDelta(200);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container className='align-items-center'>
        <Row className="hero-content">
          <Col xs={12} md={6} xl={7} className="text-content">
            <span className='tagline'>
              Hi There! <span className='hand-wave'>👋</span>
            </span>
            <h1>
              <span className='name-field'>I'M <span className='name'>Ali Asger</span></span>
              <br />
              <span className='wrap'>{Text}</span>
            </h1>
            <p>
              With 4+ years of experience as a <span className='highlight-text'>Full Stack Developer</span>, I specialize in building scalable and efficient web applications using a wide range of technologies,
              including <span className='highlight-text'>Ruby on Rails</span>, <span className='highlight-text'>React.js</span>, <span className='highlight-text'>Python</span> and <span className='highlight-text'>AWS</span>. My passion lies in solving complex problems and delivering high-quality solutions that drive business growth.
            </p>
            <a href='#contact'>
              <button>
                Let's Connect <Icon.ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5} className="image-container">
            <img src={headerImg} alt='herosection' className='hero-image' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
