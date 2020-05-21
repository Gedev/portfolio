import React from "react";
import { Link } from "gatsby";

const Presentation = () => (
  <section  id="presentation" className="blockA">
    <div>
        <h1>Hi there,</h1>

        <p>I am Gerald Devreux, junior web developer currently at the end of a fullstack internship.</p>

        <p>I am actually searching for an opportunity in web development, as a back-end developer, but still open to
          front-end offers.</p>
        <p>Don't hesitate to <Link to="/#contact">contact me !</Link></p>

      <Link to="/page-2/">Go to page 2</Link>

    </div>
  </section>
)

export default Presentation
