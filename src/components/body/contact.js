import React from "react";
import { Button, Col, Form, FormGroup, FormLabel, Row, Container } from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <Container>
      <h2>Contact</h2>
      <Form method="post" action="https://getform.io/f/343e9536-9a0e-4ce6-a1be-de1b83bb6b90">

        <div data-sal="slide-up"
             data-sal-delay="1200"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <Row>
            <Col>
              <FormLabel>
                Your firstname
              </FormLabel>
              <Form.Control type="text" name="surname" placeholder="First name" required/>
            </Col>
            <Col>
              <FormLabel>
                Your name
              </FormLabel>
              <Form.Control type="text" name="name" placeholder="Last name" />
            </Col>
          </Row>
        </FormGroup>
        </div>

        <div data-sal="slide-up"
             data-sal-delay="200"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Email
          </FormLabel>
          <Form.Control type="email" name="email" placeholder="name@example.com" required />
        </FormGroup>
        </div>

        <div data-sal="slide-up"
             data-sal-delay="400"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Subject
          </FormLabel>
            <Form.Control type="text" placeholder="Subject" />

        </FormGroup>
        </div>
        <div data-sal="slide-up"
             data-sal-delay="600"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Message
          </FormLabel>
          <Form.Control as="textarea" name="message" rows={6} placeholder="Your message" required/>
        </FormGroup>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        <Button href="#home" variant="dark">Go Up</Button>
      </Container>
    </section>
)

export default Contact
