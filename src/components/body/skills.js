import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => (
    <section id="skills" className="blockA">
      <Container>
        <h2>Skills</h2>
        <Row>
          <Col>
            <h5>Programming languages</h5>
            <span>HTML 5</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color html5
                ">90%</div>
            </div>
            <span>CSS 3</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='200'
                 data-sal-duration='2000'>
              <div className="skills skills-color css">70%</div>
            </div>
            <span>PhP</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color php">75%</div>
            </div>
            <span>Javascript</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color js">70%</div>
            </div>
            <h5>Frameworks</h5>
            <span>Laravel</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='400'
                 data-sal-duration='2000'>
              <div className="skills skills-color laravel">65%</div>
            </div>
            <span>Symfony</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='500'
                 data-sal-duration='2000'>
              <div className="skills skills-color symfony">45%</div>
            </div>
            <span>React</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='500'
                 data-sal-duration='2000'>
              <div className="skills skills-color react">50%</div>
            </div>
          </Col>
          <Col>
            <h5>Tools</h5>
            <span>Git</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='600'
                 data-sal-duration='2000'>
              <div className="skills skills-color git">70%</div>
            </div>
            <span>Docker</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='700'
                 data-sal-duration='2000'>
              <div className="skills skills-color docker">40%</div>
            </div>
            <span>Agile method</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='800'
                 data-sal-duration='2000'>
              <div className="skills skills-color docker">40%</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
)

export default Skills
