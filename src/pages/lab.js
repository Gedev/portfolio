import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Header from "../components/header";
import { Link } from "gatsby"

import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/styles.css";

import javaLogo from "../images/software-development-logos/png/003-java-redim.png";
import stockExchange from "../images/stock_exchange_redim.jpg";

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Col, Row} from "react-bootstrap";


const SecondPage = () => (
  <>
    <Header />
      <section  id="presentation" className="blockA">
      <SEO title="Page two" />

        <h1>The Gedev's Lab</h1>
        <p>Welcome to my laboratory, here is the place where I will show actual projects I am actually working on.</p>
        <p>It can be as much big projects as small ones just to test some new code.</p>


        <Row>
          <Col>
          <div data-sal="slide-up"
               data-sal-delay="1200"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={stockExchange} alt="stock exchange image" />
              <Card.Body>
                <Card.Title>Trading helper</Card.Title>
                <Card.Text>
                  A very light program to help to calculate the purchase yield of a stock.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                In progress<ProgressBar striped variant="success" animated now={100} />
              </Card.Footer>
            </Card>
          </div>
          </Col>

          <Col>
          <div data-sal="slide-up"
               data-sal-delay="200"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={javaLogo} />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">---</small>
              </Card.Footer>
            </Card>
          </div>
          </Col>

          <Col>
          <div data-sal="slide-up"
               data-sal-delay="400"
               data-sal-easing="ease"
               data-sal-duration="1000">
            <Card>
              <Card.Img variant="top" src={javaLogo} />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">---</small>
              </Card.Footer>
            </Card>
          </div>
          </Col>
        </Row>

        <Link to="/">Go back to the homepage</Link>
      </section>


  </>
)

export default SecondPage
