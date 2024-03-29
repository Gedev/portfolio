import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import spring from "../../images/software-development-logos/png/040-spring-logo_50px.png";
import javascript from "../../images/software-development-logos/png/041-javascript-24px.png";
import angular from "../../images/software-development-logos/png/042-angular.png";
import java from "../../images/software-development-logos/png/004-java-imported.png";

const Skills = () => (
    <section id="skills" className="blockA">
      <Container>
        <h2>Skills</h2>

        <Row>
          <Col>
            <h5>Programming languages</h5>

            <span className="span_skillsbar">
            <img src={java} className="skills-mini-logos" alt="spring" />
            Java [8, 11, 17]
            </span>

            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color java">75%</div>
            </div>

            <span className="span_skillsbar">
              <img className="skills-mini-logos" src={javascript} alt="javascript" />
              Javascript
            </span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color js">70%</div>
            </div>
            <span className="span_skillsbar">HTML 5</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color html5
                ">90%</div>
            </div>

            <span className="span_skillsbar">CSS 3</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='200'
                 data-sal-duration='2000'>
              <div className="skills skills-color css">70%</div>
            </div>
            <span className="span_skillsbar">PhP</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color php">75%</div>
            </div>
            <span className="span_skillsbar">Typescript</span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color ts">50%</div>
            </div>
          </Col>
          <Col>
          {/*FRAMEWORKS */}
            <h5>Frameworks</h5>
            <span className="span_skillsbar">
              <img src={spring} className="skills-mini-logos" alt="spring" />
              Spring / Spring-Boot
            </span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color spring">75%</div>
            </div>

            <span className="span_skillsbar">
              <img src={angular} className="skills-mini-logos" alt="angular" />
              Angular
            </span>
            <div className="skills-progress-bar"  data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color angular">70%</div>
            </div>
            <span>Gatsby</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='500'
                 data-sal-duration='2000'>
              <div className="skills skills-color gatsby">30%</div>
            </div>
            <span>React</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='500'
                 data-sal-duration='2000'>
              <div className="skills skills-color react">50%</div>
            </div>
            <span className="span_skillsbar">Laravel</span>
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
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>Tools</h5>
            <span>Git</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='100'
                 data-sal-duration='2000'>
              <div className="skills skills-color git">70%</div>
            </div>
            <span>Docker</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='200'
                 data-sal-duration='2000'>
              <div className="skills skills-color docker">40%</div>
            </div>
            <span>Agile method</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='300'
                 data-sal-duration='2000'>
              <div className="skills skills-color agile">40%</div>
            </div>
          </Col>
          <Col>
            <h5>
              Programming practices
            </h5>
            <span>TDD</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='400'
                 data-sal-duration='2000'>
              <div className="skills skills-color TDD learning">Learning / willing to learn</div>
            </div>
            <span>BDD</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='500'
                 data-sal-duration='2000'>
              <div className="skills skills-color BDD learning">Learning / willing to learn</div>
            </div>
            <span>DDD</span>
            <div className="skills-progress-bar" data-sal='slide-up'
                 data-sal-easing='ease'
                 data-sal-delay='600'
                 data-sal-duration='2000'>
              <div className="skills skills-color DDD learning">Learning / willing to learn</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
)

export default Skills
