import React from "react";
import { Link } from "gatsby";

const Presentation = () => (
  <section  id="presentation" className="blockA">
    <div  data-sal="slide-up"
          data-sal-delay="1200"
          data-sal-easing="ease"
          data-sal-duration="1000"
            >
        <h1>Hi there,</h1>

        <p>I am Gerald Devreux, junior web developer currently at the end of a fullstack internship.</p>

        <p>I am actually searching for an opportunity in web development, as a fullstack/back-end developer</p>
        <p>Don't hesitate to <Link to="/#contact">contact me !</Link></p>

        <Link to="/page-2/">Go to page 2</Link>
    </div>
  </section>
)

export default Presentation
