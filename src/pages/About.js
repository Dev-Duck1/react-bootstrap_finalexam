import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './css/About.css';

const About = () => {
  return (
    <Container className="about-container">
      <Row className="header-row">
        <Col>
          <h1 className="page-title">About Davao Central College</h1>
          <div className="title-divider"></div>
          <p className="page-subtitle">Excellence in Education Since 1985</p>
        </Col>
      </Row>

      <Row className="history-section">
        <Col md={6} className="history-content">
          <h2 className="section-title">Our Heritage</h2>
          <p className="history-text">
            Established in 1985, Davao Central College has grown from a modest community school 
            to one of Mindanao's most prestigious educational institutions. For nearly four decades, 
            we've been shaping future leaders through our commitment to academic excellence 
            and Filipino values.
          </p>
          <p className="history-text">
            Recognized consistently as among the top performing schools in Region XI, 
            our graduates have excelled in various fields including medicine, engineering, 
            and public service.
          </p>
        </Col>
        <Col md={6} className="history-image-col">
          <img 
            src="/old-img.jpg" 
            alt="DCC Campus" 
            className="campus-image"
          />
        </Col>
      </Row>

      <Row className="values-section">
        <Col>
          <Accordion className="vision-accordion">
            <Accordion.Item eventKey="0" className="accordion-item">
              <Accordion.Header className="accordion-header">
                <i className="fas fa-eye"></i> Our Vision
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                Empowered individuals imbued with Christian ideals for service.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header className="accordion-header">
                <i className="fas fa-bullseye"></i> Our Mission
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                We commit ourselves to:
                    <li>provide integral formation of students;</li>
                    <li>develop God-loving and community service-oriented individuals;</li>
                    <li>promote competence through quality instruction and research for nation building.</li>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header className="accordion-header">
                <i className="fas fa-heart"></i> Core Values
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <ul className="values-list">
                  <li><span>D</span>iscipline</li>
                  <li><span>C</span>ompetence</li>
                  <li><span>C</span>ompassion</li>
                  <li><span>I</span>ntegrity</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="facilities-section">
        <Col>
          <h2 className="section-title">World-Class Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <i className="fas fa-flask"></i>
              <h3>Advanced Science Complex</h3>
              <p>State-of-the-art laboratories for STEM research</p>
            </div>
            <div className="facility-card">
              <i className="fas fa-book-open"></i>
              <h3>Digital Library</h3>
              <p>200,000+ volumes with online research portals</p>
            </div>
            <div className="facility-card">
              <i className="fas fa-laptop-code"></i>
              <h3>ICT Innovation Hub</h3>
              <p>Cutting-edge computer labs and maker spaces</p>
            </div>
            <div className="facility-card">
              <i className="fas fa-swimming-pool"></i>
              <h3>Olympic Sports Complex</h3>
              <p>Competition-standard athletic facilities</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;