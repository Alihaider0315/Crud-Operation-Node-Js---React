import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome CSS

const Footer = () => {
  return (
    <footer className="bg-light shadow">
      <Container className="py-4" style={{ width: '100%' }}>
        <Row className="justify-content-between align-items-center flex-wrap">
          <Col className="text-left">
            <small className="ms-2">&copy; Ali Haider, 2023. All rights reserved.</small>
          </Col>
          <Col className="d-flex">
            <Button variant="link" className="p-2">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
