import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './projects.css';
import bonsai from '../../assets/images/bonsai.png';
import butterfly from '../../assets/images/butterfly.png';


const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <Container>
        <h5>PORTFOLIO</h5>
        <h3>
          Each project is a distinct and individual piece of software
          development.
        </h3>
        <Row className='project__wrapper'>
          <Col lg='6' md='12'>
            <div className='project__image'>
              <a
                href='https://tour-tastic.onrender.com/home'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='tour' src={bonsai} alt='Tour website' />
              </a>
            </div>
          </Col>
          <Col className='project__details' lg='6' md='12'>
            <h5>Tour-Tastic</h5>
            <p>
              Find your perfect tour and start your adventure with Tour-Tastic!
              Create an account, log in, and easily search by city, distance, or
              group size. Book your favorite tour and share your experiences
              through reviews and photos with our community. Join us today!
            </p>
            <Row className='tech__group'>
              <Col className=' backend d-flex align-items-center'>
                <h5>Backend</h5>
                <ul>
                  <li>Bcrypt</li>
                  <li>Cookie Parser</li>
                  <li>Cors</li>
                  <li>Dotenv</li>
                  <li>Express</li>
                  <li>Express JWT</li>
                  <li>Json Web Token</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Morgan</li>
                </ul>
              </Col>
              <Col className='frontend d-flex align-items-center'>
                <h5>Frontend</h5>
                <ul>
                  <li>Axios</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>React Dom</li>
                  <li>React Responsive Masonry</li>
                  <li>React Router Dom</li>
                  <li>React Scripts</li>
                  <li>React Slik</li>
                  <li>Reactstrap</li>
                  <li>Remixicon</li>
                  <li>Slick Carousel</li>
                </ul>
              </Col>
              <Col className='project__links'>
                <a
                  href='https://github.com/JosephDSmith/phase-2-project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  Code <i className='ri-github-fill'></i>
                </a>
                <a
                  href='https://youtu.be/d6vAozT5yQ4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Demo <i className='ri-live-fill'></i>
                </a>
                <a
                  href='https://my-bonsai-garden.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Website <i class="ri-pages-fill"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='project__wrapper'>
          <Col className='project__details' lg='6' md='12'>
            <h5>Sunrise Food Market</h5>
            <p>
              Welcome to Sunrise Food Market your go-to for groceries and
              recipes! Browse our wide selection of high-quality products and
              add them to your cart with just a few clicks. Our easy-to-use
              interface makes meal planning and shopping a breeze. From fresh
              produce to pantry staples, we've got you covered.
            </p>
            <Row className='tech__group'>
              <Col className='backend d-flex align-items-center'>
                <h5>Backend</h5>
                <ul>
                  <li>Dotenv</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Morgan</li>
                </ul>
              </Col>
              <Col className='frontend d-flex align-items-center'>
                <h5>Frontend</h5>
                <ul>
                  <li>Axios</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>React Dom</li>
                  <li>React Multi Carousel</li>
                  <li>React Router Dom</li>
                  <li>React Scripts</li>
                  <li>Fontawesome</li>
                </ul>
              </Col>
              <Col className='project__links'>
                <a
                  href='https://github.com/JosephDSmith/phase-4-project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  Code <i className='ri-github-fill'></i>
                </a>
                <a
                  href='https://youtu.be/ylOOzc4l_ac'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Demo <i className='ri-live-fill'></i>
                </a>
                <a
                  href='https://butterfly-garden-app.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Website <i class="ri-pages-fill"></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col lg='6' md='12'>
            <div className='project__image'>
              <a
                href='https://sunrise-food-market.onrender.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='sunrise'
                  src={butterfly}
                  alt='sunrise website'
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
