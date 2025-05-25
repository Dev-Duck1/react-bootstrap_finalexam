import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './css2/Footer.css'; // 👈 Import the custom CSS

const Footer = () => {
  return (
    <footer className="dcc-footer py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">About DCC</h5>
            <p>
              Davao Central College is dedicated to delivering excellent education
              and nurturing holistic development for every student.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/academics" className="footer-link">Academics</a></li>
              <li><a href="/admission" className="footer-link">Admission</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" /> 123 Education St, Learning City</p>
            <p><FaPhone className="me-2" /> (123) 456-7890</p>
            <p><FaEnvelope className="me-2" /> info@dcc.edu.ph</p>
            <div className="social-icons mt-3">
              <a href="#" className="footer-icon"><FaFacebook /></a>
              <a href="#" className="footer-icon"><FaTwitter /></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Davao Central College. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
