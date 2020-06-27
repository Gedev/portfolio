import React from "react";
import { Button, Container } from "react-bootstrap";

const Presentation = () => (
  <section  id="presentation" className="blockA">
    <Container>
    <div  data-sal="slide-up"
          data-sal-delay="1200"
          data-sal-easing="ease"
          data-sal-duration="1000">
        <h1>Hi there,</h1>
        <p>I am Gerald Devreux, junior web developer currently at the end of a fullstack internship.</p>
        <p>I am actually searching for an opportunity in web development, as a fullstack/back-end developer in Belgium !</p>
        <p>Don't hesitate to <Button href="#contact" variant="dark">contact me !</Button></p>
    </div>
    </Container>
  </section>
)

export default Presentation
