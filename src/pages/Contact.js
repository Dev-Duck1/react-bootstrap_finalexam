import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './css/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Contact Us</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h2>Get in Touch</h2>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Select>
                <option>General Inquiry</option>
                <option>Admission</option>
                <option>Academic Programs</option>
                <option>Feedback</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        
        <Col md={6}>
          <h2>Our Information</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaMapMarkerAlt /> Address</Card.Title>
              <Card.Text>
                123 Education Street<br />
                Learning City, LC 12345<br />
                United States
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaPhone /> Phone</Card.Title>
              <Card.Text>
                Main Office: (123) 456-7890<br />
                Admissions: (123) 456-7891<br />
                Fax: (123) 456-7899
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaEnvelope /> Email</Card.Title>
              <Card.Text>
                General Inquiries: info@sunshineacademy.edu<br />
                Admissions: admissions@sunshineacademy.edu<br />
                Support: support@sunshineacademy.edu
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <Card.Title><FaClock /> Office Hours</Card.Title>
              <Card.Text>
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2>Location Map</h2>
          <div className="map-container">
  <iframe
    title="DCC Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62810.69770861287!2d125.50057691839268!3d7.0737914967342945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f91d5322d37779%3A0x8d67b122fdd2e5b7!2sDavao%20Central%20College!5e0!3m2!1sen!2sph!4v1688381234567"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;