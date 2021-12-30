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
        <p>I am Gerald Devreux, junior Java/ANGULAR developer</p>
        <p>I just finished an intensive training and I am currently looking for an opportunity as a fullstack/back-end Java/angular developer in Belgium or Luxembourg !</p>
        <p>Don't hesitate to <a href="#contact" variant="dark">contact me !</a></p>
    </div>
    </Container>
  </section>
)

export default Presentation
