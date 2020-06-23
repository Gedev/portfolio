import React from "react";
import { Button, Card, Container, OverlayTrigger, Tooltip } from "react-bootstrap";

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
          <h2>Profile</h2>
          <h3>EXPERIENCE</h3>
            <Card>
              <Card.Header>
                <h5>
                Stagiaire en développement Web - HommeDeMetierBE
                <p>2020 - 2.5 months</p>
                </h5>
              </Card.Header>
              <Card.Header>
                <h6>
                Création des plateformes web pour le site HommeDeMetier sous la méthode Agile/SCRUM.
                </h6>
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title>Technologies :</Card.Title>
                <Card.Text>
                  <p className="logos">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("HTML5")}
                    >
                      <img src={html5Logo} alt="html5Logo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("Javascript")}
                    >
                      <img src={javascriptLogo} alt="javascriptLogo" />
                  </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("CSS3")}
                    >
                      <img src={cssLogo} alt="cssLogo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("React")}
                    >
                      <img src={reactLogo} alt="reactLogo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("TypeScript")}
                    >
                      <img src={typescriptLogo} alt="typescriptLogo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("Symfony")}
                    >
                      <img src={symfonyLogo} alt="symfonyLogo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("Rematch")}
                    >
                      <img src={rematchLogo} alt="rematchLogo" />
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("Redux")}
                    >
                      <img src={reduxLogo} alt="reduxLogo" />
                    </OverlayTrigger>

                  </p>
                  <p>
                    <Card.Title>Outils :</Card.Title>
                    <p className="logos">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 0, hide: 0 }}
                        overlay={renderTooltip("Hubspot API")}
                      >
                        <img src={hubspotLogo} alt="hubspotLogo" />
                      </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 0, hide: 0 }}
                      overlay={renderTooltip("Docker")}
                    >
                      <img src={dockerLogo} alt="dockerLogo" />
                    </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 0, hide: 0 }}
                        overlay={renderTooltip("Git")}
                      >
                        <img src={gitLogo} alt="gitLogo" />
                      </OverlayTrigger>
                      Bitbucket
                      Clubhouse
                      Slack
                    </p>
                  </p>
                  <Card.Title>Méthodes de gestion de travail :</Card.Title>
                  Méthode Agile/SCRUM
                  Peercoding
                </Card.Text>
              </Card.Body>
            </Card>
          <Card>
              <Card.Header>
                <h5>Game Development - Technobel</h5>
                  2016 - 3 months
              </Card.Header>
              <Card.Body>
                <Card.Title>Technologies</Card.Title>
                <p className="logos">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 0, hide: 0 }}
                    overlay={renderTooltip("Javascript")}
                  >
                    <img src={javascriptLogo} alt="javascriptLogo" />
                  </OverlayTrigger>

                </p>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                  Développement de jeu sur navigateur en JS. Algorithmique, game engine, POO.
                  Finalisation des compétences dans un jeu présenté devant le studio Fishing Cactus.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </Container>
    </section>
)

export default Profile
