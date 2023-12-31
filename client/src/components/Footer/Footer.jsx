import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col className='footer__social d-flex justify-content-between align-items-center'>
            {' '}
            <h4>Copyright © {year}. All rights reserved</h4>
            <div className='social__media'>
              <a href='https://www.linkedin.com/in/joseph-d-smith-692522264/'>
                <i className='ri-linkedin-box-fill'></i>
              </a>
              <a href='https://github.com/JosephDSmith'>
                <i className='ri-github-fill'></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
