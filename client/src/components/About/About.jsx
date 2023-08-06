import React from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import desktop from '../../assets/images/desktop.jpg';

const About = () => {
  return (
    <div className='about' id='about'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='about__image'>
              <img src={desktop} alt='desktop' />
            </div>
          </Col>
          <Col lg='6'>
            <h5>ABOUT ME</h5>
            <h3>
              A Passionate full stack developer <br />
              based in Austin, TX
            </h3>
            <p>
              Hello, I'm Adeeb Ogaili, a full stack web developer with a passion
              for creating impactful solutions. I enjoy problem-solving and have
              developed valuable skills in teamwork, adaptability, and
              goal-oriented flexibility. I take pride in my work ethic and
              professionalism and strive to learn and improve constantly.
              Although I haven't had the opportunity to mentor or lead yet, I'm
              excited about the possibility of helping others grow in the
              future.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
