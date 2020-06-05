import React from "react";
import { Link } from "gatsby";
import Image from "../image";
import { graphql} from "gatsby";
import img from "gatsby-image";

const Presentation = () => (
  <section  id="presentation" className="blockA">
    <div>
        <h1>Hi there,</h1>

        <p>I am Gerald Devreux, junior web developer currently at the end of a fullstack internship.</p>

        <p>I am actually searching for an opportunity in web development, as a fullstack developer or back-end developer</p>
        <p>Don't hesitate to <Link to="/#contact">contact me !</Link></p>

        {/*<Img fluid={props.data.file.childImageSharp.fluid} />*/}

      <p><a href="#">
        <img alt="Qries" src="../../images/027-php.png"
             width="150" height="70"/>
      </a></p>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
  </section>
)

export default Presentation
