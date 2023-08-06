import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './contact.css';
import emailImg from '../../assets/images/email.png';
import mapImg from '../../assets/images/map.png';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <Container>
        <Row>
          <Col>
            <h5>CONTACT</h5>
            <h4>
              Please do not hesitate to contact me. I am readily available to
              assist you.
            </h4>
            <div className='contact__links'>
              <div className='location'>
                <a
                  href='https://goo.gl/maps/qL5hXrYXCR4ogpjA9'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={mapImg} alt='location' />
                </a>
                <div className='location__text'>
                  <h6>Location</h6>
                  <a
                    href='https://goo.gl/maps/cAdR9N19rUeJvv8N6'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Austin, TX
                  </a>
                </div>
              </div>
              <div className='email'>
                <a href='mailto:adeebnasser@gmail.com'>
                  <img src={emailImg} alt='email' />
                </a>
                <div className='email__text'>
                  <h6>E-mail</h6>
                  <a href='mailto:adeebnasser@gmail.com'>
                    adeebnasser@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
