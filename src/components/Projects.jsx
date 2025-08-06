import React from 'react';
import './Projects.css';
import img1 from '../assets/image/cryoport.png';
import img2 from '../assets/image/relishers-img.png';
import img3 from '../assets/image/teleme.png';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectsCard from './ProjectsCard';
import colorSharp from '../assets/image/color-sharp2.png';

function Projects() {
  const projects = [
    {
      title: 'Cryoport Systems',
      description: 'Cryoport Systems provides advanced temperature-controlled logistics solutions for the life sciences industry. Specializing in cryogenic and ultra-cold shipping, they ensure the safe transport and storage of sensitive biological materials, including cell and gene therapies, IVF samples, and biopharmaceuticals. Their innovative shipping systems and global logistics network help maintain product integrity and regulatory compliance.',
      img: img1,
      category: 'healthcare',
      link: 'https://www.cryoport.com/'
    },
    {
      title: 'Relishers',
      description: 'Relishers is a food delivery service that connects customers with local restaurants and food providers. It offers a wide variety of cuisines and meal options, making it easy for users to find and order their favorite dishes online. With a user-friendly app and reliable delivery, Relishers aims to enhance the food ordering experience.',
      img: img2,
      category: 'ecommerce',
      link: 'https://relishers-v3.netlify.app/' 
    },
    {
      title: 'Teleme',
      description: 'Teleme Healthcare is a digital health platform that connects patients with doctors for online consultations, prescriptions, and medical advice. It offers secure video calls, chat, and health record management, making healthcare more accessible and convenient.',
      img: img3,
      category: 'healthcare',
      link: 'https://teleme.co/'
    }
  ];

  const getFilteredProjects = (projects, category) => {
    return projects.reduce((acc, project, index) => {
      if (!category || project.category === category) {
        acc.push(<ProjectsCard key={index} {...project} />);
      }
      return acc;
    }, []);
  };

  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I’ve worked on a variety of projects, from building scalable web applications with Ruby on Rails and React.js to deploying cloud-based solutions on AWS and Azure. My work includes developing efficient CI/CD pipelines, containerizing applications with Kubernetes, and creating seamless user experiences. Each project reflects my passion for solving complex problems and delivering high-quality results.
            </p>
            <Tab.Container defaultActiveKey='first' id='projects-tabs'>
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='first' className='nav-link'>
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second' className='nav-link'>
                    Health Care
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third' className='nav-link'>
                    E-commerce
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {getFilteredProjects(projects)}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {getFilteredProjects(projects, 'healthcare')}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {getFilteredProjects(projects, 'ecommerce')}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-right' alt='' />
    </section>
  );
}

export default Projects;
