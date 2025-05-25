import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <div className="hero-section">
        <Carousel fade controls={false} indicators={false} interval={5000}>
          <Carousel.Item>
          <img
    className="d-block w-100 carousel-img"
    src="/111.jpg"
    alt="Davao Central College Campus"
  />
            <Carousel.Caption className="carousel-caption">
              <h1>Welcome to Davao Central College</h1>
              <p className="lead">Where learning meets excellence</p>
              <Button variant="outline-light" size="lg" className="cta-button">
                Explore Our Campus
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100 carousel-img"
              src="/congrats.jpg"
              alt="Graduating students"
            />
            <Carousel.Caption className="carousel-caption">
              <h1>Quality Education</h1>
              <p className="lead">Preparing students for the future</p>
              <Button variant="outline-light" size="lg" className="cta-button">
                Discover Programs
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Mission Cards */}
      <Container className="mission-section">
        <h2 className="section-title">Why Choose Davao Central College?</h2>
        <p className="section-subtitle">Our commitment to excellence in education</p>
        
        <Row className="g-4">
          <Col md={4}>
            <Card className="mission-card">
              <Card.Body>
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To provide quality education that empowers students to become 
                  responsible global citizens.
                </Card.Text>
                <Button variant="outline-primary" href="/about" className="card-button">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mission-card">
              <Card.Body>
                <div className="card-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <Card.Title>Academic Programs</Card.Title>
                <Card.Text>
                  Explore our diverse range of academic programs designed to 
                  meet every student's needs.
                </Card.Text>
                <Button variant="outline-primary" href="/academics" className="card-button">
                  View Programs
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mission-card">
              <Card.Body>
                <div className="card-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <Card.Title>Admissions</Card.Title>
                <Card.Text>
                  Learn about our admission process and requirements for the 
                  upcoming academic year.
                </Card.Text>
                <Button variant="outline-primary" href="/admission" className="card-button">
                  Apply Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* News & Events */}
      <div className="news-section">
        <Container>
          <h2 className="section-title">Latest News & Events</h2>
          <p className="section-subtitle">Stay updated with what's happening on campus</p>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="news-card">
                <Row className="g-0">
                  <Col md={5}>
                    <div className="news-image" style={{ backgroundImage: "url('/science-fair.jpg')" }} />
                  </Col>
                  <Col md={7}>
                    <Card.Body>
                      <div className="news-date">March 15, 2023</div>
                      <Card.Title>Annual Science Fair</Card.Title>
                      <Card.Text>
                        Join us for our annual science fair showcasing innovative 
                        projects from our students across all departments.
                      </Card.Text>
                      <Button variant="primary" className="news-button">
                        Read More
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;