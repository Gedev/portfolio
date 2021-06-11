import React from "react";
import { Container } from "react-bootstrap";

const Presentation = () => (
  <section  id="presentation" className="blockA">
    <Container>
    <div  data-sal="slide-up"
          data-sal-delay="1200"
          data-sal-easing="ease"
          data-sal-duration="1000">
        <h1>Hi there,</h1>
        <p>I am Gerald Devreux, junior developer currently in a intensive java training.</p>
        <p>I will be searching for an opportunity as a fullstack/back-end java developer in Luxembourg in a few months !</p>
        <p>Don't hesitate to <a href="#contact" variant="dark">contact me !</a></p>
    </div>
    </Container>
  </section>
)

export default Presentation
