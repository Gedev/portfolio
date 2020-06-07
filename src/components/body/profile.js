import React from "react";
import { Card } from "react-bootstrap";

const Profile = () => (
    <section className="blockB">
        <div id="profile">
          <h2>Profile</h2>
          <h3>EXPERIENCE</h3>
            <Card>
              <Card.Header>
                <h5>
                Stagiaire en développement Web - HommeDeMetierBE
                2020 - 2,5 mois
                Création des plateformes web pour le site HommeDeMetier sous la méthode Agile/SCRUM.
                </h5>
              </Card.Header>
              <Card.Body className="cardBody">
                <Card.Title>Technologies :</Card.Title>
                <Card.Text>
                  <p>
                    HTML / JS / CSS / React / Rematch / Redux / Symfony / Docker
                  </p>
                  <p>
                    <Card.Title>Outils :</Card.Title>
                    Hubspot API
                    Bitbucket
                    Clubhouse
                    Slack
                    Git
                  </p>
                  <Card.Title>Méthodes de gestion de travail :</Card.Title>
                  Méthode Agile/SCRUM
                  Peercoding
                </Card.Text>
              </Card.Body>
            </Card>
          <Card>
              <Card.Header>
                <h5>Game Development - Technobel
                  2016 - 3 mois</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                  Développement de jeu sur navigateur en JS. Algorithmique, game engine, POO.
                  Finalisation des compétences dans un jeu présenté devant le studio Fishing Cactus.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    </section>
)

export default Profile
