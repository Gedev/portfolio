import React from "react";
import {Card, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

import preview_dark_n_light from "../../images/preview_dark_n_light.png";
import poulpatose from "../../images/poulpatose.jpg";
import announcements from "../../images/announcements.png";
import classroomFinder_homepage from "../../images/classroomFinder_homepage.png";
import classroomFinder_users from "../../images/classroomFinder_users.png";
import phpLogo from "../../images/software-development-logos/png/027-php.png";
import laravelLogo from "../../images/software-development-logos/png/039-laravel.png";
import javascriptLogo from "../../images/software-development-logos/png/029-javascript.png";
import photoshopLogo from "../../images/photoshop.png";
import illustratorLogo from "../../images/illustrator.png";
import phaserLogo from "../../images/phaser.png";


function renderTooltip(props) {
  return (
      <Tooltip id="button-tooltip" {...props}>
        {props}
      </Tooltip>
  );
}

const SideProjects = () => (
  <section id="side-projects" className="blockB">
    <Container>

      <h2>Side Projects</h2>
      {/**Waiting for current meetups**/}
      {/**Waiting for technology watch module**/}

      <Row>
        <Col>
          <div  data-sal="fade"
                data-sal-delay="200"
                data-sal-easing="ease"
                data-sal-duration="1000">
            <Card>
              <Card.Header>
                <h5>
                  Classroom Finder - web application using RFID technology
                </h5>
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title>Preview</Card.Title>
                <Card.Text>
                  <img src={classroomFinder_homepage} alt="classroomFinder_homepage_Preview" />
                  <img src={announcements} alt="announcementsPreview" />
                  <img src={classroomFinder_users} alt="classroomFinder_usersPreview" />
                  <Card.Title>Tech :</Card.Title>
                  <p className="logos">
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 0, hide: 0}}
                        overlay={renderTooltip("PhP")}
                    >
                    <img src={phpLogo} alt="phpLogo"/>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 0, hide: 0}}
                        overlay={renderTooltip("Laravel")}
                    >
                    <img src={laravelLogo} alt="laravelLogo"/>
                    </OverlayTrigger>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Row>
      <Col>
        <div  data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease"
              data-sal-duration="1000">
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
          <p>Dark'n Light, my personal game using the framework Phaser.</p>
          <Card.Title>Tech :</Card.Title>
          <p className="logos">
            <OverlayTrigger
                placement="top"
                delay={{show: 0, hide: 0}}
                overlay={renderTooltip("Javascript")}
            >
              <img src={javascriptLogo} alt="javascriptLogo"/>
            </OverlayTrigger>
            <OverlayTrigger
                placement="top"
                delay={{show: 0, hide: 0}}
                overlay={renderTooltip("Phaser")}
            >
              <img src={phaserLogo} alt="phaserLogo"/>
            </OverlayTrigger>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </Col>

      <Col>
        <div  data-sal="fade"
              data-sal-delay="600"
              data-sal-easing="ease"
              data-sal-duration="1000">
          <Card>
          <Card.Header>
            <h5>
              Poulpatose
            </h5>
          </Card.Header>
          <Card.Body className="cardBody">
            <Card.Title>Preview</Card.Title>
            <Card.Text>
              <img src={poulpatose} alt="poulpatosePreview" />
              <p>A funny Card game I created and printed.</p>
              <p className="logos">
                <Card.Title>Tech :</Card.Title>
                <OverlayTrigger
                    placement="top"
                    delay={{show: 0, hide: 0}}
                    overlay={renderTooltip("Photoshop")}
                >
                  <img src={photoshopLogo} alt="photoshopLogo"/>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="top"
                    delay={{show: 0, hide: 0}}
                    overlay={renderTooltip("Illustrator")}
                >
                  <img src={illustratorLogo} alt="illustratorLogo"/>
                </OverlayTrigger>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </Col>
      </Row>
    </Container>
  </section>
)

export default SideProjects
