import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import josephimg from '../../assets/images/js pic.jpeg';
import skills from '../../assets/data/images';
import './home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
      <Container>
        <Row>
          <Col lg='6' md='5'>
            <h1>
              FullStack JavaScript <br />
              Web Developer
            </h1>
            <p>
              Hi, I'm Joseph Smith, A passionate Full Stack Web Developer <br />{' '}
              based in DC Metro area.
            </p>
            <div className='social__media'>
              <a
                href='https://www.linkedin.com/in/joseph-d-smith-692522264/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='ri-linkedin-box-fill'></i>
              </a>
              <a
                href='https://github.com/JosephDSmith'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='ri-github-fill'></i>
              </a>
            </div>
          </Col>
          <Col lg='6' md='5'>
            <div className='image__container'>
              <img src={josephimg} alt='joseph' />
            </div>
          </Col>
        </Row>
        <Row className='skills__container mt-5'>
          <Col md={3}>
            <h3>Tech Stack</h3>
          </Col>
          <Col md={9}>
            <ul className='skills__logo-ul'>
              {skills?.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank">
                    <img src={item.image} alt={item.alt} />
                  </a>
                  
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
