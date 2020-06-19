import React from "react"
import { Link } from "gatsby"
import { Col, Button, Form, FormGroup, FormLabel, Row, Container } from "react-bootstrap"
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
              <Form.Control type="text" name="name" placeholder="First name" />
            </Col>
            <Col>
              <FormLabel>
                Your name
              </FormLabel>
              <Form.Control placeholder="Last name" />
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
          <Form.Control type="email" name="email" placeholder="name@example.com" />
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
            <Form.Control as="textarea" name="message" rows="5" placeholder="Your message" />
          </FormLabel>
        </FormGroup>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="go-up">
        <Link to="/">Go Up <span role="img" aria-label="arrow-up">🔼</span></Link>
      </div>
      </Container>
    </section>
)

export default Contact
