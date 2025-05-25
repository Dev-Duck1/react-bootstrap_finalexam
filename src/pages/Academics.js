import React from 'react';
import { Accordion, Container, Row, Col, Tab, Tabs, Card } from 'react-bootstrap';
import './css/Academics.css'; // Import the CSS file

const Academics = () => {
  return (
    <Container className="academics-container">
      <Row className="header-row">
        <Col>
          <h1 className="page-title">Academic Programs</h1>
          <div className="divider"></div>
        </Col>
      </Row>

      <Tabs defaultActiveKey="elementary" id="academic-tabs" className="program-tabs">
        {/* Elementary School Tab */}
        <Tab eventKey="elementary" title="Elementary School" className="program-tab">
          <Row className="program-content">
            <Col>
              <h3 className="program-heading">Elementary School Program</h3>
              <p className="program-description">
                Our elementary program focuses on foundational learning in core subjects 
                while fostering creativity and social development.
              </p>
              
              <h4 className="curriculum-heading">Curriculum</h4>
              
              <Row className="curriculum-cards">
                <Col md={6} className="grade-col">
                  <Card className="grade-card">
                    <Card.Header className="grade-header">Grades 1-3</Card.Header>
                    <Card.Body>
                      <Card.Title className="subject-title">Core Subjects</Card.Title>
                      <Card.Text className="subject-list">
                        Language Arts, Math, Science, Social Studies
                      </Card.Text>
                      <Card.Title className="subject-title">Special Programs</Card.Title>
                      <Card.Text className="subject-list">
                        Art, Music, Physical Education
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="grade-col">
                  <Card className="grade-card">
                    <Card.Header className="grade-header">Grades 4-5</Card.Header>
                    <Card.Body>
                      <Card.Title className="subject-title">Core Subjects</Card.Title>
                      <Card.Text className="subject-list">
                        English, Math, Science, Social Studies, Computer
                      </Card.Text>
                      <Card.Title className="subject-title">Special Programs</Card.Title>
                      <Card.Text className="subject-list">
                        Foreign Language, Robotics, Sports
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
        
        {/* Middle School Tab */}
        <Tab eventKey="middle" title="Middle School" className="program-tab">
          <Row className="program-content">
            <Col>
              <h3 className="program-heading">Middle School Program</h3>
              <p className="program-description">
                Our middle school program prepares students for high school with a 
                challenging curriculum and exploratory electives.
              </p>
              
              <div className="subject-section">
                <h4 className="subject-section-heading">Core Subjects</h4>
                <ul className="subject-list">
                  <li className="subject-item">English Language Arts</li>
                  <li className="subject-item">Mathematics (Pre-Algebra, Algebra)</li>
                  <li className="subject-item">Science (Life, Earth, Physical)</li>
                  <li className="subject-item">Social Studies (World History, US History)</li>
                </ul>
              </div>
              
              <div className="subject-section">
                <h4 className="subject-section-heading">Electives</h4>
                <Row>
                  <Col md={6}>
                    <ul className="subject-list">
                      <li className="subject-item">Foreign Languages (Spanish, French)</li>
                      <li className="subject-item">Computer Science</li>
                      <li className="subject-item">Art & Design</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="subject-list">
                      <li className="subject-item">Music (Band, Choir)</li>
                      <li className="subject-item">Drama</li>
                      <li className="subject-item">Sports</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
        
        {/* High School Tab */}
        <Tab eventKey="high" title="High School" className="program-tab">
          <Row className="program-content">
            <Col>
              <h3 className="program-heading">High School Program</h3>
              <p className="program-description">
                Our comprehensive high school program offers college preparatory courses, 
                Advanced Placement options, and career pathways.
              </p>
              
              <div className="subject-section">
                <h4 className="subject-section-heading">Academic Departments</h4>
                <Accordion className="department-accordion">
                  <Accordion.Item eventKey="0" className="department-item">
                    <Accordion.Header className="department-header">English Department</Accordion.Header>
                    <Accordion.Body className="department-body">
                      Courses include Literature, Composition, Creative Writing, and AP English.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="department-item">
                    <Accordion.Header className="department-header">Mathematics Department</Accordion.Header>
                    <Accordion.Body className="department-body">
                      Courses include Algebra, Geometry, Calculus, Statistics, and AP Calculus.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="department-item">
                    <Accordion.Header className="department-header">Science Department</Accordion.Header>
                    <Accordion.Body className="department-body">
                      Courses include Biology, Chemistry, Physics, Environmental Science, and AP options.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="department-item">
                    <Accordion.Header className="department-header">Social Studies Department</Accordion.Header>
                    <Accordion.Body className="department-body">
                      Courses include World History, US History, Government, Economics, and AP options.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              
              <div className="ap-section">
                <h4 className="ap-heading">Advanced Placement (AP) Courses</h4>
                <p className="ap-description">
                  We offer 15 AP courses for students seeking college-level coursework.
                </p>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Academics;