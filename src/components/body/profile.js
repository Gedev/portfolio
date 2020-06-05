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

          <Card>
            <Card.Header>
              <h5>FORMATIONS</h5>
            </Card.Header>
            <Card.Body>
              <Card.Title>   Web Development (3ème) — IEPSCF
                2014 - PRESENT / Institut d’enseignement de promotion sociale</Card.Title>
              <Card.Text>
                Apprentissage et développement de solutions web utilisant des technologies tels que PHP, MySQL, JavaScript et HTML5/CSS. Couverture de solutions existantes comme Drupal. Réseau, web design et UML.
                Apprentissage et spécialisation dans un framework (Laravel).
                Informatique de gestion — IESN
                2013 - 2014 / Institut d'Enseignement Supérieur de Namur
                Apprentissage de l’algorithmique via les langages Java et C++. Développement d’un site portfolio.
                Infographie — HEAJ
                2011 - 2013 / Haute École Albert Jacquard, Namur
                Apprentissage des techniques de design et modélisation, et des programmes associés tels que Photoshop, Illustrator, Autodesk Maya, ...
                CESS — Athénée Royale
                2011 / La Roche-en-Ardenne
                Technique de transition - Science de l’informatique.
                PORTFOLIO

                LANGUES
                Français : langue maternelle
                Anglais : niveau B1

                ATOUTS
                Curieux, passionné, impliqué, ponctuel
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </section>
)

export default Profile
