import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Alert, Table } from 'react-bootstrap';
import './css/Admission.css';

const Admission = () => {
  return (
    <Container className="admission-container">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Admission Process</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h2>Why Choose Sunshine Academy?</h2>
          <ListGroup>
            <ListGroup.Item>Proven academic excellence</ListGroup.Item>
            <ListGroup.Item>Experienced and dedicated faculty</ListGroup.Item>
            <ListGroup.Item>State-of-the-art facilities</ListGroup.Item>
            <ListGroup.Item>Comprehensive extracurricular programs</ListGroup.Item>
            <ListGroup.Item>Strong college placement record</ListGroup.Item>
          </ListGroup>
          
          <h2 className="mt-4">Admission Requirements</h2>
          <h5>Elementary School</h5>
          <ul>
            <li>Completed application form</li>
            <li>Birth certificate</li>
            <li>Previous school records (if applicable)</li>
            <li>Assessment test</li>
          </ul>
          
          <h5>Middle & High School</h5>
          <ul>
            <li>Completed application form</li>
            <li>Official transcripts from previous school</li>
            <li>Teacher recommendations</li>
            <li>Entrance exam</li>
            <li>Interview (for high school)</li>
          </ul>
        </Col>
        
        <Col md={6}>
          <h2>Application Form</h2>
          <Alert variant="info">
            Applications for the 2023-2024 academic year are now being accepted.
          </Alert>
          
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Student's Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Grade Applying For</Form.Label>
                  <Form.Select>
                    <option>Select grade</option>
                    <option>Kindergarten</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    {/* Add all grade options */}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Parent/Guardian Name</Form.Label>
              <Form.Control type="text" placeholder="Enter parent/guardian name" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Current School (if applicable)</Form.Label>
              <Form.Control type="text" placeholder="Enter current school" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Additional Information</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any additional information we should know" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox"
                label="I agree to the terms and conditions"
                required
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2>Important Dates</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Deadline</td>
                <td>April 15, 2023</td>
              </tr>
              <tr>
                <td>Entrance Exams</td>
                <td>April 22, 2023</td>
              </tr>
              <tr>
                <td>Interview Dates</td>
                <td>May 1-5, 2023</td>
              </tr>
              <tr>
                <td>Admission Decisions</td>
                <td>May 15, 2023</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Admission;