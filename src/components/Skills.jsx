import React from 'react';
import './Skills.css';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import colorSharp from '../assets/image/color-sharp.png';
import { technologies } from '../constants';

function Skills() {
  const responsive = {
    superLargeDesktop: {
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

  return (
    <>
      <section id='skills' className='skills'>
        <Container>
          <Row>
            <Col>
              <div className='skills-box'>
                <h2>Skills</h2>
                <p className='responsive-sub-text'>Technical Skillset</p>
                <div className='image-grid'>
                  {technologies.map((technology) => (
                    <div className='image-container' key={technology.name}>
                      <img src={technology.icon} alt={technology.name} />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} className='background-image-left' alt='Background' />
      </section>
    </>
  );
}

export default Skills;
