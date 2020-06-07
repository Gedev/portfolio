import React from "react"
import { Link } from "gatsby"
import {Button, Card, Form, FormGroup, FormLabel} from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <h2>Contact</h2>


      <Form method="post" action="#">
        <div>
        <FormGroup>
          <FormLabel>
            Name
          </FormLabel>
          <input type="text" name="name" id="name" />
        </FormGroup>
        </div>

        <div>
        <FormGroup>
          <FormLabel>
            Email
          </FormLabel>
          <input type="email" name="email" id="email"/>
        </FormGroup>
        </div>

        <div>
        <FormGroup>
          <FormLabel>
            Subject
            <input type="text" name="subject" id="subject" />
          </FormLabel>
        </FormGroup>
        </div>

        <div>
        <FormGroup>
          <FormLabel>
            Message
            <textarea name="message" id="message" rows="5" />
          </FormLabel>
        </FormGroup>
        </div>

        <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>

        <Link to="/">Go Up 🔼</Link>
    </section>
)

export default Contact
