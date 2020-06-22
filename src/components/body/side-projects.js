import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import preview_dark_n_light from "../../images/preview_dark_n_light.png";
import poulpatose from "../../images/poulpatose.jpg";

const SideProjects = () => (
  <section id="side-projects" className="blockB">
    <Container>

      <h2>Side Projects</h2>
      {/**Waiting for current meetups**/}
      {/**Waiting for technology watch module**/}
      <h4>
        <p>Actually improving my skills in :</p>
      </h4>
      <p> Latest article I read : https://medium.com/better-programming/functional-programming-using-the-functor-type-class-in-typescript-beae60abe6af</p>

      <Row>
      <Col>
      <Card>
      <Card.Header>
        <h5>
          A javascript navigator game
        </h5>
      </Card.Header>
      <Card.Body className="cardBody">
        <Card.Title>Preview</Card.Title>
        <Card.Text>
          <img src={preview_dark_n_light} alt="darknlightpreview" />
          Dark'n Light, my personal game using the framework Phaser.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
        <Col>
          <Card>
            <Card.Header>
              <h5>
                A funny Card game
              </h5>
            </Card.Header>
            <Card.Body className="cardBody">
              <Card.Title>Preview</Card.Title>
              <Card.Text>
                <img src={poulpatose} alt="darknlightpreview" />
                Poulpatose, the card game I created and printed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h5>
                Project 3
              </h5>
            </Card.Header>
            <Card.Body className="cardBody">
              <Card.Title>Preview</Card.Title>
              <Card.Text>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Container>
  </section>
)

export default SideProjects
