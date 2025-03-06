import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import img1 from '../assets/image/webkorps-logo.webp';
import colorSharp from '../assets/image/color-sharp2.png';
import 'react-vertical-timeline-component/style.min.css';
import './Projects.css';
import './Experience.css';

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Webkorps LLC, USA',
    icon: img1,
    iconBg: '#ffffff',
    date: 'October 2024 - Present',
    points: [
      'Designed and developed full-stack web applications using Ruby on Rails for backend and React.js for the frontend, ensuring seamless integration of APIs and a smooth user experience across multiple platforms.',
      'Implemented and optimized RESTful APIs with Ruby on Rails, enabling smooth data exchange between the server and React.js frontend, while ensuring API scalability and responsiveness.',
      'Utilized Redux for state management in React.js applications, improving the efficiency of complex UI state handling and ensuring consistent data flow throughout the application.',
      'Integrated cloud services like AWS (S3, EC2) for scalable deployments and storage, enabling faster performance and more efficient infrastructure management.',
      'Improved code maintainability by using Rails\' Active Record for database management, implementing migrations, and creating efficient, reusable models to support application growth.'
    ]
  },
  {
    title: 'Associate Software Engineer',
    company_name: 'Webkorps Services India Pvt Ltd',
    icon: img1,
    iconBg: '#ffffff',
    date: 'October 2020 - October 2024',
    points: [
      'Collaborated closely with a cross-functional team to deliver user stories, complete tasks, and fix defects in an Agile environment, ensuring the timely and high-quality delivery of new features, while optimizing team productivity through effective communication and problem-solving.',
      'Proactively identified and documented software defects, escalating them according to standard procedures, which played a key role in improving the overall software quality and minimizing recurring issues across different modules.',
      'Enhanced platform usability and functionality by supporting debugging efforts and monitoring the wholesale platform, analyzing system bottlenecks, and working with senior developers to implement solutions that improved overall system performance and user experience.',
      'Automated repetitive tasks and optimized workflows by designing scripts, reducing manual intervention by 40%, and boosting operational efficiency, which freed up development time for high-priority tasks and streamlined the development lifecycle.',
      'Played an active role in the creation of new services and applications by contributing to technical specifications, conducting thorough demonstrations for stakeholders, gathering constructive feedback, and ensuring that the solutions delivered met both business and technical requirements.'
    ]
  },
  {
    title: 'Intern',
    company_name: 'Webkorps Services India Pvt Ltd',
    icon: img1,
    iconBg: '#ffffff',
    date: 'April 2020 – September 2020',
    points: [
      'Utilized HTML5, CSS3, JavaScript, and Bootstrap to build dynamic, responsive UI pages and custom actions, enhancing overall user experience and interactivity while ensuring compatibility across different screen sizes and devices.',
      'Designed and implemented visually appealing page layouts, custom navigation, animated buttons, and icons using Bootstrap, Font Awesome, and jQuery UI, delivering a modern and polished user interface that improved user engagement and satisfaction.',
      'Leveraged AngularJS and jQuery to apply the MVC architecture, ensuring seamless integration between frontend and backend while maintaining compatibility across devices and platforms, ultimately driving a more consistent and responsive user experience.',
      'Integrated AJAX with SQL adapters to streamline data processing, significantly enhancing application performance and enabling real-time data retrieval, ensuring users experienced smooth, uninterrupted interactions.',
      'Collaborated effectively with team members during requirement gathering sessions, providing valuable input on UI/UX design and functionality, and ensuring that deliverables met project objectives while maintaining high-quality coding standards.'
    ]
  }
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff', textAlign: 'left' }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='card-img' />
      </div>
    }
  >
    <div>
      <h3 className='card-title'>{experience.title}</h3>
      <p className='card-subtitle'>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <section className='experience' id='experience'>
    <Container>
      <motion.div>
        <p className='responsive-sub-text'>What I have done so far</p>
        <h2 className='responsive-heading'>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Container>
    <img src={colorSharp} className='background-image-right' alt='' />
  </section>
);

export default Experience;
