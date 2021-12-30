import React from "react";
import { Button, Card, Col, Container, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

// Logos
import html5Logo from "../../images/software-development-logos/png/030-html-5.png";
import javascriptLogo from "../../images/software-development-logos/png/029-javascript.png";
import cssLogo from "../../images/software-development-logos/png/031-css.png";
import reactLogo from "../../images/software-development-logos/png/006-react.png";
import typescriptLogo from "../../images/software-development-logos/png/025-typescript.png";
import dockerLogo from "../../images/software-development-logos/png/004-docker.png";
import symfonyLogo from "../../images/software-development-logos/png/033-symfony.png";
import gitLogo from "../../images/software-development-logos/png/034-git.png";
import rematchLogo from "../../images/software-development-logos/png/035-rematch.svg";
import reduxLogo from "../../images/software-development-logos/png/036-redux.svg";
import hubspotLogo from "../../images/software-development-logos/png/037-hubspot.svg";
import phpLogo from "../../images/software-development-logos/png/027-php.png";
import bitbucketLogo from "../../images/software-development-logos/png/038-bitbucket.png";
import frenchLogo from "../../images/francais.png";
import englishLogo from "../../images/anglais.png";
import graduatedLogo from "../../images/graduated.png";
import awardLogo from "../../images/award.png";
import slackLogo from "../../images/slack.png";
import cv from "../../files/Gerald_Devreux_CV_2021.pdf";
import arrowDownload from "../../images/downloadArrowWhite32.png";
import java24 from "../../images/java24.png";

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );
}

const Profile = () => (
    <section className="blockB" id="profile">
        <Container>
            <div>
                <Row>
                <Col>
                    <h2>EXPERIENCE</h2>
                </Col>
                <Col>
                    <h2>EDUCATION</h2>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <div  data-sal="slide-right"
                              data-sal-delay="200"
                              data-sal-easing="ease"
                              data-sal-duration="1000">
                        <Card>
                            <Card.Header>
                                <h5>
                                    Intern as FullStack developer - HommeDeMetierBE
                                </h5>
                                <p>2020 - 2.5 months</p>
                            </Card.Header>
                            <Card.Body className="cardBody">
                                <Card.Title>Description :</Card.Title>
                                Création des plateformes web pour le site HommeDeMetier sous la méthode Agile/SCRUM.
                                <hr/>

                                <Col>
                                    <Card.Title>Technologies used :</Card.Title>
                                    <Card.Text>
                                        <p className="logos">
                                            <OverlayTrigger
                                                placement="top"
                                                delay={{show: 0, hide: 0}}
                                                overlay={renderTooltip("HTML5")}
                                            >
                                                <img src={html5Logo} alt="html5Logo"/>
                                            </OverlayTrigger>

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
                                                overlay={renderTooltip("TypeScript")}
                                            >
                                                <img src={typescriptLogo} alt="typescriptLogo"/>
                                            </OverlayTrigger>

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
                                                overlay={renderTooltip("CSS3")}
                                            >
                                                <img src={cssLogo} alt="cssLogo"/>
                                            </OverlayTrigger>
                                        </p>

                                      <hr />
                                      <Col>
                                        <Card.Title>Frameworks :</Card.Title>
                                        <Card.Text>
                                          <p className="logos">
                                            <OverlayTrigger
                                              placement="top"
                                              delay={{show: 0, hide: 0}}
                                              overlay={renderTooltip("React")}
                                            >
                                              <img src={reactLogo} alt="reactLogo"/>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                              placement="top"
                                              delay={{show: 0, hide: 0}}
                                              overlay={renderTooltip("Symfony")}
                                            >
                                              <img src={symfonyLogo} alt="symfonyLogo"/>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                              placement="top"
                                              delay={{show: 0, hide: 0}}
                                              overlay={renderTooltip("Rematch")}
                                            >
                                              <img src={rematchLogo} alt="rematchLogo"/>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                              placement="top"
                                              delay={{show: 0, hide: 0}}
                                              overlay={renderTooltip("Redux")}
                                            >
                                              <img src={reduxLogo} alt="reduxLogo"/>
                                            </OverlayTrigger>
                                          </p>
                                        </Card.Text>
                                      </Col>

                                        <hr/>
                                        <p>
                                            <Card.Title>Tools :</Card.Title>
                                            <p className="logos">
                                                <img src={hubspotLogo} alt="hubspotLogo"/>

                                                    <img src={dockerLogo} alt="dockerLogo"/>
                                                    <img src={gitLogo} alt="gitLogo"/>
                                                    <img src={slackLogo} alt="slackLogo"/>
                                                    <img src={bitbucketLogo} alt="bitbucketLogo"/>
                                                Clubhouse

                                            </p>

                                            <hr/>
                                        </p>
                                        <Card.Title>Project management methodology :</Card.Title>
                                        Agile/SCRUM,
                                        Peercoding
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                        </div>

                        <div  data-sal="slide-right"
                              data-sal-delay="1400"
                              data-sal-easing="ease"
                              data-sal-duration="1000">
                            <Card>
                                <Card.Header>
                                    <h5>Game Development - Technobel</h5>
                                    2016 - 3 months
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Technologies I used :</Card.Title>
                                    <p className="logos">
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 0, hide: 0}}
                                            overlay={renderTooltip("Javascript")}
                                        >
                                            <img src={javascriptLogo} alt="javascriptLogo"/>
                                        </OverlayTrigger>

                                    </p>
                                    <Card.Title>Description</Card.Title>
                                    <Card.Text>
                                        Développement de jeu sur navigateur en JS. Algorithmique, game engine, POO.
                                        Finalisation des compétences dans un jeu présenté devant le studio Fishing Cactus. <a
                                        href="#side-projects">See what I did</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


                    <Col>
                        <div  data-sal="slide-down"
                              data-sal-delay="800"
                              data-sal-easing="ease"
                              data-sal-duration="1000">
                        <Card>
                            <Card.Header>
                                <h4>Diplomas</h4>
                            </Card.Header>
                            <Card.Body id="education">
                                <p className="logos">
                                    <img src={awardLogo} alt="awardLogo"/>
                                    <h5>
                                        Java/ANGULAR - intensive training
                                    </h5>
                                </p>

                                Technobel - 7 months
                                <p>2021 - Arlon</p>
                                <hr />

                                <p className="logos">
                                    <h5>
                                        <img src={graduatedLogo} alt="graduatedLogo"/>
                                        BES - Webdeveloper
                                    </h5>
                                </p>
                                2020 - Namur
                                <hr />

                                <p className="logos">
                                    <img src={awardLogo} alt="awardLogo"/>
                                    <h5>
                                        CESS
                                    </h5>
                                </p>
                                2011 - Athénée Royale de la Roche-en-Ardenne
                                <p className="logos">
                                    Option Computer Science
                                </p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div  data-sal="slide-left"
                              data-sal-delay="400"
                              data-sal-easing="ease"
                              data-sal-duration="1000">
                            <Card>
                                <Card.Header>
                                    <h4>Languages</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <p className="logos">
                                            <ListGroup.Item>
                                                <img src={frenchLogo} alt="frenchLogo"/>
                                              native
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                    <img src={englishLogo} alt="englishLogo"/>
                                              intermediate (B2)
                                            </ListGroup.Item>
                                        </p>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
              <Col>
                <Row>
                  <Card id="cv">
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>
                         Download my Curriculum Vitae
                        <Button href={cv} download="Gerald_Devreux_CV_2021.pdf">
                          <img src={arrowDownload} alt="downloadArrow" /> Download
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
            </div>
        </Container>
    </section>
)

export default Profile
