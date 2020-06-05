import React from "react";

const Skills = () => (
    <section id="skills" className="blockA">
        <div data-sal="slide-up"
             data-sal-easing="ease">
            <h2>Skills</h2>
            <span>HTML 5</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color">90%</div>
            </div>
            <span>CSS 3</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color css">70%</div>
            </div>
            <span>Javascript</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color js">75%</div>
            </div>
            <h5>Frameworks</h5>
            <span>Laravel</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color laravel">65%</div>
            </div>
            <span>Symfony</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color symfony">45%</div>
            </div>
            <span>React</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color react">50%</div>
            </div>

            <h5>Tools</h5>
            <span>Git</span>
            <div className="skills-progress-bar">
              <div className="skills skills-color git">70%</div>
            </div>
        </div>
    </section>
)

export default Skills
