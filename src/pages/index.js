import React from "react"
import {Link} from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Skills from "../components/body/skills"
import Profile from "../components/body/profile"
import Contact from "../components/body/contact"

import "bootstrap/dist/css/bootstrap.min.css"
import "../components/styles.css";
import Header from "../components/header";


const IndexPage = () => (
    <>
      <Header />
        <SEO title="Home"/>
        <h1>Hi there,</h1>
        <p>I am Gerald Devreux, junior web developer currently at the end of a fullstack internship.</p>
        <p>I am actually searching for an opportunity in web development, as a back-end developer, but still open to
            front-end offers.</p>
        <p>Don't hesitate to <Link to="/#contact">contact me !</Link></p>
        <Link to="/page-2/">Go to page 2</Link>
        <Profile />
        <Skills />
        <Contact />
    </>

)

export default IndexPage
