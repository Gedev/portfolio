import React from "react"
import { Link } from "gatsby"
import { Col, Button, Form, FormGroup, FormLabel, Row} from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <h2>Contact</h2>
      {/*<Form method="post" action="#">*/}


      {/*  <div data-sal="slide-up"*/}
      {/*       data-sal-delay="1200"*/}
      {/*       data-sal-easing="ease"*/}
      {/*       data-sal-duration="1000">*/}
      {/*  <FormGroup>*/}

      {/*    <Row>*/}
      {/*      <Col>*/}
      {/*        <FormLabel>*/}
      {/*          Your firstname*/}
      {/*        </FormLabel>*/}
      {/*        <Form.Control placeholder="First name" />*/}
      {/*      </Col>*/}
      {/*      <Col>*/}
      {/*        <FormLabel>*/}
      {/*          Your name*/}
      {/*        </FormLabel>*/}
      {/*        <Form.Control placeholder="Last name" />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </FormGroup>*/}
      {/*  </div>*/}

      {/*  <div data-sal="slide-up"*/}
      {/*       data-sal-delay="200"*/}
      {/*       data-sal-easing="ease"*/}
      {/*       data-sal-duration="1000">*/}
      {/*  <FormGroup>*/}
      {/*    <FormLabel>*/}
      {/*      Email*/}
      {/*    </FormLabel>*/}
      {/*    <Form.Control type="email" placeholder="name@example.com" />*/}
      {/*  </FormGroup>*/}
      {/*  </div>*/}

      {/*  <div data-sal="slide-up"*/}
      {/*       data-sal-delay="400"*/}
      {/*       data-sal-easing="ease"*/}
      {/*       data-sal-duration="1000">*/}
      {/*  <FormGroup>*/}
      {/*    <FormLabel>*/}
      {/*      Subject*/}
      {/*    </FormLabel>*/}
      {/*      <Form.Control type="text" placeholder="Subject" />*/}

      {/*  </FormGroup>*/}
      {/*  </div>*/}

      {/*  <div data-sal="slide-up"*/}
      {/*       data-sal-delay="600"*/}
      {/*       data-sal-easing="ease"*/}
      {/*       data-sal-duration="1000">*/}
      {/*  <FormGroup>*/}
      {/*    <FormLabel>*/}
      {/*      Message*/}
      {/*      <Form.Control as="textarea" rows="5" placeholder="Your message" />*/}
      {/*    </FormLabel>*/}
      {/*  </FormGroup>*/}
      {/*  </div>*/}

      {/*  <div data-sal="slide-up"*/}
      {/*      data-sal-delay="800"*/}
      {/*      data-sal-easing="ease"*/}
      {/*      data-sal-duration="1000">*/}
      {/*  <Button variant="primary" type="submit">*/}
      {/*    Submit*/}
      {/*  </Button>*/}
      {/*  </div>*/}
      {/*</Form>*/}

      <form action="https://getform.io/f/343e9536-9a0e-4ce6-a1be-de1b83bb6b90" method="POST">

        <input type="text" name="name" />
          <input type="email" name="email" />
            <input type="text" name="message" />
              <button type="submit">Send</button>

      </form>

      <div className="go-up">
        <Link to="/">Go Up 🔼</Link>
      </div>
    </section>
)

export default Contact
