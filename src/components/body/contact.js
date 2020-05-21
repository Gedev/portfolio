import React from "react"
import { Link } from "gatsby"
import { Form, FormLabel } from "react-bootstrap"
const Contact = () => (
    <section id="contact" className="blockA">
      <h2>Contact</h2>
      <Form method="post" action="#">
        <FormLabel>
          Name
          <input type="text" name="name" id="name" />
        </FormLabel>
        <FormLabel>
          Email
          <input type="email" name="email" id="email" />
        </FormLabel>
        <FormLabel>
          Subject
          <input type="text" name="subject" id="subject" />
        </FormLabel>
        <FormLabel>
          Message
          <textarea name="message" id="message" rows="5" />
        </FormLabel>
      </Form>
        <Link to="/">Go Up 🔼</Link>
    </section>
)

export default Contact
