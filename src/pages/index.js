import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import Skills from "../components/body/skills"
import Profile from "../components/body/profile"
import Contact from "../components/body/contact"
import Presentation from "../components/body/presentation";

import "bootstrap/dist/css/bootstrap.min.css"
import "../components/styles.css";
import Header from "../components/header";
import SideProjects from "../components/body/side-projects";


const IndexPage = () => (
    <>
      <Header />
        <SEO title="Home"/>
        <Presentation />
        <Profile />
        <Skills />
        <SideProjects />
        <Contact />

    </>

)

export default IndexPage
