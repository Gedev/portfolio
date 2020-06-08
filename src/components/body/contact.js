import React from "react"
import { Link } from "gatsby"
import {Button, Card, Form, FormGroup, FormLabel} from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <h2>Contact</h2>


      <Form method="post" action="#">


        <div data-sal="slide-up"
             data-sal-delay="1200"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Name
          </FormLabel>
          <input type="text" name="name" id="name" />
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
          <input type="email" name="email" id="email"/>
        </FormGroup>
        </div>

        <div data-sal="slide-up"
             data-sal-delay="400"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Subject
            <input type="text" name="subject" id="subject" />
          </FormLabel>
        </FormGroup>
        </div>

        <div data-sal="slide-up"
             data-sal-delay="600"
             data-sal-easing="ease"
             data-sal-duration="1000">
        <FormGroup>
          <FormLabel>
            Message
            <textarea name="message" id="message" rows="5" />
          </FormLabel>
        </FormGroup>
        </div>

        <div data-sal="slide-up"
            data-sal-delay="800"
            data-sal-easing="ease"
            data-sal-duration="1000">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>

        <Link to="/">Go Up 🔼</Link>
    </section>
)

export default Contact
