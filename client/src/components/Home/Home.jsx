import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import adeebimg from '../../assets/images/adeeb.jpg';
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
              Hi, I'm Adeeb Ogaili, A passionate Full Stack Web Developer <br />{' '}
              based in Austin, TX
            </p>
            <div className='social__media'>
              <a
                href='https://www.linkedin.com/in/adeeb-ogaili'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='ri-linkedin-box-fill'></i>
              </a>
              <a
                href='https://www.github.com/Adeebogaili'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='ri-github-fill'></i>
              </a>
            </div>
          </Col>
          <Col lg='6' md='5'>
            <div className='image__container'>
              <img src={adeebimg} alt='Adeeb' />
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
                  <img src={item.image} alt={item.alt} />
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
